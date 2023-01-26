const Employee = require('./employee')

// class extender of employee when making a new Engineer will require all employee parameters as well as its own
class Engineer extends Employee {
  constructor(github) {
    super(name, employeeID, email); 
    
    this.github = github;
    this.getGithub = () => {return this.github}; //'https://github.com/' + githubUserName // this goes in html 
    this.getRole = () => {return 'Engineer'};
}
}



module.exports = Engineer;