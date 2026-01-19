import { MenuAdmin } from "@/components/admin/MenuAdmin";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default function AdminPostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={<>Carregando...</>}>
        <MenuAdmin />
      </Suspense>
      {children}
    </>
  );
}
