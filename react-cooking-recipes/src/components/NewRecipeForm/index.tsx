import { StyledRecipeCardContainer } from "../RecipeCard/RecipeCard.styled.tsx";
import { Divider, Typography } from "@mui/material";
import { CookingStepsForm } from "./CookingStepsForm.tsx";
import { IngredientsForm } from "./IngredientsForm.tsx";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export function NewRecipeForm() {
  return (
    <StyledRecipeCardContainer>
      <Typography variant="formSection">Ingredients</Typography>
      <Divider variant="customDashed" />
      <IngredientsForm />

      <Typography variant="formSection">Cooking steps</Typography>
      <Divider variant="customDashed" />
      <CookingStepsForm />
    </StyledRecipeCardContainer>
  );
}
