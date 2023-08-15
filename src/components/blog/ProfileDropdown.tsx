import {
  Settings,
  Moon,
  Shield,
  Lock,
  LogOut,
} from "lucide-react";
import Image from "next/image";

interface Props {
  name?: string,
  profilePic?: string
}

export function ProfileDropdown({ name, profilePic }: Props) {
  const noProfilePic = "/images/jeff-bezos.jpeg"

  return (
    <>
      <div className="px-3 py-2.5 w-48 bg-zinc-50 absolute mt-8 right-48 rounded-lg shadow-2xl ">
        <ul className="text-zinc-600">
          <li className="text-lg mb-2 flex flex-row">
            <Image
              alt=""
              src={profilePic ?? noProfilePic}
              width={28}
              height={30}
              className="rounded-full mr-2 "
            />
            <strong>{name}</strong>
          </li>
          <hr className="mb-1" />
          <li
            className="mb-1 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-100 flex flex-row
          items-center"
          >
            <Settings size={16} className="mr-1" /> Settings
          </li>
          <li
            className="mb-1 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-100 flex flex-row
          items-center"
          >
            <Shield size={16} className="mr-1" /> Security
          </li>
          <li
            className="mb-1 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-100 flex flex-row
          items-center"
          >
            <Lock size={16} className="mr-1" /> Privacy
          </li>
          <li
            className="mb-1 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-100 flex flex-row
          items-center"
          >
            <Moon size={16} className="mr-1" /> Theme
          </li>
          <hr className="mt-1 mb-1" />
          <li
            className=" hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-100 flex flex-row
          items-center"
          >
            <LogOut size={16} className="mr-1" /> Logout
          </li>
        </ul>
      </div>
    </>
  );
}
