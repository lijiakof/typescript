class Person {
    name: string;
    age: number;

    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log("I am " + this.name);
    }
}

var p = new Person("Jay");
p.talk();

class Programmer extends Person {
    constructor(name) {
        // must contain a 'super' call
        super(name);
    }

    coding() {
        console.log(this.name + " is coding");
    }
}

var prog = new Programmer("Jerry");
prog.talk();
prog.coding();