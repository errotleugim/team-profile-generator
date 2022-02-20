class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email)
        this.officenumber = officenumber
    }
    getName() {
        return this.name;
    }
    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole() {
        return "Employee"
    }
}