import { FunctionComponent } from "react";
import { Recipe } from "../../../shared/types/Recipe.ts";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div>
      <div>
        <p>picture placeholder</p>
      </div>
      <div>
        <h2>{recipe.title}</h2>
        <h5>{recipe.allergens}</h5>
        <div>
          <List>
            {recipe.cookingSteps.map((value, index) => (
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemIcon>{index + 1}.</ListItemIcon>
                  <ListItemText>{value}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}
