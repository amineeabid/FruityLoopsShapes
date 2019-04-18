var xPos= 0;
var diam1 = 50;
var yPos= 0;
var y= 75;
var y2= 20;
function setup(){
    createCanvas(700,500);
}
function draw(){
    background("#af513b");
    fill("#d89f1a");
    stroke("#965639");
    strokeWeight(30);
    ellipse(xPos,300,diam1,diam1);
    xPos=xPos+10;
    if(xPos>=width){
        xPos= 0;
    }
    fill("#a4af49");
    stroke("#838c31");
    strokeWeight(10);
    ellipse(400,yPos,60,60);
    yPos=yPos+5;
    if(yPos>=height){
        yPos=0;
    }
    fill("#318c73");
    stroke("#214239");
    strokeWeight(10);
    triangle(30, y, 58, y2, 86, y);
    y=y+10;
    y2=y2+10;
    if (y>=height){
        y=75;
        y2=20;
    }
    fill("#4f4a82");
    textSize(48);
    noStroke();
    textFont()
    text("Frooty Loops Shapes",340,50);
    textFont("Georgia");
    textAlign(CENTER);
}
function mousePressed(){
    diam1= diam1 + 10;
}

