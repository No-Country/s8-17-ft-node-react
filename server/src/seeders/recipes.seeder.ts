import { Difficulty } from "../utils/types";
import { RecipeDto } from "../dto/recipe/recipe.dto";

const recipesToSeed: Array<RecipeDto> = [
  {
    name: "Crispy Keto Potato Breakfast",
    description:
      "ThisDifficulty.EASYketogenic breakfast is a great way to jumpstart your day. With its crispy potatoes and rich flavors, it’s sure to leave you feeling satisfied!",
    ingredients: ["1 large potato", "2 tablespoons olive oil", "Salt and pepper, to taste"],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Cut the potato into thin slices.",
      "Place the slices on a baking sheet lined with parchment paper.",
      "Brush both sides of each slice with olive oil and sprinkle with salt and pepper.",
      "Bake for 15 to 20 minutes, until the potato slices are crispy and golden brown."
    ],
    time: {
      preparation: 10,
      cooking: 20,
      total: 30
    },
    portions: 2,
    categories: ["Breakfast"],
    diets: ["Ketogenic"],
    difficulty: Difficulty.EASY,
    nutritionalValues: {
      of100g: {
        calories: 97,
        fat: 4.3,
        carbohydrates: 16.3,
        protein: 2.2,
        cholesterol: 2.1
      },
      ofPortion: {
        calories: 98,
        fat: 4.4,
        carbohydrates: 16.5,
        protein: 2.3,
        cholesterol: 2.2
      }
    }
  },
  {
    name: "Classic Margherita Pizza",
    description:
      "Enjoy the timeless flavors of a classic Margherita pizza with this simple and delicious recipe. Perfect for pizza night!",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Extra-virgin olive oil",
      "Salt and pepper, to taste"
    ],
    steps: [
      "Preheat your oven to the highest temperature setting.",
      "Roll out the pizza dough into a round shape.",
      "Spread tomato sauce evenly over the dough, leaving a small border around the edges.",
      "Tear or slice the fresh mozzarella cheese and distribute it over the sauce.",
      "Season with salt and pepper, to taste.",
      "Bake in the preheated oven for about 10-12 minutes, or until the crust is golden brown and the cheese is bubbly and slightly browned.",
      "Remove from the oven and top with fresh basil leaves.",
      "Drizzle with extra-virgin olive oil before serving."
    ],
    time: {
      preparation: 15,
      cooking: 12,
      total: 27
    },
    portions: 4,
    categories: ["Dinner"],
    diets: [],
    difficulty: Difficulty.MEDIUM,
    nutritionalValues: {
      of100g: {
        calories: 168,
        fat: 6.2,
        carbohydrates: 19.8,
        protein: 8.5,
        cholesterol: 10.3
      },
      ofPortion: {
        calories: 336,
        fat: 12.4,
        carbohydrates: 39.6,
        protein: 17,
        cholesterol: 20.6
      }
    }
  },
  {
    name: "Creamy Garlic Parmesan Pasta",
    description:
      "Indulge in a creamy and flavorful pasta dish with this garlic Parmesan pasta recipe. It's simple to make and absolutely delicious!",
    ingredients: [
      "8 oz (225g) fettuccine pasta",
      "2 tablespoons butter",
      "4 cloves garlic, minced",
      "1 cup heavy cream",
      "1 cup grated Parmesan cheese",
      "Salt and pepper, to taste",
      "Chopped fresh parsley, for garnish"
    ],
    steps: [
      "Cook the fettuccine pasta according to package instructions until al dente. Drain and set aside.",
      "In a large skillet, melt the butter over medium heat. Add the minced garlic and sauté for about 1 minute, until fragrant.",
      "Pour in the heavy cream and bring to a simmer. Cook for 2-3 minutes, stirring occasionally.",
      "Add the grated Parmesan cheese and stir until melted and well combined. Season with salt and pepper to taste.",
      "Add the cooked fettuccine pasta to the skillet and toss until well coated in the creamy sauce.",
      "Remove from heat and garnish with chopped fresh parsley.",
      "Serve hot and enjoy!"
    ],
    time: {
      preparation: 10,
      cooking: 15,
      total: 25
    },
    portions: 2,
    categories: ["Dinner"],
    diets: [],
    difficulty: Difficulty.EASY,
    nutritionalValues: {
      of100g: {
        calories: 295,
        fat: 18.2,
        carbohydrates: 21.3,
        protein: 11.5,
        cholesterol: 48.3
      },
      ofPortion: {
        calories: 885,
        fat: 54.6,
        carbohydrates: 63.9,
        protein: 34.5,
        cholesterol: 144.9
      }
    }
  },
  {
    name: "Grilled Lemon Herb Chicken",
    description:
      "Fire up the grill and enjoy this flavorful grilled lemon herb chicken recipe. It's juicy, tender, and packed with delicious citrus and herb flavors!",
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "2 lemons, juiced and zested",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1 tablespoon fresh thyme leaves",
      "Salt and pepper, to taste"
    ],
    steps: [
      "In a small bowl, combine the lemon juice, lemon zest, olive oil, minced garlic, fresh thyme leaves, salt, and pepper.",
      "Place the chicken breasts in a shallow dish or zip-top bag. Pour the marinade over the chicken, making sure it's well coated. Marinate in the refrigerator for at least 30 minutes, or up to 4 hours.",
      "Preheat the grill to medium-high heat.",
      "Remove the chicken breasts from the marinade and shake off any excess. Discard the remaining marinade.",
      "Grill the chicken breasts for about 6-8 minutes per side, or until cooked through and juices run clear.",
      "Remove from the grill and let the chicken rest for a few minutes before serving.",
      "Slice and serve hot. Enjoy!"
    ],
    time: {
      preparation: 10,
      cooking: 15,
      total: 25
    },
    portions: 4,
    categories: ["Dinner"],
    diets: [],
    difficulty: Difficulty.EASY,
    nutritionalValues: {
      of100g: {
        calories: 137,
        fat: 3.9,
        carbohydrates: 0.7,
        protein: 24.7,
        cholesterol: 70
      },
      ofPortion: {
        calories: 274,
        fat: 7.8,
        carbohydrates: 1.4,
        protein: 49.4,
        cholesterol: 140
      }
    }
  },
  {
    name: "Berry Spinach Salad",
    description:
      "This refreshing and nutritious berry spinach salad is the perfect combination of sweet and savory flavors. It's packed with antioxidants and vitamins!",
    ingredients: [
      "4 cups baby spinach leaves",
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1/4 cup crumbled feta cheese",
      "1/4 cup sliced almonds",
      "2 tablespoons balsamic vinegar",
      "1 tablespoon extra-virgin olive oil",
      "1 teaspoon honey",
      "Salt and pepper, to taste"
    ],
    steps: [
      "In a large bowl, combine the baby spinach leaves, mixed berries, crumbled feta cheese, and sliced almonds.",
      "In a small bowl, whisk together the balsamic vinegar, olive oil, honey, salt, and pepper.",
      "Drizzle the dressing over the salad and toss gently to coat the ingredients.",
      "Serve immediately and enjoy!"
    ],
    time: {
      preparation: 10,
      cooking: 0,
      total: 10
    },
    portions: 2,
    categories: ['Dinner'],
    diets: ["Vegetarian"],
    difficulty: Difficulty.EASY,
    nutritionalValues: {
      of100g: {
        calories: 67,
        fat: 4.2,
        carbohydrates: 6.2,
        protein: 1.8,
        cholesterol: 4.6
      },
      ofPortion: {
        calories: 134,
        fat: 8.4,
        carbohydrates: 12.4,
        protein: 3.6,
        cholesterol: 9.2
      }
    }
  }
];

export default recipesToSeed;
