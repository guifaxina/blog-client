import Image from "next/image";
import { CiCalendar as Calendar } from "react-icons/ci"

type LastReadsProps = {
  title: string,
  thumbnail: string,
  altText: string,
  date: Date
}

export function LastReadsPost({ title, thumbnail, altText, date }: LastReadsProps) {
  return (
    <>
      <div className="flex flex-row mt-2">
        <div className="flex flex-col">
          <h3 className="mt-1.5 text-zinc-800 font-semibold ">
            Why Poco M5S Can Be Dangerous to Manufactures
          </h3>
          
          <span className="text-xs mt-0.5 text-zinc-400 flex flex-row items-center">
            <Calendar />
            <span className="ml-1">11 de abril de 2023</span>
          </span>
        </div>

        <span className="ml-1 w-44 h-16 overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            src="/images/poco-m5.jpg"
            alt="Poco M5s"
            height={50}
            width={320}
          />
        </span>
      </div>

      <p className="text-sm text-zinc-800 mt-1.5"></p>

      <hr></hr>
    </>
  );
}
