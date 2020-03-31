let c = document.getElementById("myCanvas");
let ctx = c.getContext('2d');
const bazooka =  "BAZOOKA.jpg";
const cheytac = "CHEYTAC.jpg";
const anaconda = "ANACONDA.jpg";
const fnscar = "FNSCAR.jpg";
const ak47 = "AK47.jpg";
const positionX1 = 0;
const positionY1 = 0;
let capacity1 = 1000;
let capacity2 = 30;
let capacity3 = 40;
let capacity4 = 10;
let capacity5 = 5;
let bullets = [];
let bulletsOfAnaconda = [];
let bulletsOfAk47 = [];
let bulletsOfFnscar = [];
let bulletsOfCheytac = [];
let bulletsOfBazooka = [];

let Weapons = function () {
    this.type = anaconda;
    this.damage = 1;
    this.bulletSpeed = 15;
    this.capacity = 1000;
    this.positionX = positionX1;
    this.positionY = positionY1;
    this.speed = 5;
    this.drawWeapon = function () {
        let image = new Image();
        image.src = this.type;
        ctx.drawImage(image, this.positionX, this.positionY);
    };
    this.moveUp = function () {
        if (this.positionY > 0) {
            this.positionY -= this.speed
        }
    };
    this.moveDown = function () {
        if (this.positionY < 420) {
            this.positionY += this.speed
        }
    };
    this.changeto1 = function () {
        this.type = anaconda;
        this.damage = 1;
        this.bulletSpeed = 15;
        this.capacity = capacity1;
        this.speed = 5;
    }
    this.changeto2 = function () {
        this.type = ak47;
        this.damage = 6;
        this.bulletSpeed = 20;
        this.capacity = capacity2;
        this.speed = 3;

    }
    this.changeto3 = function () {
        this.type = fnscar;
        this.damage = 5;
        this.bulletSpeed = 22;
        this.capacity = capacity3;
        this.speed = 3;
    }
    this.changeto4 = function () {
        this.type = cheytac;
        this.damage = 25;
        this.capacity = capacity4;
        this.speed = 2;
        this.bulletSpeed = 30;
    }
    this.changeto5 = function () {
        this.type = bazooka;
        this.damage = 50;
        this.capacity = capacity5;
        this.speed = 1;
        this.bulletSpeed = 12;
    }
    this.fire = function () {
        let a = 0;
        if (this.type === anaconda) a = this.positionY + 10;
        else if (this.type === ak47) a = this.positionY + 10;
        else if (this.type === fnscar) a = this.positionY + 28;
        else if (this.type === cheytac) a = this.positionY + 20;
        else if (this.type === bazooka) a = this.positionY + 25;
        let bullet = new Bullet(this, this.positionX + 50, a);
        if (this.type === anaconda)
            bullets.push(bullet);
         else if (this.type === ak47)
            bullets.push(bullet);
        else if (this.type === fnscar)
            bullets.push(bullet);
        else if (this.type === cheytac)
            bullets.push(bullet);
        else if (this.type === bazooka)
            bullets.push(bullet);


    }
};

