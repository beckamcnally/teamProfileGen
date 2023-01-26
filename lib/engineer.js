const employee = require('./lib/employee')

// The other three classes will extend `Employee`. -- not prototype because not everyone gets it
// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
class Engineer extends Employee {
  constructor(github) {
    super(); // ?? this conecs to the employee??
    
    this.github = github;
    this.getGithub = () => {
// going to grab the input from the prompt
      return this.github
    };//'https://github.com/' + githubUserName
    this.getRole = () => {};
//overridden to return 'Engineer'
}
}
