import { postRepository } from "@/repositories/post";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </>
  );
}
