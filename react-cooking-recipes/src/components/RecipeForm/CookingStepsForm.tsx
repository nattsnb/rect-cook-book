import { Button, IconButton, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Step } from "../../../shared/types/step.ts";

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
        <div key={step.id}>
          <TextField id="id" value={step.id} disabled />
          <TextField
            id="step"
            value={step.step}
            placeholder="Step..."
            onChange={(e) => onChangeStep(step.id, e.target.value)}
          />
          <IconButton onClick={() => onClickDeleteStep(step.id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      ))}
      <Button variant="outlined" onClick={onClickAddStep}>
        Add another step
      </Button>
    </div>
  );
}
