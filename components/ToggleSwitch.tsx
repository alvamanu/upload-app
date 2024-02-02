import * as React from "react";
import { Box } from "@mui/material";
import Switch, { switchClasses } from "@mui/joy/Switch";
import { Theme } from "@mui/joy";

interface ToggleSwitchProps {
  checked: boolean;
  handleChecked: (event: never) => void;
}

export default function ToggleSwitch(props: ToggleSwitchProps) {
  const { checked, handleChecked } = props;
  return (
    <Box style={{ marginRight: 10 }}>
      <Switch
        checked={checked}
        onChange={handleChecked}
        sx={(theme: Theme) => ({
          "--Switch-thumbSize": "16px",
          "--Switch-trackWidth": "35px",
          "--Switch-trackHeight": "20px",
          "--Switch-trackBackground": "#CBD5E0",
          "&:hover": {
            "--Switch-trackBackground": "#CBD5E0",
          },
          [`&.${switchClasses.checked}`]: {
            "--Switch-trackBackground": "#172D5B",
            "&:hover": {
              "--Switch-trackBackground": "#172D5B",
            },
            [`&.${switchClasses.disabled}`]: {
              "--Switch-trackBackground": "#3182ce",
            },
          },
          [`&.${switchClasses.disabled}`]: {
            "--Switch-trackBackground": "#CBD5E0",
            opacity: 0.4,
          },
          [theme.getColorSchemeSelector("dark")]: {
            "--Switch-trackBackground": "rgba(255, 255, 255, 0.24)",
            [`&.${switchClasses.checked}`]: {
              "--Switch-trackBackground": "#90cdf4",
              "&:hover": {
                "--Switch-trackBackground": "#90cdf4",
              },
              [`&.${switchClasses.disabled}`]: {
                "--Switch-trackBackground": "#3182ce",
              },
            },
          },
        })}
      />
    </Box>
  );
}
