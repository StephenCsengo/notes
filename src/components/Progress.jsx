import React, { useState } from "react";
import { LinearProgress } from "@mui/material";

const Progress = () => {
  return <LinearProgress variant="determinate" value={25} />;
};

export default Progress;
