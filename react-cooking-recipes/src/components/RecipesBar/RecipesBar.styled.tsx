import { styled } from "@mui/material";

export const StyledRecipesBarContainer = styled("div")`
  width: 320px;
  height: 100%;
  margin: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(5)};
  border: solid ${({ theme }) => theme.spacing(1)}
    ${({ theme }) => theme.palette.secondary.dark};
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const StyledRecipesBarTittle = styled("div")`
  display: flex;
  justify-content: center;
`;

export const StyledButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

export const StyledListContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding: ${({ theme }) => theme.spacing(2)} 0;
  }
`;
