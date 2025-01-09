// currentMinute is the current minute, updated every 60 seconds
var delayMinute;

// setup() is called once at page-load
function setup() {
  
    delayMinute = minute();
    createCanvas(388, 148);
    colorMode(RGB, 255, 255, 255);
    setBackground();

}

// setBackground() sets the clock's background
function setBackground() {

    let myColor = color(200, 200, 200);
    background(myColor);
  
    strokeWeight(0.5);
    line(170, 4, 170, 144);
    line(314, 4, 314, 144);
    line(100, 74, 240, 74);
    line(244, 74, 384, 74);
     
}

// setSecond() sets the second hand
function setSecond(sec) {

  squareLength = 140
  squareArea = squareLength ** 2
  
  secondCompletion = map(sec, 0, 59, 0, squareArea)
  fullSecondSquares = Math.floor(secondCompletion / (squareArea/4))
  
  if (fullSecondSquares == 0) {
    square(244, 4, secondCompletion ** (0.5));
  }

  if (fullSecondSquares == 1) {
    square(244, 4, 70);
    square(314, 4, (secondCompletion-(squareArea/4)) ** (0.5));
  }

  if (fullSecondSquares == 2) {
    rect(244, 4, 140, 70);
    square(314, 74, (secondCompletion-(squareArea/2)) ** (0.5));
  }

  if (fullSecondSquares == 3) {
    rect(244, 4, 140, 70);
    square(314, 74, 70);
    square(244, 74, (secondCompletion-(3*squareArea/4)) ** (0.5));
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
      square(170, 4, (minuteCompletion-(squareArea/4)) ** (0.5));
    }
  
    if (fullMinuteSquares == 2) {
      rect(100, 4, 140, 70);
      square(170, 74, (minuteCompletion-(squareArea/2)) ** (0.5));
    }
  
    if (fullMinuteSquares == 3) {
      rect(100, 4, 140, 70);
      square(174, 74, 70);
      square(100, 74, (minuteCompletion-(3*squareArea/4)) ** (0.5));
    } 

}

// setHour() sets the hour hand
function setHour(min, hour) {

  for (let sq1 = 0; sq1 < 6; sq1++) {

    wdth = 4 + 24 * sq1
      
    for (let sq2 = 0; sq2 < 4; sq2++) {
      
      if (hour <= 0) {
        
        fill(200, 200, 200);
        square(4 + sq2 * 24, wdth, 20);
        fill(0, 0, 0);
        
        newLength = map(min, 0, 60, 0, 20 * 20) ** 0.5;
        square(4 + sq2 * 24, wdth, newLength);
        break
        
      } else {
        
        square(4 + sq2 * 24, wdth, 20);
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
  
    fill(0, 0, 0);
    setSecond(sec);
    setMinute(sec + min * 60);
    setHour(min, hr);
  
}