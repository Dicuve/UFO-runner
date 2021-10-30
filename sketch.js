// SE RECOMIENDA JUGAR ESTE JUEGO EN EL MODO PRESENTAR YA QUE EL JUEGO SE ADAPTA AL MONITOR.

var ufo, ufoImg, ufo2Img; 
var asteroide, asteroidsImg, asteroidsGroup; 
var cristal, cristalImg, cristalGroup, cristalf, cristalfImg, cristalfGroup;
var reset, resetImg, gameOver, gameOverImg;
var resetG, gOG;
var score, Hscore;
var score=0;
var Hscore= 0;
var z = 0; 
var o = 1;

 function preload (){
 ufoImg = loadAnimation ( "UFO.png","png-transparent-unidentified-flying-object-spacecraft-flying-saucer-cartoon-hat-material-modification-purple-hat-vector-hat_2.png");
 asteroidsImg = loadImage ("89461230-caída-del-asteroide-la-lluvia-de-meteoritos-cayendo-cometa-en-el-espacio-aislado-en-fondo-negro.jpg");
  ufo2Img = loadImage ("explosión-ardiente-brillante-grande-aislada-en-fondo-negro-un-146391170.jpg");
  cristalImg = loadAnimation ("f608x342-10142_39865_0.jpg");
  cristalfImg = loadImage ("explosión-grande-azul-en-el-espacio-principios-del-universo-fondo-loopable-de-la-astronomía-para-103552292.jpg");
  resetImg = loadImage ("56141784-icono-en-el-botón-con-el-símbolo-de-reinicio.jpg");
   gameOverImg = loadImage ("gameoverphrase.jpg");
 }

 function setup() {
  createCanvas(windowWidth, windowHeight); 
  ufo=createSprite(150,windowHeight-30,20,20);
  ufo.addAnimation ("ovni",ufoImg);
  ufo.scale = 0.2;
  reset=createSprite(windowWidth/2+300,windowHeight/2,20,20);
  reset.addImage(resetImg);
  reset.scale = 0.3;
  reset.visible=false;
  gameOver=createSprite(windowWidth/2-200,windowHeight/2,20,20);
  gameOver.depth=reset.depth-1;
  gameOver.addImage(gameOverImg);
  gameOver.visible=false;
  resetG = new Group ();
  gOG = new Group ();
  asteroidsGroup = new Group ();
  cristalGroup = new Group ();
}

function draw() { 
  if(keyWentDown (RIGHT)){ 
      z = z+1;
    } 
  
  if ( z === 0)  { 
    background (0);
    fill("white"); 
    textSize(30);
    text("Hola, veo que eres el humano que el sistema ha escogido.",windowWidth/2 - 250,windowHeight/2 - 50,300,300);  
    fill("white"); 
    textSize(15); 
    text("Presiona flecha derecha para continuar",windowWidth - 150,windowHeight - 100,150,150) ;
  } 
    if ( z === 1)  { 
    background (0);
    fill("white"); 
    textSize(30);
    text("Muy bien te explicare rapidamente tu función",windowWidth/2 - 250,windowHeight/2 - 50,300,300);  
    fill("white"); 
    textSize(15); 
    text("Presiona flecha derecha para continuar",windowWidth - 150,windowHeight - 100,150,150); 
  } 
    if ( z === 2)  { 
    background (0);
    fill("white"); 
    textSize(30);
    text("Tu manejaras remotamente una de las naves de nosotros los Novianos, la nave seguira tu cursor",windowWidth/2 - 250,windowHeight/2 - 50,300,300);  
    fill("white"); 
    textSize(15); 
    text("Presiona flecha derecha para continuar",windowWidth - 150,windowHeight - 100,150,150); 
    }
      if ( z === 3)  {
      background (0);
    fill("white"); 
    textSize(30);
    text("Es MUY importante que no choques con los meteoritos que aparecen de vez en cuando",windowWidth/2 - 250,windowHeight/2 - 50,300,300);  
    fill("white"); 
    textSize(15); 
    text("Presiona flecha derecha para continuar",windowWidth - 150,windowHeight - 100,150,150) ;
  } 
      if ( z === 4)  { 
      background (0);
    fill("white"); 
    textSize(30);
    text("Cuidado con los cristales de distorsión, son inevitables y cuando explotan la orientación cambia y en vez de manejar horizontalmente manejaras verticalmente",windowWidth/2 - 250,windowHeight/2 - 50,400,400);  
    fill("white"); 
    textSize(15);
      text("Presiona flecha derecha para continuar",windowWidth - 150,windowHeight - 100,150,150) ;
  } 
 if ( z === 5){
   background (0);
   ufo.visible=true;
   ufo.x = 125;
   ufo.y = mouseY;
   score = score + Math.round(frameCount/60);
   fill("white");
  text("Puntuación: " + score, 500,50);
  text("Puntuación más alta :" +Hscore, 455, 70 );
   if (ufo.isTouching(asteroidsGroup)){
     asteroidsGroup.destroyEach();
     cristalGroup.destroyEach();
     z=6;
     ufo.visible=false;
     ufo2 = createSprite (ufo.x,ufo.y,20,20);
   }
   if (ufo.isTouching(cristalGroup)){
     asteroidsGroup.destroyEach();
     cristalGroup.destroyEach();
     z= 7;
     o=2;
   }
   cristales();
   meteoritos();
   drawSprites();
 }

 if ( z===6){
   ufo2.addImage(ufo2Img);
   ufo2.scale = 0.4
   ufo2.depth=reset.depth+1
   reset.visible=true;
   gameOver.visible=true;
   if (mousePressedOver (reset)){
    z=5;
    o=1;
    restart();
   }
  if (score > Hscore ){
      Hscore = score;
    
    }
   drawSprites();
   }  
  if ( z===7 ){
  background (0);
  ufo.y= windowHeight-100;
  ufo.x = mouseX;
  score = score + Math.round(frameCount/60);
  fill("white");
  text("Puntuación: " + score, 500,50);
  text("Puntuación más alta :" +Hscore, 455, 70 );
  if (ufo.isTouching(asteroidsGroup)){
     asteroidsGroup.destroyEach();
     cristalGroup.destroyEach();
     z=6;
     ufo.visible = false;
     ufo2 = createSprite (ufo.x,ufo.y,20,20);
   }
   if (ufo.isTouching(cristalGroup)){
     asteroidsGroup.destroyEach();
     cristalGroup.destroyEach();
     z= 5;
     o=1;
   }
  
  cristales();
  meteoritos();
  drawSprites();
}
  
}


function meteoritos (){
  if ( frameCount % 60 === 0 && o === 1){
  asteroide = createSprite (windowWidth + 20, Math.round(random(windowHeight-0)), 20, 20  )
  asteroide.velocityX = -5;
  asteroide.velocityY = 1;
  asteroide.addImage(asteroidsImg);
  asteroide.scale=0.3
  asteroide.depth = ufo.depth+1;
  asteroide.lifetime = windowWidth + 100;
  asteroide.setCollider ("circle");
  asteroidsGroup.add(asteroide);
  }
  if ( frameCount % 60 === 0 && o === 2){
  asteroide = createSprite (Math.round(random(windowWidth)),-20, 20, 20  )
  asteroide.velocityY = 5;
  asteroide.velocityX = -1;
  asteroide.addImage(asteroidsImg);
  asteroide.scale=0.3
  asteroide.depth = ufo.depth+1;
  asteroide.lifetime = windowHeight + 100;
  asteroide.setCollider ("circle");
  asteroidsGroup.add(asteroide);
  }
}

function cristales(){
  if ( frameCount % 400 === 0 && o ===1 ){
    cristal = createSprite (windowWidth +100,windowHeight/2,20,20);
    cristal.velocityX = -5;
    cristal.addAnimation ("dcristal",cristalImg);
    cristal.depth = asteroide.depth + 1;
    cristal.lifetime = windowWidth + 100;
    cristal.scale = 1.5;
    cristalGroup.add(cristal);
  }
  if ( frameCount % 400 === 0 && o ===2 ){
    cristal = createSprite (windowWidth/2,-300,20,20);
    cristal.velocityY = 5;
    cristal.addAnimation ("dcristal",cristalImg);
    cristal.depth = asteroide.depth + 1;
    cristal.lifetime = windowHeight + 100;
    cristal.scale = 1.5;
    cristalGroup.add(cristal);
  }
}
function restart(){
   resetG.add(reset);
   gOG.add(gameOver);
    gameOver.visible = false;
    reset.visible = false;
   ufo2.visible=false;
    if (score > Hscore ){
      Hscore = score;
    }
    score = 0;
    
  }