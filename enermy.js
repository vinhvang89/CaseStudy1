let e = document.getElementById("myCanvas");
let etx = e.getContext('2d');
const enermy1 = "dich1.jpg";
const positionX2 = 1300;
const positionY2 = 0;
let Enermy = function (hp,type,speed) {
    this.hp = hp;
    this.type = type;
    this.speed = speed;
    this.positionX = positionX2;
    this.positionY = positionY2;
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
    }
};
