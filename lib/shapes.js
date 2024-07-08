// The base Shape class with a constructor that initializes a color property and a setColor that sets the shape color.
class Shape {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }
}

// circle class that extends the Shape class
class Circle extends Shape {
   


    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// Triangle class that extends the Shape class
class Triangle extends Shape {
   


    render() {
        return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.color}"/>`
    }
}

// Square class that extends the Shape class
class Square extends Shape {
   


    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

// Exports the Circle, Triangle and Square classes for use in othe files. 
module.exports = {Circle, Triangle, Square}









