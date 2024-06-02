import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import Header from "./Header"


const Browse = ()=>{
    useNowPlayingMovies();
    return (
        <div>
            <Header/>
        </div>
    )
}

export default Browse