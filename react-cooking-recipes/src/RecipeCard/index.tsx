import {FunctionComponent} from "react";
import {Recipe} from "../../shared/types/Recipe.ts";

interface RecipeCardProps {
    recipe: Recipe
}

export function RecipeCard({recipe}: RecipeCardProps) {
    return (
        <div>
            <p>{recipe.title}</p>
        </div>
    )
}