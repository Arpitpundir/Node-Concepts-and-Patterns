/**
 * Helpfull in creating a new object with all listed methods
 * 
 * What a class construct does:
 * Creates function named User that becomes result of class declaration
 * This function code is same as that of constructor 
 * User.prototype stores methods such as sayHi 
 * When new object is created its methods are taken from User.prototype
 */
class User {
    constructor(name){

        // Initialize Object in constructor

        this.name = name;
    }

    sayHi(){
        alert(this.name);
    }
}

/**
 * Class Expression:
 * Just like functions classes can be defined inside another expression, passed around, returned, assigned
 */

let User1 = class {
    sayHi(){
        alert("Hello");
    }
}

/**
 * Class Fields:
 * class fields are set on individual objects not on User.prototype
 * 
 * Losing this
 * class fields can be used to make bound methods, as function have dynamic
 * this binding so if an object method is passed around and called in another
 * context, this wont be reference to its object any more
 * method arrow function can be added as class fields, function is present on object
 * and arrow function retains their this binding
 */

class User2 {
    constructor(value){
        this.value = value;
    }
    name = 'John';
    click = () => {
        console.log(this.value);
    }
}

let user = new User2('James Moore');
setTimeout(user.click, 1000);
// click above does not lose this

