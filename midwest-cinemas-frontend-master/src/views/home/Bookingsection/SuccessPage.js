import { Paper, Typography, Box, Divider, Grid, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
const useStyles = makeStyles({
  icon: {
    textAlign: "center",
    color: "green",
  },
  icon2: {
    textAlign: "center",
    color: "green",
    margin: "9px",
  },
  button: {
    backgroundColor: "green",
  },
  text: {
    textAlign: "center",
    paddingTop: 15,
  },
  div: {
    margin: "180px",
  },
  button1: {
    textAlign: "center",
  },
});

const SuccessPage = () => {
  const classes = useStyles();
  const history = useHistory()
  const handleChange = () =>{
      history.push("/")
  }
  return (
    <div className={classes.div}>
      <Paper>
        <Box p={2}>
          <Grid container>
            <Grid item lg={6} alignItems="center">
              <Box p={2}>
                <CardMedia
                  component="img"
                  height="150"
                  image="https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
                  alt="green iguana"
                />
                <Typography
                  className={classes.text}
                  component="h3"
                  variant="subtitle4"
                >
                  Venom: Let There Be Carnage
                </Typography>
                <Typography
                  className={classes.text}
                  component="p"
                  variant="subtitle4"
                >
                  Date:10:20 AM
                </Typography>
                <Divider />
              </Box>
              <Box p={2}>
                <Grid container>
                  <Grid item lg={6}>
                    <Typography component="p" variant="subtitle4">
                      Subtotal:
                    </Typography>
                    <Typography component="p" variant="subtitle4">
                      Total
                    </Typography>
                  </Grid>
                  <Grid item lg={6}>
                    <Typography>2</Typography>
                    <Typography>$100</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item lg={6} justifyContent="center">
              <Box p={6}>
                <div className={classes.icon}>
                  <CheckCircleIcon fontSize="large" />
                </div>
                <Typography
                  component="h4"
                  variant="h4"
                  className={classes.text}
                >
                  Order Confirmed
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle1"
                  className={classes.text}
                >
                  Your confirmation will get you soon
                </Typography>
                <br />
                <div className={classes.button1}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "green", fontSize: "19px" }} onClick={handleChange}
                  >
                    GO BACK TO HOME
                  </Button>
                </div>
              </Box>
            </Grid>
            <Divider />
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default SuccessPage;
