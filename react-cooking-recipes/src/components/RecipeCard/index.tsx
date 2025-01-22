import { Recipe } from "../../shared/types/Recipe.ts";
import {
  Button,
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
  StyledIngredientIndexDiv,
  StyledIngredientRow,
  StyledIngredientsContainer,
  StyledIngredientUnitDiv,
  StyledRecipeCardContainer,
  StyledTitleEditButtonContainer,
} from "./RecipeCard.styled.tsx";

interface RecipeCardProps {
  recipe: Recipe;
  setIsEditModeOn: (isOn: boolean) => void;
}

export function RecipeCard({ recipe, setIsEditModeOn }: RecipeCardProps) {
  const arrayOfAllergens = recipe.ingredients
    .filter((ingredient) => ingredient.isAllergen)
    .map((ingredient) => ingredient.name);
  return (
    <StyledRecipeCardContainer>
      <StyledImageContainer
        imageUrl={recipe.photoURL || "https://picsum.photos/900/600"}
      />
      <StyledInfoContainer>
        <StyledTitleEditButtonContainer>
          <Typography variant="recipeTittle">{recipe.title}</Typography>
          <Button variant="contained" onClick={() => setIsEditModeOn(true)}>
            Edit
          </Button>
        </StyledTitleEditButtonContainer>
        <Typography variant="allergens">{arrayOfAllergens}</Typography>
        <div>
          <StyledIngredientsContainer>
            <Typography variant="ingredientsTittle">Ingredients</Typography>
            <List>
              {recipe.ingredients.map((value, index) => (
                <ListItem key={index}>
                  <StyledIngredientRow>
                    <StyledIngredientIndexDiv>
                      {index + 1}.
                    </StyledIngredientIndexDiv>
                    <div>{value.amount}</div>
                    <StyledIngredientUnitDiv>
                      {value.unit}
                    </StyledIngredientUnitDiv>
                    <div>{value.name}</div>
                  </StyledIngredientRow>
                </ListItem>
              ))}
            </List>
          </StyledIngredientsContainer>
          <List>
            {recipe.cookingSteps.map((value, index) => (
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemIcon>{index + 1}.</ListItemIcon>
                  <ListItemText>{value.step}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </StyledInfoContainer>
    </StyledRecipeCardContainer>
  );
}
