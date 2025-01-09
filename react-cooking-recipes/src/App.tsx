import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Recipe} from "../shared/types/Recipe.ts";
import {Ingredient} from "../shared/types/Ingredient.ts";
import {RecipeCard} from "./RecipeCard";

function App() {
  const recipe: Recipe = {
    title: "Food",
    ingredients: [{
        amount: 4,
        unit: "each",
        name: "egg",
      },
      {
        amount: 0.5,
        unit: "kg",
        name: "flour",
      },
    ],
    allergens: ["eggs", "soy", "fish"],
    cookingSteps: ["preheat", "stir", "fry"],
    photoURL: "https://fastly.picsum.photos/id/1011/282/186.jpg?hmac=dgCZ5K249wOE2qT0zwwFUoaw6CA_th-Un98hFQdhWwg",
  }

  return (
   <RecipeCard recipe={recipe}/>
  )
}

export default App
