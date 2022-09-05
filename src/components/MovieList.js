import React, { useState,useEffect } from "react";
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';







function MovieList() {
  const [movies,setMovies ]=useState([
    {
      title: "Titanic",
      description:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
      rate: 4,
      trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ",
     
      id:1
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
      rate: 3,
      trailer:"https://www.youtube.com/embed/6hB3S9bIaco",
      id:2
  
    },
    {
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
      rate: 5,
      trailer:"https://www.youtube.com/embed/UaVTIH8mujA",
     
      id:3
  
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest .",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rate: 2,
      trailer:"https://www.youtube.com/embed/EXeTwQWrcwY",
     
      id:4
    },
    {
      title: "12 Angry Men",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      rate: 1,
      trailer:"https://www.youtube.com/embed/13J_9B5jEk",
    
      id:5
  
    },
    {
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rate: 5,
      trailer:"https://www.youtube.com/embed/gG22XNhtnoY",
     
      id:6
  
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales.",
      posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
      rate: 5,
      trailer:"https://www.youtube.com/embed/s7EdQ4FqbhY",
     
      id:7
  
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
      rate: 5,
      trailer:"https://www.youtube.com/embed/r5X-hFf6Bwo",
     
      id:8
  
    },
    {
      title: "The Good, the Bad and the Ugly",
      description:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried.",
      posterUrl:
        "https://cdn.hmv.com/r/w-1280/hmv/files/33/3385d6d7-570c-4baa-b344-552f9b6147f5.jpg",
      rate: 4,
      trailer:"https://www.youtube.com/embed/WCN5JJY_wiA",
     
      id:9
  
    },
    {
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something.",
      posterUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgTszE1phYg2G7H4RrgeSEssOw-Kpnh0Si-sF5pVQQrBXJ_6e",
      rate: 3,
      trailer:"https://www.youtube.com/embed/O1nDozs-LxI",
      
      id:10
  
    }  

  ]);
 
  const add = title => {
    const newMovie = [...movies, {title,id:Math.random(),rate:Math.random(),}];
    setMovies(newMovie);
  };
       
      // Selected Titlefilter
  const [selectedTitle, setSelectedTitle] = useState("");
  // Selected Rate filter
  const [selectedRate, setSelectedRate] = useState();
  const filterByTitle = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedTitle) {
      return filteredData;
    }

    const filteredMovies = filteredData.filter(
      (movie) => movie.title===selectedTitle
    );
    return filteredMovies;
  };

  const filterByRate = (filteredData) => {
    // Avoid filter for null value
    if (!selectedRate) {
      return filteredData;
    }

    const filteredMovies = filteredData.filter(
      (movie) => movie.rate === selectedRate
    );
    return filteredMovies;
  };

  // Update seletedTitle state
  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  // Toggle seletedRate state
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
   setMovies(filteredData);
  }, [selectedTitle, selectedRate]);
     
  return (
    <>
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
            
           
            
          </Nav>
          
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
    </div>
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
            <div className='row justify-content-center'>
            <AddMovie add={add}/>
                {movies.map((item,index)=>{
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
        
        </>

  )
}

export default MovieList
