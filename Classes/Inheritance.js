class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`Running with speed ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        console.log(`Stopping`);
    }
}

/**
 * extends is used to inherit a class i.e class Child extends Parent
 * extends works using prototype mechanics
 * Rabbit.prototype.[[Prototype]] will point to Animal.prototype
 * so if method is not found in Rabbit.prototype, javascript takes it from
 * - Animal.prototype
 * 
 * Overriding a constructor
 * if child class has no constructor then an empty constructor with a call to super
 * - is assigned to child class
 * while writing a constructor in child class we must call super, before using this
 * - because a derived constructor does not initialize this, it expects its parent
 * - constructor to do that
 * 
 * Overriding a method
 * Providing a method in child with same name as that of parent overrides
 * parent method
 * We can call parent method from child method with super.method
 * For constructor we just need to call super()
 */

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} hides`);
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5);
rabbit.hide();