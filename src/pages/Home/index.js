import { Movie } from "../../components/Style/styleMovie";
import { Container, MovieList, OrderByContainer } from "../../components/Style/styles";

import { useState } from "react";
import React, { useEffect } from "react";
import Keys from "../../Config/key";
import { Link } from "react-router-dom";


function Home() {
    const [movies, setMovies] = useState([]);
    const [orderBy, setOrderBy] = useState('titulo');
    const [orderDirection, setOrderDirection] = useState('asc');

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => {
                console.error('Erro ao carregar filmes:', error);
            });
    }, []);

    const handleOrderByChange = (event) => {
        const [newOrderBy, newOrderDirection] = event.target.value.split(',');
        setOrderBy(newOrderBy);
        setOrderDirection(newOrderDirection);
    };

    const compareMovies = (a, b) => {
        let comparison = 0;
        if (orderBy === 'titulo') {
            comparison = a.titulo.localeCompare(b.titulo);
        } else if (orderBy === 'ano') {
            comparison = a.ano - b.ano;
        } else if (orderBy === 'nota') {
            comparison = a.nota - b.nota;
        }
        if (orderDirection === 'desc') {
            comparison *= -1;
        }
        return comparison;
    };

    const sortedMovies = [...movies].sort(compareMovies);

    return (
        <Container>
            <h1>Filmes</h1>
            <OrderByContainer>
                <div className="d-flex justify-content-end">
                    <div className="col-md-1">
                        <div className="form-group">
                            <label htmlFor="orderby">Ordenar por:</label>
                            <select id="orderby" className="form-control" value={`${orderBy},${orderDirection}`} onChange={handleOrderByChange}>                            
                                <option value="titulo,asc">Título (A-Z)</option>
                                <option value="titulo,desc">Título (Z-A)</option>
                                <option value="ano,asc">Ano antigo</option>
                                <option value="ano,desc">Ano recente</option>
                                <option value="nota,asc">Nota menor</option>
                                <option value="nota,desc">Nota maior</option>
                            </select>
                        </div>
                    </div>
                </div>
            </OrderByContainer>
            <MovieList>
                {sortedMovies && sortedMovies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${movie.poster}`} alt={movie.titulo} />
                            </Link>
                            <span>{movie.titulo}</span>
                            <span>Nota: {movie.nota}</span>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container >
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