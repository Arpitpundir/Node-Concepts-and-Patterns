class Matrix {
    constructor(inMatrix) {
        this.data = inMatrix;
    }

    get(row, column) {
        if (row >= this.data.length || column >= this.data[row].length) {
            throw new RangeError('Out of bounds')
        }
        return this.data[row][column]
    }

    set(row, column, value) {
        if (row >= this.data.length || column >= this.data[row].length) {
            throw new RangeError('Out of bounds')
        }
        this.data[row][column] = value
    }

    [Symbol.iterator]() {
        let nextRow = 0;
        let nextCol = 0;
        let self = this;

        return {
            next() {
                if (nextRow === self.data.length) {
                    return { done: true }
                }
                const currVal = self.data[nextRow][nextCol]
                if (nextCol === self.data[nextRow].length - 1) {
                    nextRow++
                    nextCol = 0
                } else {
                    nextCol++
                }
                return { value: currVal }
            },
        }
    }
}

try {
    const temp = new Matrix([
        [1, 2, 3],
        [4, 5],
    ])

    const it = temp[Symbol.iterator]()
    let currElement = it.next()

    while (!currElement.done) {
        console.log('-------------->', currElement.value)
        currElement = it.next()
    }
} catch (error) {
    console.log('---------->', error)
}
