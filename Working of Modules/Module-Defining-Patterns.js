// Assigning values to exports or module.exports
exports.info = (info) => {
    console.log(`Logging Information: ${info}`)
}

// Exporting a only a single function from single module
module.exports = (info) => {
    console.log(`Logger: ${info}`)
} 

// Exporting a single class from a single module
class Logger {
    constructor(){

    }

    log(message){
        console.log(`Log: ${message}`);
    }

    info(message){
        console.log(`Info: ${message}`);
    }
};

module.exports = Logger;

//Exporting a single instance of a class
class Logger {
    constructor(){

    }

    log(message){
        console.log(`Log: ${message}`);
    }

    info(message){
        console.log(`Info: ${message}`);
    }
};

module.exports = new Logger();