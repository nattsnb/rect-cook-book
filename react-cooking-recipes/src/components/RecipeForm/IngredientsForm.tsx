import { Button, IconButton, MenuItem, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Ingredient } from "../../../shared/types/Ingredient.ts";
import {
  StyledBigTextField,
  StyledFormSectionButton,
  StyledMediumTextField,
  StyledRowOfTextFields,
  StyledSmallTextField,
  StyledSplitIntoRowsContainer,
} from "./RecipesForm.styled.tsx";

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
        <StyledSplitIntoRowsContainer key={ingredient.id}>
          <div>
            <StyledSmallTextField id="id" value={ingredient.id} disabled />
            <StyledSmallTextField
              id="amount"
              value={ingredient.amount || ""}
              placeholder="amount..."
              type="number"
              onChange={(e) =>
                onChangeIngredient(
                  ingredient.id,
                  "amount",
                  Number(e.target.value),
                )
              }
            />
            <StyledSmallTextField
              select
              id="unit"
              value={ingredient.unit}
              label="unit"
              onChange={(e) =>
                onChangeIngredient(ingredient.id, "unit", e.target.value)
              }
            >
              {unitsArray.map((unit) => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </StyledSmallTextField>
          </div>
          <StyledBigTextField
            id="name"
            value={ingredient.name}
            placeholder="name"
            onChange={(e) =>
              onChangeIngredient(ingredient.id, "name", e.target.value)
            }
          />
          <StyledRowOfTextFields>
            <StyledMediumTextField
              select
              id="isAllergen"
              label="Is allergen?"
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
            </StyledMediumTextField>
            <IconButton onClick={() => onClickDeleteIngredient(ingredient.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </StyledRowOfTextFields>
        </StyledSplitIntoRowsContainer>
      ))}
      <StyledFormSectionButton
        variant="contained"
        onClick={onClickAddIngredient}
      >
        Add ingredient
      </StyledFormSectionButton>
    </div>
  );
}
