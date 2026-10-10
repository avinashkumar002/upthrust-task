import Image from "next/image";
import zomato from "@/assets/images/hero/zomato.svg";
import bosch from "@/assets/images/hero/bosch.svg";
import loreal from "@/assets/images/hero/loreal.svg";
import vega from "@/assets/images/hero/vega.svg";
import dell from "@/assets/images/hero/dell.svg";

const brands = [
  { name: "Zomato", logo: zomato },
  { name: "Bosch", logo: bosch },
  { name: "L'Oréal", logo: loreal },
  { name: "Vega", logo: vega },
  { name: "Dell", logo: dell },
  { name: "L'Oréal", logo: loreal },
];

export default function Brands() {
  return (
    <section
      aria-label="Trusted by brands"
      className="flex flex-col gap-10 px-5 py-8 md:px-8 md:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-6"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl font-bold text-black leading-none">100+</h2>
        <p className="max-w-[16rem] text-base font-normal text-black">
          Brands trusted us to define how they&apos;re seen.
        </p>
      </div>

      <ul className="grid flex-1 grid-cols-3 place-items-center gap-x-4 gap-y-8 md:flex md:flex-wrap md:justify-between md:gap-x-6 lg:max-w-[75%]">
        {brands.map((brand, index) => (
          <li key={`${brand.name}-${index}`} className="flex items-center">
            <Image
              src={brand.logo}
              alt={brand.name}
              className="h-5 w-auto max-w-full md:h-7 lg:h-8"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}