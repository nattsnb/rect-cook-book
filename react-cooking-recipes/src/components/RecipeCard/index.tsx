import { Recipe } from "../../../shared/types/Recipe.ts";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  StyledImageContainer,
  StyledInfoContainer,
  StyledRecipeCardContainer,
} from "./RecipeCard.styled.tsx";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const arrayOfAllergens = recipe.ingredients
    .filter((ingredient) => ingredient.isAllergen)
    .map((ingredient) => ingredient.name);
  return (
    <StyledRecipeCardContainer>
      <StyledImageContainer />
      <StyledInfoContainer>
        <Typography variant="recipeTittle">{recipe.title}</Typography>
        <Typography variant="allergens">{arrayOfAllergens}</Typography>
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
      </StyledInfoContainer>
    </StyledRecipeCardContainer>
  );
}
