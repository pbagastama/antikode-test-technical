import Link from 'next/link';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { LIST_ACTIVITIES } from "@/constants";
import { TStarProBold, TStarProLight, TStarProMedium, Trebuchet } from "@/app/fonts";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const listNews = [
  {
    id: 1,
    category: 'PUBLIC WORKSHOP',
    date: '25 Feb 2022',
    title: 'Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout',
  },
  {
    id: 2,
    category: 'BUKA PINTU',
    date: '20 Oct 2021',
    title: 'Our New Solution To Hire The Right Person For Your Company',
  },
  {
    id: 3,
    category: 'LIVE WEBINAR',
    date: '20 Oct 2021',
    title: 'DDI : Among Indonesia’s First Signatories of UN WEP',
  },
  {
    id: 4,
    category: 'BUKA PINTU',
    date: '20 Oct 2021',
    title: 'Our New Solution To Hire The Right Person For Your Company',
  },
];

export default function SectionActivities() {
//   const router = useRouter();

  return (
    <section className="bg-gray-100 py-20 px-4 md:px-10 lg:px-10 xl:px-[80px]" id="news">
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h2 className={`${TStarProLight.className} text-5xl`}>Upcoming Activities</h2>
                <Link href="/">
                    <div className="flex items-center text-[#B92322] hover:underline">
                        <span className={`${TStarProBold.className} mr-2`}>VIEW ALL</span>
                        <HiOutlineArrowNarrowRight className="h-4 w-4" />
                    </div>
                </Link>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
                    <Image
                        src="/images/activities-img.png"
                        className="w-full"
                        width={480}
                        height={480}
                        alt="activities"
                    />
                </div>
                <div className="w-full lg:w-7/12 lg:border-t border-gray-300 pl-0 md:pl-12">  
                    {LIST_ACTIVITIES.map((activity) => (
                        <Link
                            href="#"
                            key={activity.id}
                            className="flex justify-between items-center py-4 border-b border-gray-200 cursor-pointer"
                            // onClick={() => router.push('/')}
                        >
                            <div className="w-3/12 flex flex-col">
                                <div className={`${Trebuchet.className} text-sm text-[#8B0B04]`}>{activity.category}</div>
                                <div className={`${Trebuchet.className} text-xs text-black opacity-40`}>{activity.date}</div>
                            </div>
                            <div className="w-8/12 ml-2 text-lg font-semibold">{activity.title}</div>
                            <div className="w-1/12 flex justify-end">
                                <HiOutlineArrowNarrowRight className="h-4 w-4 text-[#8B0B04]" />
                            </div>    
                        </Link>
                    ))}
                </div>
            </div>
      </div>
    </section>
  );
}
