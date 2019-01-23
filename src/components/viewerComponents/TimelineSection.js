import React from "react";
import Range from "./Range";

const TimelineSection = props => {
  return (
    <div>
      <Range max={props.rangeMax} />
    </div>
  );
};

export default TimelineSection;
