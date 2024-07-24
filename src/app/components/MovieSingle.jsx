"use client";
import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import CastCarousel from "./CastCarousel";
import MovieCarousel from "./MovieCarousel";

const MovieSingle = ({
    title,
    coverImage,
    duration,
    genre,
    releaseDate,
    trailerUrl,
    synopsis,
    availability,
    cast,
    similares
}) => {
    const [showTrailer, setShowTrailer] = useState(false);

    const toggleTrailer = () => setShowTrailer(!showTrailer);

    const base_url = "https://image.tmdb.org/t/p/";
    const file_size = "original";
    const path_image = base_url + file_size + coverImage;

    function getPath() {
        if (availability) {
            return base_url + file_size + availability[0].logo_path;
        }
        return false;
    }

    return (
        <div className="bg-gray-50 dark:bg-[#05030c]  text-black dark:text-white min-h-screen p-10 md:px-32 mx-auto ">
            <div className="flex-col flex md:flex-row justify-between">
                <div className="md:w-5/12">
                    <div className="relative mb-1 ">
                        <img
                            src={path_image}
                            alt={title}
                            className="w-full md:w-7/12 rounded-lg"
                        />
                    </div>

                    <button
                        className="flex items-center justify-center w-full md:w-7/12 h-12 text-white bg-purple-700 hover:bg-purple-800 rounded-lg mb-2"
                        onClick={toggleTrailer}
                    >
                        <AiFillPlayCircle size={24} className="mr-2" />
                        Assistir Trailer
                    </button>
                </div>
                <div className="md:w-7/12">
                    <h1 className="text-4xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 dark:from-blue-700 dark:via-purple-700 dark:to-pink-600">
                            {title}
                        </span>
                    </h1>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4">Sinopse</h2>
                        <p>{synopsis}</p>
                    </div>

                    <div className="mb-6">
                        <p>
                            <strong>Duracao:</strong> {duration}
                        </p>
                        <p>
                            <strong>Estilo:</strong> {genre}
                        </p>
                        <p>
                            <strong>Lancamento:</strong> {releaseDate}
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4">Disponível em</h2>
                        {getPath() ? (
                            <img src={getPath()} className="w-16" />
                        ) : (
                            <p>Somente nos cinemas</p>
                        )}
                    </div>
                </div>
                {showTrailer && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative w-full max-w-3xl h-48 md:h-96">
                            <button
                                className="absolute -top-10 right-0 md:-right-8 text-white bg-purple-700 hover:bg-purple-800 rounded-full p-2"
                                onClick={toggleTrailer}
                            >
                                X
                            </button>
                            <iframe
                                className="w-full h-full rounded-lg"
                                src={`https://www.youtube.com/embed/${trailerUrl}?si=-c81d97bFSNPW7cd`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Trailer"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className="mb-6 mt-12 ">
                <h2 className="text-2xl font-bold mb-4">Elenco Principal</h2>
                <CastCarousel cast={cast} />
            </div>
            <div className="mb-6 mt-12">
                <h2 className="text-2xl font-bold mb-4">Recomendações</h2>
                <MovieCarousel movies={similares} />
            </div>
            
        </div>
    );
};

export default MovieSingle;

/*
<div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Elenco Principal</h2>
                    <CastCarousel cast={cast} />
</div>
*/
