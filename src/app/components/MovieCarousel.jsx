"use client";
import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const MovieCarousel = ({ movies }) => {
    const carouselRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (carouselRef.current) {
            const startPosition = carouselRef.current.scrollLeft;
            const targetPosition = startPosition + scrollOffset;
            const duration = 300; // Duration in ms
            const startTime = performance.now();

            const animateScroll = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const easing = easeInOutCubic(progress);

                carouselRef.current.scrollLeft = startPosition + (targetPosition - startPosition) * easing;

                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        }
    };

    const scrollLeft = () => {
        scroll(-300);
    };

    const scrollRight = () => {
        scroll(300);
    };

    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    return (
        <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md" onClick={scrollLeft}>
                <AiOutlineLeft size={24} color='black'/>
            </button>
            <div ref={carouselRef} className="flex overflow-x-auto scrollbar-hide space-x-4 p-6">
                {movies.map((movie) => (
                    <div className='w-1/6 min-w-[200px]' key={movie.id}>
                        <MovieCard
                            image={movie.backdrop_path}
                            title={movie.title ?  movie.title : movie.name}
                            rating={movie.vote_average}
                            id={movie.id}
                        />
                    </div>
                ))}
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md" onClick={scrollRight}>
                <AiOutlineRight size={24} color='black'/>
            </button>
        </div>
    );
}

export default MovieCarousel;


