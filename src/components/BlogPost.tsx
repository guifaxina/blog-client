import Image from "next/image";

export function BlogPost() {
  
  return (
    <>
      <div className="flex flex-col max-w-xs mt-4">
        <Image
        className="mb-1"
          src="/images/sundar-pichai.jpeg"
          alt="Sundar Pichai CEO of Google"
          width={324}
          height={182}
        >
        </Image>
        <div className="ml-2">
          <span className="text-xs bg-zinc-200 rounded-md p-0.5 px-1 text-zinc-800">BUSINESS</span>
          <span className="text-xs text-zinc-700 ml-1">• 5 minutes</span>
          <h3 className="text-xl font-semibold mt-1">Google CEO Announces New AI</h3>
          <span className="text-zinc-800 text-sm">Guilherme Faxina</span>
        </div>
      </div>
    </>
  );
}
