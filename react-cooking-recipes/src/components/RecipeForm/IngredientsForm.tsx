import { Button, IconButton, MenuItem, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Ingredient } from "../../../shared/types/Ingredient.ts";

interface IngredientsFormProps {
  ingredients: Array<Ingredient>;
  onClickAddIngredient: () => void;
  onClickDeleteIngredient: (id: number) => void;
  onChangeIngredient: (id: number, field: string, value: any) => void;
}

const unitsArray = ["ml", "l", "g", "kg", "tsp", "tbsp", "cup", "each"];

export function IngredientsForm({
  ingredients,
  onClickAddIngredient,
  onClickDeleteIngredient,
  onChangeIngredient,
}: IngredientsFormProps) {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <TextField id="id" value={ingredient.id} disabled />
          <TextField
            id="amount"
            label="amount"
            value={ingredient.amount || ""}
            placeholder="Amount..."
            type="number"
            onChange={(e) =>
              onChangeIngredient(
                ingredient.id,
                "amount",
                Number(e.target.value),
              )
            }
          />
          <TextField
            select
            id="unit"
            label="unit"
            value={ingredient.unit}
            placeholder="Choose..."
            onChange={(e) =>
              onChangeIngredient(ingredient.id, "unit", e.target.value)
            }
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
            value={ingredient.name}
            placeholder="Name..."
            onChange={(e) =>
              onChangeIngredient(ingredient.id, "name", e.target.value)
            }
          />
          <TextField
            select
            id="isAllergen"
            label="is allergen?"
            value={
              ingredient.isAllergen !== null
                ? ingredient.isAllergen.toString()
                : ""
            }
            onChange={(e) =>
              onChangeIngredient(
                ingredient.id,
                "isAllergen",
                e.target.value === "true"
                  ? true
                  : e.target.value === "false"
                    ? false
                    : null,
              )
            }
          >
            <MenuItem value="">Select an option</MenuItem>
            <MenuItem key={"yes"} value={"true"}>
              Yes
            </MenuItem>
            <MenuItem key={"no"} value={"false"}>
              No
            </MenuItem>
          </TextField>
          <IconButton onClick={() => onClickDeleteIngredient(ingredient.id)}>
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
