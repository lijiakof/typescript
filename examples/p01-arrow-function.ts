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