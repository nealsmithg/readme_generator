// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case "Apache": 
      const badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return badge;
    
    case "Boost":
      const badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      return badge;
      
    case "BSD 3-clause":
      const badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      return badge;
      
    case "Eclipse":
      const badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      return badge;
      
    case "GNU GPL v3":
      const badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      return badge;
      
    case "IBM":
      const badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      return badge;
      
    case "ISC":
      const badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      return badge;
      
    case "MIT":
      const badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      return badge;

    case "Mozilla":
      const badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      return badge;
      
    case "SIL":
      const badge = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      return badge;
      
    case "WTFPL":
      const badge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      return badge;
      
    case "Zlib":
      const badge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      return badge;
      
    case "none":
      const badge = ""
      return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {switch (license){
    case "Apache": 
      const link = "https://opensource.org/licenses/Apache-2.0";
      return link;
    
    case "Boost":
      const link = "https://www.boost.org/LICENSE_1_0.txt";
      return link;
      
    case "BSD 3-clause":
      const link = "https://opensource.org/licenses/BSD-3-Clause";
      return link;
      
    case "Eclipse":
      const link = "https://opensource.org/licenses/EPL-1.0";
      return link;
      
    case "GNU GPL v3":
      const link = "https://www.gnu.org/licenses/gpl-3.0";
      return link;
      
    case "IBM":
      const link = "https://opensource.org/licenses/IPL-1.0";
      return link;
      
    case "ISC":
      const link = "https://opensource.org/licenses/ISC";
      return link;
      
    case "MIT":
      const link = "https://opensource.org/licenses/MIT";
      return link;

    case "Mozilla":
      const link = "https://opensource.org/licenses/MPL-2.0";
      return link;
      
    case "SIL":
      const link = "https://opensource.org/licenses/OFL-1.1";
      return link;
      
    case "WTFPL":
      const link = "http://www.wtfpl.net/about/";
      return link;
      
    case "Zlib":
      const link = "https://opensource.org/licenses/Zlib";
      return link;
      
    case "none":
      const link = ""
      return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
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
      
  ## Questions

`;
}

module.exports = generateMarkdown;
