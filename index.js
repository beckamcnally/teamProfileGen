const inquirer = require("inquirer")
const fs = require('fs')
const path = require('path')
const Manager = require("./lib/manager")
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const templateRender = require('./src/template')
const DIST_DIR = path.resolve(__dirname, 'dist')
const distPath = path.join(DIST_DIR, "index.html")
let teamArray = [];
let idArray = []; 

manQuests() 

function manQuests() {
inquirer 
  .prompt([
    {
      type: 'input',
      message: 'What is the Managers name?',
      name: 'managerName'
    },
    {
      type: 'input',
      message: 'What is the Managers id number?',
      name: 'managerID'
    },
    {
      type: 'input',
      message: 'What is the Managers email address',
      name: 'managerEmail'
    },
    {
      type: 'input',
      message: 'What is the Managers office number?',
      name: 'managerOfficeNumber'
      },
  ])
    .then((answers) => {
    
    let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
    teamArray.push(manager)
    idArray.push(answers.managerID)
    nextStep()
    })
  }


  function nextStep(){
    inquirer
      .prompt ([
        {
        type: "list", 
        name: "teamMemberChoice",
        message: 'Would you like to add an',
        choices: ['engineer', 'intern', "No more, I'm all done"]
        }
      ])
      .then((answers) => {
        
        if(answers.teamMemberChoice === 'engineer'){
          engQuests()
        } else if (answers.teamMemberChoice === 'intern') {
          intQuests()
        } else if (answers.teamMemberChoice === "No more, I'm all done"){
          done()
        }

      }) 
  }

  function engQuests() {
    inquirer 
      .prompt ([
    {
      type: 'input',
      message: 'What is the Engineers name?',
      name: 'engineerName'
    },
    {
      type: 'input',
      message: 'What is the Engineers id number?',
      name: 'engineerID'
    },
    {
      type: 'input',
      message: 'What is the Engineers email address',
      name: 'engineerEmail'
    },
    {
      type: 'input',
      message: 'What is the Engineers Github user name?',
      name: 'engineerGithub'
      },
  ])
  .then((answers) => {
    const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
    
    teamArray.push(engineer)
    idArray.push(answers.engineerID)
   
    nextStep()
  })
  }
  function intQuests() {
    inquirer 
      .prompt ([
    {
      type: 'input',
      message: 'What is the Interns name?',
      name: 'internName'
    },
    {
      type: 'input',
      message: 'What is the Interns id number?',
      name: 'internID'
    },
    {
      type: 'input',
      message: 'What is the Interns email address',
      name: 'internEmail'
    },
    {
      type: 'input',
      message: 'What is the Interns school name?',
      name: 'internSchool'
      },
  ])
  .then((answers) => {
    
    const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
    
    teamArray.push(intern)
    idArray.push(answers.internID)
   
    nextStep()
  })
  }

 
    
    function done() {
      console.log("Check your dist folder for your newly generated html document with your team. Thank you for using teamProfileGen")
      // Create the output directory if the dist path doesn't exist
      if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
      }
      fs.writeFileSync(distPath, templateRender(teamArray), 'utf-8');
    }
    




 