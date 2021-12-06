import { Paper, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import "./Bookingsection.css";
import DialogBox from "./DialogBox";

const bookingScduleValues = {
  movieTheatorList: [
    {
      theatorName: "Cinemark at Seven Bridges and IMAX  (Woodridge, IL)",
      address:
        "Main Street Seven Bridges,6500 IL-53, Woodridge, IL 60517, United States,+1 630-663-8892",
      timings: [
        {
          id: "1",
          time: "10:30 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },
        {
          id: "2",

          time: "02:40 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },

        {
          id: "3",

          picturename: "3D ATMOS",
          time: "10:00 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },
        {
          id: "4",

          time: "10:00 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },
      ],
    },

    {
      theatorName: "Century 25 Union Landing and XD (Union City, CA)",
      address:
        "Union Landing,32100 Union Landing Blvd, Union City, CA 94587, United States,+1 510-487-9347",
      timings: [
        {
          id: "5",

          time: "09:45 AM",
          language: "Hindi",
          available: false,
          isEnabled: false,
        },

        {
          id: "6",

          time: "07:45 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },
        {
          id: "7",

          time: "09:45 PM",
          language: "Hindi",
          available: false,
          isEnabled: false,
        },

        {
          id: "8",

          time: "11:45 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },
      ],
    },
    {
      theatorName: "Century 16 Deer Park (Deerpark, IL)",
      address:
        "Deer Park Town Center,21600 W Field Pkwy, Deer Park, IL 60010, United States,+1 847-438-8518",

      timings: [
        {
          id: "9",

          time: "10:15 AM",
          language: "English",
          available: false,
          isEnabled: false,
        },
        {
          id: "10",

          time: "12:40 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },
        {
          id: "11",

          time: "08:15 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },
        {
          id: "12",

          time: "10:15 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },
      ],
    },
    {
      theatorName: "Cinemark Renaissance Marketplace and XD (Rialto, CA)",
      address:
        "Renaissance Marketplace,1355 W Renaissance Pkwy, Rialto, CA 92376, United States,+1 909-350-2006",
      timings: [
        {
          id: "13",

          time: "10:00 AM",
          language: "English",
          available: false,
          isEnabled: false,
        },
        {
          id: "14",

          time: "5:00 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },
        {
          id: "15",

          time: "07:05 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },

        {
          id: "16",

          time: "10:05 PM",
          language: "English",
          available: false,
          isEnabled: false,
        },
      ],
    },
  ],
};

const Bookingsection = () => {
  const [bookingData, setBookingData] = useState(bookingScduleValues.movieTheatorList);
  const [isEnabled, setIsEnabled] = useState("");

  const handleOnCickTimings = (theatorName, timeId, index) => {
    setBookingData(bookingData.map((items)=>{
      return items.timings.map(ele=>{
        ele.isEnabled=false
        return ele
      })
    }))
    const theatorList = bookingData;
    const theatorIndex = theatorList.findIndex(item=>item.theatorName===theatorName);
    if(theatorIndex>-1){
      const theatorTimings = theatorList[theatorIndex].timings;
      const timeIndex = theatorTimings.findIndex(items=>items.id===timeId)
      theatorTimings[timeIndex].isEnabled=true;
      console.log(bookingData)
      setBookingData([...theatorList]);
    }
  };

  const renderTimings = (timings, index, theatorName) => {
    return timings.map((time) => {
      return (
        <div className="time_container">
          <h5 className="lang-title">{time.language}</h5>
          <Button
            variant="contained"
            type="button"
            // disabled={!time.isEnabled && isEnabled !== time.id}
            style={ time.isEnabled ? {backgroundColor:'green'} : { background: "white" }}
            onClick={() => {
              handleOnCickTimings(theatorName, time.id, index);
            }}
          >
            <h4>{time.time}</h4>
          </Button>
        </div>
      );
    });
  };

  const renderBooking = (bookingData) => {
    return bookingData.map((item, index) => {
      return (
        <Paper className="main_container flex">
          <div>
            <h5>
              {item.theatorName}
              <i class="fas fa-map-marker-alt"></i>
            </h5>
            <p>{item.address}</p>
          </div>

          {renderTimings(item.timings, index, item.theatorName)}
          <Grid justifyContent="center" style={{ marginTop: 20 }}>
            <DialogBox />
          </Grid>
        </Paper>
      );
    });
  };

  return <>{renderBooking(bookingData)}</>;
};

export default Bookingsection;