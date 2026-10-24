
class AccessModifiers {
    private ssn: string;
    protected email: string;
    public name: string;

    constructor(ssn: string, email: string, name: string) {
        this.ssn = ssn;
        this.email = email;
        this.name = name;
    }

    displayDetails(): string {
        return `Name: ${this.name}, Email: ${this.email}, SSN: ${this.ssn}`;
    }
}

class Employee extends AccessModifiers {

    private employeeId: number;

    constructor(ssn: string, email: string, name: string, employeeId: number) {
        super(ssn, email, name);
        this.employeeId = employeeId;
    }

    displayEmployeeDetails() {
        console.log(this.name); // Accessible because 'name' is public
        console.log(this.email); // Accessible because 'email' is protected
        // console.log(this.ssn); // Error: Property 'ssn' is private and only accessible within class 'AccessModifiers'.
        console.log(this.employeeId); // Accessible because 'employeeId' is private to Employee class
    }

}

let employee = new Employee("123-45-6789", "john.doe@example.com", "John Doe", 12345);
employee.displayEmployeeDetails();

console.log(employee.name); // Accessible because 'name' is public
// console.log(employee.email); // Error: Property 'email' is protected and only accessible within class 'AccessModifiers' and its subclasses.
// console.log(employee.ssn); // Error: Property 'ssn' is private and only accessible within class 'AccessModifiers'.
// console.log(employee.employeeId); // Error: Property 'employeeId' is private and only accessible within class 'Employee'.