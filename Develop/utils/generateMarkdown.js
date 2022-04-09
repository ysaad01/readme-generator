// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    
    case 'Apache 2.0': 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    
    case 'GNU V3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    
    case 'Mozilla 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    
    default:
      return ;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## [License](#table-of-contents)

  The application is covered under the following license:

  ${license}`
  } else {
    return '';
  }
}

// Function that adds license to table of contents if applicable
function licenseTOC(license) {
  if (license !== 'None') {
    return `* [License](#license)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# [${data.title}](${data.repo})

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${licenseTOC(data.license)}
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## [Description](#table-of-contents)

  ${data.description}
  
  
  ## [Installation](#table-of-contents)
  
  ${data.installation}
  
  ## [Usage](#table-of-contents)
  
  ${data.usage}
  
  ${renderLicenseSection(renderLicenseBadge(data.license))}
  
  ## [Contributors](#table-of-contents)

  ${data.contributors}
  
  ## [Tests](#table-of-contents)
  
  ${data.tests}
  
  ## [Questions](#table-of-contents)
  
  * If you have any questions please [**Email**](mailto:${data.email}) me Ü
  * Check out more of my work at [**GitHub**](${data.github}) Ü
  
  
`;
}

module.exports = generateMarkdown;
