// 4 classes employ, manager, engineer, intern
// create a lib folder
const inquirer = require("inquirer");
const generateHTML = require("./lib/generateHTML");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");


let data = {};
// write quesitons for employee
function checkRole() {
    if (role === "engineer") {
        return true;
    } else if (role === "intern") {
        return true;
    } else {
        return true
    };
};

function checkIntern(role) {
    if (role === "intern") {
        return true;
    } else {
        return false;
    }
};

function checkManager(role) {
    if (role === "manager") {
        return true;
    } else {
        return false;
    }
};

function validateNum(input) {

    if (typeof input !== 'number') {
        console.log('You need to provide a number');
        return;
    } else {
        return true
    };
};
const questions = [{
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: function validateName(name) {
            return name !== "";
        }
    },
    {
        type: "number",
        message: "Input your employee ID.",
        name: "id",
        validate: function validateName(input) {
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
        when: function(answers) {
            return answers == "engineer"
        }
    },
    {
        type: "input",
        message: "What is the name of your school?",
        name: "school",
        when: function(answers) {
            return answers == "intern";
        }
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
        when: function(answers) {
            return answers == "manager";
        }
    }
];


// write questions for intern

// wirte quesitions for manager 
// generate id with prompt
// store answers in objects 
let employeeRoll = {}
let internRoll = {}
let managerRoll = {}
let engineerRoll = {}
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
            const employeeNew = new Employee(input.name, input.id, input.email);
            const engineerNew = new Engineer(input.name, input.id, input.email, input.github);
            const managerNew = new Manager(input.name, input.id, input.email, input.officeNumber);
            const internNew = new Intern(input.name, input.id, input.email, input.school);
            console.log(`questions successful`, answers, "New employee", employeeNew, 'New Eningeers', engineerNew, "New managers", managerNew, "New interns", internNew);

        })
        .catch(function(error) {
            console.log("invailid entry", error);
            return
        });
}
//starts process 
init();