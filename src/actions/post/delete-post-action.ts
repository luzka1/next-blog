"use server";

import { postRepository } from "@/repositories/post";
import { updateTag } from "next/cache";

export async function deletePostAction(id: string) {
  //TODO Checar se o usuário está logado.

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  let post;

  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { error: e.message };
    }
    return { error: "Erro desconhecido!" };
  }

  updateTag("posts");
  updateTag(`post-${post.slug}`);
  updateTag("single-post");

  return {
    error: "",
  };
}
