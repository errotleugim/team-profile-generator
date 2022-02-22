const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Rambo";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testing = 100;
        const employee = new Employee("Mao", testing);
        expect(employee.id).toBe(testing);
    });

    it("Can set email via constructor argument", () => {
        const testing = "karl@marx.com";
        const employee = new Employee("Mussolini", 1, testing);
        expect(employee.email).toBe(testing);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testing = "Rambo";
            const employee = new Employee(testing);
            expect(employee.getName()).toBe(testing);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testing = 100;
            const employee = new Employee("Rambo", testing);
            expect(employee.getId()).toBe(testing);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testing = "karl@marx.com";
            const employee = new Employee("Rambo", 1, testing);
            expect(employee.getEmail()).toBe(testing);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testing = "Employee";
            const employee = new Employee("Rambo", 1, "karl@marx.com");
            expect(employee.getRole()).toBe(testing);
        });
    });
    
});