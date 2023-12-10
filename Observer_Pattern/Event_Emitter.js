import { EventEmitter } from "event";
import {readFile} from 'fs';

function findRegex(files, regex){
    for(const file of files){
        readFile(file, 'utf8', (err, content) => {
            if(err){
                return emitter.emit('error', err);
            }
            emitter.emit('fileread', file);
            const match = content.match(regex);
            if(match){
                match.forEach(elem => emitter.emit('found', file, elem));
            }
        })
    }
    return emitter;
}
const emitter = new EventEmitter();

