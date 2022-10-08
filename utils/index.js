//  Packages needed for this application
const fs=require('fs');
const inquirer=require('inquirer');
const generateMarkdown=require('./generateMarkdown');
// Created an array of questions for user input

const generateMarkdownfile=() =>{
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
      name: 'github_name',
      message: 'Enter your github username?',
    },
    {
      type: 'list',
      name: 'License',
      message: 'Which license is used for the project?',
      choices: ["MIT","Apache","Boost"," BSD","Eclipse"," Zlib"]
    },
    {
      type: 'input',
      name: 'Contribution',
      message: 'How to contribute to this project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How to test this project?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Do you want to include your email?',
    },


    
  ]).then((useranswers) =>{
    console.log(useranswers)
  //   const readmePageContent =generateMarkdownfile(useranswers);
  const readmePageContent=generateMarkdown(useranswers)
   //console.log(generateMarkdown(useranswers))
   fs.writeFile('./utils/Output/README.md',readmePageContent, (err) =>
  err ? console.log(err) : console.log('Successfully created README.Md!')
  );
  });
}

 

// A function to initialize app
function init() {
  generateMarkdownfile()
  
}

// Function call to initialize app
init();
