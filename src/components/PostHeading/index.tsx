import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "font-bold text-2xl/normal md:text-3xl/tight",
    h2: "font-bold text-lg/normal md:text-xl/tight",
  };

  const commonClasses = "font-bold";

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
