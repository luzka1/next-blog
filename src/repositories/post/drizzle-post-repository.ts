import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(): Promise<PostModel> {}

  async findAll(): Promise<PostModel[]> {}

  async findById(): Promise<PostModel> {}
}

(async () => {
  const repo = new DrizzlePostRepository();

  const post = await repo.findAllPublic();

  post.forEach((post) => console.log(post.slug, post.published));
})();
