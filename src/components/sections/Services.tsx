"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Service } from "@/data/services";
import sparkle from "@/assets/images/services/sparkle.svg";
// import net from "@/assets/images/services/net.png";

export default function Services({ services }: { services: Service[] }) {
    const [active, setActive] = useState(0);
    const interacted = useRef(false);
    const buttons = useRef<(HTMLButtonElement | null)[]>([]);

    const next = (active + 1) % services.length;

    // The clicked button's panel becomes inert, so move focus to the new panel's button
    useEffect(() => {
        if (interacted.current) {
            buttons.current[active]?.focus({ preventScroll: true });
        }
    }, [active]);

    function showNext() {
        interacted.current = true;
        setActive(next);
    }

    return (
        <section
            aria-label="Our services"
            className="relative isolate overflow-hidden bg-black text-white"
        >
            {/* <Image
                src={net}
                alt=""
                fill
                sizes="100vw"
                aria-hidden="true"
                className="-z-20 object-cover object-center"
            /> */}
            {services.map((service, i) => (
                <Image
                    key={service.id}
                    src={service.background}
                    alt=""
                    fill
                    sizes="100vw"
                    aria-hidden="true"
                    className={`-z-10 object-cover object-center transition-opacity duration-700 motion-reduce:transition-none ${i === active ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
                <p className="text-base uppercase leading-normal tracking-[-0.02em]">
                    What can we do for you
                </p>

                <div className="grid">
                    {services.map((service, i) => {
                        const isActive = i === active;
                        return (
                            <div
                                key={service.id}
                                inert={!isActive}
                                className={`col-start-1 row-start-1 transition-opacity duration-500 motion-reduce:transition-none ${isActive ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <h2 className="text-balance text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[1.04] tracking-[-0.06em]">
                                    {service.title}
                                </h2>

                                <div className="mt-10 grid gap-10 lg:mt-20 lg:grid-cols-[492fr_480fr] lg:gap-[clamp(4rem,11vw,10rem)] lg:pl-20">
                                    <div className="relative aspect-[492/332] w-full overflow-hidden rounded-lg">
                                        <Image
                                            src={service.collage}
                                            alt={service.collageAlt}
                                            fill
                                            sizes="(min-width: 1024px) 34vw, 100vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex min-w-0 flex-col items-start gap-8 lg:justify-between lg:gap-0">
                                        <p className="text-xl font-semibold leading-[1.4] tracking-[-0.02em]">
                                            {service.tagline}
                                        </p>

                                        <ul className="flex flex-col gap-5">
                                            {service.bullets.map((bullet) => (
                                                <li
                                                    key={bullet}
                                                    className="flex items-center gap-2 text-xl font-semibold leading-[1.4] tracking-[-0.02em]"
                                                >
                                                    <Image
                                                        src={sparkle}
                                                        alt=""
                                                        className="size-[15px] shrink-0"
                                                    />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>

                                        {service.note && (
                                            <p className="text-sm italic leading-[1.5] tracking-[-0.02em]">
                                                {service.note}
                                            </p>
                                        )}

                                        <button
                                            ref={(el) => {
                                                buttons.current[i] = el;
                                            }}
                                            type="button"
                                            onClick={showNext}
                                            className="bg-white p-5 text-2xl font-bold leading-[1.25] tracking-[-0.04em] text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-[32px]"
                                        >
                                            CONTACT
                                            <span className="sr-only">
                                                {" "}
                                                — show next service: {services[next].title}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <p role="status" className="sr-only">
                    {services[active].title}
                </p>
            </div>
        </section>
    );
}