import { Button, styled, TextField } from "@mui/material";

export const StyledFormContainer = styled("div")`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing(4)};
`;

export const StyledFormSectionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(1)};
`;

export const StyledButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const StyledFormSectionButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.light};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const StyledSmallTextField = styled(TextField)`
  width: 90px;
`;

export const StyledMediumTextField = styled(TextField)`
  width: 160px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 220px;
  }
`;

export const StyledBigTextField = styled(TextField)`
  width: 200px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 270px;
  }
`;

export const StyledMaxTextField = styled(TextField)`
  width: auto;
  flex-grow: 2;
`;

export const StyledStepFormContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: stretch;
`;

export const StyledSplitIntoRowsContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  
  ${({ theme }) => theme.breakpoints.down("lg")} {
    flex-direction: column;
  }
`;
export const StyledRowOfTextFields = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
