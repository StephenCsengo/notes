import React from "react";
import { Menu, Typography, Card, CardContent, CardActionArea, CardHeader, IconButton, CardActions } from "@mui/material";
import { MoreVert, CheckCircleOutline, Edit, DeleteForever, Delete } from "@mui/icons-material";

const NoteCard = () => {
    return (
        <Card>
            <CardHeader 
                title="To do note"
                subheader="Insert date here"
            />
            <CardContent>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    To do description
                </Typography>
                <CardActions>
                    <IconButton>
                        <CheckCircleOutline color="green" />
                    </IconButton>
                    <IconButton>
                        <Edit />
                    </IconButton>
                    <IconButton>
                        <DeleteForever />
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default NoteCard;