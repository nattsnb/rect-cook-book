import { Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const initialCookingSteps = [
  { id: 1, value: "" },
  { id: 2, value: "" },
];

export function CookingStepsForm() {
  const [cookingSteps, setCookingSteps] = useState(initialCookingSteps);

  const onClickAddStep = () => {
    const lastStep = cookingSteps[cookingSteps.length - 1];
    const newStep = {
      id: lastStep ? lastStep.id + 1 : 1,
      value: "",
    };
    setCookingSteps([...cookingSteps, newStep]);
  };

  const onClickDeleteStep = (id) => {
    const updatedSteps = cookingSteps
      .filter((step) => step.id !== id)
      .map((step, index) => ({
        ...step,
        id: index + 1,
      }));
    setCookingSteps(updatedSteps);
  };

  return (
    <div>
      {cookingSteps.map((step) => (
        <div key={step.id}>
          <TextField id="number" defaultValue={step.id} disabled></TextField>
          <TextField
            id="value"
            defaultValue={step.value}
            placeholder="Step..."
          ></TextField>
          <IconButton
            onClick={() => {
              onClickDeleteStep(step.id);
            }}
          >
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
