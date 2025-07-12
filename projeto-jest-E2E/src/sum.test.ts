import { ControllerOperations } from "./controllers/operations.controller"

describe("Operations", () => {
    let ops: ControllerOperations;

    beforeEach(() => {
        ops = new ControllerOperations();
    });

    it("sum of 3 + 7 must be 10", () => {
        expect(ops.sum(3, 7)).toBe(10);
    });

    it("subtraction of 3 - 7 must be -4", () => {
        expect(ops.sub(3, 7)).toBe(-4);
    });

    it("multiplication of 3 * 7 must be 21", () => {
        expect(ops.mult(3, 7)).toBe(21);
    });

    it("division of 21 / 7 must be 3", () => {
        expect(ops.div(21, 7)).toBe(3);
    });

    it("division by zero should throw an error", () => {
        expect(() => ops.div(21, 0)).toThrow("Cannot divide by zero");
    });
}
);