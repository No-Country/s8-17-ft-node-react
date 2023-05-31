import { type FC } from "react";
import Image from "next/image";

import { AiFillBehanceCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Caro from "public/about/caro.png";
import Daniel from "public/about/dani.png";
import Eric from "public/about/eric.png";
import Franco from "public/about/franco.png";
import Juli from "public/about/juli.png";
import Max from "public/about/max.png";
import Maxi from "public/about/maxi.png";
import Yon from "public/about/yon.png";

const team = [
  {
    id: 1,
    name: "Carolina Pineda",
    description:
      "UX/UI Designer, listener and constantly learner. Improve the user experience with intuitive and attractive designs. Creativity allows you innovative solutions. Listen to ideas and learn from them. Always looking for up-to-date knowledge and trends.",
    image: Caro,
    behance: "https://www.behance.net/caarolinadesigner",
    github: "https://github.com/carolina-uidesigner"
  },
  {
    id: 2,
    name: "Jonathan Daniel Arce",
    description:
      "Creative and proactive backend developer, with outstanding skills in contributing innovative ideas. Expert in the layout of robust and efficient structures. Able to provide fast and effective solutions to complex problems. Committed to excellence in every line of code and delivering outstanding results. Always willing to collaborate in the continuous improvement of development and boost the efficiency of the team.",
    image: Daniel,
    linkedin: "https://www.linkedin.com/in/jonathandanielarce",
    github: "https://github.com/ArceDaniel"
  },
  {
    id: 3,
    name: "Eric Denis Laura Isnado",
    description:
      "Responsible frontend developer, expert in offering effective solutions and adapting quickly to changes. Passionate about creating intuitive and attractive interfaces. Always willing to contribute innovative ideas and collaborate in the continuous improvement of development. Committed to delivering high quality projects and meeting deadlines.",
    image: Eric,
    linkedin: "https://www.linkedin.com/in/eric-denis-laura-isnado/",
    github: "https://www.github.com/recover1988"
  },
  {
    id: 4,
    name: "Franco Corniglione",
    description:
      "Responsible backend developer, always looking for constant learning and growth. Passionate about technology and committed to excellence in every line of code. Willing to contribute innovative ideas and effective solutions to development challenges.",
    image: Franco,
    linkedin: "https://www.linkedin.com/in/franco-corniglione/",
    github: "https://github.com/Francormin"
  },
  {
    id: 5,
    name: "Julio Humere",
    description:
      "Leading frontend developer, committed to excellence and the constant search for creative solutions. Passionate about design and usability, always at the forefront of the latest technological trends. Willing to lead teams and projects, contributing innovative ideas and fostering a collaborative environment.",
    image: Juli,
    linkedin: "https://www.linkedin.com/in/juli-humere/",
    github: "https://github.com/Julihumere"
  },
  {
    id: 6,
    name: "Max Cereceda Carbajal",
    description:
      "Frontend developer with continuous learning skills, expert in finding effective solutions and excellent communication skills. Passionate about web development, always up to date with the latest technologies and trends. Willing to take on new challenges and contribute innovative ideas to improve the user experience.",
    image: Max,
    linkedin: "https://www.linkedin.com/in/maxcereceda/",
    github: "https://github.com/cereceda1991"
  },
  {
    id: 7,
    name: "Maximiliano Arbelais",
    description:
      "Frontend developer with organizational skills, accelerated learning and the ability to offer quick solutions. Passionate about creating attractive and functional interfaces. Always willing to take on new challenges and learn self-taught. Able to analyze complex problems and find efficient solutions in record time.",
    image: Maxi,
    linkedin: "https://www.linkedin.com/in/arbelaism/",
    github: "https://github.com/arbelais"
  },
  {
    id: 8,
    name: "Yon Anderson Roa Manjarrez",
    description:
      "Backend developer with outstanding skills in adaptability, effective communication and idea sharing. Expert in the design and development of robust solutions. Able to quickly adapt to technological changes and project needs. Open and clear communicator, capable of transmitting technical concepts in an understandable way. Always willing to collaborate with the team and share ideas to improve development and achieve outstanding results.",
    image: Yon,
    linkedin: "https://www.linkedin.com/in/yompa/",
    github: "https://github.com/yonroa/"
  }
];

const About: FC = () => {
  return (
    <div className="w-full flex justify-center p-6 lg:p-14 font-title">
      <div className="w-5/6">
        <h1 className="mb-4 text-2xl lg:text-4xl xl:text-5xl font-extrabold text-secondary-500">
          About Us
        </h1>
        <div className="lg:text-lg text-justify text-secondary-500 space-y-4">
          <p className="font-semibold text-xl">
            We are a team of developers
            <a
              href="https://www.nocountry.tech/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary-400 hover:text-primary-600 transition-colors"
            >
              &nbsp;No Country&nbsp;
            </a>
            project where we have to develop an application in group fulfilling different objectives
            proposed by the bootcamp to improve our skills as developers.
          </p>
          <section className="font-semibold text-xl space-y-4">
            <p>
              Welcome to Cook Meal! We are a passionate team of developers, chefs, and foodies who
              believe in the magic of technology to enhance our culinary experiences.
            </p>

            <p>
              Our main goal is to make cooking more accessible, fun and creative for everyone. With
              the help of Artificial Intelligence, we have created an application that provides you
              with personalized recipes adapted to your preferences, helping you to explore new
              flavors and discover delicious dishes.
            </p>
            <p>
              At CookMeal, we focus on making the meal planning process easy and making the most of
              the ingredients you have on hand. It doesn&apos;t matter if you are an experienced chef or
              a cooking beginner, our app will guide you every step of the way, from selecting
              recipes to preparing delicious dishes.
            </p>
            <p>
              We are proud to offer you a wide variety of recipes, from healthy and balanced options
              to indulgent and tempting. Plus, you can customize recommendations based on your
              dietary preferences, making sure you find dishes that fit your lifestyle.
            </p>
            <p>
              We believe in the power of technology to enrich our lives, but we also value the
              importance of tradition and the human connection around food. CookMeal combines the
              best of both worlds, giving you a modern culinary experience without losing the
              personal touch and passion that comes through cooking.
            </p>
            <p>
              We are excited to share this culinary adventure with you. Join our community of
              foodies, visit CookMeal and discover how AI can inspire you to create amazing and
              flavorful dishes. See you in the kitchen! 🍽️🔥
            </p>
          </section>
        </div>
        <h1 className="my-6 text-2xl font-extrabold lg:text-4xl xl:text-5xl text-secondary-500">
          Our team
        </h1>
        <div className="grid auto-cols-fr lg:grid-cols-2 gap-5 text-primary-600">
          {team.map(user => {
            return (
              <div
                className="flex flex-col border-[10px] border-primary-500 xl:flex-row justify-content-center items-center gap-5 py-4 rounded-3xl shadow-md hover:shadow-xl transition-all xl:p-4"
                key={user.id}
              >
                <div className="w-2/5">
                  <Image
                    src={user.image}
                    alt="not found"
                    className="rounded-3xl h-max-[400px] w-max-[300px] object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 justify-between w-full px-2 xl:w-3/5">
                  <h2 className="text-3xl font-semibold">{user.name}</h2>
                  <p className="text-lg">{user.description}</p>
                  <div className="flex justify-end items-center gap-2 my-2">
                    {user.github ? (
                      <a className="text-5xl" href={user.github}>
                        <AiFillGithub className="transition-all hover:text-secondary-600" />
                      </a>
                    ) : (
                      <a className="text-5xl" href={user.behance}>
                        <AiFillBehanceCircle className="transition-all hover:text-secondary-600" />
                      </a>
                    )}
                    <a className="text-5xl" href={user.linkedin}>
                      <AiFillLinkedin className="transition-all hover:text-secondary-600" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
