import { Diet } from "../models/diet.model";

const dietsToSeed: Array<Diet> = [
  {
    name: "gluten-free",
    description:
      "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)."
  },
  {
    name: "ketogenic",
    description:
      "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates."
  },
  {
    name: "vegetarian",
    description: "No ingredients may contain meat or meat by-products, such as bones or gelatin."
  },
  {
    id: "bgkag1t69a315n0ogdlbvenlb",
    name: "vegan",
    description:
      "No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey."
  },
  {
    name: "pescetarian",
    description:
      "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not."
  },
  {
    name: "paleo",
    description:
      "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods."
  },
  {
    name: "whole30",
    description:
      "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites."
  },
  {
    name: "carnivore",
    description:
      "A restrictive diet that only includes meat, fish, and other animal foods like eggs and certain dairy products. It excludes all other foods, including fruits, vegetables, legumes, grains, nuts, and seeds."
  }
];

export default dietsToSeed;