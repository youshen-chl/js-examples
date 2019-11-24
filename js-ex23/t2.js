function Student(name) {
    this.name = name || 'Unnamed';
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
}

var xiaoming = new Student('小明');
var xiaohong = new Student('小红');

{
    console.log('xiaoming = ', xiaoming.name);
    xiaoming.hello();
    console.log('xiaohong = ', xiaohong.name);
    xiaohong.hello();
    console.log(xiaoming.hello === xiaohong.hello);
}


var P = function () {};
var p = new P();

var C = function () {};
C.prototype = p;
console.log('C.prototype.constructor === P = ', C.prototype.constructor === P );
var c = new C();
console.log('C.prototype.constructor === P2 = ', C.prototype.constructor === P );
console.log('c.constructor.prototype = ',c.constructor.prototype === p );
console.log('C.prototype : ', C.prototype  === C);
console.log(Object.getPrototypeOf(c) === p);
console.log(Object.getPrototypeOf(C.prototype) === P.prototype);