import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "03978b23e89a13a44a461e0d490b0a6c",
        language: 'ko-KR'
    }
});

export const movieApi = {
    getMovie: (id) => apiClient.get(`movie/${id}`, {
        params: { append_to_response: 'videos' }
    }),
    getNowPlaying: () => apiClient.get('movie/now_playing'),
    getUpcoming: () => apiClient.get('movie/upcoming'),
    getPopular: () => apiClient.get('movie/popular'),
    searchMovies: (term) => apiClient.get('search/movie', {
        params: { query: encodeURIComponent(term) }
    })
};

export const tvApi = {
    getShow: (id) => apiClient.get(`tv/${id}`, {
        params: { append_to_response: 'videos' }
    }),
    getPopular: () => apiClient.get('tv/popular'),
    getTopRated: () => apiClient.get('tv/top_rated'),
    getAiringToday: () => apiClient.get('tv/airing_today'),
    searchTv: (term) => apiClient.get('search/tv', {
        params: { query: encodeURIComponent(term) }
    })
}

export default apiClient;