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
    <section className="w-full lg:w-[234px] h-fit flex flex-col items-center lg:text-left px-6 py-11 gap-6 shadow-custom rounded-xl overflow-hidden">
      {options.map(option => (
        <Link
          href={option.url}
          key={option.id}
          passHref
          className={`flex justify-start items-center ${
            isActive(option.url) ? "text-" + option.activeColor : "text-" + option.inactiveColor
          }`}
        >
          <h1
            className={`lg:w-[200px] flex text-2xl font-medium ml-4 gap-2 rounded-md hover:shadow-custom ${
              isActive(option.url) ? "shadow-custom" : "shadow-transparent"
            } lg:py-1 lg:px-3`}
            onClick={option.onClick}
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
