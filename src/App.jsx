import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Container from "@mui/material/Container";
import Search from "./Search.jsx";
import Filters from "./Filters.jsx";
import AddNote from "./AddNote.jsx";
import NoteForm from "./NoteForm.jsx";
import { Grid2 } from "@mui/material";
const App = () => {
  return (
    <Container maxWidth="xl">
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Search />
        </Grid2>
        <Grid2 display="flex" justifyContent="left" size={8}>
          <Filters />
        </Grid2>
        <Grid2 display="flex" justifyContent="right" size={4}>
          <AddNote />
        </Grid2>
      </Grid2>
      <NoteForm />
    </Container>
  );
};

export default App;
