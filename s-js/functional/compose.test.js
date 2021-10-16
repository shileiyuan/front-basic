const rewire = require("rewire")
const compose = rewire("./compose")
const head = compose.__get__("head")
// @ponicode
describe("head", () => {
    test("0", () => {
        let callFunction = () => {
            head([320, 4, 90])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            head([550, 410, 70])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            head([380, 400, 550])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            head([50, 550, 520])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            head([520, 320, 100])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            head(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
