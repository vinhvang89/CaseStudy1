const MAP1 = "map1.jpg";
const MAP2 = "map2.jpg";
const MAP3 = "map3.jpg";
const MAP4 = "map4.jpEg";
const MAP5 = "map5.jpg";
const MAP6 = "map6.jpg";
const MAP7 = "map7.jpg";
const MAP8 = "map8.jpg";

let Map = function () {
    this.map = MAP1;
    this.drawMap = function () {
        let image = new Image();
        image.src = this.map;
        ctx.drawImage(image,0,0)
    }
};