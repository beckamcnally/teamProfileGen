const inquirer = require("inquirer")
const fs = require('fs');
const inquirerLoop = require("inquirer-loop");
// const manager = require('./lib/manager')
// const employee = require('./lib/employee')
// const engineer = require('./lib/engineer')
// const intern = require('./lib/intern')
let managerArray = [];
let internArray = [];
let engineerArray = [];
inquirer 
  .prompt([
// there is only one manager
    // there is a loop https://www.npmjs.com/package/inquirer/v/8.2.4 https://www.npmjs.com/package/inquirer-loop
    {
      type: 'input',
      message: 'What is the Managers name?',
      name: 'name'
    },
    {
      type: 'input',
      message: 'What is the Managers id number?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'What is the Managers email address',
      name: 'email'
    },
    {
      type: 'input',
      message: 'What is the Managers office number?',
      name: 'officeNumber'
      },
  ])
  .then((answers) => {
    managerArray.push(answers)
    console.log(managerArray)
    nextSet()
  })

  function nextSet(){
    inquirerLoop
      .prompt ({
        type: "loop",
        name: "keepGoing",
        message: 'Would you like to add an',
        choices: ['engineer', 'intern', "I'm all done"],
        when: () => {
          if (this.choices === 'engineer'){
           questions: {
              type: 'input',
              message: 'What is the engineers Github user name?',
              name: 'github'
            }
          }
        }
          
      })  
    }
  // {
  //   type: 'input',
  //   message: 'What is the interns school?',
  //   name: 'school'
  // },
  
  {
    type: 'input',
    message: 'What is the engineers Github user name?',
    name: 'github'
  }

  // {
  //   type: 'list',
  //   message: 'Would you like to add an',
  //   choices: ['engineer', 'intern', "I'm all done"],
  //   name: 'keepgoing'
  // }


// how to caputu
  const generateHTML = () => `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Team Employee Profiles</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
    ${something.something}
    ${something.something}
    ${something.something}
        
    </main>
</body>
</html>`//how will the html generate a card for each one?? maybe have a function genCards that generates the cards and then stick that inside of the template literal in the card containers. If you di this then you would also have a list of all the different type of employees and then generate sections
  function genCrards(array) {
    //takes in an array and then depending on if it is the manager, intern, or engineer
    if(managerArray){
      for (let i = 0;i < managerArray.length; i++) {
        //???
        `<div class="card" style="width: 18rem;">
        <div class="card-header">
          Manager
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name:${something.something}</li>
            <li class="list-group-item">Employee Id:${something.something}</li>
            <li class="list-group-item"><a href="mailto:">Email:${something.something}</a>li>
            <li class="list-group-item">Office Number:${something.something}</li>
        </ul>
      </div>`
      }
    } 
    else if (engineerArray){
      for (let i = 0;i < engineerArray.length; i++) {
       ` <div id="engineer-container">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  Engineer
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name:${something.something} </li>
                  <li class="list-group-item">Employee Id:${something.something}</li>
                  <li class="list-group-item"><a href="mailto:">Email:${something.something}</a></li>
                  <li class="list-group-item">Github:${something.something}</li>
                </ul>
              </div>
        </div>`
      }
    } 
    else if (internArray){
      for (let i = 0;i < internArray.length; i++) {
        `<div id="intern-container">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  Intern
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name:${something.something} </li>
                    <li class="list-group-item">Employee Id:${something.something}</li>
                    <li class="list-group-item"><a href="mailto:">Email:${something.something}</a></li>
                    <li class="list-group-item">School:${something.something}</li>
                </ul>
              </div>
        </div>`
      }
    }
    return 
  
  }