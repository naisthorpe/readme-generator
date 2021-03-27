// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
    { 
        type: "input",
        message: "What is the project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Add your project description:",
        name: "description",
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter GitHub usernames of contributors:",
        name: "contributors",
    },
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
        message: "Enter your GitHub username:",
        name: "github",
    },
    {
        type: "input",
        message: "Enter your email:",
        name: "email",
    },
    {
        type:"input",
        message: "Enter file name (do not include extension)",
        name: "filename"
    }
];

// Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("Success!")
    });
}

// writeToFile("test.md", "# this is a title");

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile(`${response.filename}.md`, generateMarkdown(response));
        });
    }

// Function call to initialize app
init();
