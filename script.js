
const dataWorker = [];

class Worker {
    constructor(firstName, lastName, age, children, dateWorkStart) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.children = children;
        this.dateWorkStart = dateWorkStart;
    }

    get createObj() {
        return this;
    }

    set createObj(str) {
        console.log(this);
    }
}


//Оклад
//Должность

class Driver extends Worker{

    constructor(firstName, lastName, age, children, dateWorkStart, station, org) {
        super(firstName, lastName, age, children, dateWorkStart);
        this._station = station;
        this._org = org;
    }

    get station() {
        console.log(this._station);
        return this._station;
    }
    set station(str) {
        this._station = str;
    }
}

class Locksmith extends Worker{

    constructor(firstName, lastName, age, children, dateWorkStart, station, org) {
        super(firstName, lastName, age, children, dateWorkStart);
        this._station = station;
        this._org = org;
    }

    get station() {
        console.log(this._station);
    }
    set station(str) {
        console.log(this._station);
    }
}

const driver = new Driver('Иван', 'Иванов', 38, true, '21.01.2021');
driver.station('Водитель');

console.log(driver);