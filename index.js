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
const questions = require("./lib/questions");
const generateManager = require('./lib/generateManager');
const generateIntern = require('./lib/generateIntern');
const generateEngineer = require('./lib/generateEngineer');


// write quesitons for employee
// write questions for intern
// wirte quesitions for manager 

// generate id with prompt

// store generated employees and associated HTML in teamHTML to write to team.html 
var teamHTML = [{}];


// write promise for prompt if answered different role answer these questions
//JSON.PARSE()

function writeToFile(teamHTML) {
    console.log("write to file function works", teamHTML)
    const html = generateHTML(teamHTML);
    console.log(html, "html read")
    writeFileAsync("./output/team.html", html, function(err) {
        if (err) {
            return console.log("didn't write team.html")

        } else {
            return console.log("Team HTML written")
        }
    });
};
const collectInputs = async(inputs = []) => {
    const { again, ...answers } = await
    inquirer.prompt(questions);
    const newEmps = [...inputs, answers];
    return again ? collectInputs(newEmps) : newEmps;
};
const main = async() => {
    const inputs = await collectInputs();
    console.log(inputs);
    for (i = 0; i < inputs.length; i++) {
        console.log("loop is running...")
        var input = inputs[i];
        console.log(input, "array before switch")
        switch (input.role) {

            // writes manager into instance of Manager then into html template
            case "manager":

                const manager = new Manager(input.name, input.id, input.email, input.officeNumber);

                let teamManager = generateManager(manager);
                console.log("teamManager read");
                //uses eval( to pass template literals from html files.)
                // adds string to the teamHTML.
                console.log(manager);
                teamHTML = teamManager;
                console.log(teamHTML);
                console.log("manager case ran");

                break;

            case "intern":

                const intern = new Intern(input.name, input.id, input.email, input.school);
                let teamIntern = generateIntern(intern);

                teamHTML = teamIntern;


                console.log("intern case ran");
                break;
            case "engineer":

                const engineer = new Engineer(input.name, input.id, input.email, input.github);
                let teamEngineer = generateEngineer(engineer);
                teamHTML = teamEngineer;
                console.log(teamEngineer, "team Engineer added")
                console.log("engineer case ran");
                break;
            default:
                console.log(input.role, "...default");
                break;
        } //end of switch

    }; // end of for loop
    // const mainHTML = fs.readFileSync("./templates/main.html", teamHTML, function(err){

    // })

    // ;
    // console.log(teamHTML, "1st teamHTML");
    // teamHTML = eval('`' + mainHTML + '`');
    writeToFile(teamHTML);
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