import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./index.css";
import { SelectMovieTime } from "./SelectMovieTime";
import { SelectTheatorName } from "./SelectTheatorName";

const Filters = () => {
  const options1 = [{ label: "Above Rs. 350", id: 1 }];

  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={options1}
        sx={{ width: 160 }}
        className="filter_dropdown"
        renderInput={(params) => (
          <TextField {...params} size="small" label="Filter Price Range" />
        )}
      />
      &nbsp;&nbsp;&nbsp;
      <SelectMovieTime />
      <SelectTheatorName />
    </>
  );
};

export default Filters;
