describe('Manager', () => {
  // test for all use cases when initializing a new Employee object
  describe('initializeManager', () => {
    test('should create an object with a office number if provided valid arguments');

    const manager = new Manager("12");

    expect(manager.officeNumber).toEqual('12');
  })

  test('should though an error if not provided any arguments', () => {
    const cb = () => new Manager();
    expect(cb).toThrow();
  });

  test('should through an error if not provided an officeNumber', () => {
    const cb = () => new Manager('12')

    const err = new Error("Expected parameter is a valid officeNumber");
    expect(cb).toThrow(err);
  });

  test("should throw an error if 'officeNumber' is less than 0", () => {
    const cb = () => new Manager("-1")
  })

});