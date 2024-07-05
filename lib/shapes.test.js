const {Square, Triangle, Circle} = require("./lib/shapes")


describe("square", () => {
    test("should render svg for a red circle element", () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red" />`
        const circle = new Circle();
        circle.setColor("red");
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);

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


describe("Triangle", () => {
    test("should render svg for an orange polygon circle element", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 50. 182" fill="teal"/>`
        const triangle = new Triangle()
        triangle.setColor("teal")
        const actualSVG = triangle.render()
        expect(actualSVG).toEqual(expectedSVG)
    })

    test("should accept a fillColor input", () => {
        
    })
})



describe("", () => {
    test("should render svg for a green circle element", () => {
       
        

    })

    test("should accept a fillColor input", () => {
      
    })
})





























// <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="50" cy="50" r="50"  fill="blue"/>
//   </svg>