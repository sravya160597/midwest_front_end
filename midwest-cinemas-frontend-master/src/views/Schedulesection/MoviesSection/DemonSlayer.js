import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {  Avatar, Button, Typography, Box } from "@mui/material";

const style = { margin: " -7px 20px" };

const avatarStyle = {
  backgroundColor: "#0000eb",
  width: "16px",
  height: "16px",
};
const avatarbutton = { color: "lightyellow" };
const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "5rem",
  height: "5rem",
};
const bordertextstyle = {
  margin: "8px 10px",
  justifyContent: "center",
  display: "flex",
  fontSize: "12px",
  color: "blue",
};
const bordertoptextstyele = {
  margin: "-4px 26px",
  fontSize: "14px",
  color: "#D3212D",
};
const headerfontstyle = {
  fontSize: "16px",
  padding: "4px 0px",
};
const iconstyle={
    fontSize:"1.1rem",
}
const movieScheduleData = {
  moviename:"Demon Slayer : Kimetsu No Yaiba The Movie : Mugen Train(U/A)  ",
  Director: "N/A  ",
  Starring: "Natsuki Hanae, Akari Kito, Yoshitsugu Matsuoka (Voice)  ",
  synopisis:"After his family was brutually murdered and his sister turned into a demon, Tanjiro Kamado’s journery as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.  ",
  movieTheatorList: [
    {
      theatorName: "Century 20 Great Mall and XD (Milpitas, CA)",
      timings: [
        {
          time: "10:30 PM",
          language: "Japanese",
          available: false,
          name: "KIDDLES",

        },
        {
          time: "02:40 PM",
          language: "Japanese",
          available: false,
          name: "KIDDLES",
        },

        {
          time: "07:10 PM",
          language: "Japanese",
          available: false,
          name: "KIDDLES",

        },
        
      ],
    },

    {
      theatorName: "Century Stadium 25 and XD      ",
      timings: [
        {
          time: "01:45 AM",
          language: "Japanese",
          available: false,
          name: "INSIGNIA",
        },
        {
          picturename: "3D ",
          time: "07:45 PM",
          language: "Japanese",
          available: false,
        },
        
      ],
    },
    {
      theatorName: "Century Blackhawk Plaza (Danville, CA)	      ",
      timings: [
        {

          time: "10:15 AM",
          language: "Japanese",
          available: false,
          name: "KIDDLES",
        },
        {
          time: "03:40 PM",
          language: "Japanese",
          available: false,
          name: "KIDDLES",

        },
        {
          time: "09:15 PM",
          language: "Japanese",
          available: false,
          name: "INSIGNIA",
        },
        
      ],
    },
    {
      theatorName: "Cinemark Renaissance Marketplace and XD (Rialto, CA)",
      timings: [
        
        {
          picturename: "ATMOS ",
          time: "12:30 AM",
          language: "Japanese",
          available: false,
          name: "INSIGNIA",
        },

        
      ],
    },
   
   
  ],
};

export const Movie7 = () => {
  const [movieSchedule, setMovieSchedule] = useState(false);
  const [scheduleTicketBooking, setScheduleTicketBooking] =
    useState(movieScheduleData);

  const renderTimings = (item) => {
    return item.map((timing) => {
      return (
        <div>
          <h2 style={bordertoptextstyele}>{timing.language}</h2>

          <Box sx={{ ...commonStyles, borderRadius: "10px" }}>
            <span
              style={{
                margin: "5px 10px",
                fontSize: "10px",
                color: "#D3212D",
              }}
            >
              {timing.picturename}
            </span>
            &nbsp;
            <span style={bordertextstyle}>
              {timing.time}&nbsp; {timing.name}
            </span>
          </Box>
        </div>
      );
    });
  };

  const renderTicketBookingTimings = (scheduleTicketBooking) => {
    return scheduleTicketBooking.movieTheatorList.map((item) => {
      return (
        <div>
          <h2 style={headerfontstyle}>{item.theatorName}</h2>
          <div>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              {renderTimings(item.timings)}
            </Box>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container-fluid" style={style}>
      <Box sx={{ display: "flex", p: 1 }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <Avatar style={avatarStyle}>
            <Button
              style={avatarbutton}
              
              onClick={() => setMovieSchedule(!movieSchedule)}
            >
              {movieSchedule ? <RemoveIcon style=
             {iconstyle}/> : <AddIcon style={iconstyle}/>}
            </Button>
          </Avatar>
        </Box>
        <Box sx={{ p: 1, flexGrow: 72 }} style={{ color: "blue" }}>
          {scheduleTicketBooking.moviename}
        </Box>

        <Box sx={{ p: 1 }}>
          <span>Action</span>&nbsp;&nbsp;|&nbsp;&nbsp;
          <span>164 mins</span>
        </Box>
      </Box>

      {movieSchedule && (
        <div>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            style={{ display: "inline-flex", fontSize: 16, m: 1 }}
          >
            <Typography align="left" style={{ fontSize: "12px" }}>
              Director:{" "}
            </Typography>
            <Typography align="right" style={{ fontSize: "12px" }}>
              {scheduleTicketBooking.Director}
            </Typography>
          </Box>
          <br />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            style={{ display: "inline-flex" }}
          >
            <Typography align="left" style={{ fontSize: "12px" }}>
              Starring:{" "}
            </Typography>
            <Typography align="right" style={{ m: 1, fontSize: "12px" }}>
              {scheduleTicketBooking.Starring}
            </Typography>
          </Box>
          <br />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            style={{ display: "inline-flex" }}
          >
            <Typography align="left" style={{ fontSize: "12px" }}>
              Synopsis:{" "}
            </Typography>
            <Typography align="center" style={{ fontSize: "12px" }}>
              {scheduleTicketBooking.synopisis}{" "}
            </Typography>
          </Box>
          {renderTicketBookingTimings(scheduleTicketBooking)}
        </div>
      )}
    </div>
  );
};
