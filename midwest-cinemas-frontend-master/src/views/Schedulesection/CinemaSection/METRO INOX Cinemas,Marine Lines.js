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
  margin: "10px 13px",
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
  moviename: "Cinemark Fairfax Corner 14 and XD  (Fairfax, VA)",
  theatorAddress:
    "Fairfax Corner,11900 Palace Way, Fairfax, VA 22030, United States,+1 703-378-6550 ",
  //   Director: "Cary Fukunaga",
  //   Starring: "DANIEL CRAIG, NAOMIE HARRIS, LEY SEYDOUX, RALPH FIENNE",
  //   synopisis:
  //     "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology",
  movieTheatorList: [
    {
      theatorName: "Dune (U/A)",
      gonar: "Science Fiction",
      duration: "155 mins",

      timings: [
        {
          picturename: "3D ATMOS",
          time: "09:40 AM",
          language: "English",
          available: false,
        },
        {
          picturename: "3D ATMOS",

          time: "01:00 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },

        {
          picturename: "ATMOS",
          time: "03:40 PM",
          language: "English",
          available: false,
        },
        {
          picturename: "3D ATMOS",
          time: "07:05 PM",
          language: "English",
          available: false,
        },
        {
          time: "09:30 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },

        {
          picturename: "3D ATMOS",
          time: "10:30 PM",
          language: "English",
          available: false,
        },
      ],
    },

    {
      theatorName: "Fast and Furious 9 : The Fast Saga (U/A)",
      gonar: "Action",
      duration: "143 mins",

      timings: [
        {
          time: "09:50 AM",
          language: "English",
          available: false,
        },
        {
          time: "11:25 AM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          time: "01:05 PM",
          language: "English",
          available: false,
        },
        {
          time: "06:15 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },

        {
          time: "06:15 PM",
          language: "English",
          available: false,
        },
        {
          time: "10:15 PM",
          language: "English",
          available: false,
        },
      ],
    },
    {
      theatorName: "No Time To Die (U/A)",
      gonar: "Action",
      duration: "164 mins",

      timings: [
        {
          picturename: "3D",

          time: "10:15 AM",
          language: "English",
          available: false,
        },

        {
          picturename: "3D",

          time: "02:40 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          picturename: "3D",

          time: "07:10 PM",
          language: "English",
          available: false,
        },

        {
          picturename: "3D ATMOS ",
          time: "10:00 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
      ],
    },
    {
      theatorName: "Venom: Let There Be Carnage (U/A)",
      gonar: "Science Fiction",
      duration: "97 mins",

      timings: [
        {
          picturename: " 3D ATMOS ",

          time: "01:10 PM",
          language: "English",
          available: false,
        },
        {
          picturename: " 3D ATMOS ",
          time: "04:25 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },

        {
          picturename: "3D",
          time: "10:45 PM",
          language: "English",
          available: false,
        },
      ],
    },
    {
      theatorName: "Halloween Kills (A)",
      gonar: "Horror",
      duration: "107 mins",

      timings: [
        {
          time: "10:20 AM",
          language: "English",
          available: false,
        },
        {
          time: "02:40 PM",
          language: "English",
          available: false,
        },
        {
          time: "09:40 PM",
          language: "English",
          available: false,
        },
      ],
    },

    {
      theatorName: "Don`t Breathe 2 (A) ",
      gonar: "Horror",
      duration: "100 mins",

      timings: [
        {
          time: "10:30 AM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
        {
          time: "10:45 PM",
          language: "English",
          available: false,
        },
      ],
    },
    {
      theatorName: "Shang-Chi and the Legend of the Ten Rings (U/A)",
      gonar: "Action",
      duration: "132 mins",

      timings: [
        {
          picturename: "3D",

          time: "01:05 PM",
          language: "Hindi",
          available: false,
        },
        {
          picturename: "3D ATMOS",

          time: "06:55 PM",
          language: "English",
          available: false,
          name: "INSIGNIA",
        },
      ],
    },
    {
      theatorName:
        "Demon Slayer : Kimetsu No Yaiba The Movie : Mugen Train (U/A)",
      gonar: "Action",
      duration: "117 mins",

      timings: [
        {
          time: "10:30 AM",
          language: "Japanese",
          available: false,
          name: "KIDDLES",
        },
        {
          time: "06:00 PM",
          language: "Japanese",
          available: false,
          name: "KIDDLES",
        },
        {
          time: "09:30 PM",
          language: "Japanese",
          available: false,
          name: "KIDDLES",
        },
      ],
    },
    {
      theatorName: "Ron`s Gone Wrong (U)",
      gonar: "Animation",
      duration: "107 mins",

      timings: [
        {
          picturename: "3D",

          time: "01:20 PM",
          language: "English",
          available: false,
        },
        {
          picturename: "3D",

          time: "06:55 PM",
          language: "English",
          available: false,
          name: "KIDDLES",
        },
      ],
    },
    {
      theatorName: "Dhuandhaar (U/A)",
      gonar: "Drama",
      duration: "128 mins",

      timings: [
        {
          picturename: "3D",

          time: "04:05 PM",
          language: "Gujarati",
          available: false,
        },
      ],
    },
    {
      theatorName: "BHAJARANGI 2 (U/A)",
      gonar: "Action",
      duration: "155 mins",

      timings: [
        {
          time: "04:45 PM",
          language: "Kannada",
          available: false,
        },
      ],
    },
    {
      theatorName: "Varudu Kaavalenu (U/A)",
      gonar: "Drama",
      duration: "133 mins",

      timings: [
        {
          time: "07:15 PM",
          language: "Telugu",
          available: false,
        },
      ],
    },
  ],
};

export const Cinema1 = () => {
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
                margin: "5px 8px",
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
          <Box>
            <h2 style={headerfontstyle}>
              {item.theatorName}
              <br />
              <span style={{ fontSize: "12px" }}>{item.gonar}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span style={{ fontSize: "12px" }}>{item.duration}</span>
            </h2>
          </Box>
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
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            style={{ display: "inline-flex", color: "black" }}
          >
            <Typography align="left" style={{ fontSize: "12px" }}>
              {scheduleTicketBooking.theatorAddress}
            </Typography>
          </Box>
        </Box>
        <br />
      </Box>

      {movieSchedule && (
        <div>{renderTicketBookingTimings(scheduleTicketBooking)}</div>
      )}
    </div>
  );
};
