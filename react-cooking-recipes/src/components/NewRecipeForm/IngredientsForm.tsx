import { Button, IconButton, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const initialIngredients = [
  {
    id: 1,
    amount: null,
    unit: "",
    name: "",
    isAllergen: "",
  },
];

const unitsArray = ["ml", "l", "g", "kg", "tsp", "tbsp", "cup"];

export function IngredientsForm() {
  const [ingredients, setIngredients] = useState(initialIngredients);

  const onClickAddIngredient = () => {
    const lastStep = ingredients[ingredients.length - 1];
    const newIngredient = {
      id: lastStep ? lastStep.id + 1 : 1,
      amount: null,
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

  return (
    <div>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <TextField id="id" defaultValue={ingredient.id} disabled></TextField>
          <TextField
            id="amount"
            label="amount"
            defaultValue={ingredient.amount}
            placeholder="Amount..."
          ></TextField>
          <TextField
            select
            id="unit"
            label="unit"
            defaultValue={ingredient.unit}
            placeholder="Choose..."
          >
            {unitsArray.map((unit) => (
              <MenuItem key={unit} value={unit}>
                {unit}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="name"
            label="name"
            defaultValue={ingredient.name}
            placeholder="Name..."
          ></TextField>
          <TextField
            select
            id="isAllergen"
            label="is allergen?"
            defaultValue={ingredient.isAllergen}
            placeholder="Choose..."
          >
            <MenuItem key={"yes"} value={true}>
              yes
            </MenuItem>
            <MenuItem key={"no"} value={false}>
              no
            </MenuItem>
          </TextField>
          <IconButton
            onClick={() => {
              onClickDeleteIngredient(ingredient.id);
            }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      ))}
      <Button variant="outlined" onClick={onClickAddIngredient}>
        Add ingredient
      </Button>
    </div>
  );
}
