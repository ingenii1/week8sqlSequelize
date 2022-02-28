//starting with the imports//
const { Sequelize } = require("sequelize");
const Film = require("../movie/movieModel");
const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

//function//

//CREATE OPERATION//
exports.addFilm = async(filmObj) =>{
    try{
        await Film.sync()//=>create the data base
        await Film.create(filmObj)//=>create an entry
        console.log(`We added ${movie.name}.`);
    } catch (error) {
        console.log(error)
    }
};
//READ OPERATION//
exports.list =  async() =>{
    try{
     const listOfMovies =  await Film.findAll();
     console.log(listOfMovies)
    } catch (error) {
        console.log(error)
    }
};
//UPDATE OPERATIONN//
exports.updateMovie = async (title, updatedTitle) => {
try {
    const film = await Film.findOne({ where: { name: title } });
    console.log(JSON.stringify(movie));
    console.log(`We updated ${film.name}.`);
    try {
      movie.title = updatedTitle;
      movie.save();
      // Movie.update(movie);
    } 
    catch (error) {
      console.log("naaa");
    }
  } 
  
  catch (error) {
    console.log(error);
  }
};

//DELETE OPERATION//
exports.deleteMovie = async (title) => {
try {
    Movie.destroy({ where: { title: title } });
  } catch (error) {
    console.log(error);
  }
};