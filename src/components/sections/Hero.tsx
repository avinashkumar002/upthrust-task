import Image from "next/image";
import Annotation from "@/components/ui/Annotation";
import bold from "@/assets/images/hero/bold.svg";
import vector from "@/assets/images/hero/Vector.svg";
import perform from "@/assets/images/hero/perform.svg";
import statue from "@/assets/images/hero/futuristic.svg";
import blueprint from "@/assets/images/hero/clip-path-group.webp";
import expensiveUnderline from "@/assets/images/hero/path56.svg";
import cheaperCircle from "@/assets/images/hero/path59.svg";
import motionUnderline from "@/assets/images/hero/path70.svg";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="@container relative mx-auto w-full max-w-[1440px]">
        {/* Art layer: one composition, scales proportionally at every size */}
        <div className="relative h-[100vh] overflow-hidden">
          <h1 id="hero-heading">
            <span className="sr-only">Bold design that performs</span>
            <Image
              src={vector}
              alt=""
              className="absolute left-[55.28%] top-[45.74%] z-10 h-auto w-[44.72%]"
            />
            <Image
              src={bold}
              alt=""
              className="absolute left-[2.67%] top-[7.51%] z-20 h-auto w-[97.33%]"
            />
            <Image
              src={perform}
              alt=""
              className="absolute left-[10.76%] top-[76.55%] z-50 h-auto w-[78.47%]"
            />
          </h1>
          <Image
            src={blueprint}
            alt=""
            sizes="50vw"
            className="absolute bottom-0 right-0 z-30 h-auto w-[49.72%]"
          />
          <Image
            src={statue}
            alt="Iridescent chrome bust sculpture"
            priority
            sizes="38vw"
            className="absolute left-[31.04%] top-[16.08%] z-40 h-auto w-[37.92%]"
          />
        </div>

        {/* Taglines: zigzag on mobile, 3 columns on tablet, overlaid on desktop */}
        <div className="flex flex-col gap-10 px-5 py-10 md:grid md:grid-cols-3 md:gap-6 md:px-8 md:py-10 lg:absolute lg:inset-0 lg:z-[60] lg:block lg:p-0">
          <p className="self-start font-bold uppercase text-black text-[28px] leading-[1.2] md:self-auto md:text-[32px] lg:absolute lg:left-[5.14%] lg:top-[53.3%] lg:text-[2.78cqw]">
            <Annotation
              mark={motionUnderline}
              markClassName="left-0 top-[89.6%] w-[49.6%]"
            >
              IDENTITY ·<br />
              EXPERIENCE ·<br />
              MOTION ·
            </Annotation>
          </p>

          <p className="self-end pl-3 font-bold uppercase text-black text-xl leading-[1.33] md:self-auto md:pl-0 md:text-2xl lg:absolute lg:left-[20.28%] lg:top-[40.1%] lg:text-[1.67cqw]">
            <Annotation
              mark={cheaperCircle}
              markClassName="-left-[8.5%] top-[36%] w-[72%]"
            >
              STRATEGY IS
              <br />
              CHEAPER
            </Annotation>
          </p>

          <p className="self-start font-bold uppercase text-black text-2xl leading-[1.25] md:self-auto md:text-[28px] lg:absolute lg:left-[80.4%] lg:top-[33.1%] lg:text-[2.22cqw]">
            <Annotation
              mark={expensiveUnderline}
              markClassName="left-0 top-[97%] w-[75%]"
            >
              COMFORTABLE
              <br />
              IS EXPENSIVE
            </Annotation>
          </p>
        </div>
      </div>
    </section>
  );
}