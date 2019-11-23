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