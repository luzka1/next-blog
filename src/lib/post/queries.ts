import { postRepository } from "@/repositories/post";
import { cacheTag } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPosts = cache(async () => {
  "use cache";

  cacheTag("public-posts");

  return await postRepository.findAllPublic();
});

export const findPostBySlug = cache(async (slug: string) => {
  "use cache";

  cacheTag(`post-${slug}`);

  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findPostById = cache(async (id: string) => {
  "use cache";

  cacheTag(`post-${id}`);
  return await postRepository.findBySlugPublic(id);
});
