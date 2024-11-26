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

const NoteCard = () => {
  return (
    <Card>
      <CardHeader title="To do note" subheader="Insert date here" />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          To do description
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
              label="Home"
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
