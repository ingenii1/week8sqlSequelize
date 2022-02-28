//starting with the imports//
require("dotenv").config();
const yargs = require("yargs");
const argv = yargs(hideBin(process.argv)).argv;
const {hideBin} = require("yargs/helpers");
const sequelize = require("../db/connection");
const { Film } = require("../movie/movieModel");
const { addFilm, list, updateMovie, deleteMovie } = require("./movie/movieMethod");



//function//
const app = async (commandLineInput) => {
    try {
      connection.authenticate();
    } catch (error) {
      console.log(error);
    }
  
    try {
      if (commandLineInput.add) {
        await Movie.sync({ alter: true });
        await addMovie({
          title: commandLineInput.title,
          actor: commandLineInput.actor,
          rating: commandLineInput.rating,
        });
      } else if (commandLineInput.list) {
        await listMovies();
      } else if (commandLineInput.update && commandLineInput.to) {
        if (commandLineInput.title) {
          await updateMovies(commandLineInput.title, commandLineInput.to);
        } else {
          throw "update didn't do  zilch";
        }
      } else if (commandLineInput.delete) {
        deleteMovies(commandLineInput.title);
      }
    } catch (error) {
      console.log(error);
    }
  };
// const app = async() =>{
//     if(argv.add){
//         //create the objects of the data base by an ARRAY//
//         const filmObj = {
//         name: argv.title,
//         actor: argv.actor
//         }
//         await addFilm(filmObj)
//     } else if(argv.list){
//         await list()
//     } else{
//         console.log("Wrong Query")
//     }
// }

app()