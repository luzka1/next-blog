import { AdminSinglePost } from "@/components/admin/AdminSinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

type AdminSinglePostPage = {
  params: Promise<{ id: string }>;
};

export default function AdminSinglePostPage({ params }: AdminSinglePostPage) {
  const idParam = params.then((p) => ({ id: p.id }));

  return (
    <Suspense fallback={<SpinLoader />}>
      <AdminSinglePost idParam={idParam} />
    </Suspense>
  );
}
