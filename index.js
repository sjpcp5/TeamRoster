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


// write quesitons for employee
// function checkRole() {
//     if (role === "engineer") {
//         return true;
//     } else if (role === "intern") {
//         return true;
//     } else {
//         return true
//     };
// };

// function checkIntern(role) {
//     if (role === "intern") {
//         return true;
//     } else {
//         return false;
//     }
// };

// function checkManager(role) {
//     if (role === "manager") {
//         return true;
//     } else {
//         return false;
//     }
// };

// write questions for intern

// wirte quesitions for manager 
// generate id with prompt
// store answers in objects 
let teamHTML = "";
// write promise for prompt if answered different role answer these questions

function writeToFile(info) {
    console.log("write to file")
    const html = generateHTML(info);
    writeFileAsync("../main.html", html);
    convertToHtml(html);

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
    for (i = 0; i < inputs; i++) {
        switch (inputs.role) {
            // writes manager into instance of Manager then into html template
            case "Manager":
                await collectInputs()
                    .then((inputs) => {
                        const manager = new Manager(name, id, email, inputs.officeNumber);

                        teamMember = fs.readFileSync("./templates/manager.html");
                        //uses eval( to pass template literals from html files.)
                        // adds string to the teamHTML.
                        teamHTML = teamHTML + "\n" + eval('`' + teamMember + '`');
                    });
                break;

            case "Intern":
                await collectInputs()
                    .then((inputs) => {
                        const intern = new Intern(name, id, email, inputs.school);
                        teamMember = fs.readFileSync("./templates/intern.html");

                        teamHTML = teamHTML + "\n" + eval('`' + teamMember + '`');

                    });
                break;
            case "Engineer":
                await collectInputs()
                    .then((inputs) => {
                        const engineer = new Engineer(name, id, email, inputs.github);
                        teamMember = fs.readFileSync("./templates/engineer.html");
                        teamHTML = teamHTML + "\n" + eval('`' + teamMember + '`');
                    });
                break;
        } //end of switch

    } // end of for loop
    const mainHTML = fs.readFileSync("templates/main.html");

    teamHTML = eval('`' + mainHTML + '`');

    fs.writeFile("./output/team.html", teamHTML, function(err) {
        if (err) {
            return console.log(err);

        }
        console.log("Team HTML written");
    });

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