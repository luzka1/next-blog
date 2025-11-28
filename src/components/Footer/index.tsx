import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-center pb-16">
      <p>
        <span>
          Copyright &copy; {new Date().getFullYear()} -{" "}
          <Link href="/">The Blog</Link>
        </span>
      </p>
    </footer>
  );
}
