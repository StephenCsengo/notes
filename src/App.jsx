import React, { act, useEffect, useState } from "react";
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
import Grid from "@mui/material/Grid2";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !activeFilter || task.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleFilterChange = (filter) => {
    setActiveFilter(filter.label === "All" ? null : filter.label);
    console.log("this is the filter: ", filter.label);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid size={12}>
          <Search searchTerm={searchTerm} onSearch={handleSearch} />
        </Grid>
        <Grid display="flex" justifyContent="left" size={8}>
          <Filters
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
          <Progress />
        </Grid>
        <Grid display="flex" justifyContent="right" size={4}>
          <AddNote onAddTask={addTask} />
        </Grid>

        {filteredTasks.length > 0 ? (
          <Grid container spacing={4}>
            {filteredTasks.map((task) => (
              <Grid item size={{ xs: 12, sm: 6 }} key={task.id}>
                <NoteCard
                  task={task}
                  onDeleteTask={() => deleteTask(task.id)}
                  onCompleteTask={() => completeTask(task.id)}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid size={12}>
            <h2>No Notes to Display</h2>
            <img src={noNotes} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default App;
