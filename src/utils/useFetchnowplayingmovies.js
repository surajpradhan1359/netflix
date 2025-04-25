import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "./movieSlice";
import { option } from "./data";

export const useFetchnowplayingmovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      option
    );
    let data = await response.json();
    dispatch(addNowPlayingMovie(data.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
