var Person = /** @class */ (function () {
    function Person(a, n) {
        this.Age = a;
        this.Name = n;
    }
    Person.prototype.Display = function () {
        console.log(this.Age, this.Name);
    };
    return Person;
}());
var obj = new Person(22, 'SARIM');
obj.Display();
