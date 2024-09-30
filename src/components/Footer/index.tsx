import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { FOOTER_SOCIAL_MEDIA } from "@/constants";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowUp } from "react-icons/hi";
import { Trebuchet, TStarProLight } from '@/app/fonts';
import logoFooter1 from "/public/images/logo-gptw.png";
import logoFooter2 from "/public/images/logo-unwomen.png";
import logoFooter3 from "/public/images/logo-iso-updated.png";

export default function Footer() {
  return (
    <footer className="bg-[#2F2A2A] text-white">
        <div className="container border-b border-white">
            <div className="container py-8 px-4 md:px-10 lg:px-10 xl:px-[80px]">
                <div className={clsx('flex flex-wrap justify-between')}>
                    {/* Scroll to top */}
                    {/* <Link href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                    <HiOutlineArrowNarrowUp className="m-auto" />
                    </Link> */}

                    {/* Certification logos */}
                    <div className="flex gap-4 items-center">
                        <Image
                            src={logoFooter1}
                            width={35}
                            height={60}
                            alt="2023 GPTW - Certification"
                        />
                        <Image
                            src={logoFooter2}
                            width={152}
                            height={50}
                            alt="LOGO WEPS Proud_to_support"
                        />
                        <Image
                            src={logoFooter3}
                            width={206}
                            height={50}
                            alt="10 ISO Certifications"
                        />
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center text-[2rem] my-4 lg:my-0">
                        <div className="flex gap-4">
                            {FOOTER_SOCIAL_MEDIA.map((socmed) => (
                            <Link href={socmed.href} key={socmed.id}>
                                {socmed.icon}
                            </Link>
                            ))}
                        </div>
                    </div>

                    {/* Subscription Box */}
                    <div className="lg:w-1/3">
                        <h4 className={`${TStarProLight.className} text-2xl mb-3`}>
                            Subscribe. Join the Community.
                        </h4>
                        <div className="flex">
                            <input
                                type="email"
                                className="w-full p-2 text-gray-900"
                                placeholder="Email address"
                            />
                            <button className="bg-[#B92322] p-2 flex items-center">
                                <HiOutlineArrowNarrowRight className="w-5 h-5 text-white" />
                                {/* <ICNext24 className="w-5 h-5 text-white" /> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="container py-4 px-4 md:px-10 lg:px-10 xl:px-[80px] text-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className={`${Trebuchet.className} text-sm text-center md:text-left`}>
                    Copyright © 2022 Daya Dimensi Indonesia. Website crafted by
                    Antikode.
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link
                        href="#"
                        className="text-sm text-white hover:underline"
                    >
                        Privacy Policy
                    </Link>
                    <span>|</span>
                    <Link
                        href="#"
                        className="text-sm text-white hover:underline"
                    >
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}