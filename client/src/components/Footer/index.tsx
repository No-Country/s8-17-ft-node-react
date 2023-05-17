import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-[550px] md:pt-[400px] lg:pt-[200px]">
      <div className="max-w-7xl pt-24  relative mx-auto font-text md:text-sm text-xs lg:text-base">
        <div className="w-full h-[600px] md:h-[500px] lg:h-[250px] border-t-[15px] z-30 border-secondary-brightPink absolute bottom-0 rounded-t-[60px]" />
        <div className="w-full h-[600px] md:h-[500px] lg:h-[250px] border-t-[30px] z-20 border-complementary-crayola absolute bottom-0 rounded-t-[60px]" />
        <div className="w-full h-[600px] md:h-[500px] lg:h-[250px] bg-text-eerieBlack absolute bottom-0 rounded-t-[60px] text-white">
          <div className="mx-6 pt-10 flex flex-col ">
            {/* Contenedor de LOGO - Roadmap - About - Contact - FollowUs */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {/* LOGO + ESLOGAN */}
              <div className="flex flex-col text-center">
                <Image
                  src={"/CookMealLogo.png"}
                  alt={"Logo"}
                  height={50}
                  width={100}
                  className="mx-auto"
                />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt architecto ullam
                  exercitationem suscipit nisi.
                </p>
              </div>
              {/* ROADMAP */}
              <div className="flex flex-col">
                <h4 className="font-bold text-lg">Roadmap</h4>
                <Link href={"/"}>Home</Link>
                <Link href={"#"}>Favorites</Link>
                <Link href={"#"}>Generate Recipe</Link>
                <Link href={"#"}>About Us</Link>
              </div>
              {/* ABOUT */}
              <div className="flex flex-col">
                <h4 className="font-bold text-lg">About</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ea odit, rerum
                  repellat.
                </p>
              </div>
              {/* CONTACT */}
              <div className="flex flex-col">
                <h4 className="font-bold text-lg">Contact</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur unde
                  officia cu
                </p>
              </div>
              {/* REDES SOCIALES */}
              <div className="self-center">
                <span className="capitalize font-bold text-lg">follow us:</span>
                <div className="flex flex-row gap-2">
                  <Link href={"#!"}>
                    <FaYoutube size={"25px"} />
                  </Link>
                  <Link href={"#!"}>
                    <FaFacebook size={"25px"} />
                  </Link>
                  <Link href={"#!"}>
                    <FaInstagram size={"25px"} />
                  </Link>
                  <Link href={"#!"}>
                    <FaLinkedin size={"25px"} />
                  </Link>
                  <Link href={"#!"}>
                    <FaTwitter size={"25px"} />
                  </Link>
                </div>
              </div>
            </div>
            {/* COPYRIGTH */}
            <div className="mx-auto mt-10">
              <span className="text-center text-xs">Copyright © 2023 IA CookMeal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
