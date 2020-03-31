
function clearMap() {
    ctx.clearRect(0,0,1700,500)
}
let sung = new Weapons();
let dan = new Bullet(sung);
let dich = new  Enermy();
let flag = 0;
let hp = dich.hp1;
function moveEnermy() {
    if(dich.positionY >= 400){
        flag = 1;
    }
    if (flag === 0) {
        dich.moveEnermyDown();
    }
    if (flag === 1) {
        dich.moveEnermyUp();
        if(dich.positionY <= 0){
            flag = 0;
        }
    }

    requestAnimationFrame(moveEnermy);
}
function checkImpart(gun,bullet,enermy) {
    let flag = false;
    if (gun.type === anaconda) {
        if (bullet.positionX + 15 >= enermy.positionX - 50 && bullet.positionX + 15 <= enermy.positionX - 40 &&
            bullet.positionY - 2 >= enermy.positionY - 20 && bullet.positionY + 2 <= enermy.positionY + 80) flag = true;}
    if (gun.type === ak47){
        if (bullet.positionX + 15 >= enermy.positionX - 50 && bullet.positionX + 15 <= enermy.positionX - 30 &&
            bullet.positionY - 2 >= enermy.positionY - 20 && bullet.positionY + 2 <= enermy.positionY + 80) flag = true;}
    if (gun.type === fnscar){
        if (bullet.positionX + 15 >= enermy.positionX - 50 && bullet.positionX + 15 <= enermy.positionX - 30 &&
            bullet.positionY - 2 >= enermy.positionY - 20 && bullet.positionY + 2 <= enermy.positionY + 80) flag = true ;}
    if (gun.type === cheytac){
        if (bullet.positionX + 15 >= enermy.positionX - 50 && bullet.positionX + 15 <= enermy.positionX - 15 &&
            bullet.positionY - 2 >= enermy.positionY - 20 && bullet.positionY + 2 <= enermy.positionY + 80) flag = true;}
    if (gun.type === bazooka){
        if (bullet.positionX + 50 >= enermy.positionX - 50 && bullet.positionX + 50 <= enermy.positionX - 40 &&
            bullet.positionY - 8 >= enermy.positionY - 20 && bullet.positionY + 8 <= enermy.positionY + 80) flag = true;}

        return flag ;
}


function flying() {
    clearMap();
    for (let i = 0; i < bullets.length;i++) {
        if ( bullets[i].positionX < 1500){
        bullets[i].move();
        bullets[i].drawBullet();
        }else continue;
        if (checkImpart(sung,bullets[i],dich) === true) hp -= sung.damage;
    }
    document.getElementById("enermyHP").value = hp;
    sung.drawWeapon();
    dich.drawEnermy();
    requestAnimationFrame(flying)
}

function move(event) {
    switch (event.keyCode) {
        case 49:
        case 97: {
            sung.changeto1();
            break;
        }
        case 50:
        case 98:{
            sung.changeto2();
            break;
        }
        case 51:
        case 99:{
            sung.changeto3();
            break;
        }
        case 52:
        case 100:{
            sung.changeto4();
            break;
        }
        case 53:
        case 101:{
            sung.changeto5();
            break;
        }
        case 38:
        case 37:{
            sung.moveUp();
            break;
        }
        case 39:
        case 40: {
            sung.moveDown();
            break;
        }
        case 32:{
            if( sung.type === anaconda && capacity1 > 0)
            sung.fire();
            if( sung.type === ak47 && capacity2 > 0)
                sung.fire();
            if( sung.type === fnscar && capacity3 > 0)
                sung.fire();
            if( sung.type === cheytac && capacity4 > 0)
                sung.fire();
            if( sung.type === bazooka && capacity5 > 0)
                sung.fire();

            if(sung.type === anaconda && capacity1 >0) capacity1--;
            if(sung.type === ak47 && capacity2 > 0) capacity2 --;
            if(sung.type === fnscar && capacity3 > 0) capacity3 --;
            if(sung.type === cheytac && capacity4 > 0) capacity4 --;
            if(sung.type === bazooka && capacity5 > 0 ) capacity5 --;
            document.getElementById("capacity1").value = capacity1;
            document.getElementById("capacity2").value = capacity2;
            document.getElementById("capacity3").value = capacity3;
            document.getElementById("capacity4").value = capacity4;
            document.getElementById("capacity5").value = capacity5;
        }
    }
    clearMap();
    dich.drawEnermy();
    dan.drawBullet(bullets);
    sung.drawWeapon();
}

function run() {
    window.addEventListener('keydown',move);
}

flying();
moveEnermy();
