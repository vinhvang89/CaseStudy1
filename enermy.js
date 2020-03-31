let e = document.getElementById("myCanvas");
let etx = e.getContext('2d');
const enermy1 = "dich1.jpg";
const enermy2 = "dich2.jpg";
const enermy3 = "dich3.jpg";
const enermy4 = "dich4.jpg";
const enermy5 = "dich5.jpg";
const enermy6 = "dich6.jpg";
const enermy7 = "dich7.jpg";
const enermy8 = "dich8.png";
let hp1 = 20;
let hp2 = 30;
let hp3 = 50;
let hp4 = 80;
let hp5 = 130;
let hp6 = 210;
let hp7 = 340;
let hp8 = 550;
let Enermy = function () {
    this.type = enermy1;
    this.speed = 3;
    this.positionX = 1250;
    this.positionY = 0;
    this.drawEnermy = function () {
        let image = new Image();
        image.src = this.type;
        etx.drawImage(image, this.positionX, this.positionY)

    };
    this.moveEnermyUp = function () {
        this.positionY -= this.speed;
    };
    this.moveEnermyDown = function () {
        this.positionY += this.speed;
    };
    this.changeEnermy2 = function () {
        hp = hp2;
        this.type = enermy2;
        this.speed = 3;
        this.positionX = 1250;
    };
    this.changeEnermy3 = function () {
        hp = hp3;
        this.type = enermy3;
        this.speed = 3;
        this.positionX = 1250;
    };
    this.changeEnermy4 = function () {
        hp = hp4;
        this.type = enermy4;
        this.speed = 3;
        this.positionX = 1250;
    };
    this.changeEnermy5 = function () {
        hp = hp5;
        this.type = enermy5;
        this.speed = 4;
        this.positionX = 1250;
    };
    this.changeEnermy6 = function () {
        hp = hp6;
        this.type = enermy6;
        this.speed = 4;
        this.positionX = 1250;
    };
    this.changeEnermy7 = function () {
        hp = hp7;
        this.type = enermy7;
        this.speed = 5;
        this.positionX = 1300;
    };
    this.changeEnermy8 = function () {
        hp = hp8;
        this.type = enermy8;
        this.speed = 5;
        this.positionX = 1300;
    };


};

