const key = "8ff2200fc998ec1c154ca6fab05f1e51";
const baseUrl = "https://api.themoviedb.org/3";

//api.themoviedb.org/3/movie/157336?api_key=8ff2200fc998ec1c154ca6fab05f1e51
//api.themoviedb.org/3/movie/157336/videos?api_key=8ff2200fc998ec1c154ca6fab05f1e51

const endpoints = {
  popular: `${baseUrl}/movie/popular?api_key=${key}`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
  trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
  comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
  upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
};

export function createImageUrl(filename, size) {
  return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endpoints;
