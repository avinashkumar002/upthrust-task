import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import Services from "@/components/sections/Services";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <div className="main-section">
        <Header />
        <main>
          <Hero />
          <Brands />
        </main>
      </div>
      <Services services={services} />
    </>
  );
}

