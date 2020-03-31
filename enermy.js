let e = document.getElementById("myCanvas");
let etx = e.getContext('2d');
const enermy1 = "dich1.jpg";
const enermy2 = "dich2.jpg";
const enermy3 = "dich3.jpg";
const enermy4 = "dich4.jpg";
const enermy5 = "dich5.jpg";
const enermy6 = "dich6.jpg";
const enermy7 = "dich7.jpg";
const enermy8 = "dich8.jpg";
const enermy9 = "dich9.jpg";
let Enermy = function () {
    this.hp = this.hp1;
    this.hp1 = 20;
    this.hp2 = 30;
    this.hp3 = 50;
    this.hp4 = 80;
    this.hp5 = 130;
    this.hp6 = 210;
    this.hp7 = 340;
    this.hp8 = 0;
    this.hp9 = 20;
    this.type = enermy1;
    this.speed = 3;
    this.positionX = 1250;
    this.positionY = 0;
    this.drawEnermy = function () {
        let image = new Image();
        image.src = this.type;
        etx.drawImage(image,this.positionX,this.positionY)

    };
    this.moveEnermyUp = function () {
        this.positionY -= this.speed;
    };
    this.moveEnermyDown = function () {
        this.positionY += this.speed;
    };
    this.changeEnermy2 = function () {
        if (this.hp1 <= 0 ){
            this.type = enermy2;
            this.speed = 3;
            this.positionX = 1250;
            this.positionY = 0;
        };
    }
    this.changeEnermy3 = function () {
        if (this.hp2 <= 0 ){
                this.type = enermy3;
                this.speed = 3;
                this.positionX = 1250;
                this.positionY = 0;
        };
    }
    this.changeEnermy4 = function () {
        if (this.hp3 <= 0 ){
            this.type = enermy4;
            this.speed = 3;
            this.positionX = 1250;
            this.positionY = 0;
        };
    }
    this.changeEnermy5 = function () {
        if (this.hp4 <= 0 ){
            this.type = enermy5;
            this.speed = 4;
            this.positionX = 1300;
            this.positionY = 0;
        };
    }
    this.changeEnermy6 = function () {
        if (this.hp5 <= 0 ){
            this.type = enermy6;
            this.speed = 4;
            this.positionX = 1300;
            this.positionY = 0;
        };
    }
    this.changeEnermy7 = function () {
        if (this.hp6 <= 0 ){
            this.type = enermy7;
            this.speed = 5;
            this.positionX = 1300;
            this.positionY = 0;
        };
    }
    this.changeEnermy8 = function () {
        if (this.hp7 <= 0 ){
            this.type = enermy8;
            this.speed = 5;
            this.positionX = 1300;
            this.positionY = 0;
        };
    }
    this.changeEnermy9 = function () {
        if (this.hp8 <= 0 ){
            this.type = enermy9;
            this.speed = 6;
            this.positionX = 1300;
            this.positionY = 0;
        };
    }
    this.changeEnermy2 = function () {
        if (this.hp1 <= 0 ){
            this.type = enermy2;
            this.speed = 3;
            this.positionX = 1250;
            this.positionY = 0;
        };
    }

};
