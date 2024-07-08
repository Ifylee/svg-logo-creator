// import the necessary modules
const inquirer = require('inquirer'); 
const SVG = require('./svg');
const {Square, Triangle, Circle} = require('./shapes');
const {writeFile} = require('fs/promises');

// method to run the CLI application
class CLI {
    run() { 
        const questions =  [
            {
            name: "text",
            type: "input",
            message: "Enter text for the logo  (Must not be more than 3 characters):",
            validate: (text) => {
               return text.length <= 3 || "The message must not exceed 3 characters";
            }
        },
        {
            name: "textColor",
            type: "input",
            message: "Enter a color for the text:",
        },
        {
            name: "shapeType",
            type: "list",
            message: "Choose a shape for the logo:",
            choices: ["Square", "Triangle", "Circle"]
        },
        {
            name: "shapeColor",
            type: "input",
            message: "Enter color for the shape:",
        }
    ]
    //   promp the user with the questions 
    return inquirer.prompt(questions).then(({text, textColor, shapeType, shapeColor}) => {
       let shape;

    //    creates a shape object based on user's choice
       if(shapeType === "Circle") {
            shape = new Circle();

       } else if(shapeType === "Square") {
            shape = new Square();
       } else if(shapeType === "Triangle") {
            shape = new Triangle();
       }

       shape.setColor(shapeColor);

    //    creates a new svg object and sets the text, color and shape.
       const svg = new SVG();
       svg.setText(text, textColor);
       svg.setShape(shape);
       
    //    writes the rendered svg content to a file
       return writeFile(`./examples/${text}.svg`, svg.render())
    }).then(() => {
        // logs success message if the file is created successfully or error message if not.
        console.log("SVG file created successfully")
    }).catch((error) => {
        console.log("An error occurred:", error)
    })
  }
}
// export the CLI class for use in other files
module.exports = CLI;