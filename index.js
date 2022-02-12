function init () {

    const inquirer = require('inquirer');
    const fs = require('fs'); 
    const generate = require('./utils/generateMarkdown.js');
    const path = require('path');
    
    inquirer
      .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project',
          },
          {
            type: 'input',
            name: 'install',
            message: 'Please give a brief instruction on how to install',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Please give a short summary of how to use this',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'Please give a short description of any tests written',
          },
          {
              type: 'input',
              name: 'github',
              message: 'Please enter your github username',
            },
          {
              type: 'input',
              name: 'email',
              message: 'Please enter your email address',
          },
            {
              type: 'checkbox',
              name: 'licenses',
              message: 'Please choose select a license (only choose one)',
              choices: ['MIT', 'Apache 2.0', 'None'],
            },
      ])
      .then((response) => {
        return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
      });
    }
    
    init();

 