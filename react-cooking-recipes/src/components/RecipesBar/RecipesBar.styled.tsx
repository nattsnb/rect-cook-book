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
