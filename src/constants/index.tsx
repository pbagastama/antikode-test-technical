import { IHeaderItem } from "@/types/index.types";
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoYoutube, BiLogoTwitter } from "react-icons/bi";

export const HEADER_ITEMS: IHeaderItem[] = [
    {
        id: 1,
        name: "Home",
        href: "/",
    },
    {
        id: 2,
        name: "About",
        href: "/about",
    },
    {
        id: 3,
        name: "Expertise",
        href: "#",
    },
    {
        id: 4,
        name: "Program",
        href: "#",
    },
    {
        id: 5,
        name: "Odyssey",
        href: "#",
    },
    {
        id: 6,
        name: "News",
        href: "#",
    },
    {
        id: 7,
        name: "Contact",
        href: "#",
    },
];

export const LIST_ACTIVITIES = [
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

export const FOOTER_SOCIAL_MEDIA = [
    {
        id: 1,
        name: "Facebook",
        href: "https://facebook.com",
        icon: <BiLogoFacebook className="text-[2rem]" />,
    },
    {
        id: 2,
        name: "Instagram",
        href: "https://instagram.com",
        icon: <BiLogoInstagramAlt className="text-[2rem]" />,
    },
    {
        id: 3,
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: <BiLogoLinkedin className="text-[2rem]" />,
    },
    {
        id: 4,
        name: "Youtube",
        href: "https://youtube.com",
        icon: <BiLogoYoutube className="text-[2rem]" />,
    },
    {
        id: 5,
        name: "Twitter",
        href: "https://x.com",
        icon: <BiLogoTwitter className="text-[2rem]" />,
    },
];