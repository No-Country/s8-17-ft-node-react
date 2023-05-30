// "use client";

// import Image from "next/image";
// import { FC, useState } from "react";
// import { BsStar, BsStarFill } from "react-icons/bs";
// import { IRecipe } from "@/types";
// import { useRecipes } from "@/hooks/useRecipes";
// import Link from "next/link";
// import toast, { Toaster } from "react-hot-toast";

// interface ShowRecipeProps {
//   recipe: IRecipe;
// }

// const ShowRecipe: FC<ShowRecipeProps> = ({ recipe }) => {
//   const { addFavoriteMutation } = useRecipes();

//   const [isIconActive, setIsIconActive] = useState(false);
//   const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

//   const toggleFavorite = () => {
//     if (isAddedToFavorites) {
//       toast.success("Item has already been added to your favorites");
//     } else {
//       setIsIconActive(!isIconActive);
//       addFavoriteMutation.mutate(recipe.id);
//       setIsAddedToFavorites(true);
//       toast.success("Added to favorites");
//     }
//   };

//   return (
//     <section className="relative rounded-lg shadow-custom overflow-hidden">
//       <Link href={`/recipe/${recipe.id}`}>
//         <div>
//           <Image
//             className="w-full"
//             src={recipe.images[0]}
//             alt={recipe.name}
//             width={270}
//             height={135}
//           />
//           <h1 className="px-4 pt-4">
//             <b>{recipe.name}</b>
//           </h1>
//           <p className="px-4 py-4 text-justify">{recipe.description}</p>
//         </div>
//       </Link>
//       {isIconActive ? (
//         <BsStarFill
//           className="text-[2rem] absolute top-4 right-4 text-primary-500 cursor-pointer"
//           onClick={toggleFavorite}
//         />
//       ) : (
//         <BsStar
//           className="text-[2rem] absolute top-4 right-4 text-primary-500 cursor-pointer"
//           onClick={toggleFavorite}
//         />
//       )}
//       <Toaster position="top-center" />
//     </section>
//   );
// };

// export default ShowRecipe;
"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { IRecipe } from "@/types";
import { useRecipes } from "@/hooks/useRecipes";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

interface ShowRecipeProps {
  recipe: IRecipe;
}

const ShowRecipe: FC<ShowRecipeProps> = ({ recipe }) => {
  const { addFavoriteMutation } = useRecipes();

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      toast.success("Item has already been added to your favorites");
    } else {
      addFavoriteMutation.mutate(recipe.id);
      setIsFavorite(true);
      toast.success("Added to favorites");
    }
  };

  return (
    <section className="relative rounded-lg shadow-custom overflow-hidden">
      <Link href={`/recipe/${recipe.id}`}>
        <div>
          <Image
            className="w-full"
            src={recipe.images[0]}
            alt={recipe.name}
            width={270}
            height={135}
          />
          <h1 className="px-4 pt-4">
            <b>{recipe.name}</b>
          </h1>
          <p className="px-4 py-4 text-justify">{recipe.description}</p>
        </div>
      </Link>
      <div
        className="text-[2rem] absolute top-4 right-4 text-primary-500 cursor-pointer"
        onClick={toggleFavorite}
      >
        {isFavorite ? <BsStarFill /> : <BsStar />}
      </div>
      <Toaster position="top-center" />
    </section>
  );
};

export default ShowRecipe;
