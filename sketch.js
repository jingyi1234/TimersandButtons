/***********************************************************************************
  Timers and Buttons
  by Jingyi Zhao
  
  Timers & Buttons in P5 JS
***********************************************************************************/

let r, g, b;
//Global debug variable
//var gDebugMode = true; 

//array of image
var image=[];

// Global timer variable
var simpleTimer;

// Drawing
var progBarWidth; 
var progBarHeight = 30;
var hMargin = 200;
var vMargin = 200;

// User interaction
var waitForMouse = true;

//load iamge
function preload(){
  image[0] = loadImage('assets/hand.png');
}

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);
//pick colors
  r = random(255);
  g = random(255);
  b = random(255);

  // Allocate a 8-second timer
  simpleTimer = new Timer(8000);

  textAlign(LEFT);
  rectMode(CORNER);

  progBarWidth = width - (hMargin*2);
 }


// State 1 = Wait for mouse, just draw text on the screen
// State 2 = Progress bar is animating (wait for mouse is false)
function draw() {
  background(0);

  //mouseX & Y
  //if (gDebugMode == true){
    //drawDebugInfo();
  //}

  if( waitForMouse ) {
    fill('pink');
    textSize(100);
    text("Left Click ! ", hMargin, 450 );

  }

  else if( simpleTimer.expired() ) {
      fill('yellow');
      textSize(50);
      text("Time up", hMargin, 150 );
      fill('green');
      textSize(60);
      text("How many colors do you see ?", 500,400);
      image(image[0],250,500);
    }
  
  else {
    // wait for mouse === false
    drawProgressBar();
    drawTimerText();
    }

  // draw a circle  
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 120);
  translate(620,500);
  noStroke();
  for ( let i = 0; i< 10; i++){
    ellipse(0.30,20,80);
    rotate(PI/5);
   } 
}

// Looks for elapsed time
function drawTimerText() {
  fill('blue');
  textSize(40);
  text( "Elapsed (%) = " + Math.round(simpleTimer.getPercentageElapsed()*100) + "%", hMargin, 350 ); 
  text ("Don't forget CLICK here...",450, 550);
}

// draw the bar itself
function drawProgressBar() {
  // Draw a growing rectangle, from left to right
  noStroke();
  fill(255,127,80);
  rect( hMargin, vMargin + progBarHeight, progBarWidth*simpleTimer.getPercentageElapsed(), progBarHeight );
  
  // draw an outline on top of the rect
  noFill();
  stroke(50);
  strokeWeight(1);
  rect( hMargin, vMargin + progBarHeight, progBarWidth, progBarHeight );

  noStroke();

}

function mousePressed() {
  // start the timer if we are waiting for a mouseclick
  if( waitForMouse ) {
    waitForMouse = false;
    simpleTimer.start();
  }

  else if( simpleTimer.expired() ) {
    bWaitForMouse = true;
  }

  //when the user clicks the mouse
   let d = dist(mouseX, mouseY, 620,500);
  if (d<100){
//pick random color
r= random(255);
g= random(255);
b= random(255);
 }
}




    




//mouseX, mouseY
    //function drawDebugInfo(){
    //fill(255);
    //textSize(25);
    //text("X :" + mouseX + "Y :" + mouseY, 20, height -20);
    
 //}

//key typed
  //function keyTyped() {
  //if ( key === '') {
    //gDebugMode = !gDebugMode;
  //}
//}