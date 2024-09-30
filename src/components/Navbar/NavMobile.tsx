import Image from "next/image";
import Link from "next/link";
import { IHeaderItem } from "@/types/index.types";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type NavMobileProps = {
  menuOpen: boolean;
  dataHeader: IHeaderItem[];
  handleSubMenu: (id: number) => void;
  openSubMenu: number | null;
  setMenuOpen: (open: boolean) => void;
};

const NavMobile: React.FC<NavMobileProps> = (props) => {
  const {
    menuOpen,
    dataHeader,
    handleSubMenu,
    openSubMenu,
    setMenuOpen,
  } = props;

  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  return (
    <nav
      className={`w-full lg:hidden max-w-[1440px] overflow-y-auto mx-auto fixed z-[999] left-0 h-full bg-black p-4 transform transition-all duration-500 ease-in-out ${
        menuOpen ? "top-[70px] md:top-[80px]" : "-top-[100vh]"
      }`}
    >
      <div className="flex flex-col w-full gap-y-8 h-full text-white overflow-y-auto">
        <ul className="list-none">
          {dataHeader.map((item: IHeaderItem, index: number) => (
            <li
              className={`pb-5 border-b border-solid border-[#CBCBCB] pl-1 ${
                index === 0 ? "pt-0" : "pt-5"
              }`}
              key={item.id}
            >
              {item.subItems ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleSubMenu(item.id)}
                    className="flex items-center justify-between w-full lg:gap-1 lg:justify-normal"
                  >
                    {item.name}
                  </button>
                  <ul
                    className={`overflow-hidden list-none flex flex-col gap-y-3 transition-all duration-500 ease-in-out ${
                      openSubMenu === item.id ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        <Link href={subItem.href || "#"}>{subItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href || "#"}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMobile;
