import React, { useState } from "react";
import { TextField, MenuItem, Button } from "@mui/material";

const NoteForm = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [type, setType] = useState("Personal");
    const types = [
        {
            key: 1, 
            value: "Personal"
        }, 
        {
                key: 2, 
                value:"Home"
        },
        {
                key: 3, 
                value: "Work"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, desc, type)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField id="title" value={title} onChange={(e) => setTitle(e.target.value)} label="Title" required></TextField>
            <TextField id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} multiline rows={4} label="Description"
            required></TextField>
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
            <Button>Add</Button>
            <Button>Cancel</Button>
        </form>
    )
}
export default NoteForm;