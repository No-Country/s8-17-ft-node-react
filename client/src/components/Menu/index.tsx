"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { USER_TOKEN } from "@/utils/constants";

type MenuOption = {
  id: number;
  url: string;
  text: string;
  icon: React.ReactNode;
  activeColor: string;
  inactiveColor: string;
};

type Props = {
  options: MenuOption[];
};

const Menu = ({ options }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const handleLogOut = () => {
    Cookies.remove(USER_TOKEN, { sameSite: "Lax" });
    router.push("/");
    window.location.reload();
  };

  console.log(Cookies.get(USER_TOKEN));
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
          {option.text === "Logout" ? (
            <button className="w-full" onClick={handleLogOut}>
              <h1
                className={`w-[100%] flex items-center text-2xl py-1 px-3 font-medium rounded-md hover:shadow-custom ${
                  isActive(option.url) ? "shadow-custom" : "shadow-transparent"
                }`}
              >
                {option.icon}
                {option.text}
              </h1>
            </button>
          ) : (
            <h1
              className={`w-[100%] flex items-center text-2xl py-1 px-3 font-medium rounded-md hover:shadow-custom ${
                isActive(option.url) ? "shadow-custom" : "shadow-transparent"
              }`}
            >
              {option.icon}
              {option.text}
            </h1>
          )}
        </Link>
      ))}
    </section>
  );
};

export default Menu;
