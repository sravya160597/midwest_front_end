import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TextField, Typography, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  head: {
    marginTop: 32,
  },
  pad: {
    padding: "13px 39px 2px 4px",
  },
  txt1:{
      fontSize:"30px"
      
  },
  txt2:{
      fontSize:"19px",
      font:600,padding:10,width:"18%"
  }
});

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);
  const history = useHistory();

  const classes = useStyles();
  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = () => {
    history.push("/payment-confirm");
  };

  return (
    <Dialog
      sm={{ "& .MuiDialog-paper": { width: "100%" } }}
      maxWidth="md"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
    >
      <DialogTitle className={classes.txt1}>Checkout</DialogTitle>
      <DialogContent dividers>
        <div className={classes.pad}>
          <Grid container>
            <Grid item lg={6}>
              <Box p={5}>
                <Paper sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Venom: Let There Be Carnage
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      After finding a host body in investigative reporter Eddie
                      Brock, the alien symbiote must face a new enemy, Carnage,
                      the alter ego of serial killer Cletus Kasady.
                    </Typography>
                    <br />
                    <Typography>Date:10:20 AM</Typography>
                    <Typography>Price:$100</Typography>
                  </CardContent>
                </Paper>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <TextField
                className={classes.head}
                type='email'
                variant="outlined"
                label="Email"
                fullWidth
                placeholder="eg:xxx@gmail.com"
              />

              <TextField
                className={classes.head}
                type='number'
                variant="outlined"
                label="Card Details"
                fullWidth
                placeholder="xxx-xxx-xxx-xxx"
              />

              <TextField
                className={classes.head}
               
                variant="outlined"
                label="Expire Date"
                fullWidth
              />

              <TextField
                className={classes.head}
                type='number'
                variant="outlined"
                label="CVV"
                fullWidth
              />

              <TextField
                className={classes.head}
                type='text'
                variant="outlined"
                label="Name On Card"
                fullWidth
              />
            </Grid>
          </Grid>
        </div>
      </DialogContent>
      <DialogActions>
      
        <Button variant="contained" className={classes.txt2} color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" className={classes.txt2} onClick={handleSubmit}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const DialogBox = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Dione");
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List component="div" role="group">
        <ListItem
          button
          divider
          onClose={handleClose}
          onClick={handleClickOpen}
        >
          <ListItemText primary="Book" />
        </ListItem>

        <ConfirmationDialogRaw
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
      </List>
    </Box>
  );
};
export default DialogBox;
