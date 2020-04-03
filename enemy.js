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
    this.multiPoints = 1;
    this.positionX = 1250;
    this.size = 200;
    this.positionY = 0;
    this.reloadTimeFire = 197;
    this.reloadCountFire = 1;
    this.reloadTimeKnive = 289;
    this.reloadCountKnive = 2;
    this.reloadTimeGrenade = 451;
    this.reloadCountGrenade = 3;
    this.reloadTimeBanhMy  = 393;
    this.reloadCountBanhMy = 4;
    this.reloadTimeTraSua  = 322;
    this.reloadCountTraSua = 5 ;
    this.reloadTimeGaLuoc  = 615;
    this.reloadCountGaLuoc = 6;
    this.reloadTimePho  = 587;
    this.reloadCountPho = 7 ;
    this.reloadTimeShit  = 379;
    this.reloadCountShit = 8;
    this.reloadTimeToilet  = 711;
    this.reloadCountToilet = 1 ;
    this.drawEnemy = function () {
        let image = new Image();
        image.src = this.type;
        ctx.drawImage(image,this.positionX,this.positionY)

    };
    this.moveEnemyUp = function () {
        this.positionY -= this.speed;
    };
    this.moveEnemyDown = function () {
        this.positionY += this.speed;
    };
    this.fire = function () {
        let enemyBullet = new Bullet(this,BULLETENEMY,3,1,10,3,0,0);
        enemyBullets.push(enemyBullet);
    };
    this.throwKnive = function () {
        let knive = new Bullet(this,KNIVE,2,2,20,7,0,0);
        enemyBullets.push(knive);
    };
    this.throwGrenade = function () {
        let grenade = new  Bullet(this,GRENADE,2,5,20,20,0,0);
        enemyBullets.push(grenade)
    };
    this.throwPho = function () {
        let pho = new Bullet(this,PHO,2,1,40,56,0,0);
        enemyBullets.push(pho);
    };
    this.throwToilet = function () {
        let toilet = new Bullet(this,TOILET,1,1,76,86,0,0);
        enemyBullets.push(toilet);
    };
    this.throwBanhMy = function () {
        let banhmy = new Bullet(this,BANHMY,2,2,30,19,0,0);
        enemyBullets.push(banhmy);
    };
    this.throwShit = function () {
        let shit = new Bullet(this,SHIT,2,4,24,24,0,0);
        enemyBullets.push(shit);
    };
    this.throwTraSua = function () {
        let trasua = new Bullet(this,TRASUA,2,1,20,34,0,0);
        enemyBullets.push(trasua);
    };
    this.throwGaLuoc = function () {
        let galuoc = new  Bullet(this,GALUOC,1,3,40,38,0,0);
        enemyBullets.push(galuoc)
    };
    this.changeEnemy2 = function () {
        this.type = enemy2;
        this.speed = 3;
        this.positionX = 1250;
        this.size = 160;
        this.multiPoints = 2;
    };
    this.changeEnemy3 = function () {
        this.type = enemy3;
        this.speed = 3;
        this.positionX = 1250;
        this.size = 160;
        this.multiPoints = 3;
    };
    this.changeEnemy4 = function () {
        this.type = enemy4;
        this.speed = 3;
        this.positionX = 1250;
        this.size = 150;
        this.multiPoints = 4;
    };
    this.changeEnemy5 = function () {
        this.type = enemy5;
        this.speed = 4;
        this.positionX = 1250;
        this.size = 136;
        this.multiPoints = 5;
    };
    this.changeEnemy6 = function () {
        this.type = enemy6;
        this.speed = 4;
        this.positionX = 1250;
        this.size = 135;
        this.multiPoints = 6;
    };
    this.changeEnemy7 = function () {
        this.type = enemy7;
        this.speed = 5;
        this.positionX = 1300;
        this.size = 100;
        this.multiPoints = 7;
    };
    this.changeEnemy8 = function () {
        this.type = enemy8;
        this.speed = 5;
        this.positionX = 1300;
        this.size = 80;
        this.multiPoints = 8;
    };


};

