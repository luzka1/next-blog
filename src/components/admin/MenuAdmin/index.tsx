import clsx from "clsx";
import { FileTextIcon, HouseIcon } from "lucide-react";
import Link from "next/link";

export function MenuAdmin() {
  const navClasses = clsx(
    "bg-slate-900 text-slate-50 rounded-lg flex flex-col mb-8 sm:flex-row sm:flex-wrap"
  );
  const linkClasses = clsx(
    "[&>svg]:w-4 [&>svg]:h-4 px-4 flex gap-2 items-center hover:bg-slate-800 transition h-10 shrink-0 rounded-lg"
  );

  return (
    <nav className={navClasses}>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>
    </nav>
  );
}
