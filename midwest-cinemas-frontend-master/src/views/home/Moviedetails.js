import React, { useEffect, useState } from 'react'
import CardMedia from '@mui/material/CardMedia';
import axios from "axios";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Mcard from './Mcard';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Navbar from './Navbar';
import Paper from '@mui/material/Paper';
import Crew from './Crew';
import './Crew.css';
import Clipinfo from './Clipinfo/Clipinfo';
import Bookingcontainer from './Bookingsection/Bookingcontainer';
import Searchbox from './Bookingsection/Searchbox';
import { useParams } from "react-router-dom";
const Moviedetails = (props) => {
  const { movieid } = useParams();
  const [moviedetail, setMoviedetail] = useState([])

  useEffect(()=>{
   
    axios.get(`https://midwestcinema-backend.herokuapp.com/movies/${movieid}`).then((res) => {
     console.log(res.data.movie)
     setMoviedetail(res.data.movie)
     })
   },[movieid])
// console.log(props);
  return (
    <>
      <Navbar />
      
        <Box sx={{ flexGrow: 1 }} className="Mainbox" key={moviedetail?.id} >

          <div className="video_box">
            <h2>{moviedetail?.name}</h2>

            <Paper elevation={3} >
              <iframe width="704" height="400" src={moviedetail?.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Paper>
          </div>
          <div className="img_box video_box">
            <Card sx={{ maxWidth: 240 }} className="thumbnail">

              <img src={moviedetail?.image} alt={moviedetail?.name} title={moviedetail?.name} class="clsImgPoster imgNoBorder"></img>
              <CardContent>
                <div className="singleline">
                  <span className="firstword">
                    Release date
                  </span>
                  <span className="secondword">  14th October 2021</span>
                </div>
                <div className="singleline">
                  <span className="firstword">
                    Duration
                  </span>
                  <span className="secondword">{moviedetail?.duration}</span>
                </div>
                <div className="singleline">
                  <span className="firstword">
                    Genre
                  </span>
                  <span className="secondword">{moviedetail?.tags}</span>
                </div>
                <div className="singleline">
                  <span className="firstword">
                    Censor Rating
                  </span>
                  <span className="secondword">   U/A</span>
                </div>
              </CardContent>

            </Card>

          </div>

        </Box>
    
      <Searchbox />
      <br />
      <Bookingcontainer />
    </>
  )
}

export default Moviedetails
