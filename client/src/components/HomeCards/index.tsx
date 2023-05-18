import React from "react";
import HomeCard from "../HomeCard";

const cards = [
  {
    title: "Uso personal y cotidiano",
    text: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    bgColor: "bg-[#49A3FA]"
  },
  {
    title: "Para tu salud",
    text: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    bgColor: "bg-[#69CC75]"
  },
  {
    title: "Para chef",
    text: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    bgColor: "bg-[#FFB631]"
  },
  {
    title: "Lorem ipsum es el texto que se",
    text: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
    bgColor: "bg-[#EF47A0]"
  }
];

function HomeCards() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-14 items-center justify-center text-center">
      {cards && cards.map(card => <HomeCard key={card.title} {...card} />)}
    </div>
  );
}

export default HomeCards;
