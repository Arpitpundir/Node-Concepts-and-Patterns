export function log(msg){
    console.log(msg);
};

export const DEFAULT_LEVEL = 'info';

export const LEVELS = {

};

export class Logger {
    construct (name){
        this.name = name;
    }

    log(message){
        console.log(message);
    }
}

// Default export

export default class Logger2{
    constructor(defaultMessage = 'Hi'){
        this.defaultMessage = defaultMessage;
    }

    log(message){
        console.log(`${this.defaultMessage}: ${message}`);
    }
}