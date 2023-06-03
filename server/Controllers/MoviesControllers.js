import asyncHandler from "express-async-handler";
import { MoviesData } from "../Data/MovieData.js";
//************Public Controllers**** */
//import movies
//POST/api/movies/import
import Movie from "../Models/MoviesModel.js";
import { MoviesData } from "../Data/MovieData.js";
const importMovies = asyncHandler(async (req, res) => {
  //first we make sure our movies is ampty bt delete all decoment

  await Movie.deleteMany({});
  const movies = await Movie.insertMany(MoviesData);
  res.status(201).json(movies);
});

export {importMovies} ;