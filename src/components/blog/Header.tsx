import Link from "next/link";

export function Header() {
  return (
    <>
      <div>Logo</div>

      <ul className="flex flex-row justify-center gap-6 ">
        <li>
          <Link
            href="/blog/business"
            className="hover:text-zinc-500 transition-colors duration-300"
          >
            Business
          </Link>
        </li>
        <li>
          <Link
            href="/blog/culture"
            className="hover:text-zinc-500 transition-colors duration-300"
          >
            Culture
          </Link>
        </li>
        <li>
          <Link
            href="/blog/science"
            className="hover:text-zinc-500 transition-colors duration-300"
          >
            Science
          </Link>
        </li>
        <li>
          <Link
            href="/blog/technology"
            className="hover:text-zinc-500 transition-colors duration-300"
          >
            Technology
          </Link>
        </li>
      </ul>

      <div className="flex gap-4">
        <button>Login</button>
        <Link href="/signup">
          <button>SignUp</button>
        </Link>
      </div>
    </>
  );
}
