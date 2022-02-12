function renderLicenseBadge(license){
  if(!license){
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
}

function renderLicenseLink(license){
  if (license === 'MIT'){
    return `https://opensource.org/licenses/MIT`
  } if (license ==='Apache 2.0'){
    return `https://opensource.org/licenses/Apache-2.0`
  }
}

function renderLicenseSection(license){
  if(!license){
    return``;
  } else {
    return `##License
    This project is covered under the ${license} license.`
  }
  }
// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ##Table of Contents:
  1.[Description](#description)
  2.[Installation](#install)
  3.[Usage](#usage)
  4.[Tests](#tests)
  5.[Questions](#questions)
  5.[License](#licenses)

  ##Description
  ${data.description}

  ##Installation
  ${data.install}

  ##Tests
  ${data.tests}

  ##Questions
  Questions? Please reach out to me on Github at https:github.com/${data.github} or email me at ${data.email}

  ${renderLicenseSection(data.licenses)}

`;
}

module.exports = generateMarkdown;
