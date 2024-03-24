/**
 * Node.js module system ensures that below code do not execute every time
 * dbInstance is imported but instead dbInstance created and cached
 * on first invocation gets returned
 */
class Database {
    constructor(dbName, connectionDetails){

    }
}

export const dbInstance = new Database("singelton-demo", {
    url: '',
    username: '',
    password: ''
});
