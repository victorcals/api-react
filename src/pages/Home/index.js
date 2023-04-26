import { Movie } from "../../components/styleMovie";
import { Container, MovieList } from "../../components/styles";
import { useState } from "react";
import React, { useEffect } from "react";
import Keys from "../../Config/key";



function Home() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fab9af3022mshcd4e9c52f9e1a85p195239jsne2e03521e6ff',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };


    const [movies, setMovies] = useState([])

    const image_path = 'https://image.tmdb.org/t/p/w500'


    useEffect(() => {
        fetch('https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/', options)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, []);

    return (



        < Container >
            <h1> Movies</h1>

            <MovieList>



                {
                    movies.map(movie => {
                        return (
                            <Movie>
                                <a href="https://uiverse.io/challenges/open-source-card-challenge">

                                    <img src={movie.image_url} alt={movie.title} /></a>


                                <span> {movie.title}</span>

                            </Movie>
                        )
                    })
                }


            </MovieList>

        </Container>
    )
}

export default Home;