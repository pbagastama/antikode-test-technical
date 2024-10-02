
import Link from "next/link";
import Image from "next/image";
import { LIST_EXPERTISE } from "@/constants";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { TStarProLight, Trebuchet } from "@/app/fonts";

export default function SectionExpertise() {
  return (
    <div className="bg-gray-100 pt-20 pb-0 px-4 md:px-10 lg:px-10 xl:px-[80px]">
      <div className="container mx-auto px-4">
        <div className="w-full md:w-8/12 mb-14">
          <h2 className={`${TStarProLight.className} text-5xl mb-4`}>Expertise</h2>
          <p className={`${Trebuchet.className} text-base text-[#504B49]`}>
            {`"Organisations who will succeed in the long-run are those who are open
              to new ideas, embrace innovations, instill compassion in every act and
              decision, and consistent in advancing humanity through sustainability."
              - Excerpts from 'Leaders of a New Planet' book.`}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIST_EXPERTISE.map((expertise) => (
            <div key={expertise.id} className="mb-4 bg-[#600000] h-[360px] px-6 py-8 hover:bg-[url('/images/meeting.jpg')]" >
              <Link href="#" className="relative block group">
                <div className="absolute flex flex-col w-full h-[360px] top-0 left-0 right-0 bottom-0 z-10">
                  <div className="relative mb-4">
                    <Image
                      src={expertise.icon}
                      alt="logo"
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className="relative min-h-[150px]">
                    <h3 className={`${TStarProLight.className} text-4xl text-white group-hover:text-black-500`}>
                      {expertise.title}
                    </h3>
                  </div>
                  <div className="relative bottom-[-50px] flex justify-end items-end">
                    <HiOutlineArrowNarrowRight className="text-3xl text-white" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
