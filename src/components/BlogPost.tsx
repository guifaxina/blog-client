import Image from "next/image";
import Link from "next/link";

type BlogPostProps = {
  thumbnail: string;
  altText: string;
  tag: "BUSINESS" | "CULTURE" | "SCIENCE" | "TECHNOLOGY";
  estimatedReadTime: number;
  title: string;
  author: string;
};

export function BlogPost({
  thumbnail,
  altText,
  tag,
  estimatedReadTime,
  title,
  author,
}: BlogPostProps) {
  const linkToPost = (tag + "/" + title.replaceAll(" ", "-")).toLowerCase();

  return (
    <>
      <div className="flex flex-col max-w-xs mt-4">
        <Link href={`/${linkToPost}`}>
          <Image
            className="mb-1 hover:scale-105 transition-transform duration-300"
            src={thumbnail}
            alt={altText}
            width={324}
            height={182}
          ></Image>
        </Link>
        <div className="ml-2">
          <Link href={"/business"}>
          <span className="text-xs bg-zinc-200 rounded-md p-0.5 px-1 text-zinc-800 hover:bg-zinc-300">
            {tag}
          </span>
          </Link>
          <span className="text-xs text-zinc-700 ml-1">
            {estimatedReadTime == 1
              ? "• " + estimatedReadTime + " minute"
              : "• " + estimatedReadTime + " minutes"}
          </span>
          <Link href={`/${linkToPost}`}>
            <h3 className="text-xl font-semibold mt-1 hover:text-zinc-800">{title}</h3>
          </Link>
          <span className="text-zinc-800 text-sm hover:text-zinc-600">{author}</span>
        </div>
      </div>
    </>
  );
}
