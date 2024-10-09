import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddNote = () => {
  return (
    <Button variant="contained">
      <AddIcon />
      Add Note
    </Button>
  );
};

export default AddNote;
