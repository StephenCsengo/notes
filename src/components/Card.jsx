import React from "react";
import {
  Menu,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardHeader,
  IconButton,
  CardActions,
  Chip,
  Container,
  Box,
} from "@mui/material";
import {
  MoreVert,
  CheckCircleOutline,
  Edit,
  DeleteForever,
  Delete,
} from "@mui/icons-material";

const NoteCard = ({ task, onDeleteTask, onCompleteTask }) => {
  console.log("this is the task in the notecard", task.id);
  const date = new Date(task.date);
  const readableDate = date.toLocaleString();
  return (
    <Card key={task.id}>
      <CardHeader
        title={task.title}
        subheader={readableDate}
        sx={{ textDecoration: task.completed ? "line-through" : "none" }}
      />

      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.desc}
        </Typography>
        <CardActions>
          <Container>
            <Box sx={{ float: "left" }}>
              <IconButton onClick={onCompleteTask}>
                <CheckCircleOutline color="green" />
              </IconButton>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton onClick={onDeleteTask}>
                <DeleteForever />
              </IconButton>
            </Box>
          </Container>
          <Container sx={{ justifyContent: "flex-end" }}>
            <Chip
              label={task.type}
              color="secondary"
              variant="outlined"
              sx={{ float: "right" }}
            />
          </Container>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
