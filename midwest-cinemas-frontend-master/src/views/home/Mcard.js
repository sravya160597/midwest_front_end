import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './Mcard.css';
import Movies from '../../admin/views/movies/Movies';



const Mcard = () => {
  let history = useHistory();
  const [movie, setMovie] = useState([])

    useEffect(()=>{
        axios.get(popularMovie).then((res) => {
         console.log(res.data)
         setMovie(res.data)
         })
       },[])
     const apikey = "api_key=2a9e312406dd748af5cc1c876396390a"
     const url = "https://api.themoviedb.org/3"
     const popularMovie = "https://midwestcinema-backend.herokuapp.com/movies"

     const MovieDetail = () => {
      history.push("/details");
    }

    return (
        <div className="movie-card">
             {movie?.map((movie)=>(
              <Card sx={{ maxWidth: 345 }} key={movie._id} className="single-card" >
<CardMedia
  component="img"
  alt={movie.name}
  height="140"
  image={movie.image}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {movie.name}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    {movie.description}
  </Typography>
</CardContent>
<CardActions className="card-bottom">
  <Button size="small"><Link to={`/movies/${movie._id}`} > Book </Link></Button>
  <Button size="small">Play Trailer</Button>
  <span className="rating">{movie.ratings}</span>
</CardActions>
</Card>
             ))}
        </div>
    )
}

export default Mcard
