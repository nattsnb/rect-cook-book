import {
  StyledRecipesBarContainer,
  StyledRecipesBarTittle,
} from "./RecipesBar.styled.tsx";
import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Recipe } from "../../../shared/types/Recipe.ts";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface RecipesBarProps {
  onSaveRecipe: (recipe: Recipe) => void;
  recipes: Recipe[];
  isEditModeOn: boolean;
  activeRecipe: Recipe | null;
  deleteAllRecipes: () => void;
}

export function RecipesBar({
  recipes,
  setActiveRecipe,
  deleteRecipe,
  deleteAllRecipes,
}: RecipesBarProps) {
  return (
    <StyledRecipesBarContainer>
      <StyledRecipesBarTittle>
        <Typography variant="recipesBarTittle">My recipes</Typography>
      </StyledRecipesBarTittle>
      <Divider />
      <List>
        <Button variant="contained">
          <AddIcon />
          Add recipe
        </Button>
        {recipes ? (
          recipes.map((value, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemText>{value.title}</ListItemText>
              </ListItemButton>
              <IconButton onClick={() => deleteRecipe(value.title)}>
                <DeleteOutlineIcon />
              </IconButton>
            </ListItem>
          ))
        ) : (
          <></>
        )}
        <Button variant="contained" onClick={deleteAllRecipes}>
          <DeleteOutlineIcon />
          Delete all recipes
        </Button>
      </List>
    </StyledRecipesBarContainer>
  );
}
