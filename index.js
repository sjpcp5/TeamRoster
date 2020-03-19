// 4 classes employ, manager, engineer, intern
// create a lib folder
const inquirer = require("inquirer");
const generateHTML = require("./lib/generateHTML");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const questions = require("./lib/questions");
const generateManager = require("./lib/generateManager");
const generateIntern = require('./lib/generateIntern');
const generateEngineer = require('./lib/generateEngineer');


// write quesitons for employee
// write questions for intern
// wirte quesitions for manager 

// generate id with prompt

// store generated employees and associated HTML in teamHTML to write to team.html 
var teamHTML = [];
var dataTeam = ' ';


// pushes generated employees to teamHTML array
function pushTeamHTML(info) {
    teamHTML.push(info);
};
// stringifys teamHTML and removes commas
function objectToJoin(teamHTML) {

    console.log(teamHTML, "teamHTML", dataTeam);
    return dataTeam = teamHTML.join('');
};
// writes to html
function writeToFile(dataTeam) {
    console.log("A", dataTeam)
    const html = generateHTML(dataTeam);
    console.log(html, "B")
    writeFileAsync("./output/team.html", html)
    return
};
// aysnc function runs through quesitions till user says no 
const collectInputs = async(inputs = []) => {
    const { again, ...answers } = await
    inquirer.prompt(questions);
    const newEmps = [...inputs, answers];
    return again ? collectInputs(newEmps) : newEmps;
};
// starts questions and creates html of each employee by role
const main = async() => {
    const inputs = await collectInputs();
    console.log(inputs);

    for (i = 0; i < inputs.length; i++) {
        console.log("E")
        let input = inputs[i];
        console.log(input, "F")
        switch (input.role) {

            // writes manager into instance of Manager then into html template
            case "manager":

                const manager = new Manager(input.name, input.id, input.email, input.officeNumber);
                let teamManager = generateManager(manager);
                console.log("teamManager read", manager);

                // adds string to the teamHTML.
                pushTeamHTML(teamManager);
                console.log(teamHTML, "G");
                break;

            case "intern":

                const intern = new Intern(input.name, input.id, input.email, input.school);
                let teamIntern = generateIntern(intern);

                pushTeamHTML(teamIntern);



                console.log("intern case ran");
                break;
            case "engineer":

                const engineer = new Engineer(input.name, input.id, input.email, input.github);
                let teamEngineer = generateEngineer(engineer);
                pushTeamHTML(teamEngineer);
                console.log(teamEngineer, "I", )
                break;
            default:
                console.log(input.role, "J");
                break;
        } //end of switch



    }; // end of for loop
    objectToJoin(teamHTML, function(err) {
        if (err) {
            console.log(error, "L");
            return
        }
    });
    writeToFile(dataTeam, function(err) {
        if (err) {
            console.log(error, "N");
            return
        }
    });

};

main();