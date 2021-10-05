// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license){
    case "Apache": 
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return badge;
    
    case "Boost":
      badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      return badge;
      
    case "BSD 3-clause":
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      return badge;
      
    case "Eclipse":
      badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      return badge;
      
    case "GNU GPL v3":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      return badge;
      
    case "IBM":
      badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      return badge;
      
    case "ISC":
      badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      return badge;
      
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      return badge;

    case "Mozilla":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      return badge;
      
    case "SIL":
      badge = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      return badge;
      
    case "WTFPL":
      badge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      return badge;
      
    case "Zlib":
      badge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      return badge;
      
    case "none":
      badge = ""
      return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license){
    case "Apache": 
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    
    case "Boost":
      link = "https://www.boost.org/LICENSE_1_0.txt";
      break;
      
    case "BSD 3-clause":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
      
    case "Eclipse":
      link = "https://opensource.org/licenses/EPL-1.0";
      break;
      
    case "GNU GPL v3":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
      
    case "IBM":
      link = "https://opensource.org/licenses/IPL-1.0";
      break;
      
    case "ISC":
      link = "https://opensource.org/licenses/ISC";
      break;
      
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;

    case "Mozilla":
      link = "https://opensource.org/licenses/MPL-2.0";
      break;
      
    case "SIL":
      link = "https://opensource.org/licenses/OFL-1.1";
      break;
      
    case "WTFPL":
      link = "http://www.wtfpl.net/about/";
      break;
      
    case "Zlib":
      link = "https://opensource.org/licenses/Zlib";
      break;
      
    case "none":
      link = ""
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  const section = `This project is using the license ${license}. See ${link} for more information.`;
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const license_body = renderLicenseSection(data.license);
  return `# ${data.title}
  ${badge}
  
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
  ${license_body}
      
  ## Contributing
  ${data.contribution}
      
  ## Test
  ${data.test}
      
  ## Questions
  If you have more questions about this project please contact me at:
  [github](github.com/${data.git_name})
  <${data.email}>
`;
}

module.exports = generateMarkdown;
