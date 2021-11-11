// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
  //[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]
 // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
 // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
 // [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`
  
  }
  return '';
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if (license !== 'None') {
  return `![GitHub license](https://opensource.org/licenses/${license})`;
}
return '';

  //https://opensource.org/licenses/BSD-3-Clause
 // https://opensource.org/licenses/Apache-2.0
 // https://opensource.org/licenses/MIT
  //https://opensource.org/licenses/MPL-2.0

}




 //TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;


//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions