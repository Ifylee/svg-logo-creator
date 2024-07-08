// Defines the SVG class with contructor to initialize the text and shape elements.
class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }

    // method to render the final SVG string
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }
    
    // method to set the text element
    setText(message,color) {
        if(message.length > 3) {
            throw new Error("Text must not exceed 3 characters");
        }
    
    // sets the text element with the provided message and color. 
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }

    // method to set the shape element
    setShape(shape) {
        this.shapeElement = shape.render();
     }
}

// export the SVG class for use in other files
module.exports = SVG;