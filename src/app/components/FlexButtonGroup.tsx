"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

interface ButtonOption {
  label: string;
}

interface FlexButtonGroupProps {
  options: ButtonOption[];
}

const FlexButtonGroup: React.FC<FlexButtonGroupProps> = ({ options }) => {
  return (
    <ButtonGroup
      aria-label="flex button group"
      sx={{
        p: 2,
        maxWidth: "100%",
        overflow: "auto",
        resize: "horizontal",
      }}
      fullWidth
    >
      {options.map((option, index) => (
        <Button
          key={index}
          sx={{
            flex: 1,
            backgroundColor: "#111827",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#1f2937",
            },
          }}
        >
          {option.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default FlexButtonGroup;
