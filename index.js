// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "list",
        message: "What license did you use?",
        name: "license",
        choices: [
            "Apache",
            "Boost",
            "BSD 3",
            "BSD 2",
            "Eclipse",
            "IBM",
            "ISC",
            "MIT",
            "Mozilla",
            "Perl",
            "Artistic",
            "SIL",
            "Unlicense",
            "WTFPL",
            "Zlib",
            "None"
        ],
    },
    {
        type: "input",
        message: "Add your project description:",
        name: "description",
    },
    {
        type: "input",
        message: "Add usage text:",
        name: "usage",
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributors",
    },
    {
        type: "input",
        message: "Enter your email:",
        name: "email",
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "github",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            `${response.license}`
        },
            (err) =>
                err ? console.error(err) : console.log("commit logged"));
    }

// Function call to initialize app
init();
