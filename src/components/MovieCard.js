import React from 'react';
import Card from 'react-bootstrap/Card';
import Rating from '@material-ui/lab/Rating';



function MovieCard({item}) {
 
 
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img id='img' variant="top" src={item.posterUrl}  />
      <Card.Body>
        <Card.Title >{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
       
       
       
        <Rating
          name="Rating Label"
          value={item.rate}
         
        />
      

        
        
      </Card.Body>
      
    </Card>
   
  );
}

export default MovieCard;