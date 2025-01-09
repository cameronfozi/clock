// currentMinute is the current minute, updated every 60 seconds
var delayMinute;
var spaceBetweenBlocks;
var spaceBetweenSections;
var hourBlockLength;
var minuteBlockLength;
var secondBlockLength;
var borderMargins;


// setup() is called once at page-load
function setup() {
  
    delayMinute = minute();
    createCanvas(398, 150);
    colorMode(RGB, 255, 255, 255);
    setBackground();
    fill(100,74,76);

}

// setBackground() sets the clock's background
function setBackground() {

    let myColor = color(249,241,241);
    background(myColor);
    strokeWeight(0.5);
     
}

// setSecond() sets the second hand
function setSecond(sec) {

  squareLength = 140
  squareArea = squareLength ** 2
  
  secondCompletion = map(sec, 0, 59, 0, squareArea)
  fullSecondSquares = Math.floor(secondCompletion / (squareArea/4))
  
  if (fullSecondSquares == 0) {
    square(252, 4, secondCompletion ** (0.5));
  }

  if (fullSecondSquares == 1) {
    square(252, 4, 70);
    square(324, 4, (secondCompletion-(squareArea/4)) ** (0.5));
  }

  if (fullSecondSquares == 2) {
    square(252, 4, 70);
    square(324, 4, 70);
    square(324, 76, (secondCompletion-(squareArea/2)) ** (0.5));
  }

  if (fullSecondSquares == 3) {
    square(252, 4, 70);
    square(324, 4, 70);
    square(324, 76, 70);
    square(252, 76, (secondCompletion-(3*squareArea/4)) ** (0.5));
  }

}

// setMinute() sets the minute hand
function setMinute(secs) {
  
    squareLength = 140
    squareArea = squareLength ** 2

    minuteCompletion= map(secs, 0, 3599, 0, squareArea)
    fullMinuteSquares = Math.floor(minuteCompletion / (squareArea/4))
    
    if (fullMinuteSquares == 0) {
      square(100, 4, minuteCompletion ** (0.5));
    }
  
    if (fullMinuteSquares == 1) {
      square(100, 4, 70);
      square(172, 4, (minuteCompletion-(squareArea/4)) ** (0.5));
    }
  
    if (fullMinuteSquares == 2) {
      square(100, 4, 70);
      square(172, 4, 70);
      square(172, 76, (minuteCompletion-(squareArea/2)) ** (0.5));
    }
  
    if (fullMinuteSquares == 3) {
      square(100, 4, 70);
      square(172, 4, 70);
      square(172, 76, 70);
      square(100, 76, (minuteCompletion-(3*squareArea/4)) ** (0.5));
    } 

}

// setHour() sets the hour hand
function setHour(min, hour) {

  for (let sq1 = 0; sq1 < 6; sq1++) {

    wdth = 4 + 22 * sq1
      
    for (let sq2 = 0; sq2 < 4; sq2++) {
      
      if (hour <= 0) {
        
        newLength = map(min, 0, 60, 0, 20 * 20) ** 0.5;
        square(4 + sq2 * 22, wdth, newLength);
        break
        
      } else {
        
        square(4 + sq2 * 22, wdth, 20);
        hour = hour - 1;
        
      }

    }
      
    if (hour <= 0) {
      
      break
      
    }

  } 
  
}

function checkPrint(min) {
  
  if (min != delayMinute) {

    setBackground();
    console.log(min);
    delayMinute = min;

  }

}

// draw() is called 60 times per second
function draw() {
  
    let min = minute();
    let hr = hour();
    let sec = second();
    checkPrint(min);
  
    fill(66,74,76);
    setSecond(sec);
    setMinute(sec + min * 60);
    setHour(min, hr);
  
}