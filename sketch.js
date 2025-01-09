// currentMinute is the current minute, updated every 60 seconds
var delayMinute;
var spaceBetweenBlocks;
var pageMargin;


// setup() is called once at page-load
function setup() {
  
    delayMinute = minute();
    spaceBetweenBlocks = 2;
    pageMargin = 4;
  
    wdth = pageMargin * 2 + 22 * 4 + spaceBetweenBlocks * 6 + 34 + 140
                    
    createCanvas(wdth, 150);
    colorMode(RGB, 255, 255, 255);
    setBackground();
    fill('rgba(100, 100, 100, 1)'); 

}

// setBackground() sets the clock's background
function setBackground() {

    let myColor = color(250, 220, 245);
    background(myColor);
  
    fill(255, 255, 255); 
    strokeWeight(0.25);
  
    square(136, 4, 70);
    square(208, 4, 70);
    square(208, 76, 70);
    square(136, 76, 70);
  
    square(100, 4, 34);
    square(100, 40, 34);
    square(100, 76, 34);
    square(100, 112, 34);
  
    for (let sq1 = 0; sq1 < 6; sq1++) {

      wdth = 4 + (22 + spaceBetweenBlocks) * sq1
      
      for (let sq2 = 0; sq2 < 4; sq2++) {
      
        fill(255, 255, 255);
        strokeWeight(0.25);
        square(4 + (22 + spaceBetweenBlocks) * sq2, wdth, 22);
        strokeWeight(0);
        fill('rgba(100, 100, 100, 1)');

    }

  } 
  
  
    strokeWeight(0);
    fill('rgba(100, 100, 100, 1)'); 
     
}

// setSecond() sets the second hand
function setSecond(sec) {

  squareLength = 140
  squareArea = squareLength ** 2
  
  secondCompletion = map(sec, 0, 59, 0, squareArea)
  fullSecondSquares = Math.floor(secondCompletion / (squareArea/4))
  
  if (fullSecondSquares == 0) {
    rectMode(CORNERS);
    sideLength = secondCompletion ** 0.5;
    rect(206, 74, 206-sideLength, 74-sideLength);
    rectMode(CORNER);
  }

  if (fullSecondSquares == 1) {
    square(136, 4, 70);
    rectMode(CORNERS);
    sideLength = (secondCompletion-(squareArea/4)) ** 0.5;
    rect(208, 74, 208+sideLength, 74-sideLength);
    rectMode(CORNER);
  }

  if (fullSecondSquares == 2) {
    square(136, 4, 70);
    square(208, 4, 70);
    square(208, 76, (secondCompletion-(squareArea/2)) ** (0.5));
  }

  if (fullSecondSquares == 3) {
    square(136, 4, 70);
    square(208, 4, 70);
    square(208, 76, 70);
    rectMode(CORNERS);
    sideLength = (secondCompletion-(3*squareArea/4)) ** 0.5;
    rect(206, 76, 206-sideLength, 76+sideLength);
    rectMode(CORNER);
  }

}

// setMinute() sets the minute hand
function setMinute(secs) {
  
    squareLength = 136

    minuteCompletion= map(secs, 0, 3599, 0, squareLength)
    fullMinuteSquares = Math.floor(minuteCompletion / 34)
    
    if (fullMinuteSquares == 0) {
      rect(100, 4, 34, minuteCompletion);
    }
  
    if (fullMinuteSquares == 1) {
      square(100, 4, 34);
      rect(100, 40, 34, minuteCompletion - 34);
    }
  
    if (fullMinuteSquares == 2) {
      square(100, 4, 34);
      square(100, 40, 34);
      rect(100, 76, 34, minuteCompletion - 68);
    }
  
    if (fullMinuteSquares == 3) {
      square(100, 4, 34);
      square(100, 40, 34);
      square(100, 76, 34);
      rect(100, 112, 34, minuteCompletion - 102);
    } 

}

// setHour() sets the hour hand
function setHour(min, hour) {

  for (let sq1 = 0; sq1 < 6; sq1++) {

    wdth = 4 + (22 + spaceBetweenBlocks) * sq1
      
    for (let sq2 = 0; sq2 < 4; sq2++) {
            
      if (hour == 0) {
        
        newLength = map(min, 0, 60, 0, 22 * 22) ** 0.5;
        square(4 + (22 + spaceBetweenBlocks) * sq2, wdth, newLength);
        
      } if (hour > 0) {
        
        square(4 + (22 + spaceBetweenBlocks) * sq2, wdth, 22);
        
      }
      
      hour = hour - 1;

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
  
    fill('rgba(100, 100, 100, 1)');
    setSecond(sec);
    setMinute(sec + min * 60);
    setHour(min, hr);
  
}