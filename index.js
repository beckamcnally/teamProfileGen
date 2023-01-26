const inquirer = require("inquirer")

inquirer 
  .prompt([
    // can we change employee to a variable so that depending on what type of employee is added it can say that type???

    // there is a loop https://www.npmjs.com/package/inquirer/v/8.2.4 https://www.npmjs.com/package/inquirer-loop
    {
      type: 'input',
      message: 'What is the employee name?',
      name: 'name'
    },
    {
      type: 'input',
      message: 'What is the employee id number?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'What is the employee email address',
      name: 'email'
    },
    // only want these questions to show for their job roles
    {
      type: 'input',
      message: 'What is the interns school?',
      name: 'school'
    },
    {
      type: 'input',
      message: 'What is the managers office number?',
      name: 'officeNumber'
    },
    {
      type: 'input',
      message: 'What is the engineers Github user name?',
      name: 'github'
    },
    {
      type: 'list',
      message: 'Would you like to add an',
      choices: ['engineer', 'intern', "I'm all done"],
      name: 'keepgoing'
    }
  ])
  .then((answers) => {
    console.log(answers)
    // if answers.keepgoing?? 
  })
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