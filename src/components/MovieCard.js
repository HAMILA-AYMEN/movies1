import React from 'react';
import Card from 'react-bootstrap/Card';
import Rating from '@material-ui/lab/Rating';




function MovieCard({movie}) {
 
 
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img id='img' variant="top" src={movie.posterUrl}  />
      <Card.Body>
        <Card.Title >{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        
       
       
       
        <Rating
          name="Rating Label"
          value={movie.rate}
         
        />
      

        
        
      </Card.Body>
      
    </Card>
   
  );
}

export default MovieCard;