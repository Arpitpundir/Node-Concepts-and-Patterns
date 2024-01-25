// Enum using Object
const Directions = {
    North: 'north',
    South: 'south',
    East: 'east',
    West: 'west'
}
Object.freeze(Directions);

// Enum using Symbol
const Directions = {
    North: Symbol('north'),
    South: Symbol('south'),
    East: Symbol('east'),
    West: Symbol('west')
}
Object.freeze(Directions);

// Enum using Class
class Directions {
    static get North() { return 'north'; }
    static get South() { return 'south'; }
    static get East() { return 'east'; }
    static get West() { return 'west'; }
    constructor() {
        throw new Error('Directions is static and cannot be instantiated.');
    }
};