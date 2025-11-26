import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export function FeaturedPost() {
  const slug = "exemplo";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "alt da imagem",
          priority: true,
        }}
      />

      <PostSummary
        title="Dicas para manter a saúde mental em dia"
        excerpt="Em vez de configurar tudo manualmente, basta criar um arquivo com o nome certo e o Next.js entende que aquilo representa uma página."
        createdAt="2025-04-07T00:24:38.616Z"
        postHeading="h1"
        postLink={postLink}
      />
    </section>
  );
}
