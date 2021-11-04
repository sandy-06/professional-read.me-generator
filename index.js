//TODO: Include packages needed for this application
const { registerPrompt } = require('inquirer');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'repoName',
        message: 'What is your Repository Name? (Required)',
        validate: repoNameInput => {
          if (repoNameInput) {
            return true;
          } else {
            console.log('Please enter your Repository name!');
            return false;
          }
        }  
      }
        



    ])
};
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



