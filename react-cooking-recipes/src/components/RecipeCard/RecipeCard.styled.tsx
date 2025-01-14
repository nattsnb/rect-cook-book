import { styled } from "@mui/material";

export const StyledImageContainer = styled("div")`
  width: 100%;
  height: 600px;
  background-image: url("https://picsum.photos/900/600");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${({ theme }) => theme.spacing(4)}
    ${({ theme }) => theme.spacing(4)} 0 0;
`;
export const StyledRecipeContainer = styled("div")`
  width: max-width;
  height: 100%;
  margin: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(5)};
  border: solid ${({ theme }) => theme.spacing(1)}
    ${({ theme }) => theme.palette.secondary.dark};
`;
