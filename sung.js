let c = document.getElementById("myCanvas");
let ctx = c.getContext('2d');
const bazooka =  "BAZOOKA.png";
const cheytac = "CHEYTAC.png";
const anaconda = "ANACONDA.png";
const fnscar = "FNSCAR.png";
const ak47 = "AK47.png";
const bazookaBan =  "BAZOOKAban.png";
const cheytacBan = "CHEYTACban.png";
const anacondaBan = "ANACONDAban.png";
const fnscarBan = "FNSCARban.png";
const ak47Ban = "AK47ban.png";
let capacity1 = 1000;
let capacity2 = 60;
let capacity3 = 80;
let capacity4 = 20;
let capacity5 = 10;
let bullets = [];
let Weapons = function () {
    this.hp = 100;
    this.type = anaconda;
    this.damage = 1;
    this.bulletSpeed = 15;
    this.capacity = 1000;
    this.positionX = 0;
    this.positionY = 0;
    this.strength = 10;
    this.weight = 5;
    this.speed = this.strength - this.weight;
    this.sizeBulletX1 = 50;
    this.sizeBulletX2 = -30;
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
        this.bulletSpeed = 20;
        this.capacity = capacity1;
        this.weight = 2;
        this.sizeBulletX1 = 50;
        this.sizeBulletX2 = -30;
    };
    this.changeto2 = function () {
        this.type = ak47;
        this.damage = 6;
        this.bulletSpeed = 23;
        this.capacity = capacity2;
        this.weight = 4;
        this.sizeBulletX1 = 50;
        this.sizeBulletX2 = -30;
    };
    this.changeto3 = function () {
        this.type = fnscar;
        this.damage = 5;
        this.bulletSpeed = 25;
        this.capacity = capacity3;
        this.weight = 4;
        this.sizeBulletX1 = 50;
        this.sizeBulletX2 = -40;
    };
    this.changeto4 = function () {
        this.type = cheytac;
        this.damage = 35;
        this.capacity = capacity4;
        this.weight = 6;
        this.bulletSpeed = 30;
        this.sizeBulletX1 = 50;
        this.sizeBulletX2 = -20;
    };
    this.changeto5 = function () {
        this.type = bazooka;
        this.damage = 50;
        this.capacity = capacity5;
        this.weight = 7;
        this.bulletSpeed = 15;
        this.sizeBulletX1 = 50;
        this.sizeBulletX2 = -40;
    };
    this.fire = function () {
        let a = 0;
        if (this.type === anaconda || this.type === anacondaBan)
            a = this.positionY + 11;
        if (this.type === ak47 || this.type === ak47Ban)
            a = this.positionY + 10;
        if (this.type === fnscar || this.type === fnscarBan)
            a = this.positionY + 28;
        if (this.type === cheytac || this.type === cheytacBan)
            a = this.positionY + 20;
        if (this.type === bazooka || this.type === bazookaBan)
            a = this.positionY + 26;
        let bullet = new Bullet(this, this.positionX + 150, a);
         bullets.push(bullet);
    }
};

