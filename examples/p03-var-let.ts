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