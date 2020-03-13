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

const questionsEmployee = [{
        type: "input",
        message: "What is your github name?",
        name: "name",
    },
    {
        type: "list",
        message: "Choose your role.",
        choices: ['manager', 'intern', 'engineer'],
        name: "role",

    }
];
// write questions for intern

// wirte quesitions for manager 

// store answers in objects 
let employee = {}
let intern = {}
let manager = {}
let engineer = {}
    // write promise for prompt if answered different role answer these questions

function writeToFile(info) {
    console.log("write to file")
    const html = generateHTML(info);
    writeFileAsync("../main.html", html);
    convertToPDF(html);

};

function init() {
    inquirer
        .prompt(questions)
        .then(function(input) {
            favColor = input.color;
            username = input.username;
            console.log(input, "prompt answers");
            const queryUrl = `https://api.github.com/users/${username}`;

            axios
                .get(queryUrl)
                .then((res) => {
                    //console.log(res.data, "response 1 data")

                    console.log(favColor, "is the color");
                    data.username = username;
                    data.numOfRepo = res.data.public_repos;
                    data.name = res.data.name;
                    data.followers = res.data.followers;
                    data.following = res.data.following;
                    data.portPic = res.data.avatar_url;
                    data.location = res.data.location;
                    data.blog = res.data.blog;
                    data.company = res.data.company;
                    data.bio = res.data.bio;
                    data.color = favColor;

                    axios // axios call a to get stars
                        .get(`https://api.github.com/users/${username}/repos?per_page=100`)
                        .then((res) => {
                            console.log("2nd axios call successful");
                            data.stars = 0;
                            for (let i = 0; i < res.data.length; i++) { // Loop through each repository and count the number of stars
                                data.stars += res.data[i].stargazers_count;
                            };

                        })
                        .then(function() {
                            console.log(`Successful axios calls and prompts`, data)
                            writeToFile(data);

                        })
                        .catch(function(error) {
                            console.log("please enter a valid Github username or other", error);
                            return
                        });
                })
        });
};

//starts process 
init();