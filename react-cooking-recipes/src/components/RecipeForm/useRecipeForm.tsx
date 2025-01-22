import { useState } from "react";

export const useRecipeForm = (recipe) => {
  const [recipeTitle, setRecipeTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [cookingSteps, setCookingSteps] = useState(recipe.cookingSteps);
  const [photoURL, setPhotoURL] = useState(recipe.photoURL);
  const onClickAddIngredient = () => {
    const lastStep = ingredients[ingredients.length - 1];
    const newIngredient = {
      id: lastStep ? lastStep.id + 1 : 1,
      amount: 0,
      unit: "",
      name: "",
      isAllergen: "",
    };
    setIngredients([...ingredients, newIngredient]);
  };

  const onClickDeleteIngredient = (id) => {
    const updatedIngredients = ingredients
      .filter((ingredient) => ingredient.id !== id)
      .map((ingredient, index) => ({
        ...ingredient,
        id: index + 1,
      }));
    setIngredients(updatedIngredients);
  };

  const onClickAddStep = () => {
    const lastStep = cookingSteps[cookingSteps.length - 1];
    const newStep = {
      id: lastStep ? lastStep.id + 1 : 1,
      value: "",
    };
    setCookingSteps([...cookingSteps, newStep]);
  };

  const onClickDeleteStep = (id) => {
    const updatedSteps = cookingSteps
      .filter((step) => step.id !== id)
      .map((step, index) => ({
        ...step,
        id: index + 1,
      }));
    setCookingSteps(updatedSteps);
  };

  const handleChangeIngredient = (id: number, field: string, value: any) => {
    setIngredients((prev) =>
      prev.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, [field]: value } : ingredient,
      ),
    );
  };

  const handleChangeStep = (id: number, value: string) => {
    setCookingSteps((prev) =>
      prev.map((step) => (step.id === id ? { ...step, step: value } : step)),
    );
  };

  return {
    recipeTitle,
    setRecipeTitle,
    ingredients,
    setIngredients,
    cookingSteps,
    setCookingSteps,
    photoURL,
    setPhotoURL,
    onClickAddIngredient,
    onClickDeleteIngredient,
    onClickAddStep,
    onClickDeleteStep,
    handleChangeIngredient,
    handleChangeStep,
  };
};
