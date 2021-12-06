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
  moviename: "Century Stadium 25 and XD",
  theatorAddress:
    "Stadium Promenade,1701 W Katella Ave, Orange, CA 92867, United States,+1 714-532-9558 ",
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
      ],
    },

    {
      theatorName: "Fast and Furious 9 : The Fast Saga (U/A)",
      gonar: "Action",
      duration: "143 mins",

      timings: [
        {
          time: "09:50 AM",
          language: "Hindi",
          available: false,
        },
        {
          time: "11:25 AM",
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
          picturename: " 3D  ",

          time: "01:10 PM",
          language: "English",
          available: false,
        },
      ],
    },
  ],
};

export const Cinema8 = () => {
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
