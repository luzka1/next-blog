"use client";

import { revalidateAction } from "@/actions/revalidate";

export function ExampleRevalidate() {
  return <button onClick={() => revalidateAction()}>REVALIDATE</button>;
}
