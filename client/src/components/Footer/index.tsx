import Image from "next/image";
import Link from "next/link";
import {
  IconYoutube,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTwitter
} from "@/components/icons";

// TODO: responsive. fix layout

const Footer = () => {
  return (
    <footer className="w-full pt-[550px] md:pt-[400px] lg:pt-[300px]">
      <div className="pt-24 relative  font-text md:text-sm text-xs lg:text-base">
        <div className="w-full h-[600px] md:h-[500px] lg:h-[350px] xl:h-[300px] border-t-[15px] z-30 border-secondary-500 absolute bottom-0 rounded-t-[60px]" />
        <div className="w-full h-[600px] md:h-[500px] lg:h-[350px] xl:h-[300px] border-t-[30px] z-20 border-complementary-500 absolute bottom-0 rounded-t-[60px]" />
        <div className="w-full h-[600px] md:h-[500px] lg:h-[350px] xl:h-[300px] bg-dark absolute bottom-0 rounded-t-[60px] text-white">
          <div className="mx-6 pt-10 flex flex-col ">
            {/* Contenedor de LOGO - Roadmap - About - Contact - FollowUs */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {/* LOGO + ESLOGAN */}
              <div className="flex flex-col text-center items-center justify-center">
                <Image
                  src={"/CookMealLogo.png"}
                  alt={"Logo"}
                  height={50}
                  width={100}
                  className="mx-auto"
                />
                <p>
                  Discover CookMeal, the revolutionary app that will help you cook delicious meals
                  in just a few clicks! 🍳📱
                </p>
              </div>
              {/* ROADMAP */}
              <div className="flex flex-col z-40">
                <h4 className="font-bold text-lg">Roadmap</h4>
                <Link href={"/"}>Home</Link>
                <Link href={"/recipesfav"}>Favorites</Link>
                <Link href={"/generator"}>Generate Recipe</Link>
                <Link href={"/search"}>Search Recipe</Link>
                <Link href={"/about"}>About Us</Link>
              </div>
              {/* ABOUT */}
              <div className="flex flex-col">
                <h4 className="font-bold text-lg">About Us</h4>
                <p>
                  Welcome to Cook Meal! We are a passionate team of developers, chefs, and foodies
                  who believe in the magic of technology to enhance our culinary experiences.
                </p>
              </div>
              {/* CONTACT */}
              <div className="flex flex-col">
                <h4 className="font-bold text-lg">Contact</h4>
                <p>
                  Thank you for your interest in contacting us! We are happy to help you with
                  whatever you need.
                </p>
              </div>
              {/* REDES SOCIALES */}
              <div className="self-center z-40">
                <span className="capitalize font-bold text-lg">Follow Us:</span>
                <div className="flex flex-row gap-2 cursor-pointer">
                  <Link href={"#!"}>
                    <IconYoutube />
                  </Link>
                  <Link href={"#!"}>
                    <IconFacebook />
                  </Link>
                  <Link href={"#!"}>
                    <IconInstagram />
                  </Link>
                  <Link href={"#!"}>
                    <IconLinkedin />
                  </Link>
                  <Link href={"#!"}>
                    <IconTwitter />
                  </Link>
                </div>
              </div>
            </div>
            {/* COPYRIGTH */}
            <div className="mx-auto mt-10 bg-dark">
              <span className="text-center text-xs">Copyright © 2023 IA CookMeal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
