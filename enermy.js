let e = document.getElementById("myCanvas");
let etx = e.getContext('2d');
let enermyBullets =[];
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
    this.sizeY1 = 30;
    this.sizeY2 = 160;
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
    this.fire = function () {
        let enermyBullet = new EnermyBullet(this,15);
        enermyBullets.push(enermyBullet);
    };
    this.changeEnermy2 = function () {
        this.type = enermy2;
        this.speed = 3;
        this.positionX = 1250;
        this.sizeY1 = 40;
        this.sizeY2 = 150;
    };
    this.changeEnermy3 = function () {
        this.type = enermy3;
        this.speed = 3;
        this.positionX = 1250;
        this.sizeY1 = 40;
        this.sizeY2 = 150;
    };
    this.changeEnermy4 = function () {
        this.type = enermy4;
        this.speed = 3;
        this.positionX = 1250;
        this.sizeY1 = 40;
        this.sizeY2 = 120;
    };
    this.changeEnermy5 = function () {
        this.type = enermy5;
        this.speed = 4;
        this.positionX = 1250;
        this.sizeY1 = 28;
        this.sizeY2 = 170;
    };
    this.changeEnermy6 = function () {
        this.type = enermy6;
        this.speed = 4;
        this.positionX = 1250;
        this.sizeY1 = 28;
        this.sizeY2 = 110;
    };
    this.changeEnermy7 = function () {
        this.type = enermy7;
        this.speed = 5;
        this.positionX = 1300;
        this.sizeY1 = 50;
        this.sizeY2 = 90;
    };
    this.changeEnermy8 = function () {
        this.type = enermy8;
        this.speed = 5;
        this.positionX = 1300;
        this.sizeY1 = 20;
        this.sizeY2 = 90;
    };


};

