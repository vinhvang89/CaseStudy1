let f = document.getElementById("myCanvas");
let ftx = f.getContext("2d");
const BULLETENEMY = "dandich.jpg";
const GRENADE = "luudan.png";
const KNIVE = "dao.png";
let EnemyBullet = function (enemy,type,speed,damage) {
    this.type = type;
    this.speed = speed;
    this.damage = damage;
    this.positionX = enemy.positionX;
    this.positionY = enemy.positionY ;
    this.drawEnemyBullet = function () {
        let image = new Image();
        image.src = this.type;
        ftx.drawImage(image,this.positionX,this.positionY)
    };
    this.moveEnemyBullet = function () {
        this.positionX -= this.speed;
    };

};

