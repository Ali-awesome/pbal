import React from "react";
import { motion } from "framer-motion";
import FlexButtonGroup from "@/app/components/FlexButtonGroup";

const Services: React.FC = () => {
    const buttonOptions = [
        {
        label: "Fisheries",
        },
        {
        label: "Hatcheries",
        },
    ];
  return (
    <section>
      <FlexButtonGroup options={buttonOptions} />
    </section>
  );
};

export default Services;
