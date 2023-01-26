const Employee = require('./employee')


class Intern extends Employee {
  constructor(school) {
      super(name, employeeID, email); 
  this.school = school
  this.getSchool = () => {return this.school};
  this.getRole = () => {return 'Intern'};
}
}



module.exports = Intern;