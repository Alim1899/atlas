import { useState } from "react";
import classes from "./ui.module.css";
import { Stack, FormControlLabel, Switch } from "@mui/material";
import { useMaps } from "../Map/MapContext/MapContext";
import Accordion from "./Accordion";
const SwitchButton = ({ label, mapChecked, switchId, type }) => {
  const { dispatch } = useMaps();
  const [checked, setChecked] = useState(mapChecked);
  const handleChecked = (e) => {
    setChecked(!checked);
    dispatch({ type: e.target.id, payload: !checked });
  };
  return (
    <div className={classes.box}>
      <Stack direction="row">
        <FormControlLabel
          label={label}
          control={<Switch id={switchId} />}
          onChange={(e) => handleChecked(e)}
          checked={checked}
        ></FormControlLabel>
        {checked && type === "polygon" && <Accordion />}
      </Stack>
    </div>
  );
};

export default SwitchButton;
