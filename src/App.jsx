import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Container from "@mui/material/Container";
import Search from "./Search.jsx";
const App = () => {
  return (
    <Container maxWidth="xl">
      <Search />
    </Container>
  );
};

export default App;
