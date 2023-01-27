const Employee = require('./employee')


class Manager extends Employee {
  constructor(name, employeeID, email, officeNumber) {
    
    super(name, employeeID, email); 
    this.officeNumber = officeNumber
    }
    getOfficeNumber = () => {return this.OfficeNumber};
    getRole = () => {return 'Manager'};
    
}


module.exports = Manager;