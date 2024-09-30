"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HEADER_ITEMS } from "@/constants";
import clsx from "clsx";
import { TStarProRegular } from "@/app/fonts";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.png";
import HamburgerMenuWhiteIcon from "/public/images/hamburger-menu-white-icon.svg";
import XmarkWhiteIcon from "/public/images/xmark-white-icon.svg";

const NavMobile = dynamic(() => import("./NavMobile"), {});
const NavDesktop = dynamic(() => import("./NavDesktop"), {});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const pathname = usePathname();

  const handleSubMenu = (id: number) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".dropdown-menu") && !target.closest(".sub-menu")) {
      setOpenSubMenu(null);
    }
  };

  useEffect(() => {
    if (!menuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenSubMenu(null);
  }, [pathname]);

  return (
    <>
      <header
        className={`header backdrop-blur-[3px] right-0 w-full mx-auto top-0 left-0 z-[9999] px-4 md:px-10 lg:px-10 xl:px-[80px] py-0 h-[90px] md:h-[80px] ${
          menuOpen ? "" : "bg-opacity-[60%]"
        } ${TStarProRegular.className}`}
      >
        <div className={clsx("w-full h-full flex items-center justify-between")}>
          <Link href={"#"}>
            <Image
              src={Logo}
              alt="logo"
              width="160"
              height="50"
              // className="w-[99.273px] h-7 lg:w-[156px] lg:h-11"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? (
              <Image
                src={XmarkWhiteIcon}
                alt="xmark icon"
                className="w-8 h-8"
              />
            ) : (
              <Image
                src={HamburgerMenuWhiteIcon}
                alt="hamburger menu icon"
                className="w-8 h-8"
              />
            )}
          </button>
          <NavDesktop
            pathname={pathname}
            dataHeader={HEADER_ITEMS}
            handleSubMenu={handleSubMenu}
            openSubMenu={openSubMenu}
            setMenuOpen={setMenuOpen}
          />
        </div>
      </header>

      <NavMobile
        dataHeader={HEADER_ITEMS}
        handleSubMenu={handleSubMenu}
        menuOpen={menuOpen}
        openSubMenu={openSubMenu}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
};

export default Header;
