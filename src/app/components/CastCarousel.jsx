"use client";
import React, { useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const CastCarousel = ({ cast }) => {
    const base_url = 'https://image.tmdb.org/t/p/';
    const file_size = 'original';
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md" onClick={scrollLeft}>
                <AiOutlineLeft size={24} color='black' />
            </button>
            <div ref={carouselRef} className="flex overflow-x-auto space-x-4 scrollbar-hide ">
                {cast.map((actor, index) => (
                    <div key={index} className="w-1/6 min-w-[150px]">
                        <div className="relative mb-2">
                            <img src={base_url + file_size + actor.profile_path} alt={actor.name} className="w-full rounded-lg" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                        </div>
                        <h3 className="text-sm font-bold">{actor.name}</h3>
                        <p className="text-xs text-gray-400">{actor.character}</p>
                    </div>
                ))}
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md" onClick={scrollRight}>
                <AiOutlineRight size={24} color='black' />
            </button>
        </div>
    );
};

export default CastCarousel;

