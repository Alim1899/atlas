import { useState } from "react";
import { Stack, FormControlLabel, Switch } from "@mui/material";
import { useMaps } from "../Map/MapContext/MapContext";
const SwitchButton = ({ label, mapChecked, switchId }) => {
  const { dispatch } = useMaps();
  const [checked, setChecked] = useState(mapChecked);
  const handleChecked = (e) => {
    setChecked(!checked);
    dispatch({ type: e.target.id, payload: !checked });
  };
  return (
    <div>
      <Stack direction="row">
        <FormControlLabel
          label={label}
          control={<Switch id={switchId} />}
          onChange={(e) => handleChecked(e)}
          checked={checked}
        ></FormControlLabel>
      </Stack>
    </div>
  );
};

export default SwitchButton;
