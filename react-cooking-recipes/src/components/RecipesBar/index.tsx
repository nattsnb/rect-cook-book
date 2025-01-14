import {
  StyledRecipesBarContainer,
  StyledRecipesBarTittle,
} from "./RecipesBar.styled.tsx";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export function RecipesBar() {
  const myRecipes = null;
  return (
    <StyledRecipesBarContainer>
      <StyledRecipesBarTittle>
        <Typography variant="recipesBarTittle">My recipes</Typography>
      </StyledRecipesBarTittle>
      <Divider />
      <List>
        {myRecipes ? (
          myRecipes.map((value, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemText>{value}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <></>
        )}
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText>Add new recipe</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </StyledRecipesBarContainer>
  );
}
