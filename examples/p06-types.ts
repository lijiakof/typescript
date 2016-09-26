// declare variable
let foo: number = 42;
// Type 'string' is not assignable to type 'number'
// foo = '42'; 

// use any declare variable
let fo: any;
fo = {};
fo = 'abc';
fo = 3;
console.log('any:' + fo);

// Enum
enum ORDER_STATES {
    NEW,
    CONFIRMED,
    CANCELLED,
    FULFILLED,
    PROCESSING,
    DECLINED,
    PENDING,
    DELAYED
};
console.log('Enum:' + ORDER_STATES.CONFIRMED);

// Object

// Array
let ids : number[];
ids = [];
ids.push(1);
ids.push(3);
ids.push(6);
ids.forEach(id => {
    console.log('Number Array:' + id);
});

let names : string[] = [];
names.push('Jay');
names.push('Min');
names.forEach(name => {
    console.log('String Array:' + name);
});

// Function
function fn() {
    console.log('Function');
}
fn();

// Class 
class Person {
    public name: string;
    protected age: number;
    private friend: string;
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log(`Class:I am ${this.name}!`);
    }
}

class Programmer extends Person {
    constructor(name) {
        super(name);
    }
}

let pro = new Programmer('jay');
pro.talk();

// Interface
interface Manager {
    project(): string;
}

class TechManager implements Manager {
    project() {
        console.log('Interface: implements Manager')
        return 'plan project';
    }
}

let tm = new TechManager();
tm.project();

// Genericity
class BTNode<T> {
    value: T;
    left: BTNode<T>;
    right: BTNode<T>;
}
let node1 = new BTNode<string>();
let node2 = new BTNode<number>();

function fn2<T>(arg: T){
    return arg;
}
fn2<string>('abc');

class Pair<K, V> {
    key: K;
    value: V;
}
let pair = new Pair<number, string>();
pair.key = 1;
pair.value = 'foo';
