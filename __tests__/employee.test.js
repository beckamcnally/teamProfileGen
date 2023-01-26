// do i need to require anything for these tests?? 

//https://jestjs.io/docs/api#describename-fn

//testing the whole precesses
describe('Employee', () => {
  // test for all use cases when initializing a new Employee object
  describe('initializeEmployee', () => {
    test('should create an object with a name, id, and email if provided valid arguments', () => {

    const employee = new Employee("James", '4984', 'james@james.com');

    expect(employee.name).toEqual('James');
    expect(employee.id).toEqual('4984');
    expect(employee.email).toEqual('james@james.com');
    });
  })

  test('should though an error if not provided any arguments', () => {
    const cb = () => new Employee();
    expect(cb).toThrow();
  });

  test('should through an error if not provided an email', () => {
    const cb = () => new Employee('James', '4984')
   
    const err = new Error("Expected parameter is a valid email");
    expect(cb).toThrow(err);
  });

  test("should throw an error if 'name' is not a string", () => {
    const cb = () => new Employee('5', '4984', 'james@james.com');
    const err = new Error("Expected parameter 'name' to be a non-empty string");

    expect(cb).toThrow(err);
  });

  test("should throw an error if 'id' is less than 0", () => {
    const cb = () => new Employee("James", "-1", 'james@james.com')
    expect().toEqual()
  })

  describe("addEmployee", () => {
  test("should add an Employee to the 'Employee' array", () => {
    const employee = new Employee('James', '4984', 'james@james.com')
    employee.addEmployee(employee)

    expect(employee.employeeList.length).toEqual(1);

    });

  });
});
// need to test these methods 
getName
getId  
getEmail 
getRole 

// so all of these tests go on the other tests as well