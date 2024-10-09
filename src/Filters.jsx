import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const Filters = () => {
  return (
    <ButtonGroup variant="text" aria-label="Note types">
      <Button>All</Button>
      <Button>Home</Button>
      <Button>Work</Button>
      <Button>Personal</Button>
    </ButtonGroup>
  );
};

export default Filters;
