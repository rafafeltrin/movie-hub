import React from "react";
import { getCast, getMovie, getProvider, getSimilares, getVideo } from "../../api/Require";
import MovieSingle from "../../components/MovieSingle";


export default async function MovieSinglePage({ params }) {
    const movie = await getMovie(params.id)
    const videos = await getVideo(params.id)
    const provider = await getProvider(params.id)
    const cast = await getCast(params.id)
    const similares = await getSimilares(params.id)

    console.log(movie)
    console.log(videos)

    function isProvider(){
        try {
            console.log(provider.results.BR.flatrate)
            return true
        }
        catch (err) {
            console.log(err)
            return false
        }
    }
    function getGenero(){
        let generos = ''
        for (let genero of movie.genres){
            generos += genero.name + ', '
        }
        
        return generos.trimEnd()
    }

    return (
      <div>
        <MovieSingle 
            title={movie.title}
            coverImage={movie.poster_path}
            duration='teste'
            genre={getGenero()}
            releaseDate={movie.release_date.slice(0,4)}
            trailerUrl= {videos.results[0].key}
            synopsis={movie.overview}
            availability={isProvider() ? provider.results.BR.flatrate : false }
            cast = {cast.cast.slice(0,15)}
            similares={similares.results}
        />
      </div>
    );
};