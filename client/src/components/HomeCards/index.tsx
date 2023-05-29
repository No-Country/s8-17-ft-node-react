import React from "react";
import HomeCard from "../HomeCard";

const cards = [
  {
    title: "Personal and daily use",
    text: "Cook like an expert every day, you have countless quick and delicious recipes at your fingertips. Savor the convenience of homemade recipes perfect for your daily routine. Get inspired in the kitchen and surprise your loved ones with extraordinary everyday dishes Find the excitement of cooking uncomplicated incredible dishes from your everyday recipes",
    bgColor: "bg-[#49A3FA]"
  },
  {
    title: "For your health",
    text: "Discover healthy and delicious recipes to take care of your health with nutritious and balanced recipes, without sacrificing flavor. Healthy cooking at your fingertips: recipes that make you feel good inside and out, create a healthy lifestyle with culinary options that help you stay in shape",
    bgColor: "bg-[#69CC75]"
  },
  {
    title: "For chefs",
    text: "Challenge your culinary skills with professional-level recipes,Experience culinary excellence: gourmet recipes for the most demanding,Take your dishes to new heights with signature recipes inspired by top chefs,Master the art of cooking with chef-level recipes at your reach",
    bgColor: "bg-[#FFB631]"
  },
  {
    title: "Revolutionary",
    text: "Unlock creativity in the kitchen: recipes that inspire and innovate, explore a universe of flavors with our versatile and surprising recipes, your source of culinary inspiration: unique recipes to explore and experiment with, recipes that awaken your senses and challenge your taste buds",
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
