import { BrowserRouter as Router } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Banner from "./components/Banner"
import MovieList from "./components/MovieList"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { data } from "autoprefixer"

function App() {
    const [movie, setMovie] = useState([])
    const [movieRate, setMovieRate] = useState([])
    const [movieSearch, setMovieSearch] = useState([])

    useEffect(() => {
        const fetchMovie = async () => {
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            }
            const url_movie = "https://api.themoviedb.org/3/movie/popular?language=vi&page=1"
            const url_movie_rate =
                "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1"

            const [res1, res2] = await Promise.all([
                fetch(url_movie, options),
                fetch(url_movie_rate, options),
            ])

            const data_movie = await res1.json()
            const data_movie_rate = await res2.json()
            setMovie(data_movie.results)
            setMovieRate(data_movie_rate.results)
        }
        fetchMovie()
    }, [])

    const handleSearch = async (search) => {
        setMovieSearch([])
        try {
            const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=vi`
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            }
            const res = await fetch(url, options)
            const data = await res.json()
            setMovieSearch(data.results)

            if (movieSearch.length === 0) {
                toast.warn("Không tìm thấy phim!")
            }
        } catch (error) {
            toast.error("Không tìm thấy phim!")
            console.log(error)
        }
    }

    return (
        <>
            <Router>
                <div className="bg-black">
                    <Header onSearch={handleSearch} />
                    <Banner />
                    {movieSearch.length > 0 ? (
                        <MovieList title="Kết quả tìm kiếm" data={movieSearch} />
                    ) : (
                        <>
                            <MovieList title={"Phim Hot"} data={movie} />
                            <MovieList title={"Phim đề cử"} data={movieRate} />
                        </>
                    )}
                </div>
            </Router>
            <ToastContainer />
        </>
    )
}

export default App
