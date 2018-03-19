"use strict"

var person = {
    name: 'LIXIN',
    age: 20,
    school: 'ZheDa',
    gendar: 'male',
    address: {
        city: 'beijing',
        street: 'No.1',
        zipcode: '2321412',
    }
}

var fs = require("fs")

var f = function () {
    for (let i in arguments) {
        console.log(i, arguments[i])
    }
}

var f2 = () => {
    // for( var i in arguments)
    // {
    //     console.log(arguments[i])
    // }
    var p0 = arguments[0];
    var p1 = arguments[1];
    var p2 = arguments[2];
    var p3 = arguments[3];
    console.log(p0, p1, p2, p3)
}

var f3 = function () {
    var [x, y, z] = [1, 2, '3'];
    console.log(x, y, z);
}

var f4 = function () {
    // f2('aa',1,root,process)

    var { name, gendar, school: s, single = true, address: { zipcode, city } } = person;
    console.log(name, gendar, s, single, city, zipcode)
}

var f5 = function () {
    var xiaoming = {
        name: 'xiaoming',
        birth: 1990,
        age: function () {
            var y = 2018;
            return y - this.birth;
        }
    }

    console.log(xiaoming.age);
    console.log(xiaoming.age())
}

var f6 = function () {
    var s = '12345';
    var string2int = function (str) {
        var s1 = [];
        for (let i in str) {
            s1[i] = s[i];
        }
        var a = s1.map(Number);
        return console.log(a.reduce(function (x, y) {
            return x * 10 + y;
        }));
    }

    string2int(s)
}

var f7 = function () {
    var name = ['zyy', 'zMY'];
    var uppercaseList = function (nameList) {
        for (let i in nameList) {

        }
    }
    var upcase = function (str) {
        var s1 = [];
        for (let i in str) {
            s1[i] = s[i];
        }
        return s.reduce(function (x, y) {

        })
    }
}

var f8 = function () {
    var str = ['Google', 'apple', 'Microsoft'];

    console.log(str.sort(function (x, y) {//true,交换
        s1 = x.toUpperCase();
        s2 = y.toUpperCase();
        if (s1 > s2) {
            return 1;//前面比后面大，交换之
        }
        else {
            return -1;
        }
    }))
}

var f9 = function () {
    var s = JSON.stringify(person, function (key, value) {
        if (typeof value === 'string') {
            return value.toUpperCase();
        }
        return value;
    }, ' ');
    console.log(s);
}

function Animal(name) {
    this.name = name;
}

Animal.prototype.hello = function() {
    console.log("hello ", this.name)
}

function createAnimal(name) {
    return new Animal(name);
}

var cat = createAnimal("Cat");
cat.hello()

var dog = createAnimal('Dog');
dog.hello()

console.log(cat === dog)
console.log(cat.hello === dog.hello)
console.log(cat.constructor === Animal.prototype.constructor)
console.log(Animal === Animal.prototype.constructor)
console.log(Animal)
console.log(Animal.prototype.constructor)
console.log(Animal.constructor)

var AnimalCat = function(name, type) {
    Animal.call(this, name);
    this.type = type;
}

var createAnimalCat = function(name, type) {
    return new AnimalCat(name, type);
}

function F() {}
F.prototype = Animal.prototype;
AnimalCat.prototype = new F();
AnimalCat.prototype.constructor = Animal    
AnimalCat.prototype.getType = function() {
    return this.type;
}

var baozi = createAnimalCat("baozi", "bao-type");

console.log()

class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log("hello", this.name);
    }
}

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
}

var zyy = new Student("zhengyuying")
var zmy = new PrimaryStudent("ZhangMinying")

console.log(zyy.prototype == zmy.prototype)



