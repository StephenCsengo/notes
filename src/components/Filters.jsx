import React from "react";
import { Stack, Chip } from "@mui/material";

const Filters = ({ activeFilter, onFilterChange }) => {
  const filters = [
    {
      key: 1,
      label: "All",
      color: "default",
    },
    {
      key: 2,
      label: "Home",
      color: "secondary",
    },
    {
      key: 3,
      label: "Work",
      color: "success",
    },
    {
      key: 4,
      label: "Personal",
      color: "info",
    },
  ];
  return (
    <Stack direction="row" spacing={1}>
      {filters.map((filter) => (
        <Chip
          key={filter.key}
          label={filter.label}
          color={filter.color}
          variant={
            filter.label === activeFilter ||
            (filter.label === "All" && !activeFilter)
              ? ""
              : "outlined"
          }
          onClick={() => onFilterChange(filter)}
        />
      ))}
    </Stack>
  );
};

export default Filters;
