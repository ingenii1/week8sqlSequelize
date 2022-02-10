//starting with the imports//
const Film = require("./movieModel");
const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");
const argv = targs(hideBin(process.argv)).argv;

//function//
exports.addFilm = async(filmObj) =>{
    try{
        await Film.sync()//=>create the data base
        await Film.create(filmObj)//=>create an entry
    } catch (error) {
        console.log(error)
    }
}

exports.list =  async() =>{
    try{
     const listOfMovies =  await Film.findAll()
     console.log(listOfMovies)
    } catch (error) {
        console.log(error)
    }
}