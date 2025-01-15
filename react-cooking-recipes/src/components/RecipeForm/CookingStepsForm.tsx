import { Button, IconButton, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Step } from "../../../shared/types/step.ts";
import {
  StyledFormSectionButton,
  StyledMaxTextField,
  StyledMediumTextField,
  StyledSmallTextField,
  StyledStepFormContainer,
} from "./RecipesForm.styled.tsx";

interface CookingStepsFormProps {
  cookingSteps: Array<Step>;
  onClickAddStep: () => void;
  onClickDeleteStep: (id: number) => void;
  onChangeStep: (id: number, value: string) => void;
}

export function CookingStepsForm({
  cookingSteps,
  onClickAddStep,
  onClickDeleteStep,
  onChangeStep,
}: CookingStepsFormProps) {
  return (
    <div>
      {cookingSteps.map((step) => (
        <StyledStepFormContainer key={step.id}>
          <StyledSmallTextField id="id" value={step.id} disabled />
          <StyledMaxTextField
            id="step"
            value={step.step}
            placeholder="Step..."
            onChange={(e) => onChangeStep(step.id, e.target.value)}
          />
          <IconButton onClick={() => onClickDeleteStep(step.id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </StyledStepFormContainer>
      ))}
      <StyledFormSectionButton variant="contained" onClick={onClickAddStep}>
        Add another step
      </StyledFormSectionButton>
    </div>
  );
}
