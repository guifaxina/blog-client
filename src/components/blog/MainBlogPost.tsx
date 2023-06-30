import Image from "next/image";
import { BlogPostProps } from "./BlogPost";
import Link from "next/link";

export function MainBlogPost({
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
      <div className="w-full flex flex-row">
        <div className="flex flex-col mt-4">
          <Link href={`/blog/${linkToPost}`}>
            <Image
              className="mb-1"
              src={thumbnail}
              alt={altText}
              width={740}
              height={300}
            ></Image>
          </Link>
          <div>
            <span className="text-sm bg-zinc-200 rounded-md p-0.5 px-1.5 text-zinc-800">
              {tag}
            </span>
            <span className="text-sm text-zinc-700 ml-1">
              • {estimatedReadTime} minute{estimatedReadTime === 1 ? "" : "s"}
            </span>
            <h1 className="text-3xl font-semibold mt-1">{title}</h1>
            <span className="text-zinc-800 text-md">{author}</span>
          </div>
        </div>
      </div>
    </>
  );
}
