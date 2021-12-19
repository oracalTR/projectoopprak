
const dataWorker = [];

class Worker {
    constructor(firstName, lastName, age, children, dateWorkStart) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.children = children;
        this.dateWorkStart = dateWorkStart;
    }
}

//Оклад
//Должность

class Driver extends Worker{
    constructor(firstName, lastName, age, children, dateWorkStart) {
        super();
    }
}

class Locksmith extends Worker{
    constructor(firstName, lastName, age, children, dateWorkStart) {
        super();
    }

}

const driver = new Driver('Иван', 'Иванов', 38, true, '21.01.2021');

console.log(driver);