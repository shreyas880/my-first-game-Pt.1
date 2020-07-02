var killArr;
var pawn1;
var cross1,cross2;
var cross3,cross4;
var cross5,cross6;
var cross7,cross8;



function setup(){
  createCanvas(windowWidth,windowHeight);


  
  pawn1 = createButton('PAWN 1');
  pawn1.position(800,200);



  b1 = createSprite(190,170,100,100);

  b2 = createSprite(190,60,100,100);
  
  b3 = createSprite(190,280,100,100);

  cross1 = createSprite(190,280,100,10);
  cross1.depth = 4;
  cross1.shapeColor = 0;

  cross2 = createSprite(190,280,10,100);
  cross2.depth = 4;
  cross2.shapeColor = 0;

  b4 = createSprite(190,390,100,100);
 
  b5 = createSprite(190,500,100,100);

  b6 = createSprite(300,60,100,100);  
  b7 = createSprite(410,60,100,100);

  cross3 = createSprite(410,60,100,10);
  cross3.depth = 9;
  cross3.shapeColor = 0;

  cross4 = createSprite(410,60,10,100);
  cross4.depth = 9;
  cross4.shapeColor = 0;



  b8 = createSprite(520,60,100,100);
  b9 = createSprite(630,60,100,100);
 

  b11 = createSprite(630,170,100,100);
  b13 = createSprite(630,280,100,100);

  cross5 = createSprite(630,280,100,10);
  cross5.depth = 13;
  cross5.shapeColor = 0;

  cross6 = createSprite(630,280,10,100);
  cross6.depth = 13;
  cross6.shapeColor = 0;




  b14 = createSprite(630,390,100,100);

  b16 = createSprite(300,500,100,100);  
  b17 = createSprite(410,500,100,100);

  cross3 = createSprite(410,500,100,10);
  cross3.depth = 17;
  cross3.shapeColor = 0;

  cross4 = createSprite(410,500,10,100);
  cross4.depth = 17;
  cross4.shapeColor = 0;

  b18 = createSprite(520,500,100,100);
  b19 = createSprite(630,500,100,100);



  b20 = createSprite(300,170,100,100);
  b21 = createSprite(410,170,100,100);
  b22 = createSprite(520,170,100,100);

  b23 = createSprite(300,280,100,100);
  b24 = createSprite(410,280,100,100);
  b24.shapeColor = rgb(4,244,216);
  b25 = createSprite(520,280,100,100);

  b26 = createSprite(300,390,100,100);
  b27 = createSprite(520,390,100,100);
  b28 = createSprite(410,390,100,100);
  


  l1 = createSprite(410,115,540,10);
  l1.shapeColor = "black";
  
  l2 = createSprite(410,225,540,10);
  l2.shapeColor = "black";

  l3 = createSprite(410,335,540,10);
  l3.shapeColor = "black";

  l4 = createSprite(410,445,540,10);
  l4.shapeColor = "black";

  l5 = createSprite(245,280,10,540);
  l5.shapeColor = "black";
  
  l6 = createSprite(355,280,10,540);
  l6.shapeColor = "black";

  l7 = createSprite(465,280,10,540);
  l7.shapeColor = "black";

  l8 = createSprite(575,280,10,540);
  l8.shapeColor = "black";

  ol1 = createSprite(135,280,10,540);
  ol1.shapeColor = 0;

  ol2 = createSprite(410,5,560,10);
  ol2.shapeColor = 0;

  ol3 = createSprite(685,280,10,540);
  ol3.shapeColor = 0;

  ol4 = createSprite(410,555,560,10);
  ol4.shapeColor = 0;

  plr1 = createSprite(440,525,25,25);
  plr1.shapeColor = "lime";

  plr1p2 = createSprite(440,475,25,25);
  plr1p2.shapeColor = "lime";

  plr1p3 = createSprite(385,525,25,25);
  plr1p3.shapeColor = "lime";

  plr1p4 = createSprite(385,475,25,25);
  plr1p4.shapeColor = "lime";

  plr2 = createSprite(440,30,25,25);
  plr2.shapeColor = "yellow";

  plr2p2 = createSprite(440,85,25,25);
  plr2p2.shapeColor = "yellow";

  plr2p3 = createSprite(380,30,25,25);
  plr2p3.shapeColor = "yellow";

  plr2p4 = createSprite(380,85,25,25);
  plr2p4.shapeColor = "yellow";

  //lihdushfdiukhskxdugjdvkick
  
  plr3 = createSprite(605,310,25,25);
  plr3.shapeColor = "blue";

  plr3p2 = createSprite(605,255,25,25);
  plr3p2.shapeColor = "blue";

  plr3p3 = createSprite(660,255,25,25);
  plr3p3.shapeColor = "blue";

  plr3p4 = createSprite(660,310,25,25);
  plr3p4.shapeColor = "blue";

  plr4 = createSprite(215,310,25,25);
  plr4.shapeColor = "red";


  plr4p2 = createSprite(215,255,25,25);
  plr4p2.shapeColor = "red";


  plr4p3 = createSprite(170,255,25,25);
  plr4p3.shapeColor = "red";


  plr4p4 = createSprite(170,310,25,25);
  plr4p4.shapeColor = "red";

  
  killArr = [];   

    mousePressed();
}
function draw(){
  background(255);





  drawSprites();
}
function moveForward(pawn){
  if(pawn.isTouching(b5) || pawn.isTouching(b16) || pawn.isTouching(b17) || pawn.isTouching(b18)){
    pawn.x += 115;
  }else if(pawn.isTouching(b19) || pawn.isTouching(b11) || pawn.isTouching(b13) || pawn.isTouching(b14)){
    pawn.y -= 115;
  }else if(pawn.isTouching(b6) || pawn.isTouching(b7) || pawn.isTouching(b8) || pawn.isTouching(b9)){
    pawn.x -= 115;
  }else{
    pawn.y += 115;
  }  

  if(pawn.isTouching(b16) && killArr.length >= 1){
    pawn.y -= 120;
  }
  
  if(pawn.isTouching(b22) && plr2.isTouching(b22)){
      plr2.x = 430;
      plr2.y = 45;
      killArr.push("1");

  }
}
function mousePressed(pawn1){
  moveForward(plr1);
}