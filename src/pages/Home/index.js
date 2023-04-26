import { Movie } from "../../components/styleMovie";
import { Container, MovieList } from "../../components/styles";



function Home() {


    const movies = [
        {
            title: 'shoto',
            image_url: 'https://i.pinimg.com/474x/e5/b1/65/e5b165832a3fcc5140b5ab510e7c1baa.jpg'

        },
        {
            title: 'homem ',
            image_url: 'https://i.pinimg.com/474x/e5/b1/65/e5b165832a3fcc5140b5ab510e7c1baa.jpg'

        },
        {
            title: 'gojo',
            image_url: 'https://i.pinimg.com/474x/e5/b1/65/e5b165832a3fcc5140b5ab510e7c1baa.jpg'

        }
    ]

    return (



        < Container >
            <h1> Movies</h1>

            <MovieList>



                {
                    movies.map(movie => {
                        return (
                            <Movie>
                                <a href="https://uiverse.io/challenges/open-source-card-challenge">  <img src={movie.image_url} alt={movie.title} /></a>


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