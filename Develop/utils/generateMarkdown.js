// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return (`![APM](https://img.shields.io/apm/l/vim-mode)`);
    case 'Apache':
      return (`![AUR license](https://img.shields.io/aur/license/android-studio)`);
    case 'GPL':
      return (`![Eclipse Marketplace](https://img.shields.io/eclipse-marketplace/l/notepad4e)`);
    case '':
      return ('');
  }
  // if('MIT'){
  //   return `![APM](https://img.shields.io/apm/l/vim-mode)`
  // } else if('Apache'){
  //   return `![AUR license](https://img.shields.io/aur/license/android-studio)`
  // } else if('GPL') {
  //  return `![Eclipse Marketplace](https://img.shields.io/eclipse-marketplace/l/notepad4e)`
  // } else {
  //   return ''
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return (`https://img.shields.io/apm/l/vim-mode`);
    case 'Apache':
      return (`https://img.shields.io/aur/license/android-studio`);
    case 'GPL':
      return (`https://img.shields.io/eclipse-marketplace/l/notepad4e`);
    case '':
      return ('');
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  # Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ${renderLicenseLink(data.license)}
  ## Contribution
  ${data.contribution}
  ## Testing
  ${data.testing}
  ## Questions
  github.com/${data.username}
  If you have any additional questions, you can reach me at ${data.email}

`;
}

module.exports = generateMarkdown;
