import { findPostBySlug } from "@/lib/post/queries";
import { Metadata } from "next";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  const post = await findPostBySlug(slug);

  return (
    <>
      <p className="text-muted text-base">{post.content}</p>
    </>
  );
}
