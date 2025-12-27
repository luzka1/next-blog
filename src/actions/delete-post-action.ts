"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { asyncDelay } from "@/utils/async-delay";
import { eq } from "drizzle-orm";
import { updateTag } from "next/cache";

export async function deletePostAction(id: string) {
  //TODO Checar se o usuário está logado.
  await asyncDelay(2000);

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: "Esse post não existe",
    };
  }

  // TODO: mover o método para o repositório
  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  // TODO: updateTag
  updateTag("public-posts");
  updateTag(`post-${post.slug}`);
  updateTag("single-post");
  updateTag("admin-posts");

  return {
    error: "",
  };
}
