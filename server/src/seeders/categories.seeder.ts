import { Category } from "../models/category.model";

const categoriesToSeed: Array<Partial<Category>> = [
  {
    name: "Breakfast",
    description:
      "Breakfast is often called 'the most important meal of the day', and for good reason. As the name suggests, breakfast breaks the overnight fasting period. It replenishes your supply of glucose to boost your energy levels and alertness, while also providing other essential nutrients required for good health."
  },
  {
    name: "Lunch",
    description:
      "Lunch is an important meal for everyone. It provides energy and nutrients to keep the body and brain working efficiently through the afternoon. A packed lunch made at home can be a healthy and delicious choice and gives you control over the foods and ingredients included."
  },
  {
    name: "Snack",
    description:
      "By definition, a snack is a small portion of food that is smaller than a regular meal, generally consumed between meals. Snacks are defined as smaller, less structured meal that are not eaten during regular meal times, such as breakfast (morning), lunch (midday), and dinner (evening)."
  },
  {
    name: "Dinner",
    description:
      "In modern use, dinner usually refer to the main meal of the day eaten in the evening. Formerly, dinner typically referred to a main meal eaten in the middle of the day."
  }
];

export default categoriesToSeed;
