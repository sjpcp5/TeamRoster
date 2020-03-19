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

// write promise for prompt if answered different role answer these questions
//JSON.PARSE()


function pushTeamHTML(info) {
    teamHTML.push(info);
};

function objectToJoin(teamHTML) {

    console.log(teamHTML, "teamHTML", dataTeam);
    return dataTeam = teamHTML.join('');
};

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
    // const mainHTML = fs.readFileSync("./templates/main.html", teamHTML, function(err){
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

    // })

    // ;
    // console.log(teamHTML, "1st teamHTML");
    // teamHTML = eval('`' + mainHTML + '`');

    // console.log(teamHTML, " 2ndHTML");
    // fs.writeFile("./output/team.html", teamHTML, function(err) {
    //     if (err) {
    //         return console.log(err);

    //     }
    //     console.log("Team HTML written");
    // });
};

main();





// function init() {
//     inquirer
//         .prompt(questions)

//     .then(function(input) {
//             const employeeNew = new Employee(input.name, input.id, input.email);
//             const engineerNew = new Engineer(input.name, input.id, input.email, input.github);
//             const managerNew = new Manager(input.name, input.id, input.email, input.officeNumber);
//             const internNew = new Intern(input.name, input.id, input.email, input.school);
//             console.log(`questions successful`, answers, "New employee", employeeNew, 'New Eningeers', engineerNew, "New managers", managerNew, "New interns", internNew);

//         })
//         .catch(function(error) {
//             console.log("invailid entry", error);
//             return
//         });
// }

// // additional role questions

// //starts process 
// init();