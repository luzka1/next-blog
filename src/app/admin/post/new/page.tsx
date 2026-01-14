import { ManagePostForm } from "@/components/admin/ManagePostForm";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Criar post"
}

export default function AdmingNewPostPage() {
  return <div className="flex flex-col gap-6">
    <h1 className="text-xl font-extrabold">Criar post</h1>
    <ManagePostForm mode="create" />
  </div>;
}
