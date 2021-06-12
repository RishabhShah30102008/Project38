var dog, dogImage, happyDog, database, foodS, foodStock, state;

var feedTheDog, addTheFood;

var fedTime, lastFed;

var feed,addFood;

var foodObj;

var milkBottle, milkBottleImage, Milk;

var changingGameState, readingGameState;

var bedroom, garden, washroom, bedroomImage, gardenImage, washroomImage, livingImage;

var bath, sleep, play, park;

var foodleft;

var form;

function preload()
{

  dogImage = loadImage("Images/dogImg.png");
  happyDog = loadAnimation("Images/dogImg1.png");
  milkBottleImage = loadImage("Images/Milk.png");

  bedroomImage = loadImage("Images/virtual pet images/Bed Room.png");
  gardenImage = loadImage("Images/virtual pet images/Garden.png");
  washroomImage = loadImage("Images/virtual pet images/Wash Room.png");
  livingImage = loadImage("Images/virtual pet images/Living Room.png");

}

function setup() {
  createCanvas(420, 500);

  database = firebase.database();
  
  //foodStock = database.ref('Food')
  //foodStock.on("value", readStock);

  foodObj = new Food();

  readingGameState = database.ref('gameState');
  readingGameState.on("value",function(data){
    state = data.val();
  });

  foodleft = 20;

      feedTheDog=createButton("Feed the dog");
      feedTheDog.position(400,95);
      feedTheDog.mousePressed(function(){
    
        foodleft = foodleft -1
    
        state = 1;
        database.ref('/').update({
    
          'gameState' : state
    
        })
    
      });
    
      addTheFood=createButton("Add Food");
      addTheFood.position(500,95);
      addTheFood.mousePressed(function(){
    
        foodleft = foodleft + 1;
    
        state = 2;
        database.ref('/').update({
    
          'gameState' : state
    
        })
    
      });
    
      bath = createButton("I want to take a bath");
      bath.position(580,95);
      bath.mousePressed(function(){
    
        state = 3;
        database.ref('/').update({
    
          'gameState' : state
    
        })
    
      });
    
      sleep = createButton("I want to sleep");
      sleep.position(400,125);
      sleep.mousePressed(function(){
    
        state = 4;
    
        database.ref('/').update({
    
          'gameState' : state
    
        })
    
      });
    
      play = createButton("I want to play");
      play.position(510,125);
      play.mousePressed(function(){
    
        state = 5;
    
        database.ref('/').update({
    
          'gameState' : state
    
        })
    
      });
    
      park = createButton("I want to play in the park");
      park.position(610,125);
      park.mousePressed(function(){
    
        state = 6;
    
        database.ref('/').update({
    
          'gameState' : state
    
        })
    
      });
    
        }
  
function draw() {

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
 
  strokeWeight(3);
  stroke(0);
  fill("yellow");
  textSize(25);
  text("Decide your dog's routine",75,250);

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

  if(state === 0){

    feedTheDog.hide();
    addTheFood.hide();
    bath.hide();
    sleep.hide();
    play.hide();
    park.hide()
    
}

  if(state === 1 || state === 2){

    foodObj.garden();

    strokeWeight(3);
    stroke(0)
    fill("yellow");
    text("Food Left: " + foodleft,150,200);

  }

  if(state === 3){

    foodObj.washroom();
    //dog.scale = 0;

  }

  if(state === 4){

    foodObj.bedroom();
    //dog.visible = false;

  }

  if(state === 5){

    foodObj.playInsideHome();
    //dog.visible = true;

  }

  if(state === 6){

    foodObj.garden();
    //dog.visible = false;

  }

  fill(255,255,254);
  textSize(15);
  
  drawSprites();

}

//function readStock(data){

 // foodS = data.val();
 // foodObj.updateFoodStock(foodS);

//}

function feedDog(){ 
  
  //dog.addAnimation("abc",happyDog);

  //foodObj.updateFoodStock(foodObj.getFoodStock()-1);

  //database.ref('/').update({

    //Food : foodObj.getFoodStock(),
    //FeedTime : hour(),
    //state : "Hungry"

  //});
  
}

function addFood(){

  foodleft++

  database.ref('/').update({

    Food : foodS

  })

}

function update(state){
  database.ref('/').update({
    gameState:state
  })
}