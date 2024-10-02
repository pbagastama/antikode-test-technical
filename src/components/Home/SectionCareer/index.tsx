import Link from "next/link";
import Image from "next/image";
import { TStarProBold, TStarProLight, Trebuchet } from "@/app/fonts";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function SectionCareer() {
  return (
    <section className="banner-top h-screen relative">
      <div className="absolute w-full h-[580px] md:h-screen top-0 left-0 z-0">
        <Image
          src={"/images/banner-home-footer.png"}
          fill
          alt="Banner Page"
          className="object-cover w-full h-full"
          quality={100}
          priority
        />
      </div>
      <div className="relative mx-auto py-12 px-4 md:px-10 lg:px-10 xl:px-[80px] h-screen flex flex-col justify-center z-10">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12">
            <h1 className={`${TStarProLight.className} text-white text-5xl text-shadow mb-5`}>
              Be a Part of 
              <br /> Daya Dimensi Indonesia
            </h1>
            <p className={`${Trebuchet.className} text-white opacity-80 text-lg mb-5 max-w-xl`}>
              Are you the resilient leaders we are searching for? Join Daya Dimensi Indonesia to advance your leadership skill and generate exceptional leaders across Indonesia at once.
            </p>
            <div className="flex space-x-6">
              <Link href="#">
                <div className="flex items-center text-white">
                  <p className={`${TStarProBold.className} mb-0 mr-2`}>LEARN MORE</p>
                  <HiOutlineArrowNarrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
}
