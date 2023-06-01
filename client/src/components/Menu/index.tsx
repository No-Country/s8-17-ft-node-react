"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuOption = {
  id: number;
  url: string;
  text: string;
  icon: React.ReactNode;
  activeColor: string;
  inactiveColor: string;
  onClick?: () => void;
};

type Props = {
  options: MenuOption[];
};

const Menu = ({ options }: Props) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <section className="w-[234px] h-[250px] flex flex-col items-center justify-center gap-6 border shadow-[0px_0px_6px_rgba(0,0,0,0.25) rounded-[8px]">
      {options.map(option => (
        <Link
          href={option.url}
          key={option.id}
          passHref
          className={`w-[80%] ${
            isActive(option.url) ? "text-" + option.activeColor : "text-" + option.inactiveColor
          }`}
        >
          <h1
            className={`w-[100%] flex items-center text-2xl py-1 px-3 font-medium rounded-md hover:shadow-custom ${
              isActive(option.url) ? "shadow-custom" : "shadow-transparent"
            }`}
          >
            {option.icon}
            {option.text}
          </h1>
        </Link>
      ))}
    </section>
  );
};

export default Menu;
