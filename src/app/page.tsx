import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <div>teste</div>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <div>teste</div>
    </div>
  );
}
