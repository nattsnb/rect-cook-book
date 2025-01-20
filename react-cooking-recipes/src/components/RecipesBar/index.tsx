import {
  StyledButtonContainer,
  StyledListContainer,
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
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Recipe } from "../../shared/types/Recipe.ts";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import theme from "../../shared/utils/theme.ts";
import CloseIcon from "@mui/icons-material/Close";

interface RecipesBarProps {
  recipes: Recipe[];
  handleSetActiveRecipe: (Recipe) => void;
  deleteRecipe: (string) => void;
  deleteAllRecipes: () => void;
  handleAddNewRecipe: () => void;
  toggleFiltersDrawer?: (isOpen: boolean) => void;
}

export function RecipesBar({
  recipes,
  handleSetActiveRecipe,
  deleteRecipe,
  deleteAllRecipes,
  handleAddNewRecipe,
  toggleFiltersDrawer,
}: RecipesBarProps) {
  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledRecipesBarContainer>
      <StyledRecipesBarTittle>
        {isViewportSmallerThanMd ? (
          <div>
            <Typography variant="recipesBarTittle">My recipes</Typography>
            <IconButton onClick={toggleFiltersDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        ) : (
          <Typography variant="recipesBarTittle">My recipes</Typography>
        )}
      </StyledRecipesBarTittle>
      <Divider />
      <StyledListContainer>
        <List>
          <StyledButtonContainer>
            <Button variant="contained" onClick={handleAddNewRecipe}>
              <AddIcon />
              Add recipe
            </Button>
          </StyledButtonContainer>
          <StyledListContainer>
            {recipes &&
              recipes.map((value, index) => (
                <ListItem
                  key={index}
                  onClick={() => handleSetActiveRecipe(value)}
                >
                  <ListItemButton>
                    <ListItemText>{value.title}</ListItemText>
                  </ListItemButton>
                  <IconButton onClick={() => deleteRecipe(value.title)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </ListItem>
              ))}
          </StyledListContainer>
          <StyledButtonContainer>
            <Button variant="contained" onClick={deleteAllRecipes}>
              <DeleteOutlineIcon />
              Delete all recipes
            </Button>
          </StyledButtonContainer>
        </List>
      </StyledListContainer>
    </StyledRecipesBarContainer>
  );
}
