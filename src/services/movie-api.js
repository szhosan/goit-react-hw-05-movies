const API_KEY = 'bbe6ca7cc6c7a5ddd38cfa2cd00fb2a2';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCredits(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchSearchMovie(query) {
  return fetchWithErrorHandling(`
  https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
}
