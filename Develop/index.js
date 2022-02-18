// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: 'What is your projects title? (required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project title!');
              return false;
            }
        }
        },
        {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project (required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        },
        {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of use for your project.',
        },
        {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?',
        },
        {
        type: 'input',
        name: 'testing',
        message: 'Please provide procedures to test you project.',     
        },
        {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your application',
        choices: ['MIT', 'Apache', 'GPL'],
        },
        {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.',
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('You need to enter a GitHub username!');
              return false;
            }
        }
        },
        {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('You need to enter an email address!');
              return false;
            }
        }
    }
]);
};

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', generateMarkdown(data), err => {
            // if there's an error, reject the promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successfull data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(data => {
        return writeToFile(data);
    })
}

// Function call to initialize app
init();
