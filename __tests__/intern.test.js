describe('Intern', () => {
  // test for all use cases when initializing a new Employee object
  describe('initializeIntern', () => {
    test('should create an object with a school if provided valid arguments');

    const intern = new Intern("Carle");

    expect(intern.name).toEqual('Carle');
    
  })

  test('should though an error if not provided any arguments', () => {
    const cb = () => new Intern();
    expect(cb).toThrow();
  });

  test('should through an error if not provided an email', () => {
    const cb = () => new Intern('school')
   
    const err = new Error("Expected parameter is a school name");
    expect(cb).toThrow(err);
  });

  test("should throw an error if 'school' is not a string", () => {
    const cb = () => new Intern('school');
    const err = new Error("Expected parameter 'school' to be a non-empty string");

    expect(cb).toThrow(err);
  });





  });
});