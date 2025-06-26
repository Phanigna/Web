const Movie = require('../models/movieModel');

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addMovie = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newMovie = new Movie({ title, description });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getMovies, addMovie };
