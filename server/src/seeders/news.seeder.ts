import { News } from "../models/news.model";

const newsToSeed: Array<Partial<News>> = [
  {
    title: "Spice sales boom as home cooks get more adventurous",
    summary:
      "If you are a big fan of spicy food, then buying spices for your cooking is something you take for granted. Yet industry expert Donald Pratt says that demand for herbs and spices has actually risen strongly in recent years.",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/A359/production/_129171814_gettyimages-1178111197.jpg",
    urlLink: "https://www.bbc.com/news/business-65026330"
  },
  {
    title: "City of stars – Exploring Istanbul's award-winning gastronomy",
    summary:
      "Istanbul, the largest city in Türkiye, is well known all over the world for its history and culture. But we can say it’s a paradise for food lovers too. Tradition and the classical go hand in hand with innovation and creativity in Turkish cuisine.",
    image:
      "https://static.euronews.com/articles/stories/07/54/09/24/828x466_cmsv2_de045bd3-77a9-52ad-b219-663fba8b3371-7540924.jpg",
    urlLink:
      "https://www.euronews.com/travel/2023/05/22/city-of-stars-exploring-istanbuls-award-winning-gastronomy"
  },
  {
    title: "Cooking for just one or two? Consider these 5 tips and simple recipes",
    summary:
      "Are you an empty nester? Perhaps a college student who lives alone? Maybe you are a single parent of one or two children. No matter what particular situation you are in, creating healthy meals for one or two people may seem like a chore. With some help from Utah State University’s Food Science department, we’ve put together some helpful hints to make mealtime a little easier — and hopefully more friendly to your wallet.",
    image:
      "https://www.stgeorgeutah.com/wp-content/uploads/2021/10/frozen-food-freezer-GettyImages-1292299849.jpg",
    urlLink:
      "https://www.stgeorgeutah.com/news/archive/2021/11/01/prc-cbh-cooking-for-just-one-or-two-consider-these-5-tips-and-simple-recipes/"
  },
  {
    title: "Healthy lemony smoked salmon pasta that takes zero effort",
    summary:
      "This slimming recipe is an excellent example of how to streamline your cooking to make it work for you on a weeknight, especially on those days when you’re too harried to fuss over dinner.",
    image:
      "https://static.independent.co.uk/2023/05/07/17/onthefridge-42b8fae0-de1a-11ed-bb5e-c2cfb55d68f6.jpg",
    urlLink:
      "https://www.independent.co.uk/life-style/food-and-drink/pasta-recipe-lemon-smoked-salmon-peas-b2334442.html"
  },
  {
    title: "How to make the perfect pavlova, according to chemistry experts",
    summary:
      "The pavlova is a summer icon; just a few simple ingredients can be transformed into a beautifully flavoured and textured dessert. But despite its simplicity, there’s a surprising amount of chemistry involved in making a pavlova. Knowing what’s happening in each step is a sure-fire way to make yours a success.",
    image: "https://food-images.files.bbci.co.uk/food/recipes/pavlova_53849_16x9.jpg",
    urlLink:
      "https://theconversation.com/how-to-make-the-perfect-pavlova-according-to-chemistry-experts-196485"
  }
];

export default newsToSeed;
