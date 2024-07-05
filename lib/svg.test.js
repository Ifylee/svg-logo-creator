const SVG = require("../svg");

const {sqaure} = require("../shapes");

test("should render a 300x200 svg element", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
    const svg = new SVG();
    const actualSVG = svg.render();

    expect(actualSVG).toEqual(expectedSVG);
})

test("should append text element", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">A</text></svg>`;
    const svg = new SVG();
    svg.setText("A", "blue")
    expect(svg.render()).toEqual(expectedSVG);

})