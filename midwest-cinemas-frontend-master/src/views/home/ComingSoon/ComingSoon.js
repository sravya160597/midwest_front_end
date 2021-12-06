import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Moviedetails from '../Moviedetails';
import './ComingSoon.css';

export default function ComingSoon() {
  return (
      <>
      <div className="comingsoonbox">
    <Card sx={{ maxWidth: 345 }}  className="single-card" >
<CardMedia
  component="img"
  alt="Army of Thieves"
  height="140"
   src="./Army1.jpg"
  image= "./Army1.jpg"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Army of Thieves
  </Typography>
  <Typography variant="body2" color="text.secondary">
    A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.
  </Typography>
</CardContent>
<CardActions className="card-bottom">
  <Button size="small" onClick={Moviedetails}>Book in advance</Button>
  <Button size="small">Play Trailer</Button>
  <span className="rating"></span>
</CardActions>
</Card>
    <Card sx={{ maxWidth: 345 }}  className="single-card" >
<CardMedia
  component="img"
  alt=" Finch"
  height="140"
  src="./Army1.jpg"
  image="./Army1.jpg"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Finch
  </Typography>
  <Typography variant="body2" color="text.secondary">
    On a post-apocalyptic Earth, a robot, built to protect the life of his dying creator's beloved dog, learns about life, love, friendship, and what it means to be human.
  </Typography>
</CardContent>
<CardActions className="card-bottom">
  <Button size="small" onClick={Moviedetails}>Book in advance</Button>
  <Button size="small">Play Trailer</Button>
  <span className="rating"></span>
</CardActions>
</Card>
    </div>
  </>
  );
}