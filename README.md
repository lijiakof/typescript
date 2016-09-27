# TypeScript 极速指南
TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

## 安装 TypeScript
我们可以通过 npm 来安装 TypeScript：

```
npm install -g typescript
```

安装完成后我们就可以通过 `tsc` 命令来编译 .ts 文件了：

```
tsc hello.ts
node hello.js
```

如果你想通过一个命令来执行 .ts 文件，可以安装 ts-node 模块：

```
npm install ts-node --save-dev
```

现在就可以通过 `ts-node hello.ts` 来执行 .ts 命令了：

```
ts-node hello.ts
```

## 运行第一个 TypeScript 程序
源码可以在 `examples` 文件夹中找到：

```
// ./examples/p00-hello.ts
console.log('Hello World');
```

```
ts-node ./examples/p00-hello.ts
```

## 箭头函数

箭头函数(也就是lambda表达式)在 TypeScript 中的用法如下：

```
// ./examples/p00-arrow-function.ts
var result = [1 ,2 ,3].reduce(function(total, current) {
    return total + current;
});
console.log("result=" + result);

var result1 = [1, 2, 3].reduce((total, current) => total + current, 0);
console.log("result1=" + result1);

var even = [3, 1, 56, 7].filter(el => !(el % 2));
console.log("even=" + even);

setTimeout(function(){
    console.log("timeout 1")
},200);

setTimeout(() => console.log("timeout 2"), 200);

setTimeout(() => {
    console.log("timeout 3")
},300);
```

```
ts-node ./examples/p01-arrow-function.ts
```

## 类
既然是面向对象的语言，类的概念肯定是不可缺少，以下是定义了一个类并使用它，而且类和类之间有继承关系：

```
// ./examples/p02-the-class.ts
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
```

```
ts-node ./examples/p02-the-class.ts
```

## let
在 ES5 之前的 JavaScript 版本中，都是通过 `var` 来定义变量，用它定义的变量的作用域非常混乱，导致开发人员经常会得到意想不到的结果。TypeScript 可以用 `var` 来定义变量，它的作用域非常稳定不会让开发人员产生歧义：

```
// ./examples/p03-var-let.ts
var fns = [];
for(var i = 0; i < 5; i++) {
    fns.push(function(){
        console.log(i);
    });
}
fns.forEach(fn => fn());

var fns1 = [];
for(let j = 0; j < 5; j++) {
    fns1.push(function(){
        console.log(j);
    });
}
fns1.forEach(fn => fn());
```

```
ts-node ./examples/p03-var-let.ts
```

我们可以执行上面的代码，采用 `var` 和 `let` 定义的变量产生的结果有很大不同。

## decorators

## modules
在 TypeScript 中引入模块的定义，这样可以更好的拆分代码，让代码更加的高类聚和松耦合。

### export module
我们通过 `export` 来导出模块。以下是我们定义的一个模块，里面有很多方法，我们通过 `export` 将模块的内容导出，以便外部引用：

```
// ./examples/p05-module-math.ts

function square(x) {
    return Math.pow(x, 2);
}
function log10(x) {
    return Math.log(x);
}

export { square, log10 };
```

### import module
我们通过 `import` 来引用模块，其中 `from` 前面代表需要导入的模块名称，后面是模块对应的文件路径：

```
// ./examples/p05-module-import.ts
import {square, log10} from './p05-modules-math';

console.log(square(3));
console.log(log10(2));
```

```
ts-node ./examples/p05-module-import.ts
```

我们也可以通过 `* as` 来导入所有的模块：

```
// ./examples/p05-module-importall.ts
import * as math from './p05-modules-math';

console.log(math.square(2));
console.log(math.log10(20));
```

```
ts-node ./examples/p05-module-importall.ts
```

## Types 
让我们来看看 TypeScript 中的一些类型：

### 定义变量
由于 TypeScript 是强类型的语言，类型一旦定义就不能修改，如果尝试去修改变量的类型，会报错：

```
let foo: number = 42;

// foo = '42'; 
// Type 'string' is not assignable to type 'number'
```

### any
当然 Typescript 也有 ES5 的特征，通过 `any` 定义一个任意类型的变量，它的值的类型是可以变化的。

```
let fo: any;
fo = {};
fo = 'abc';
fo = 3;
console.log('any:' + fo);
```

### Enum
枚举类型，基本上所有强类型的语言都有这个类型：

```
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
```

### Array
数组类型：

```
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
```

### Function
方法：

```
function fn() {
    console.log('Function');
}
fn();
```

### Class
类，和很多强类型语言一样，类有构造函数、属性、方法，还有继承等特点。当然也会有对类的成员的访问级别的修饰符：

* public
* protected
* private

```
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
```

### Interface
接口只是一种类型的定义，并没有实际的功能，它暴露出来的接口成员需要通过其它的类来实现。接口的出现让面向对象的语言在运行时可以再去确定具体实例的类型，这样体现了一种多态的特性：

```
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
```

### Genericity
泛型也是高级语言中很常见的一种类型，它可以将类型以参数的形式传入到类中或者类对应的成员中，让类型更加的灵活：

```
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
```

### 总结
TypeScript 让脚本语言更加的具有面向对象的思想，让它更加的高级，我们在写代码的过程中可以更加好的理解和组织代码，让我们更加快乐的编程。

以上代码都在：./examples/p05-types.ts 文件中。
