"use client";
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { getTopRating, getCinema } from '../api/Require';
import { Suspense } from 'react';
const fetchData = async (fetchFunction, page) => {
    try {
        const data = await fetchFunction(page);
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;
    }
};

const TopRatingPage = ({ selection, title, p}) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    console.log(selection)
    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetchData(selection == 'topRating' ? getTopRating : getCinema, page);
            if (data) {
                setMovies(data.results);
                setTotalPages(Math.min(data.total_pages, 10)); // Limitar a 10 páginas
            }
        };

        fetchMovies();
    }, [page, selection]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className="container mx-auto md:p-14 p-4">
            <h1 className="text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 dark:from-blue-700 dark:via-purple-700 dark:to-pink-600">
                    {title}
                </span>
            </h1>
            <p className="mb-6">{p}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {movies.map((movie) => (
                    <Suspense fallback={<p>Carregando</p>}>
                        <MovieCard
                        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        title={movie.title}
                        rating={movie.vote_average}
                        id={movie.id}
                        />
                    </Suspense>
                    
                ))}
            </div>
            <div className='flex justify-center'>
                <nav aria-label="Page navigation example" className="mt-8">
                    <ul className="flex items-center -space-x-px h-8 md:text-sm">
                        <li>
                            <button
                                onClick={() => handlePageChange(page - 1)}
                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                disabled={page === 1}
                            >
                                <span className="sr-only">Previous</span>
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index + 1}>
                                <button
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`flex items-center justify-center px-3 h-8 leading-tight ${page === index + 1 ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => handlePageChange(page + 1)}
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                disabled={page === totalPages}
                            >
                                <span className="sr-only">Next</span>
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default TopRatingPage;
