import Link from "next/link";
import { UserCircle2 } from "lucide-react";
import { ProfileDropdown } from "../blog/index"
import { useState } from "react";

interface Props {
  name?: string;
  profilePic?: string;
}

export function Header({ name, profilePic }: Props) {
  const [ isDropDownActive, setIsDropdownActive ] = useState(false)

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

      {isDropDownActive && <ProfileDropdown name={name} profilePic={profilePic}/>}

      <div className="flex gap-4">
        {name ? (
          <div className="flex flex-row gap-2 cursor-pointer" onClick={() => {
            isDropDownActive ? setIsDropdownActive(false) : setIsDropdownActive(true)
          }}>
            <UserCircle2 strokeWidth={1} size={26} />
          </div>
        ) : (
          <Link href="/signup">
            <button>SignUp</button>
          </Link>
        )}
      </div>
    </>
  );
}
