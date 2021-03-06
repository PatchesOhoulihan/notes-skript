/* Generated by Babel */

//OBJEKT definition nicht vergessen dies ist die definition für EIN Objekt

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var auto = new Object();
//Variable
auto.marke = 'Ford';
auto.model = 'Mustang';
auto.farbe = 'Rot';
auto.km = 1238564;

//Methode
auto.fahren = function (distanz) {
    auto.km += distanz;
};

console.log(auto);

//(Call bei reference) Wenn man ein Objekt einer Variablen zuweist wird nur eine Referenz auf das alte Objekt erstellt.
var neuesAuto = auto;

console.log('Hier kommt das neue Auto: ');
console.log(neuesAuto);

//Wenn Variable in (() =>{})() Definiert ist sie nicht mehr im Globalscope und kann nicht mehr direkt in der Console(mit console.log() aufgerufen werden)

//KLASSEN definition Blaupause aus der unendlich viele Objekte erstellen kann. Klassen fangen immer groß an

var Fighter = function Fighter(x) {
    var _this = this;

    _classCallCheck(this, Fighter);

    this.name = x;
    this.str = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    this.dex = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    this.hp = 100;

    //If you define a variable with a let the Variable is declared private.
    var hf = 12;
    this.hit = function (opponent) {
        var dmg = Math.floor(Math.random() * (_this.str - _this.str / 4 + 1) + _this.str / 4);

        var evadeChance = opponent.dex * (Math.random() * 8);
        if (evadeChance <= 50) {
            opponent.hp -= dmg;
            console.log("HIT!: " + dmg);
            console.log("HP!: " + opponent.hp);
        } else {
            console.log("MISS!");
            console.log(hf);
        }
    };
}

//Objekte aus Klassen initialisieren:
;

var f1 = new Fighter('Hans');
console.log("Name des ersten Kämpfers: ");
console.log(f1);

var f2 = new Fighter('Manni');
console.log("Name des zweiten Kämpfers: ");
console.log(f2);

console.log("Time for a Fight: ");
f1.hit(f2);
console.log("Is this variable private: " + f1.hf);

//wiring the The Stuff up

document.querySelector('#create-fighter').addEventListner('click', function () {
    player1 = new Fighter(document - querySelector(''));
});