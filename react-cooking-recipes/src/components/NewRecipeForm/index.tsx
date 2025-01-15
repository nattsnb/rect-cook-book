import { StyledRecipeCardContainer } from "../RecipeCard/RecipeCard.styled.tsx";
import { Divider, Typography } from "@mui/material";
import { CookingStepsForm } from "./CookingStepsForm.tsx";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export function NewRecipeForm() {
  return (
    <StyledRecipeCardContainer>
      <Typography variant="formSection">Cooking steps</Typography>
      <Divider variant="customDashed" />
      <CookingStepsForm />
    </StyledRecipeCardContainer>
  );
}
