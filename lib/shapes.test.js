const {Square, Triangle, Circle} = require("./lib/shapes")


describe("square", () => {
    test("should render svg for a green circle element", () => {

    })

    test("should accept a fillColor input", () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="purple" />`
        const circle = new Circle()
        // setter method to purple
        circle.setColor("purple")
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG)
    })
})











// <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="50" cy="50" r="50"  fill="blue"/>
//   </svg>