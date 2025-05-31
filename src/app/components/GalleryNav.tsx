"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function FlexButtonGroup() {
  return (
    <ButtonGroup
      aria-label="flex button group"
      sx={{
        p: 2,
        maxWidth: "100%",
        overflow: "auto",
        resize: "horizontal",
        color: "#1a202c",
        varient:"solid",
      }}
      fullWidth
    >
      <Button className=" text-white" sx={{ flex: 1 }}>
        Completed
      </Button>
      <Button className="bg-gray-900 text-white" sx={{ flex: 1 }}>
        Ongoing
      </Button>
      <Button className="bg-gray-900 text-white" sx={{ flex: 1 }}>
        Upcoming
      </Button>
    </ButtonGroup>
  );
}
