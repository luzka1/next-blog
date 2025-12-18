"use server";
import { revalidateTag } from "next/cache";

export async function revalidadeByTag({ tag }: { tag: string }) {
  revalidateTag(tag, "max");
}

export async function revalidateAction() {
  console.log("clicou ni mim")
  revalidateTag("public-posts", "max");
}
