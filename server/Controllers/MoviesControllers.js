import asyncHandler from "express-async-handler";
import { MoviesData } from "../Data/MovieData.js";
//************Public Controllers**** */
//import movies
//POST/api/movies/import
import Movie from "../Models/MoviesModel.js";
const importMovies = asyncHandler(async (req, res) => {
  //first we make sure our movies is ampty bt delete all decoment

  await Movie.deleteMany({});
  //insert all movies from MoviesDatabase
  const movies = await Movie.insertMany(MoviesData);
  res.status(201).json(movies);
});

export { importMovies };
