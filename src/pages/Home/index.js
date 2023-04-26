import { Movie } from "../../components/styleMovie";
import { Container, MovieList } from "../../components/styles";
import { useState } from "react";
import React, { useEffect } from "react";
import Keys from "../../Config/key";



function Home() {



    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => {
                console.error('Erro ao carregar filmes:', error);
            });
    }, []);

    return (
        <Container>
            <h1>Filmes</h1>
            <MovieList>
                {movies && movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href="https://uiverse.io/challenges/open-source-card-challenge">
                                <img src={`${movie.poster}`} alt={movie.titulo} />
                            </a>
                            <span>{movie.titulo}</span>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );


}

export default Home;















// return (



//     < Container >
//         <h1> Movies</h1>

//         <MovieList>



//             {
//                 movies.map(movie => {
//                     return (
//                         <Movie>
//                             <a href="https://uiverse.io/challenges/open-source-card-challenge">

//                                 <img src={movie.image_url} alt={movie.title} /></a>


//                             <span> {movie.title}</span>

//                         </Movie>
//                     )
//                 })
//             }


//         </MovieList>

//     </Container>
// )