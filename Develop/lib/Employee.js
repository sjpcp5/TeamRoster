class Employee {
    // id , name , job title, getName, getID, getEmail getRole// returm Employee
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName() {
        return this.name;
    }
}

const shape = new Shape(25, 25);
const shape4 = new Shape(100, 40) //a square
const shape2 = new Shape(2, 5);

shape.printInfo();