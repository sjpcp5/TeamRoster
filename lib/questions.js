const questions = [{
        type: "input",
        message: "What is your name?",
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
        message: "Input your employee ID.",
        name: "id",
        validate: function validatNum(input) {
            return input !== "number";
        }

    },
    {
        type: "input",
        message: "Please enter your email?",
        name: "email",
    },
    {
        type: "list",
        message: "Choose your role.",
        choices: ['manager', 'intern', 'engineer'],
        name: "role",

    }, {
        type: "input",
        message: "What is your github username?",
        name: "github",


    },
    {
        type: "input",
        message: "What is the name of your school?",
        name: "school",

    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",

    }
];
module.exports = questions;