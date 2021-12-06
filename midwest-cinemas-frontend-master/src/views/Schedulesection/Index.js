import React from "react";

import { Grid, Paper, Box } from "@mui/material";
import CustomInput from "./DataPicker";
import MovieCinema from "./MovieCinema";
import Navbar from "../home/Navbar";

const paperStyle = {
  padding: 20,
  height: "400vh",
  width: 800,
  margin: "0 auto",
};
const style = { margin: " 20px 20px" };

export const Index = () => {
  return (
    <>
      <Navbar />
      <Grid>
        <Box>
          <div className="container-fluid" style={style}>
            <Paper style={paperStyle}>
              <Grid>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ p: 2, flexGrow: 10 }}>
                    <h2>Latest Movie Showtimes</h2>

                    <CustomInput />
                  </Box>
                </Box>

                <div>
                  <MovieCinema />
                </div>

                <hr />
              </Grid>
            </Paper>
          </div>
        </Box>
      </Grid>
    </>
  );
};
