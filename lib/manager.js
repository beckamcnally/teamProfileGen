const employee = require('./lib/employee')

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:how to 
class Manager extends Employee {
  constructor(officeNumber) {
    super(); 
    this.officeNumber = officeNumber

    this.getRole = () => {};
//overridden to return 'Manager'
    }
}
// maybe like in our lesson we need a facility like how we had a daycare and then we add the employees to the facility??????///

// 