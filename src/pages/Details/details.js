import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "./style";
import Button from "react-bootstrap/Button";

function Details() {
    const { id } = useParams();
    const [movies, setMovies] = useState({});

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/movies/movies/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            });
    }, [id]);

    return (
        <Container>
            <div className="movies">
                <img src={movies.poster} alt={movies.titulo} />

                <div className="details">
                    <h1>Título original: {movies.titulo}</h1>
                    <span> Ano: {movies.ano}</span>
                    <span> Nota: {movies.nota}</span>
                    <span> Direção: Jon Favreau  Roteiro   </span>
                    <span> Roteiro: Matt Holloway, Mark Fergus</span>
                    <span>assistido: {movies.assistido}</span>





                    <Link to="/">
                        <button variant="primary">Voltar</button>
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default Details;
