import { styled } from "@mui/material";

export const StyledFormContainer = styled("div")`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing(4)};
`;
