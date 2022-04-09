// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is the title of your project? (Required)",
    type: "input",
    name: "title",
  },
  {
    message: "Enter your GitHub username. (Required)",
    type: "input",
    name: "github",
  },
  {
    message: "Enter the Github URL to your project. (Required)",
    type: "input",
    name: "repo",
  },
  {
    message: "Enter a brief description of the project. (Required)",
    type: "input",
    name: "description",
  },
  
  {
    message: "What type of license, if any, is this project using?",
    type: "list",
    name: "license",
    choices: ['MIT', 'Apache 2.0', 'GNU V3', 'Mozilla 2.0', 'None']
  },
  {
    message: "Please list any required packages for installation of your project.",
    type: "input",
    name: "installation",
  },
  {
    message: "How will your project be used?",
    type: "input",
    name: "usage",
  },
  {
    message: "Who contributed to this project?",
    type: "input",
    name: "contributors",
  },
  {
    message: "Provide any applicable test information for your project.",
    type: "input",
    name: "tests",
  },
  {
    message: "Please provide an email address for others to reach you at with questions",
    type: "input",
    name: "questions",
  },
];

// TODO: Create a function to write README file
function generateFile(fileName, data) {
  fs.writeFile(fileName, data, 'utf8', (err) => {
    if (err) throw err;
    console.log("File was successfully created!");
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
    .then((answers) => {
      const markdownString = generateMarkdown(answers);
      generateFile('test.md', markdownString);
  });
}

// Function call to initialize app
init();