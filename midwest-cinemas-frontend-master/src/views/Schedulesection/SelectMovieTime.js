import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SelectMovieTime = () => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel
          htmlFor="grouped-select"
          style={{ height: "20px", lineHeight: "0.9em", fontFamily: "Roboto" }}
        >
          Any Time
        </InputLabel>
        <Select
          defaultValue=""
          id="grouped-select"
          label="Grouping"
          style={{ height: "40px" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Morning</ListSubheader>
          <MenuItem value={1}>7:30 AM</MenuItem>
          <MenuItem value={2}>10:45 AM</MenuItem>
          <MenuItem value={3}>12:05 AM</MenuItem>
          <ListSubheader>Afternoon</ListSubheader>
          <MenuItem value={4}>1:45 PM</MenuItem>
          <MenuItem value={5}>3:15 PM</MenuItem>
          <MenuItem value={6}>5:30 PM</MenuItem>

          <ListSubheader>Night</ListSubheader>
          <MenuItem value={7}>7:00 PM</MenuItem>
          <MenuItem value={8}>9:45 PM</MenuItem>
          <MenuItem value={9}>11:30 PM</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
