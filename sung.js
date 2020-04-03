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
const AK47BLOOD = "AK47dan.png";
const ANACONDABLOOD = "ANACONDAdan.png";
const FNSCARBLOOD = "FNSCARdan.png";
const CHEYTACBLOOD = "CHEYTACdan.png";
const BAZOOKABLOOD = "BAZOOKAdan.png";
let capacity1 = 1000;
let capacity2 = 30;
let capacity3 = 35;
let capacity4 = 10;
let capacity5 = 5;
let bullets = [];
let strength = 10;
let Weapons = function () {
    this.sizeX = 50;
    this.sizeY = 50;
    this.hp = 10;
    this.ap = 10;
    this.type = anaconda;
    this.positionX = 0;
    this.positionY = 0;
    this.weight = 2;
    this.speed = strength - this.weight;
    this.drawWeapon = function () {
        let image = new Image();
        image.src = this.type;
        ctx.drawImage(image, this.positionX, this.positionY);
    };
    this.anacondaFire = function () {
        let anacondaBullet = new Bullet(this,ANACONDABULLET,20,1,10,2,150,10);
        bullets.push(anacondaBullet);
    };
    this.ak47Fire = function () {
        let ak47Bullet = new Bullet(this,AK47BULLET,23,12,20,5,150,10);
        bullets.push(ak47Bullet);
    };
    this.fnscarFire = function () {
        let fnscarBullet = new Bullet(this,FNSCARBULLET,25,10,20,4,150,28);
        bullets.push(fnscarBullet);
    };
    this.cheytacFire = function () {
        let cheytacBullet = new Bullet(this,CHEYTACBULLET,30,35,30,5,150,20);
        bullets.push(cheytacBullet);
    };
    this.bazookaFire = function () {
        let rocket = new Bullet(this,ROCKET,20,50,30,8,150,26);
        bullets.push(rocket);
    };

    this.changeto1 = function () {
        this.type = anaconda;
        this.weight = 2;
    };
    this.changeto2 = function () {
        this.type = ak47;
        this.weight = 4;
    };
    this.changeto3 = function () {
        this.type = fnscar;
        this.weight = 4;
    };
    this.changeto4 = function () {
        this.type = cheytac;
        this.weight = 6;
    };
    this.changeto5 = function () {
        this.type = bazooka;
        this.weight = 7;
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
 };

