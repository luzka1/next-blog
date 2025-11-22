import { Container } from "@/components/Container";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <p className="text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
        deserunt nostrum molestiae provident dolorem, odit est error minima sint
        corrupti voluptatibus modi quo, animi aperiam quibusdam at? Beatae,
        error libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Beatae deserunt nostrum molestiae provident dolorem, odit est error
        minima sint corrupti voluptatibus modi quo, animi aperiam quibusdam at?
        Beatae, error libero? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Beatae deserunt nostrum molestiae provident dolorem,
        odit est error minima sint corrupti voluptatibus modi quo, animi aperiam
        quibusdam at? Beatae, error libero?
      </p>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
