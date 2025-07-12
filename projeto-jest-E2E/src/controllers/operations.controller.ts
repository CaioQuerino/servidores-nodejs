export class ControllerOperations {
    public sum(x: number, y: number): number {
        return x + y
    }

    public sub(x: number, y: number): number {
        return x - y
    }

    public mult(x: number, y: number): number {
        return x * y
    }

    public div(x: number, y: number): number {
        if (y === 0) {
            throw new Error("Cannot divide by zero")
        }
        return x / y
    }
}