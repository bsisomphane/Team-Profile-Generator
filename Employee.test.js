const Employee = require("../library/Employee");


describe('Employee', () => {
    
    describe('instantiation', () => {

        it('should pass and instantiate object correctly ', () => {
        //Arrange
        //Act
        let testEmployee = new Employee("Bailey", 1, "Bailey@gmail.com");
        
        //Assert
        expect(testEmployee.name).toBe("Bailey")
        expect(testEmployee.id).toEqual(1)
        expect(testEmployee.email).toBe("Bailey@gmail.com")
        });

    });

    describe('getEmail', () => {
        it('should return email correctly', () => {
        //Arrange
        let testEmployee = new Employee("Bailey", 1, "Bailey@gmail.com");
        //Act
        let email = testEmployee.getEmail()
        //Assert
        expect(email).toBe("Bailey@gmail.com")
        });
    });

    describe('getId', () => {
        it('should return id correctly', () => {
        //Arrange
        let testEmployee = new Employee("Bailey", 1, "Bailey@gmail.com");
        //Act
        let id = testEmployee.getId()
        //Assert
        expect(id).toBe(1)
        });
    });

    describe('getName', () => {
    it('should return name correctly', () => {
        //Arrange
        let testEmployee = new Employee("Bailey", 1, "Bailey@gmail.com");
        //Act
        let name = testEmployee.getName()
        //Assert
        expect(name).toBe("Bailey")
    });
    });

    describe('getRole', () => {
        it('should return role correctly', () => {
        //Arrange
        let testEmployee = new Employee("Bailey", 1, "Bailey@gmail.com");
        //Act
        let role = testEmployee.getRole()
        //Assert
        expect(role).toBe("Employee")
        });
    });
});