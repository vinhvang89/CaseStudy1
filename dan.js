let d = document.getElementById("myCanvas");
let dtx = d.getContext('2d');
const bullet = "dan.jpg";
const rocket = "danbazooka.png";
let Bullet = function (weapon,positionX,positionY) {
    this.speed = weapon.bulletSpeed;
    this.positionX = positionX;
    this.capacity = new Array('');
    this.capacity.length = weapon.capacity;
    this.positionY = positionY;
    this.drawBullet = function () {
        let image = new Image();
        if(weapon.type === bazooka || weapon.type === bazookaBan )
            image.src = rocket; else  image.src = bullet;
            dtx.drawImage(image,this.positionX,this.positionY)
    };
    this.moveRight = function () {
        this.positionX += this.speed;
    };

};
