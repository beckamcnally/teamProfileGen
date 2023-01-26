const employee = require('./lib/employee')

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
class Intern extends Employee {
  constructor(school) {
      super(); 
  this.school = school
  this.getSchool = () => {};

  this.getRole = () => {};
//overridden to return 'Intern'
}
}