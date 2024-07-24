import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';

const MovieCard = ({ image, title, rating, id }) => {
    const base_url = 'https://image.tmdb.org/t/p/'
    const file_size = 'original'
    const path_image = base_url + file_size + image

    return (
        <Link href={`/movie/${id}`} className='p-2 hover:p-0'>
            <div className='relative w-full h-96 rounded-lg overflow-hidden shadow-md'>
                <img className="object-cover w-full h-full" src={path_image} alt={title} layout="fill" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 from-1% to-transparent hover:from-black/20"></div>
                <div className="absolute bottom-0 p-4 text-white w-full">
                    <h5 className="text-sm font-bold">{title}</h5>
                    <div className="flex items-center mt-2">
                        <AiFillStar className="text-yellow-500" />
                        <span className="ml-2">{rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard;



{
    //<button className="w-full h-7 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //    Ver mais
    //</button>
    }