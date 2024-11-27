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
  const date = new Date(task.date);
  const readableDate = date.toLocaleString();
  const typeToColor = {
    Home: "secondary",
    Work: "success",
    Personal: "info",
  };

  const chipColor = typeToColor[task.type];

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
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <IconButton onClick={onCompleteTask}>
              <CheckCircleOutline color="success" />
            </IconButton>
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton onClick={onDeleteTask}>
              <DeleteForever />
            </IconButton>
          </Box>
          <Chip label={task.type} color={chipColor} variant="" />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
