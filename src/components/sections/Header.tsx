import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-transparent flex items-center justify-between px-5 py-4 md:px-8 md:py-[19px] lg:px-[72px] lg:py-[20px]">
            <nav aria-label="Primary" className="flex">
                <Link
                    href="/"
                    aria-label="Upthrust home"
                    className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                    <Image
                        src={logo}
                        alt=""
                        priority
                        className="h-auto w-[126px] md:w-[153px] lg:w-[157px]"
                    />
                </Link>
            </nav>
            <a
                href="#contact"
                className="font-anton text-[32px] leading-[1.4] text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
                CONTACT US
            </a>
        </header>
    );
}