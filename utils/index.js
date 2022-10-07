// TODO: Include packages needed for this application
const fs=require('fs');
const inquirer=require('inquirer');
// TODO: Create an array of questions for user input

const generateMarkdownfile=({title,description,tableofcontents,installation,usage,credits,license,contributing, tests,questions}) =>
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
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation requirements?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to use the project?',
    },
    {
      type: 'input',
      name: 'License',
      message: 'Which license is used for the project?',
    },
    {
      type: 'input',
      name: 'Contribution',
      message: 'How to contribute to this project?',
    },
  ])
 .then((useranswers) =>{
  const readmePageContent =generateMarkdownfile(useranswers);
 
fs.writeToFile('REAME.md',readmePageContent, (err) =>
err ? console.log(err) : console.log('Successfully created README.Md!')
);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
