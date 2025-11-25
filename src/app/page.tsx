import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: "/post/123",
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "imagem bonito",
            priority: true,
          }}
        />

        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2025-04-12">
            12/04/2025 10:00
          </time>
          <PostHeading url="#" as="h1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </PostHeading>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          deserunt nostrum molestiae provident dolorem, odit est error minima
          sint corrupti voluptatibus modi quo, animi aperiam quibusdam at?
          Beatae, error libero? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit.
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
