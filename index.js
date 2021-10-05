// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of the project?",
        name: "project_name",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "git_name",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "Give a description of the project?",
        name: "description",
    },
    {
        type: "input",
        message: "What is the process to install the project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use the project?",
        name: "usage",
    },
    {
        type: "list",
        message: "What license are you using?",
        name: "license",
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "Other", "Unlicensed"],
    },
    {
        type: "input",
        message: "How do you contribute to the project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "How do you test the project?",
        name: "test",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const body =
`# ${fileName}

## Description
${data.description}

## Table of Conternts
<ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#test">Test</a></li>
    <li><a href="#questions">Questions</a></li>
</ol>
    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
## License
${data.license}
    
## Contributing
${data.contribution}
    
## Test
${data.test}
    
## Questions`
    fs.writeFile(fileName+".md", body, (err)=>
        err? console.log(err) : console.log("Your file has been writen.")
    );
};

// TODO: Create a function to initialize app
function init() {  inquirer
    .prompt(questions)
    .then((response) => writeToFile(response.project_name, response)
    )};

// Function call to initialize app
init();
