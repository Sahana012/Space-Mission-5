var player, playerImg;
var alienImg;
var spaceImg;
var starImg;
var alien;
var score = 0;
var gameState = "play";
var frame = 200;
var t, s, ss;


function preload(){
    playerImg = loadImage("astronaut.png");
    spaceImg = loadImage("space.jpg");
    alienImg = loadImage("alien.png");
    starImg = loadImage("star.png");

    t = loadSound("t.mp3");
    s = loadSound("s.mp3");
    ss = loadSound("ss.mp3");
}

function setup(){
    createCanvas(500,800);

    player = createSprite(250, 600, 50, 50);
    player.addImage(playerImg);
    player.scale = 0.15;

    alienGroup = createGroup();
    starGroup = createGroup();

}

function draw(){
    background(spaceImg);

    if(gameState === "play")
    {
        if(keyDown(RIGHT_ARROW))
        {
            player.x = player.x + 4
        }

        if(keyDown(LEFT_ARROW))
        {
            player.x = player.x - 4        
        }    
    
        if(keyDown(UP_ARROW))
        {
            player.y = player.y - 4
        }

        if(keyDown(DOWN_ARROW))
        {
            player.y = player.y + 4
        }

        createAlien();
        createStar();

        if(score >= 20 && score < 40){
            frame = 150
        }
        else if(score >= 40 && score < 59){
            frame = 100
        }
        else if(score >= 60 && sc){
            frame = 50
        }


        drawSprites();

    }

    if(player.isTouching(starGroup)){
        starGroup.destroyEach();
        score = score + Math.round(random(5,10))
        ss.play();
    }

    if(player.isTouching(alienGroup)){        
        gameState = "end";
    }

    if(score >= 75){
        gameState = "end";
      }

    if (gameState === "end"){
      starGroup.destroyEach();
      alienGroup.destroyEach();
      stroke("yellow");
      fill("yellow");
      textSize(50);
      if(score >= 75){
      text("You Win! :D", 100, 350);
      t.play();
      }
      else {
      text("You Lose! :(", 100, 350);
      s.play();
      }
      }

      fill("white");
      textSize(25)
      text("Score : " + score, 30, 30);
  

    

}

function createAlien(){
    if(frameCount%frame===0){
        var alien = createSprite(200,200,70,80)
        alien.x = Math.round(random(60, 450)); 
        alien.y = Math.round(random(60, 450));
        alien.scale = 0.08;
        alien.velocityY = Math.round(random(-3,3));
        alien.velocityX = Math.round(random(-3,3));
        alien.addImage(alienImg)
        alienGroup.add(alien);
    }

}

function createStar(){
    if(frameCount%200===0){
        var star = createSprite(200,200,70,80)
        star.x = Math.round(random(50, 450)); 
        star.y = Math.round(random(50, 450));
        star.scale = 0.1;
        star.velocityY = Math.round(random(-2,2));
        star.velocityX = Math.round(random(-2,2));
        star.addImage(starImg)
        starGroup.add(star);
    }

}

