const inquirer = require('inquirer');
const SVG = require('./svg');
const {Square, Triangle, Circle} = require('./shapes');
const {writeFile} = require('fs/promises');


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
       
    return inquirer.prompt(questions).then((answers) => {
        console.log(answers);

    })
  }
}

module.exports = CLI;