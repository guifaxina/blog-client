import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BlogPost } from "@/components/BlogPost";
import { MainBlogPost } from "@/components/MainBlogPost";
import { LastReadsPost } from "@/components/LastPostsPost";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-zinc-50 h-screen flex flex-col">
      <header className="bg-zinc-50 w-full border border-b-1 p-2 flex justify-around">
        <div>Logo</div>

        <ul className="flex flex-row justify-center gap-6 ">
          <li>
            <Link
              href=""
              className="hover:text-zinc-500 transition-colors duration-300"
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="hover:text-zinc-500 transition-colors duration-300"
            >
              Culture
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="hover:text-zinc-500 transition-colors duration-300"
            >
              Science
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="hover:text-zinc-500 transition-colors duration-300"
            >
              Technology
            </Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </header>

      <div className="flex gap-16 justify-center">
        <section className="flex justify-center">
          <div className="border-zinc-900 border-t-4 mt-10 max-w-3xl justify-center">
            <h2 className="bg-zinc-900 text-white p-1.5 inline">Trending</h2>
            <MainBlogPost />
          </div>
        </section>

        <aside className="flex justify-center">
          <div className="border-t-4 border-zinc-900 mt-10 max-w-xs">
            <h2 className="bg-zinc-900 text-white p-1.5 inline">Last Posts</h2>
            <LastReadsPost />
            <LastReadsPost />
            <LastReadsPost />
            <LastReadsPost />
            <LastReadsPost />
          </div>
        </aside>
      </div>

      <section className="flex justify-center mt-6">
        <div className="border-t-4 border-zinc-800  max-w-6xl">
          <h2 className="bg-zinc-900 inline p-1.5 text-white">Weekly's Most Reads</h2>
          <div className="flex flex-row justify-center gap-6">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
            >
              <SwiperSlide> <BlogPost /> </SwiperSlide>
              <SwiperSlide> <BlogPost /> </SwiperSlide>
              <SwiperSlide> <BlogPost /> </SwiperSlide>
              <SwiperSlide> <BlogPost /> </SwiperSlide>
              <SwiperSlide> <BlogPost /> </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      
      <footer className="mt-6">
        <hr />
      </footer>

    </main>
  );
}
