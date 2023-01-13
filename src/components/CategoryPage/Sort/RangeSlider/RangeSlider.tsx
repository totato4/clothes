import { Slider } from "@mui/material";
import React from "react";

type props = {
  updateRange: any;
  RangeVal: number[];
};

const RangeSlider: React.FC<props> = ({ updateRange, RangeVal }) => {
  return (
    <div className="w-full flex justify-center">
      <Slider
        value={RangeVal}
        onChange={updateRange}
        defaultValue={[0, 100000]}
        min={0}
        max={100000}
        valueLabelDisplay="auto"
        sx={{ width: 190, color: "#F8991D" }}
      />
    </div>
  );
};

export default RangeSlider;
