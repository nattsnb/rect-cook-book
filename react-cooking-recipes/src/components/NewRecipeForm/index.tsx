import { useForm, SubmitHandler } from "react-hook-form";
import { StyledFormContainer } from "./NewRecipesForm.styled.tsx";
import { StyledRecipeCardContainer } from "../RecipeCard/RecipeCard.styled.tsx";
import { Divider, Typography } from "@mui/material";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export function NewRecipeForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <StyledRecipeCardContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFormContainer>
          <Typography variant="formSection">Recipe tittle</Typography>
          <Divider variant="customDashed" />
          <input {...register("recipeTittle", { required: true })} />
          {errors.recipeTittle && (
            <span>
              <Typography variant="formErrorMessage">
                This field is required
              </Typography>
            </span>
          )}

          <Typography variant="formSection">Ingredients</Typography>
          <Divider variant="customDashed" />
          <input {...register("ingredients", { required: true })} />
          {errors.ingredients && (
            <span>
              <Typography variant="formErrorMessage">
                This field is required
              </Typography>
            </span>
          )}

          <Typography variant="formSection">Cooking steps</Typography>
          <Divider variant="customDashed" />
          <input {...register("cookingSteps", { required: true })} />
          {errors.cookingSteps && (
            <span>
              <Typography variant="formErrorMessage">
                This field is required
              </Typography>
            </span>
          )}

          <Typography variant="formSection">Photo URL</Typography>
          <Divider variant="customDashed" />
          <input {...register("photoURL", { required: true })} />
          {errors.photoURL && (
            <span>
              <Typography variant="formErrorMessage">
                This field is required
              </Typography>
            </span>
          )}
        </StyledFormContainer>
        <input type="submit" />
      </form>
    </StyledRecipeCardContainer>
  );
}
