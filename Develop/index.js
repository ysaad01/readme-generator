// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is the title of your project?",
    type: "input",
    name: "title",
  },

  {
    message: "Provide a description of the project:",
    type: "input",
    name: "description",
  },

  {
    message: "What type of license, if any, is this project using?",
    type: "list",
    name: "license",
    choices: ['MIT', 'Apache 2.0', 'GNU V3', 'Mozilla 2.0', 'None']
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
      console.log(markdownString);
      generateFile('test.md', markdownString);
  });
}

// Function call to initialize app
init();

