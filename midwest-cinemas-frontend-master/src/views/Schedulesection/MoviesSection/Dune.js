import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Avatar, Button, Typography, Box } from "@mui/material";

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
const iconstyle = {
  fontSize: "1.1rem",
};
const movieScheduleData = {
  moviename: "Dune(U/A)  ",
  Director: "Denis Villeneuve  ",
  Starring: "Rebecca Ferguson, Zendaya, Timothée Chalamet  ",
  synopisis:
    "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis.  ",
  movieTheatorList: [
    {
      theatorName: "Century at Pacific Commons + XD (Fremont, CA)",
      timings: [
        {
          picturename: "3D ATMOS",
          time: "10:30 PM",
          language: "English",
          available: false,
        },
        {
          picturename: "3D ATMOS",
          time: "02:40 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },

        {
          picturename: "ATMOS",
          time: "07:10 PM",
          language: "English",
          available: false,
        },
        {
          time: "09:00 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          picturename: "3D ATMOS",
          time: "10:00 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
      ],
    },

    {
      theatorName: "Cinemark Renaissance Marketplace and XD (Rialto, CA)",
      timings: [
        {
          time: "09:45 AM",
          language: "Hindi",
          available: false,
          name: "INSIGNIA",
        },
        {
          time: "12:15 PM",
          language: "Hindi",
          available: false,
        },
        {
          picturename: "3D ",
          time: "04:35 PM",
          language: "Hindi",
          available: false,
        },
        {
          picturename: "3D ",
          time: "04:35 PM",
          language: "Hindi",
          available: false,
        },
      ],
    },
    {
      theatorName: "Century Blackhawk Plaza (Danville, CA)",
      timings: [
        {
          picturename: "3D",

          time: "09:15 AM",
          language: "Hindi",
          available: false,
        },
        {
          picturename: "3D ",
          time: "07:00 PM",
          language: "English",
          available: false,
        },
      ],
    },
    {
      theatorName: "Century Stadium 25 and XD",
      timings: [
        {
          picturename: "3D",

          time: "10:00 AM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          picturename: "3D IMAX ",
          time: "11:30 AM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },

        {
          time: "02:00 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          time: "03:00 PM",
          language: "English",
          available: false,
        },

        {
          picturename: "3D IMAX",
          time: "06:30 PM",
          language: "English",
          available: false,
        },
        {
          picturename: "3D",

          time: "09:20 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },

        {
          picturename: "3D IMAX",
          time: "10:00 PM",
          language: "English",
          available: false,
        },
      ],
    },
    {
      theatorName: "Century 20 Great Mall and XD (Milpitas, CA)",
      timings: [
        {
          picturename: "3D",

          time: "11:15 AM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          time: "01:45 PM",
          language: "English",
          available: false,
        },
        {
          picturename: "3D IMAX",

          time: "03:00 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          picturename: "3D IMAX",

          time: "06:30 PM",
          language: "English",
          available: false,
        },
        {
          picturename: "3D MX4D",

          time: "09:00 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          time: "08:55 PM",
          language: "English",
          available: false,
        },
      ],
    },

    {
      theatorName: "Century 25 Union Landing and XD (Union City, CA)",
      timings: [
        {
          time: "10:50 AM",
          language: "English",
          available: false,
        },
        {
          picturename: "3D",
          time: "01:20 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },

        {
          picturename: "3D ATMOS",
          time: "03:10 PM",
          language: "English",
          available: false,
        },

        {
          picturename: "3D ATMOS ",
          time: "06:15 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          picturename: "3D ATMOS ",
          time: "10:00 PM",
          language: "English",
          available: false,
        },
      ],
    },
    {
      theatorName: "Century 16 Deer Park (Deerpark, IL)",
      timings: [
        {
          picturename: "3D",

          time: "10:00 AM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          picturename: "3D",

          time: "12:35 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          picturename: "3D",

          time: "03:10 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
      ],
    },
    {
      theatorName: "Cinemark at Seven Bridges and IMAX  (Woodridge, IL)",
      timings: [
        {
          picturename: "3D",

          time: "12:35 PM",
          language: "Hindi",
          available: false,
          name: "INSIGNIA",
        },
        {
          picturename: "3D",

          time: "06:55 PM",
          language: "English",
          available: false,
        },
      ],
    },
  ],
};

export const Movie15 = () => {
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
              {movieSchedule ? (
                <RemoveIcon style={iconstyle} />
              ) : (
                <AddIcon style={iconstyle} />
              )}
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
