import { PostModel } from "@/models/post/post-model";

export type PublicPostDTO = Omit<PostModel, "updatedAt">;

export const makePublicPost = (post: PostModel): PublicPostDTO => {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.title,
    author: post.author,
    content: post.content,
    coverImageUrl: post.coverImageUrl,
    createdAt: post.createdAt,
    published: post.published,
  };
};
