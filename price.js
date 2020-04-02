const tot = '<img src="tot.jpg" height="60" width="20"/>';
const xe = '<img src="xe.png" height="60" width="29"/>';
const ma = '<img src="ma.png" height="60" width="31"/>';
const tuong = '<img src="tuong.jpg" height="60" width="29"/>';
const hau = '<img src="hau.jpg" height="60" width="29"/>';
const vua = '<img src="vua.jpg" height="60" width="29"/>';
let score = 0;
function drawWinImage() {
    let image = new Image();
    image.src = "win.jpg";
    ctx.drawImage(image,0,0)
}
function drawLoseGame() {
    let image = new  Image();
    image.src = "lose.png";
    ctx.drawImage(image,0,0)
}