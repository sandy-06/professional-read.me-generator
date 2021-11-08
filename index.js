//TODO: Include packages needed for this application
const { registerPrompt } = require('inquirer');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'fullName',
        message: 'What is your full name? (Required)',
        validate: fullNameInput => {
          if (fullNameInput) {
            return true;
          } else {
            console.log('Please enter your full name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'githubUserName',
        message: 'What is your GitHub user Name? (Required)',
        validate: githubUserNameInput => {
          if (githubUserNameInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
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
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter the description of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions.(Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please add the installation instruction!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'useage',
        message: 'Please enter the url for your screenshot.(Required)',
        validate: useageInput => {
          if(useageInput) {
            return true;
          } else {
            console.log('Please enter your screenshot url');
            return false;
          }
        }
      },
      {
       type: 'input',
       name: 'contributing',
       message: 'List all those that contributed to the project.(Required)',
       validate: contributingInput => {
         if (contributingInput) {
           return true;
         } else {
           console.log('Please list all contributors.');
           return false;
         }
       }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Tell us about any tests associated with this project',
      },
      {
        type: "list",
        name: 'license',
        message: 'Select a license from the list.',
        choices: ['MIT License', 'Apache', 'ISC License', 'BSD- Berkeley Software Distribution']
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



