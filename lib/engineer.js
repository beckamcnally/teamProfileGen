const Employee = require('./employee')

// class extender of employee when making a new Engineer will require all employee parameters as well as its own
class Engineer extends Employee {
  constructor(name, employeeID, email, github) {
    super(name, employeeID, email); 
    
    this.github = github;
    
    }
    getGithub = () => {return this.github}; //'https://github.com/' + githubUserName // this goes in html 

    getRole = () => {return 'Engineer'};

}



module.exports = Engineer;