import { StyledRecipeCardContainer } from "../RecipeCard/RecipeCard.styled.tsx";
import { Button, Divider, TextField, Typography } from "@mui/material";
import { CookingStepsForm } from "./CookingStepsForm.tsx";
import { IngredientsForm } from "./IngredientsForm.tsx";
import { Recipe } from "../../../shared/types/Recipe.ts";
import { useRecipeForm } from "./useRecipeForm.tsx";

interface RecipeFormProps {
  onSaveRecipe: (recipe: Recipe) => void;
  recipes: Recipe[];
  isEditModeOn: boolean;
  activeRecipe: Recipe | null;
}

const emptyRecipe: Recipe = {
  title: "Empty recipe",
  ingredients: [
    {
      id: 1,
      amount: null,
      unit: "",
      name: "",
      isAllergen: null,
    },
  ],
  cookingSteps: [
    { id: 1, step: "" },
    { id: 2, step: "" },
  ],
  photoURL: "",
};

export function RecipeForm({
  onSaveRecipe,
  recipes,
  isEditModeOn,
  activeRecipe,
}: RecipeFormProps) {
  const recipe = activeRecipe || emptyRecipe;

  const {
    recipeTitle,
    setRecipeTitle,
    ingredients,
    cookingSteps,
    photoURL,
    setPhotoURL,
    onClickAddIngredient,
    onClickDeleteIngredient,
    onClickAddStep,
    onClickDeleteStep,
    handleChangeIngredient,
    handleChangeStep,
  } = useRecipeForm(recipe);

  const createNewRecipe = (): Recipe => {
    return {
      title: recipeTitle,
      ingredients: ingredients,
      cookingSteps: cookingSteps,
      photoURL: photoURL,
    };
  };

  return (
    <StyledRecipeCardContainer>
      <div>
        <Typography variant="formSection">Recipe title</Typography>
        <Divider variant="customDashed" />
        <TextField
          id="title"
          value={recipeTitle}
          onChange={(event) => setRecipeTitle(event.target.value)}
        />
      </div>
      <div>
        <Typography variant="formSection">Ingredients</Typography>
        <Divider variant="customDashed" />
        <IngredientsForm
          ingredients={ingredients}
          onClickAddIngredient={onClickAddIngredient}
          onClickDeleteIngredient={onClickDeleteIngredient}
          onChangeIngredient={handleChangeIngredient}
        />
      </div>
      <div>
        <Typography variant="formSection">Cooking steps</Typography>
        <Divider variant="customDashed" />
        <CookingStepsForm
          cookingSteps={cookingSteps}
          onClickAddStep={onClickAddStep}
          onClickDeleteStep={onClickDeleteStep}
          onChangeStep={handleChangeStep}
        />
      </div>
      <div>
        <Typography variant="formSection">Photo URL</Typography>
        <Divider variant="customDashed" />
        <TextField
          id="photoURL"
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
        />
      </div>
      <Button
        onClick={() => {
          const newRecipe = createNewRecipe();
          onSaveRecipe(newRecipe);
        }}
        variant="contained"
        color="primary"
      >
        Save
      </Button>
    </StyledRecipeCardContainer>
  );
}
