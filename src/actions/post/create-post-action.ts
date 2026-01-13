"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { makePartialPublicPost, PublicPostDTO } from "@/dto/post/dto";
import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { makeSlugFromText } from "@/utils/make-slug-from-text";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { v4 as uuidV4 } from "uuid";

type CreatePostActionState = {
  formState: PublicPostDTO;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData
): Promise<CreatePostActionState> {
  // TODO: verificar se o usuário está logado

  const makeResult = ({
    formState = makePartialPublicPost(prevState.formState),
    errors = [],
  }: {
    formState?: PublicPostDTO;
    errors?: string[];
  }) => ({
    formState,
    errors,
  });

  if (!(formData instanceof FormData))
    return makeResult({
      formState: prevState.formState,
      errors: ["Dados inválidos"],
    });

  const formDataToObject = Object.fromEntries(formData.entries());
  const zodParsedObject = PostCreateSchema.safeParse(formDataToObject);

  if (!zodParsedObject.success) {
    const errors = getZodErrorMessages(zodParsedObject.error.format());

    return makeResult({
      formState: makePartialPublicPost(formDataToObject),
      errors,
    });
  }

  const validPostData = zodParsedObject.data;

  const newPost: PostModel = {
    ...validPostData,
    id: uuidV4(),
    slug: makeSlugFromText(validPostData.title),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // TODO: Mover para o repositório
  await drizzleDb.insert(postsTable).values(newPost);

  updateTag("posts");

  redirect(`/admin/post/${newPost.id}`);
}
