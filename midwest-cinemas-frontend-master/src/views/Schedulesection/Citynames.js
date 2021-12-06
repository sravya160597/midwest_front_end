import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";

import PropTypes from "prop-types";
import Navbar from "../home/Navbar";
import { SearchBar } from "./Searchbar";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export const Citynames = () => {
  return (
    <>
      <Navbar />
      <div style={{ margin: "35px" }}>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 1500,
              height: 500,
            },
          }}
        >
          <Paper variant="outlined" style={{ margin: "25px" }}>
            {/* <Paper variant="outlined" square /> */}
            <h2 style={{ padding: "40px 280px" }}>
              Where would you like to book tickets?
            </h2>
            <SearchBar />
            <div style={{ width: "100%", margin: "-8px", textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  justifyContent: "space-evenly",

                  height: 50,
                }}
              >
                <span>
                  <Link href="#">New York</Link>
                </span>
                <span> NYLos Angeles</span>

                <span> CAAtlanta</span>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  justifyContent: "space-evenly",

                  height: 50,
                }}
              >
                <span>GAChicago</span>

                <span>ILAustin</span>

                <span>TXMiami</span>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  justifyContent: "space-evenly",

                  height: 50,
                }}
              >
                <span> FLSan Francisco</span>

                <span> CAPhoenix</span>

                <span> AZWashington</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  justifyContent: "space-evenly",

                  height: 50,
                }}
              >
                <span> DCBoston</span>

                <span> DCBoston</span>
                <span> CASeattle</span>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  justifyContent: "space-evenly",

                  height: 50,
                }}
              >
                <span> WAEdison</span>

                <span>NJHouston</span>
                <span> TXTampa</span>
              </Box>
            </div>
          </Paper>
        </Box>
      </div>
    </>
  );
};
