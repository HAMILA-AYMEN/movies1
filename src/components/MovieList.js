import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import React, { useState,useEffect } from "react";
import MovieCard from './MovieCard'




function BasicExample({movies}) {
  const [filteredList, setFilteredList] = useState(movies);
  const [selectedTitle, setSelectedTitle] = useState("");
  const[addMovie,setAddMovie]=useState("");
   
  const add=(movies)=>{
    setAddMovie([...addMovie, movies]);
    return movies

  }
  const handleAddChange = (event) => {
    setAddMovie(event.target.value);
  };


  const filterByTitle = (filteredData) => {
   
    if (!selectedTitle) {
      return filteredData;
    }
    const filteredMovies = filteredData.filter(
      (movie) => movie.title===selectedTitle
    );
    return filteredMovies;
  };
  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };


  const [selectedRate, setSelectedRate] = useState();

  const filterByRate = (filteredData) => {
   
    if (!selectedRate) {
      return filteredData;
    }

    const filteredMovies = filteredData.filter(
      (movie) => movie.rate === selectedRate
    );
    return filteredMovies;
  };
  const handleRateChange = (event) => {
    const inputRate = Number(event.target.id);

    if (inputRate === selectedRate) {
      setSelectedRate("");
    } else {
      setSelectedRate(inputRate);
    }
  };

  useEffect(() => {
    
 var filteredData = filterByTitle(movies);
 filteredData = filterByRate(filteredData);
    setFilteredList(filteredData);
    
  }, [selectedTitle, selectedRate]);

 
  
     
  

  
  return (
    <div>
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"style={{color:"white"}}>Medi@Land</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              value={selectedTitle}
              onChange={handleTitleChange}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              value={addMovie}
              onChange={handleAddChange }
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Add</Button>
          </Form>

          
          
         
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>Filter by Title :</div>
        <select
          id="title-input"
          value={selectedTitle}
          onChange={handleTitleChange}
        >
          <option value="">All</option>
          <option value="Titanic">Titanic</option>
          <option value="The Godfather">The Godfather</option>
          <option value="Schindler's List">Schindler's List</option>
          <option value="The Shawshank Redemption">The Shawshank Redemption</option>
          <option value="12 Angry Men">12 Angry Men</option>
          <option value="The Dark Knight">The Dark Knight</option>
          <option value="Pulp Fiction">Pulp Fiction</option>
        </select>

        <div>Filter by Rate</div>
        <div id="Title-options" onClick={handleRateChange}>
        <div
          className={selectedRate === 1 ? "active-option" : "filter-option"}
          id="1"
        >
          ⭐
        </div>
        <div
          className={selectedRate === 2 ? "active-option" : "filter-option"}
          id="2"
        >
          ⭐⭐
        </div>
        <div
          className={selectedRate === 3 ? "active-option" : "filter-option"}
          id="3"
        >
          ⭐⭐⭐
        </div>
        <div
          className={selectedRate === 4 ? "active-option" : "filter-option"}
          id="4"
        >
         ⭐⭐⭐⭐
        </div>
        <div
          className={selectedRate === 5 ? "active-option" : "filter-option"}
          id="5"
        >
          ⭐⭐⭐⭐⭐
        </div>
      </div>

    <div className='row justify-content-center'
   
    >
                {filteredList.map((item,index)=>{
                    return (
                      <>
                        <MovieCard
                        item={item}
                        key={index}
                        
                        />
                        
                
                       </> 
                    )
                    
                        

                }
                )}
                
            
            </div>
    
    </div>
    
  );
}

export default BasicExample;






