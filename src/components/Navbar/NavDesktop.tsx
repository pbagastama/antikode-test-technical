import Image from "next/image";
import Link from "next/link";
import React from "react";
// import ButtonLink from "../ButtonLink";
import { IHeaderItem } from "@/types/index.types";
import { TStarProBold } from "@/app/fonts";

type NavDesktopProps = {
  dataHeader: IHeaderItem[];
  handleSubMenu: (id: number) => void;
  openSubMenu: number | null;
  setMenuOpen: (open: boolean) => void;
  pathname: string;
};

const NavDesktop: React.FC<NavDesktopProps> = (props) => {
  const {
    dataHeader,
    handleSubMenu,
    openSubMenu,
    setMenuOpen,
    pathname,
  } = props;
  return (
    <div className="hidden lg:flex items-center gap-x-10">
      <nav className="text-white">
        <ul className="list-none flex items-center gap-5">
          {dataHeader.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li className="px-4 sub-menu" key={item.id}>
                {item.subItems ? (
                  <>
                    <button
                      type="button"
                      onClick={() => handleSubMenu(item.id)}
                      className="flex items-center text-[14px] leading-[18px] gap-2 w-full"
                    >
                      {item.name}
                    </button>
                    {openSubMenu === item.id && (
                      <div
                        className={`absolute top-[90px] xl:top-[100px] px-3 py-2 inline-flex flex-col gap-3 items-start backdrop-blur-[3px] transition-all duration-500 bg-black bg-opacity-[60%] sub-menu
                            ${
                              openSubMenu === item.id
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                      >
                        {item.subItems.map((subItem) => {
                          const isSubItemActive = pathname.startsWith(
                            subItem.href || "#"
                          );
                          return (
                            <Link
                              href={subItem.href || "#"}
                              key={subItem.id}
                              className={`text-white py-2 text-[14px] leading-[18px] tracking-[1px] text-nowrap ${
                                isSubItemActive
                                  ? "border-b-[2px] border-white"
                                  : ""
                              }`}
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`text-[18px] py-2 leading-[24px] tracking-[0.2px] gap-2 ${
                      isActive
                        ? `${TStarProBold.className} font-bold border-b-[2px] border-[#B92322]`
                        : "text-[18px] leading-[24px] gap-2"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavDesktop;
