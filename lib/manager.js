const Employee = require('./employee')


class Manager extends Employee {
  constructor(name, employeeID, email, officeNumber) {
    console.log(name)
    super(name, employeeID, email); 
    this.officeNumber = officeNumber

    this.getRole = () => {return 'Manager'};
    }
}


module.exports = Manager;