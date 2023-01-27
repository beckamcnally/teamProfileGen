

class Employee {
  constructor(name, employeeID, email) {
  this.name = name
  this.employeeID = employeeID
  this.email = email
 }
  // Methods in the class Emplooyee
  getName = () => {return this.name};
  getID = () => {return this.employeeID};
  getEmail = () => {return this.email};
  getRole = () => {return 'Employee'};
   
}
 // google classes js https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes



module.exports = Employee;