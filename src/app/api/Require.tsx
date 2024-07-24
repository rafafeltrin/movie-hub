const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmFhZTkyOWQ5MjJkMzNkZjJlMGY1MzRmNmE5NmUwOSIsIm5iZiI6MTcyMTA2ODI2Mi4yNDQ1ODEsInN1YiI6IjY0MWMzNDU5MjRiMzMzMDBmNjE0MmQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oKsx2PxJzxH0Ue2bWtDXuKI2qQAM-MmIY4MEA430Iek'
    }
  };

export async function getMoviesTrending() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=pt-BR', options);
    const data = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return data;
}

export async function getSeriesTrending() {
    const res = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=pt-BR', options);
    const data = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return data;
}

export async function getMovie(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options);
    const data = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return data;
}

export async function getVideo(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`, options);
    const data = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return data;
}

export async function getProvider(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, options);
    const data = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return data;
}

export async function getCast(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=pt-BR`, options);
    const data = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return data;
}

export async function getSimilares(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=pt-BR&page=1`, options);
    const data = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return data;
}

export async function getTopRating(page = 1) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=${page}`, options);
    const data = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return data;
}

export async function getCinema(page = 1) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=${page}`, options);
    const data = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return data;
}