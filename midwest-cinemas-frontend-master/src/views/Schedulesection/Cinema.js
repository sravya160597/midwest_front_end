import { Box } from "@mui/system";
import React from "react";
import { Cinema7 } from "./CinemaSection/INOX Insignia at Atria Mall, Worli";
import { Cinema6 } from "./CinemaSection/INOX Laserplex, CR2, Nariman Point";
import { Cinema5 } from "./CinemaSection/INOX Megaplex, Inorbit Mall";
import { Cinema8 } from "./CinemaSection/INOX Nakshatra Mall,Dadar (W)";
import { Cinema2 } from "./CinemaSection/INOX Neelyog Square Mall,Ghatkopar (E)";
import { Cinema4 } from "./CinemaSection/INOX R-City Ghatkopar";
import { Cinema3 } from "./CinemaSection/INOX Thakur Mall,Dahisar (E)";
import { Cinema9 } from "./CinemaSection/INOX Thakur Movie,Kandivali (E)";
import { Cinema1 } from "./CinemaSection/METRO INOX Cinemas,Marine Lines";

export const Cinema = () => {
  return (
    <div style={{margin:"-44px"}}>

      <Box>
      <Cinema1 />
      <hr />
      <Cinema2 />
      <hr />
      <Cinema3 />
      <hr/>
      <Cinema4 />
      <hr />

      <Cinema5 />
      <hr />
      <Cinema6 />
      <hr />

      <Cinema7 />
      <hr />
      <Cinema8 />
      <hr />
      <Cinema9 />
      </Box>
    </div>
  );
};
