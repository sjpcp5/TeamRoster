// 4 classes employ, manager, engineer, intern
// create a lib folder
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const Employee = require("./Employee");
const Intern = require("./Intern");
const Engineer = require("./Engineer");
const Manager = require("./Manager");


let data = {};
// write quesitons for employee
function checkEngineer() {
    if (role = "engineer") {
        return true;
    } else {
        return false;
    };
};

function checkIntern() {
    if (role = "intern") {
        return true;
    } else {
        return false;
    }
};

function checkManager() {
    if (role = "manager") {
        return true;
    } else {
        return false;
    }
};
const questions = [{
        type: "input",
        message: "What is your github name?",
        name: "name",
    },
    {
        type: "number",
        message: "Input your employee ID.",
        name: "id",

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
        when: checkEngineer(role)
    },
    {
        type: "input",
        message: "What is the name of your school?",
        name: "school",
        when: checkIntern(role)
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
        when: checkManager(role)
    }
];


// write questions for intern

// wirte quesitions for manager 
// generate id with prompt
// store answers in objects 
// let employee = {}
// let intern = {}
// let manager = {}
// let engineer = {}
// write promise for prompt if answered different role answer these questions

function writeToFile(info) {
    console.log("write to file")
    const html = generateHTML(info);
    writeFileAsync("../main.html", html);
    convertToHtml(html);

};

function init() {
    inquirer
        .prompt(questions)
        .then(function(input) {
            favColor = input.color;
            username = input.username;
            console.log(input, "prompt answers");
            const queryUrl = `https://api.github.com/users/${username}`;



        })
        .then(answers => () {
            console.log(`Successful axios calls and prompts`, data)
            writeToFile(data);

        })
        .catch(function(error) {
            console.log("please enter a valid Github username or other", error);
            return
        });
}
//starts process 
init();