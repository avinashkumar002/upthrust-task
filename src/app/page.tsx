import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";

export default function Home() {
  return (
    <>
      <div className="main-section pb-[86px]">
        <Header />
        <main>
          <Hero />
        </main>
         <Brands />
      </div>
    </>
  );
}