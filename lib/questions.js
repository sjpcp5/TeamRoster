const confirmLetters = (input) => {
    console.log("...its working", input)
    let letters = /^[A-Za-z]+$/;
    if (input.match(letters)) {
        console.log("its true!")
        return true;
    } else {
        console.log("Use letters only")
        return false;
    }
};


const questions = [{
        type: "input",
        message: "What is the employee's name?",
        name: "name",
        validate: confirmLetters
    },
    {
        type: "number",
        message: "Input your employee's  ID.",
        name: "id",
        validate: function validatNum(input) {
            return input !== "number";
        }

    },
    {
        type: "input",
        message: "Please enter the employee's email?",
        name: "email",
    },
    {
        type: "list",
        message: "Choose the employee's role.",
        choices: ['manager', 'intern', 'engineer'],
        name: "role",

    }, {
        type: "input",
        message: "What is your github username?",
        name: "github",


    }, {
        type: "input",
        message: "What is the name of your school?",
        name: "school",

    }, {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",

    }, {
        type: 'confirm',
        name: 'again',
        message: "Would you like to enter another employee?",
        default: true
    }
];

module.exports = questions;