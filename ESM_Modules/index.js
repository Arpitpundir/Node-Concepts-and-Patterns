import MyLogger, { Logger, log } from "./Logger.js";

const loggerInstance = new Logger();
loggerInstance.log('Logging with class Logger instance');

log('Logging with log function');

const MyLoggerInstance = new MyLogger('Hello');
MyLoggerInstance.log('How are you doing!');


