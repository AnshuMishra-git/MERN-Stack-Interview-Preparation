class Person {
  constructor(name) {
    this.name = name;
  }
  getData() {
    console.log("This is Data0->>", this);
  }
}

class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }

  showStudentName() {
    console.log("I am Logging My School Name", this.school);
    super.getData();
  }
}

class Address extends Student {
  constructor(name, school, address) {
    super(name, school);
    this.address = address;
  }

  showAddress() {
    console.log("My Address Is ", this.address);
    super.showStudentName();
  }
}

const p1 = new Address("Anshu", "Vidya Mandir", "Ram Nath Deoria");
p1.showAddress();
