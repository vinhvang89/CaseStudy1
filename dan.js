const ANACONDABULLET = "anacondabullet.jpg";
const ROCKET = "rocket.png";
const AK47BULLET = "ak47bullet.jpg";
const FNSCARBULLET = "fnscarbullet.jpg";
const CHEYTACBULLET = "cheytacbullet.jpg";
const BULLETENEMY = "dandich.jpg";
const GRENADE = "luudan.png";
const KNIVE = "dao.png";
const PHO = "pho.png";
const TRASUA = "trasua.png";
const TOILET = "toilet.png";
const  BANHMY = "banhmy.png";
const GALUOC = "galuoc.png";
const  SHIT = "shit.png";
let Bullet = function (object,type,speed,damage,sizeX,sizeY,positionFireX,positionFireY) {
    this.speed = speed;
    this.damage = damage;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.positionX = object.positionX + positionFireX ;
    this.positionY = object.positionY + positionFireY ;
    this.type = type;
    this.drawBullet = function () {
        let image = new Image();
        image.src = this.type;
        ctx.drawImage(image,this.positionX,this.positionY)
    };
    this.moveRight = function () {
        this.positionX += this.speed;
    };
    this.moveLeft = function () {
        this.positionX -= this.speed;
    }

};
