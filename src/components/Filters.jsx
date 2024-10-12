import React from "react";
import { Stack, Chip } from "@mui/material";

const Filters = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="All" color="default" variant="" />
      <Chip label="Home" color="secondary" variant="outlined" />
      <Chip label="Work" color="success" variant="outlined" />
      <Chip label="Personal" color="info" variant="outlined" />
    </Stack>
  );
};

export default Filters;
