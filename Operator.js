
function clearMap() {
    ctx.clearRect(0,0,1700,500)
}
let sung = new Weapons();
let dich = new Enermy();
let flag = 0;
let hp = hp1;


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
    if( enermy.type === enermy1){ a = 30 ; b = 160}
    if( enermy.type === enermy2){ a = 40 ; b = 150}
    if( enermy.type === enermy3){ a = 40 ; b = 130}
    if( enermy.type === enermy4){ a = 40 ; b = 120}
    if( enermy.type === enermy5){ a = 40 ; b = 120}
    if( enermy.type === enermy6){ a = 40 ; b = 90}
    if( enermy.type === enermy7){ a = 50 ; b = 90}
    if( enermy.type === enermy8){ a = 20 ; b = 90}
    if (gun.type === anaconda) {
        if (bullet.positionX + 15 >= enermy.positionX - 50 && bullet.positionX + 15 <= enermy.positionX - 40 &&
            bullet.positionY - 2 >= enermy.positionY - a && bullet.positionY + 2 <= enermy.positionY + b) flag = true;}
    if (gun.type === ak47){
        if (bullet.positionX + 15 >= enermy.positionX - 50 && bullet.positionX + 15 <= enermy.positionX - 30 &&
            bullet.positionY - 2 >= enermy.positionY - a && bullet.positionY + 2 <= enermy.positionY + b) flag = true;}
    if (gun.type === fnscar){
        if (bullet.positionX + 15 >= enermy.positionX - 50 && bullet.positionX + 15 <= enermy.positionX - 30 &&
            bullet.positionY - 2 >= enermy.positionY - a && bullet.positionY + 2 <= enermy.positionY + b) flag = true ;}
    if (gun.type === cheytac){
        if (bullet.positionX + 15 >= enermy.positionX - 50 && bullet.positionX + 15 <= enermy.positionX - 20 &&
            bullet.positionY - 2 >= enermy.positionY - a && bullet.positionY + 2 <= enermy.positionY + b) flag = true;}
    if (gun.type === bazooka){
        if (bullet.positionX + 50 >= enermy.positionX - 50 && bullet.positionX + 50 <= enermy.positionX - 30 &&
            bullet.positionY - 8 >= enermy.positionY - a && bullet.positionY + 8 <= enermy.positionY + b) flag = true;}

        return flag ;
}


function flying() {
    clearMap();
    for (let i = 0; i < bullets.length;i++) {
        if ( bullets[i].positionX < 1500){
        bullets[i].moveRight();
        bullets[i].drawBullet();
        }else continue;
        if (checkImpart(sung,bullets[i],dich) === true && dich.type === enermy1) {hp -= sung.damage;hp1 -= sung.damage};
        if (checkImpart(sung,bullets[i],dich) === true && dich.type === enermy2) {hp -= sung.damage;hp2 -= sung.damage};
        if (checkImpart(sung,bullets[i],dich) === true && dich.type === enermy3) {hp -= sung.damage;hp3 -= sung.damage};
        if (checkImpart(sung,bullets[i],dich) === true && dich.type === enermy4) {hp -= sung.damage;hp4 -= sung.damage};
        if (checkImpart(sung,bullets[i],dich) === true && dich.type === enermy5) {hp -= sung.damage;hp5 -= sung.damage};
        if (checkImpart(sung,bullets[i],dich) === true && dich.type === enermy6) {hp -= sung.damage;hp6 -= sung.damage};
        if (checkImpart(sung,bullets[i],dich) === true && dich.type === enermy7) {hp -= sung.damage;hp7 -= sung.damage};
        if (checkImpart(sung,bullets[i],dich) === true && dich.type === enermy8) {hp -= sung.damage;hp8 -= sung.damage};
    }
    document.getElementById("enermyHP").value = hp;
    sung.drawWeapon();
    if ( hp1 <= 0) dich.changeEnermy2();
    if ( hp2 <= 0) dich.changeEnermy3();
    if ( hp3 <= 0) dich.changeEnermy4();
    if ( hp4 <= 0) dich.changeEnermy5();
    if ( hp5 <= 0) dich.changeEnermy6();
    if ( hp6 <= 0) dich.changeEnermy7();
    if ( hp7 <= 0) dich.changeEnermy8();
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
dich.enermyFire();
