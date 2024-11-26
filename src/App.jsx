import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import noNotes from "./assets/notNotes.svg";
import "./App.css";
import Container from "@mui/material/Container";
import Search from "./components/Search.jsx";
import Filters from "./components/Filters.jsx";
import AddNote from "./components/AddNote.jsx";
import NoteForm from "./components/NoteForm.jsx";
import Progress from "./components/Progress.jsx";
import NoteCard from "./components/Card.jsx";
import { Grid2 } from "@mui/material";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  console.log(tasks);
  return (
    <Container maxWidth="xl">
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Search />
        </Grid2>
        <Grid2 display="flex" justifyContent="left" size={8}>
          <Filters />
          <Progress />
        </Grid2>
        <Grid2 display="flex" justifyContent="right" size={4}>
          <AddNote onAddTask={addTask} />
        </Grid2>
        <Grid2 size={12}>
          <h2>No Notes to Display</h2>
          <img src={noNotes} />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <NoteCard />
        </Grid2>
        <Grid2 size={6}>
          <NoteCard />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default App;
