import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import MovieList from './components/MovieList'

function App() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchMovie = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            }
            const url = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1'
            const response = await fetch(url, options)
            const data = await response.json()
            setMovie(data.results)
            console.log(movie)
        }
        fetchMovie()
    })

    return (
        <>
            <Router>
                <div className="bg-black">
                    <Header />
                    <Banner />
                    <MovieList title={'Phim Hot'} data={movie.splice(0, 7)} />
                    <MovieList title={'Phim đề cử'} data={movie.splice(0, 7)} />
                </div>
            </Router>
        </>
    )
}

export default App
