

class Employee {
  constructor(name, employeeID, email) {
  this.name = name
  this.employeeID = employeeID
  this.email = email
  }
  // Methods in the constructor
  getName = () => {};// get name isn't name given in the prompt??? 
  getId = () => {};
  getEmail = () => {};
  getRole = () => {};
  //returns 'Employee';
}
 // google classes js https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


// makes new instances 
const employee = new Employee// how does the input get here
const manager = new Manager// how does the input get here
const intern = new Intern// how does the input get here
const engineer = new Engineer// how does the input get here
//if I get the inputs here then is there a new for the methods on the classes