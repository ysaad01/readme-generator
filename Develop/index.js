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
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    message: "Enter a brief description of the project. (Required)",
    type: "input",
    name: "description",
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        return false;
      }
    }
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
    message: "How will your project be used? (Required)",
    type: "input",
    name: "usage",
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        return false;
      }
    }
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
    message: "Enter the Github URL to your project. (Required)",
    type: "input",
    name: "repo",
    validate: repoInput => {
      if (repoInput) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    message: "Enter your GitHub username. (Required)",
    type: "input",
    name: "github",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    message: "Please provide an email address for others to reach you at with questions. (Required)",
    type: "input",
    name: "email",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        return false;
      }
    }
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