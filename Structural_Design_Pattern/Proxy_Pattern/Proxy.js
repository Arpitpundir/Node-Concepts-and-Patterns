class StackCalculator {
    constructor() {
        this.stack = []
    }

    putValue(value) {
        this.stack.push(value)
    }

    getValue() {
        return this.stack.pop()
    }

    peekValue() {
        return this.stack[this.stack.length - 1]
    }

    clear() {
        this.stack = []
    }

    divide() {
        const divisor = this.getValue()
        const dividend = this.getValue()
        const result = dividend / divisor
        this.putValue(result)
        return result
    }

    multiply() {
        const multiplicand = this.getValue()
        const multiplier = this.getValue()
        const result = multiplier * multiplicand
        this.putValue(result)
        return result
    }
}

// Controls access to an object by using another object

const safeCalculatorHandler = {
    get: (target, property) => {
        if (property === 'divide') {
            const divisor = target.peekValue()
            if (divisor === 0) {
                throw Error('Division by zero')
            }
            return target.divide()
        }
        return target[property]
    },
}

const calculator = new StackCalculator()
const safeCalculator = new Proxy(
    calculator,
    safeCalculatorHandler
)
