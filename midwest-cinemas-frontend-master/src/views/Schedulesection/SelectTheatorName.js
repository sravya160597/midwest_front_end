import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddLocationIcon from "@mui/icons-material/AddLocation";

export const SelectTheatorName = () => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel
          htmlFor="grouped-select"
          style={{ height: "20px", lineHeight: "0.9em", fontFamily: "Roboto" }}
        >
          {" "}
          AnyTheator
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
          <ListSubheader>
            <h3 style={{ color: "#5454ed" }}>
              Theaters near
              <AddLocationIcon style={{ width: "0.8em", height: "0.8em" }} />
            </h3>
          </ListSubheader>
          <MenuItem value={1}>
            Century at Pacific Commons + XD (Fremont, CA,Ph: +1 510-651-2859){" "}
          </MenuItem>
          <MenuItem value={2}>
            Cinemark Renaissance Marketplace and XD (Rialto, CA,Ph:+1
            909-350-2006)
          </MenuItem>
          <MenuItem value={3}>
            Century Blackhawk Plaza (Danville, CA, Ph:+1 925-736-0367)
          </MenuItem>
          <MenuItem value={4}>
            Century Stadium 25 and XD(Ph:+1 714-532-9558)
          </MenuItem>
          <MenuItem value={5}>
            Century 20 Great Mall and XD (Milpitas, CA,Ph:+1 408-942-7441)
          </MenuItem>
          <MenuItem value={6}>
            Century 25 Union Landing and XD (Union City, CA,Ph:+1 510-487-9347)
          </MenuItem>

          {/* <ListSubheader>Night</ListSubheader> */}
          <MenuItem value={7}>
            Century 16 Deer Park (Deerpark, IL,Ph:+1 847-438-8518)
          </MenuItem>
          <MenuItem value={8}>
            Cinemark at Seven Bridges and IMAX (Woodridge, IL,Ph:+1
            630-663-8892)
          </MenuItem>
          <MenuItem value={9}>
            Cinemark Fairfax Corner 14 and XD (Fairfax, VA,Ph:+1 703-378-6550)
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
