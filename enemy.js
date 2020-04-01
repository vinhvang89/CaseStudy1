let e = document.getElementById("myCanvas");
let etx = e.getContext('2d');
let enemyBullets =[];
const enemy1 = "dich1.png";
const enemy2 = "dich2.png";
const enemy3 = "dich3.png";
const enemy4 = "dich4.png";
const enemy5 = "dich5.png";
const enemy6 = "dich6.png";
const enemy7 = "dich7.png";
const enemy8 = "dich8.png";
let hp1 = 20;
let hp2 = 30;
let hp3 = 50;
let hp4 = 80;
let hp5 = 130;
let hp6 = 210;
let hp7 = 340;
let hp8 = 550;
let Enemy = function () {
    this.type = enemy1;
    this.speed = 3;
    this.positionX = 1250;
    this.positionY = 0;
    this.sizeY1 = 30;
    this.sizeY2 = 160;
    this.reloadTime = 200;
    this.reloadCount = 0;
    this.drawEnemy = function () {
        let image = new Image();
        image.src = this.type;
        etx.drawImage(image, this.positionX, this.positionY)

    };
    this.moveEnemyUp = function () {
        this.positionY -= this.speed;
    };
    this.moveEnemyDown = function () {
        this.positionY += this.speed;
    };
    this.fire = function () {
        let enemyBullet = new EnemyBullet(this,15);
        enemyBullets.push(enemyBullet);
    };
    this.changeEnemy2 = function () {
        this.type = enemy2;
        this.speed = 3;
        this.positionX = 1250;
        this.sizeY1 = 40;
        this.sizeY2 = 150;
    };
    this.changeEnemy3 = function () {
        this.type = enemy3;
        this.speed = 3;
        this.positionX = 1250;
        this.sizeY1 = 40;
        this.sizeY2 = 150;
    };
    this.changeEnemy4 = function () {
        this.type = enemy4;
        this.speed = 3;
        this.positionX = 1250;
        this.sizeY1 = 40;
        this.sizeY2 = 120;
    };
    this.changeEnemy5 = function () {
        this.type = enemy5;
        this.speed = 4;
        this.positionX = 1250;
        this.sizeY1 = 28;
        this.sizeY2 = 170;
    };
    this.changeEnemy6 = function () {
        this.type = enemy6;
        this.speed = 4;
        this.positionX = 1250;
        this.sizeY1 = 28;
        this.sizeY2 = 110;
    };
    this.changeEnemy7 = function () {
        this.type = enemy7;
        this.speed = 5;
        this.positionX = 1300;
        this.sizeY1 = 50;
        this.sizeY2 = 90;
    };
    this.changeEnemy8 = function () {
        this.type = enemy8;
        this.speed = 5;
        this.positionX = 1300;
        this.sizeY1 = 20;
        this.sizeY2 = 90;
    };


};

