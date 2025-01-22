import { styled } from "@mui/material";

export const StyledImageContainer = styled("div")`
  width: 100%;
  height: 600px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${({ theme }) => theme.spacing(4)}
    ${({ theme }) => theme.spacing(4)} 0 0;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    height: 500px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 400px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 300px;
  }
`;
export const StyledRecipeCardContainer = styled("div")`
  max-width: 768px;
  width: 100%;
  height: 100%;
  margin: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(5)};
  border: solid ${({ theme }) => theme.spacing(1)}
    ${({ theme }) => theme.palette.secondary.dark};
  background-color: ${({ theme }) => theme.palette.secondary.light};
`;
export const StyledInfoContainer = styled("div")`
  padding: ${({ theme }) => theme.spacing(1)};
  display: flex;
  flex-direction: column;
`;

export const StyledIngredientRow = styled("div")`
  display: flex;
  flex-direction: row;
  font-family: "Poppins", sans-serif;
`;

export const StyledIngredientIndexDiv = styled("div")`
  padding-right: ${({ theme }) => theme.spacing(3)};
`;

export const StyledIngredientUnitDiv = styled("div")`
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const StyledIngredientsContainer = styled("div")`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.spacing(3)};
  border: solid 2px ${({ theme }) => theme.palette.secondary.dark};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.secondary.lightest};
`;

export const StyledTitleEditButtonContainer = styled("div")`
  display: flex;
  flex-direction: row;
`;
