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

const NoteCard = ({ task }) => {
  console.log("this is the task in the notecard", task.id);
  return (
    <Card key={task.id}>
      <CardHeader title={task.title} subheader={task.date} />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {task.desc}
        </Typography>
        <CardActions>
          <Container>
            <Box sx={{ float: "left" }}>
              <IconButton>
                <CheckCircleOutline color="green" />
              </IconButton>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton>
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
