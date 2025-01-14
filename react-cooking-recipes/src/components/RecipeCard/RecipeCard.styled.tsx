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
