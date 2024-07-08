// import the SVG class from the svg module
const SVG = require("./svg");
// import the Square class from the shapes module
const {Square} = require("./shapes");

// Test to check if the SVG class renders an empty 300x200 SVG element
test("should render a 300x200 svg element", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
    const svg = new SVG();
    const actualSVG = svg.render();

    expect(actualSVG).toEqual(expectedSVG);
});

// tests for the SVG class
describe("SVG", () => {
    test("should append text element", () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">A</text></svg>`;
        const svg = new SVG();
        svg.setText("A", "blue")
        expect(svg.render()).toEqual(expectedSVG);
    
    })
    
    // Test to check if the text message and color are set correctly
    test("should set text message and color", () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="violet">SVG</text></svg>`;
        const svg = new SVG();
        svg.setText("SVG", "violet")
        expect(svg.render()).toEqual(expectedSVG);
    
    })

    // test to check if an error is thrown when the text exceeds 3 characters
    test("should throw error if text exceeds 3 characters", () => {
        const expectedError = new Error("Text must not exceed 3 characters");
        const svg = new SVG();
        const actualResult = () => svg.setText("HELLO", "violet");
        expect(actualResult).toThrow(expectedError);
    
    })

    // Test to check if a shape is included correctly
    test("should include a shape", () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`;
        const svg = new SVG();
        svg.setText("SVG", "red")
        const square = new Square();
        
        square.setColor("yellow");
        svg.setShape(square);
        const actualResult = svg.render();
        expect(actualResult).toEqual(expectedSVG);
    
    });
    
});
