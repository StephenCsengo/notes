import React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ searchTerm, onSearch }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
      <TextField
        fullWidth
        id="search"
        label="Search notes..."
        variant="outlined"
        onChange={(e) => onSearch(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default Search;
