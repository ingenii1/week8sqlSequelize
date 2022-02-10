//starting with the imports//
const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");
const { addFilm, list } = require("./movie/movieMethod");
const argv = targs(hideBin(process.argv)).argv;

//function//
const app = async() =>{
    if(argv.add){
        //create the objects of the data base by an ARRAY//
        const filmObj = {
        name: argv.title,
        actor: argv.actor
        }
        await addFilm(filmObj)
    } else if(argv.list){
        await list()
    } else{
        console.log("Wrong Query")
    }
}

app()