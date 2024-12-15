import React, { useState, Fragment } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid2,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddNote = ({ onAddTask }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("Home");
  const types = [
    {
      key: 1,
      value: "Home",
    },
    {
      key: 2,
      value: "Personal",
    },
    {
      key: 3,
      value: "Work",
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Button variant="contained" onClick={handleOpen}>
        <AddIcon />
        Add Task
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (e) => {
            e.preventDefault();
            console.log(title, desc, type);
            const newTask = {
              id: Date.now(),
              date: Date.now(),
              title: title,
              type: type,
              desc: desc,
              completed: false,
            };
            onAddTask(newTask);
            console.log(newTask);
            handleClose();
          },
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <DialogTitle>Add Task</DialogTitle>
          </Grid2>
          <Grid2 size={12}>
            <DialogContent>
              <Grid2 container spacing={2}>
                <Grid2 size={8}>
                  <TextField
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    label="Title"
                    required
                  ></TextField>
                </Grid2>
                <Grid2 size={4}>
                  <TextField
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    select
                    label="Type"
                    required
                  >
                    {types.map((option) => (
                      <MenuItem key={option.key} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid2>
                <Grid2 size={8}>
                  <TextField
                    id="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    multiline
                    rows={4}
                    label="Description"
                    required
                  ></TextField>
                </Grid2>
                <Grid2 size={12}>
                  <DialogActions>
                    <Button type="submit">Add</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                  </DialogActions>
                </Grid2>
              </Grid2>
            </DialogContent>
          </Grid2>
        </Grid2>
      </Dialog>
    </Fragment>
  );
};

export default AddNote;
