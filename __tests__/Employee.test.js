const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Creates Employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    it("Sets name via constructor arguments", () => {
        const name = "Rambo";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("Sets id via constructor argument", () => {
        const testing = 100;
        const employee = new Employee("Rambo", testing);
        expect(employee.id).toBe(testing);
    });

    it("Sets email via constructor argument", () => {
        const testing = "john@rambo.com";
        const employee = new Employee("Rambo", 1, testing);
        expect(employee.email).toBe(testing);
    });

    describe("getName", () => {
        it("Gets name via getName()", () => {
            const testing = "Rambo";
            const employee = new Employee(testing);
            expect(employee.getName()).toBe(testing);
        });
    });
        
    describe("getId", () => {
        it("Gets id via getId()", () => {
            const testing = 100;
            const employee = new Employee("Rambo", testing);
            expect(employee.getId()).toBe(testing);
        });
    });
        
    describe("getEmail", () => {
        it("Gets email via getEmail()", () => {
            const testing = "john@rambo.com";
            const employee = new Employee("Rambo", 1, testing);
            expect(employee.getEmail()).toBe(testing);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testing = "Employee";
            const employee = new Employee("Rambo", 1, "john@rambo.com");
            expect(employee.getRole()).toBe(testing);
        });
    });
    
});