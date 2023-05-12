import Image from "next/image";

export function MainBlogPost() {
  return (
    <>
      <div className="w-full flex flex-row">
        <div className="flex flex-col mt-4">
          <Image
            className="mb-1"
            src="/images/jeff-bezos.jpeg"
            alt="Jeff Bezos"
            width={740}
            height={300}
          ></Image>
          <div>
            <span className="text-sm bg-zinc-800 rounded-md p-0.5 px-1 text-zinc-200">
              BUSINESS
            </span>
            <span className="text-sm text-zinc-700 ml-1">• 5 minutes</span>
            <h1 className="text-3xl font-semibold mt-1">
              Jeff Bezos Steps Down to Board Advisor of Amazon
            </h1>
            <span className="text-zinc-800 text-md">Guilherme Faxina</span>
          </div>
        </div>

      </div>
    </>
  );
}
