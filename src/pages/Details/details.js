import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Container } from "./style";
import { Button } from "bootstrap";


function Details() {


    const { id } = useParams()
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => {

                const { titulo, ano } = data



                const movies = {
                    id,
                    titulo: titulo.data,
                    ano,
                    // nota: data.nota,
                    // poster: data.poster,
                    // assistido: data.assistido



                    // id,
                    // titulo: data.titulo,
                    // ano: data.ano,
                    // nota: data.nota,
                    // poster: data.poster,
                    // assistido: data.assistido
                }


                setMovies(movies)
            })

    }, [id]);

    return (
        <Container>
            <div className="movies" >
                <img src={movies.poster} />

                <div className="details" >
                    <h1> Titulo: {movies.titulo}  </h1>
                    <span>Ano123: {movies.data} </span>

                    <button> voltar</button>
                </div>

            </div>
        </Container>
    )

}

export default Details;