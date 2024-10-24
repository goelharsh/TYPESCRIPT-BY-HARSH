var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Airpod = /** @class */ (function () {
    function Airpod() {
        // here we dont have to write let const or anything 
        this.price = 2300;
        this.image = 'image/airpod.png';
        this.color = 'white';
    }
    // we dont have to write function keyword 
    Airpod.prototype.playMusic = function () {
        console.log('Music playing');
    };
    Airpod.prototype.switchMode = function (mode) {
        console.log(mode);
    };
    return Airpod;
}());
var AirConditioner = /** @class */ (function () {
    function AirConditioner() {
        this.color = 'white';
        this.tones = 5;
        this.company = 'voltas';
        this.temperature = 22;
    }
    AirConditioner.prototype.turnOn = function (name) {
        console.log("Turning on ".concat(name, ".... "));
        console.log("Turned on ".concat(name, "."));
    };
    AirConditioner.prototype.turnOf = function () {
        console.log('Turning off....');
        console.log('Turned off.');
    };
    AirConditioner.prototype.raiseTemperature = function () {
        this.temperature++;
        console.log(this.temperature);
    };
    AirConditioner.prototype.decreaseTemp = function () {
        console.log('Descreasing temp by 1');
    };
    return AirConditioner;
}());
var ac = new AirConditioner();
ac.raiseTemperature();
var ac1 = new AirConditioner();
ac1.turnOn('ac1');
//__________________________________
var Pendrive = /** @class */ (function () {
    function Pendrive() {
        this.data = null;
    }
    Pendrive.prototype.putData = function () {
        console.log("Putting data ".concat(this.data));
    };
    return Pendrive;
}());
var pendrive1 = new Pendrive();
pendrive1.putData();
// ____________________________________
var Food = /** @class */ (function () {
    function Food() {
        this.price = 1100;
    }
    Food.prototype.eat = function () {
        console.log('eating');
    };
    return Food;
}());
var Sweet = /** @class */ (function (_super) {
    __extends(Sweet, _super);
    function Sweet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'patisa';
        return _this;
    }
    return Sweet;
}(Food));
var sweet = new Sweet();
console.log(sweet.name);
//_________________________________-
// constructor concept
// it is special method of class which is used to initialized things 
var Car = /** @class */ (function () {
    function Car(name) {
        this.company = name;
    }
    Car.prototype.print = function () {
        console.log(this.company);
    };
    return Car;
}());
var volvo = new Car('volvo');
volvo.print();
