const questions = [{
        type: "input",
        message: "What is the employee (${i})'s name?",
        name: "name",
        validate: async(input) => {
            if (input !== /^[A-Za-z]+$/) {
                return "Use letters only";
            }
            return true;
        }


    },
    {
        type: "number",
        message: "Input your employee (${i})'s  ID.",
        name: "id",
        validate: function validatNum(input) {
            return input !== "number";
        }

    },
    {
        type: "input",
        message: "Please enter the employee (${i})'s email?",
        name: "email",
    },
    {
        type: "list",
        message: "Choose the employee (${i})'s role.",
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