import { Inter } from "next/font/google";
import { Post, Header, LastReads, MainPost } from "@/components/blog";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-zinc-50 h-screen flex flex-col">
      <header className="bg-zinc-50 w-full border border-b-1 p-2 flex justify-around">
        <Header />
      </header>

      <div className="flex gap-16 justify-center">
        <section className="flex justify-center">
          <div className="border-zinc-900 border-t-4 mt-10 max-w-3xl justify-center">
            <h2 className="bg-zinc-900 text-white p-1.5 inline">Trending</h2>
            <MainPost
              thumbnail="/images/jeff-bezos.jpeg"
              altText="Jeff Bezos"
              tag={"TECHNOLOGY"}
              estimatedReadTime={11}
              title={
                "Jeff Bezos Doesn't Stop Getting Balder it is Unbelievable"
              }
              author={"Guilherme Faxina"}
            />
          </div>
        </section>

        <aside className="flex justify-center">
          <div className="border-t-4 border-zinc-900 mt-10 max-w-xs">
            <h2 className="bg-zinc-900 text-white p-1.5 inline">Last Posts</h2>
            <LastReads />
            <LastReads />
            <LastReads />
            <LastReads />
            <LastReads />
          </div>
        </aside>
      </div>

      <section className="flex justify-center mt-6">
        <div className="border-t-4 border-zinc-800  max-w-6xl">
          <h2 className="bg-zinc-900 inline p-1.5 text-white">
            Weeklys Most Reads
          </h2>
          <div className="flex flex-row justify-center gap-6">
            <Swiper spaceBetween={20} slidesPerView={4}>
              <SwiperSlide>
                <Post
                  author="Guilherme Faxina"
                  thumbnail="/images/jeff-bezos.jpeg"
                  altText="Jeff"
                  estimatedReadTime={1}
                  tag={"BUSINESS"}
                  title={"Jeff Bezos is Getting Balder"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Post
                  author="Guilherme Faxina"
                  thumbnail="/images/jeff-bezos.jpeg"
                  altText="Jeff"
                  estimatedReadTime={1}
                  tag={"BUSINESS"}
                  title={"Jeff Bezos is Getting Balder"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Post
                  author="Guilherme Faxina"
                  thumbnail="/images/jeff-bezos.jpeg"
                  altText="Jeff"
                  estimatedReadTime={1}
                  tag={"BUSINESS"}
                  title={"Jeff Bezos is Getting Balder"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Post
                  author="Guilherme Faxina"
                  thumbnail="/images/jeff-bezos.jpeg"
                  altText="Jeff"
                  estimatedReadTime={1}
                  tag={"BUSINESS"}
                  title={"Jeff Bezos is Getting Balder"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Post
                  author="Guilherme Faxina"
                  thumbnail="/images/jeff-bezos.jpeg"
                  altText="Jeff"
                  estimatedReadTime={1}
                  tag={"BUSINESS"}
                  title={"Jeff Bezos is Getting Balder"}
                />
              </SwiperSlide>
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
