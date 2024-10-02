import Link from "next/link";
import Image from "next/image";
import { TStarProBold, TStarProLight, Trebuchet } from "@/app/fonts";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function BannerTop() {
  return (
    <section className="banner-top h-screen relative">
      <div className="absolute w-full h-[580px] md:h-screen top-0 left-0 z-0">
        <Image
          src={"/images/banner-home.png"}
          fill
          alt="Banner Page"
          className="object-cover w-full h-full"
          quality={100}
          priority
        />
      </div>
      <div className="relative mx-auto py-12 px-4 md:px-10 lg:px-10 xl:px-[80px] h-[80vh] flex flex-col justify-center z-10">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12">
            <h1 className={`${TStarProLight.className} text-white text-5xl text-shadow mb-5`}>
              Adopt Globally,
              <br /> Adopt Locally
            </h1>
            <p className={`${Trebuchet.className} text-white opacity-80 text-lg mb-5 max-w-xl`}>
              Daya Dimensi Indonesia is a world-class strategic partner for
              individual and organisational transformation through
              humanity-based and technology-supported solutions to help you
              hire, promote, and develop exceptional leaders.
            </p>
            <div className="flex space-x-6">
              <Link href="/about">
                <div className="flex items-center text-white underline-animation">
                  <p className={`${TStarProBold.className} mb-0 mr-2`}>LEARN MORE ABOUT US</p>
                  <HiOutlineArrowNarrowRight className="h-4 w-4" />
                </div>
              </Link>
              <Link href="/">
                <div className="flex items-center text-white underline-animation">
                  <p className={`${TStarProBold.className} mb-0 mr-2`}>CONTACT US</p>
                  <HiOutlineArrowNarrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-wrap g-0 z-10 bottom-[8px] 2xl:bottom-[-20px]">
        <div className="w-full lg:w-7/12 flex bg-gray-100 py-8 pl-20 pr-8">
          <div className="flex flex-wrap w-full">
            <div className="w-1/3">
              <div className={`${TStarProLight.className} text-4xl text-[#B92322] mb-2`}>24+ Years</div>
              <div className={`${Trebuchet.className} text-black opacity-40`}>Experience</div>
            </div>
            <div className="w-1/3">
              <div className={`${TStarProLight.className} text-4xl text-[#B92322] mb-2`}>50,000+</div>
              <div className={`${Trebuchet.className} text-black opacity-40`}>Executive Clients</div>
            </div>
            <div className="w-1/3">
              <div className={`${TStarProLight.className} text-4xl text-[#B92322] mb-2`}>400+</div>
              <div className={`${Trebuchet.className} text-black opacity-40`}>Organization Clients</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 flex justify-center items-center py-4 px-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Image
              src="/images/logo-unwomen.png"
              alt="Support Women"
              width={195}
              height={64}
            />
            <Image
              src="/images/logo-iso-updated.png"
              alt="Certified ISO"
              width={260}
              height={64}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}
