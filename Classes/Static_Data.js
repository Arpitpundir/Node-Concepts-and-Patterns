class Point2d {
    // class statics
    static origin = new Point2d(0,0);
    static distance(point1, point2){
        return Math.sqrt(
            ((point2.x - point1.x)**2 + (point2.y - point1.y) ** 2)
        )
    }

    // instance members and methods
    x;
    y;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return `(${this.x}, ${this.y})`;
    }
}

console.log(`Starting Point: ${Point2d.origin}`);

let next = new Point2d(3, 4);

console.log(`Next point: ${next}`);
console.log(`Distance: ${Point2d.distance(Point2d.origin, next)}`);

// Result
// Starting Point: (0, 0)
// Next point: (3, 4)
// Distance: 5