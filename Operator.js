let sung = new Weapons();
let dich = new Enemy();
let flag = 0;
let hp = hp1;
let map = new Map();
function clearMap() {
    ctx.clearRect(0,0,1400,500)
}
function moveEnemy() {

    if(dich.positionY >= 400){
        flag = 1;
    }
    if (flag === 0) {
        dich.moveEnemyDown();
    }
    if (flag === 1) {
        dich.moveEnemyUp();
        if(dich.positionY <= 0){
            flag = 0;
        }
    }
    enemyFire();

    requestAnimationFrame(moveEnemy);
}

function enemyFire () {
    dich.reloadCount++;
    if ( dich.reloadCount >= dich.reloadTime ) {dich.fire();dich.reloadCount = 0}

}

function checkImpactWithEnemy(gun,bullets,enemy) {
    let flag = false;
    if (bullets.positionX + 15 >= enemy.positionX - gun.sizeBulletX1 &&
        bullets.positionX + 15 <= enemy.positionX + gun.sizeBulletX2 &&
        bullets.positionY - 2 >= enemy.positionY - enemy.sizeY1 &&
        bullets.positionY + 2 <= enemy.positionY + enemy.sizeY2)
        flag = true;
    return flag ;
}
function checkImpactWithPlayer(gun,bullets) {
    let flag = false;
    if ( bullets.positionX + 20 >= gun.positionX - 20 &&
         bullets.positionX + 20 <= gun.positionX + 20 &&
         bullets.positionY + 2 >= gun.positionY - 50 &&
         bullets.positionY + 2 <= gun.positionY + 50)
         flag = true;
    return flag;
}
function endGame() {
    let flag = false;
    if ( capacity1 === 0 && capacity2 === 0 &&
        capacity3 === 0 && capacity4 === 0 &&
        capacity5 === 0) flag = true;
    if ( sung.hp <= 0) flag = true;
    if ( document.getElementById("vua").value === vua) flag = true;
    if ( flag === true ) return alert("Game Over and press F5 to replay")
}
function changeEnemy() {
    if ( hp <= 0 && dich.type === enemy1) {
        map.map = MAP2 ;
        dich.changeEnemy2();
        sung.hp += 1 ;
        hp = hp2
    }
    if ( hp <= 0 && dich.type === enemy2) {
        map.map = MAP3 ;
        dich.changeEnemy3();
        sung.hp += 2 ;
        hp = hp3
    }
    if ( hp <= 0 && dich.type === enemy3) {
        map.map = MAP4 ;
        dich.changeEnemy4();
        sung.hp += 3;
        hp = hp4;
        document.getElementById("tot").innerHTML = tot
    }
    if ( hp <= 0 && dich.type === enemy4) {
        map.map = MAP5 ;
        dich.changeEnemy5();
        sung.hp += 4 ;
        hp = hp5;
        document.getElementById("xe").innerHTML = xe
    }
    if ( hp <= 0 && dich.type === enemy5) {
        map.map = MAP6 ;
        dich.changeEnemy6();
        sung.hp += 5;
        hp = hp6;
        document.getElementById("ma").innerHTML = ma
    }
    if ( hp <= 0 && dich.type === enemy6) {
        map.map = MAP7 ;
        dich.changeEnemy7();
        sung.hp +=6;
        hp = hp7;
        document.getElementById("tuong").innerHTML = tuong
    }
    if ( hp <= 0 && dich.type === enemy7) {
        map.map = MAP8 ;
        dich.changeEnemy8();
        sung.hp += 7 ;
        hp = hp8;
        document.getElementById("hau").innerHTML = hau
    }
    if ( hp <= 0) {
        document.getElementById("vua").innerHTML = vua
    }
}

function bulletFlying() {
    clearMap();
    map.drawMap();
    for (let i = 0; i < bullets.length;i++) {
        if ( bullets[i].positionX < 1500){
        bullets[i].moveRight();
        bullets[i].drawBullet();
        }else continue;
        if (checkImpactWithEnemy(sung,bullets[i],dich) === true )
            hp -= sung.damage;

    }
    for (let j = 0; j <enemyBullets.length ; j++) {
        if ( enemyBullets[j].positionX > 0){
            enemyBullets[j].moveEnemyBullet();
            enemyBullets[j].drawEnemyBullet();
        } else continue;
        if ( checkImpactWithPlayer(sung,enemyBullets[j])===true)
            sung.hp -= 1 ;
    }
    document.getElementById("enemyHP").value = hp;
    document.getElementById("yourHP").value = sung.hp;
    sung.drawWeapon();
    changeEnemy();
    dich.drawEnemy();
    endGame();
    requestAnimationFrame(bulletFlying)
}
function returnTypeOfGun(gun) {
    if (gun.type === anaconda || gun.type === anacondaBan)
        gun.type = anaconda;
    if (gun.type === ak47 || gun.type === ak47Ban)
        gun.type = ak47;
    if (gun.type === fnscar || gun.type === fnscarBan)
        gun.type = fnscar;
    if (gun.type === cheytac || gun.type === cheytacBan)
        gun.type = cheytac;
    if (gun.type === bazooka || gun.type === bazookaBan)
        gun.type = bazooka;
    return gun.type
}

function move(event) {
    switch (event.keyCode) {
        case 49:
        case 97: {
            sung.changeto1();
            break;
        }
        case 50:
        case 98: {
            sung.changeto2();
            break;
        }
        case 51:
        case 99: {
            sung.changeto3();
            break;
        }
        case 52:
        case 100: {
            sung.changeto4();
            break;
        }
        case 53:
        case 101: {
            sung.changeto5();
            break;
        }
        case 38:
        case 37: {
            sung.positionX = 0;
            returnTypeOfGun(sung);
            sung.moveUp();
            break;
        }
        case 39:
        case 40: {
            sung.positionX = 0;
            returnTypeOfGun(sung);
            sung.moveDown();
            break;
        }
        case 32: {
            if (capacity1 > 0)
            if (sung.type === anaconda || sung.type === anacondaBan)  {
                sung.positionX = 12;
                sung.type = anacondaBan;
                sung.fire();
            }
            if (capacity2 > 0)
            if (sung.type === ak47 || sung.type === ak47Ban) {
                sung.positionX = 12;
                sung.type = ak47Ban;
                sung.fire();
            }
            if (capacity3 > 0)
            if (sung.type === fnscar || sung.type === fnscarBan ) {
                sung.positionX = 10;
                sung.type = fnscarBan;
                sung.fire()
            }
            if (capacity4 > 0)
            if (sung.type === cheytac || sung.type === cheytacBan) {
                sung.positionX = 20;
                sung.type = cheytacBan;
                sung.fire()
            }
            if( capacity5 > 0)
            if (sung.type === bazooka || sung.type === bazookaBan ) {
                sung.positionX = 20;
                sung.type = bazookaBan;
                sung.fire()
            }

            if (sung.type === anaconda || sung.type === anacondaBan)
                if (capacity1 > 0) capacity1--;
            if (sung.type === ak47 || sung.type === ak47Ban)
                if (capacity2 > 0) capacity2--;
            if (sung.type === fnscar || sung.type === fnscarBan)
                if (capacity3 > 0) capacity3--;
            if (sung.type === cheytac || sung.type === cheytacBan)
                if (capacity4 > 0) capacity4--;
            if (sung.type === bazooka || sung.type === bazookaBan)
                if( capacity5 > 0) capacity5--;
            document.getElementById("capacity1").value = capacity1;
            document.getElementById("capacity2").value = capacity2;
            document.getElementById("capacity3").value = capacity3;
            document.getElementById("capacity4").value = capacity4;
            document.getElementById("capacity5").value = capacity5;
        }
    }

    clearMap();
    map.drawMap();
    dich.drawEnemy();
    sung.drawWeapon();

}

function run() {
    window.addEventListener('keydown',move);
}
bulletFlying();
moveEnemy();

