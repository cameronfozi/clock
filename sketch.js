// currentMinute is the current minute, updated every 60 seconds
var delayMinute;
var spaceBetweenBlocks;
var pageMargin;
var hourBlockLength;
var minuteBlockLength;
var secondBlockLength;
var minuteIndent;
var minuteIncr;
var secondIndent;
var secondIncr;


// setup() is called once at page-load
function setup() {
  
    delayMinute = minute();
    spaceBetweenBlocks = 3;
    pageMargin = 4;
    hourBlockLength = 30;
  
    hght = pageMargin * 2 + spaceBetweenBlocks * 5 + hourBlockLength * 6  
    
    minuteBlockLength = (hght - pageMargin * 2 - spaceBetweenBlocks * 3) / 4;
    secondBlockLength = (hght - pageMargin * 2 - spaceBetweenBlocks) / 2;
  
    minuteIndent = pageMargin + 2 * spaceBetweenBlocks + 2 * hourBlockLength
    minuteIncr = spaceBetweenBlocks + minuteBlockLength;
    secondIndent = minuteIndent + minuteBlockLength + spaceBetweenBlocks;
    secondIncr = secondBlockLength + spaceBetweenBlocks;

    wdth = secondIncr + secondIndent + secondBlockLength + pageMargin
                    
    createCanvas(wdth, hght);
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
  
    incr = hourBlockLength + spaceBetweenBlocks;
  
    for (let sq1 = 0; sq1 < 6; sq1++) {

    wdth = pageMargin + (incr) * sq1
      
    for (let sq2 = 0; sq2 < 2; sq2++) {
      
      fill(255, 255, 255);
      strokeWeight(0.25);
      square(pageMargin + incr * sq2, wdth, hourBlockLength);

    }

  }
  
  for (let sq = 0; sq < 4; sq++) {
    
    sq % 2
    Math.floor(sq / 2)
    
    square(minuteIndent, 
           pageMargin + minuteIncr * sq, 
           minuteBlockLength);
    
    square(secondIndent + secondIncr * (sq % 2), 
           pageMargin + secondIncr * Math.floor(sq / 2), 
           secondBlockLength);
    
  }  
  
    strokeWeight(0);
    fill('rgba(100, 100, 100, 1)'); 
     
}

// setSecond() sets the second hand
function setSecond(sec) {

  squareLength = secondBlockLength * 2
  squareArea = squareLength ** 2
  
  secondCompletion = map(sec, 0, 59, 0, squareArea)
  fullSecondSquares = Math.floor(secondCompletion / (squareArea/4))
    
  if (fullSecondSquares == 0) {
    rectMode(CORNERS);
    sideLength = secondCompletion ** 0.5;
    rect(secondIndent + secondBlockLength, 
         secondBlockLength + pageMargin, 
         secondIndent + secondBlockLength - sideLength, 
         secondBlockLength + pageMargin - sideLength);
    rectMode(CORNER);
  }

  if (fullSecondSquares == 1) {
    square(secondIndent, pageMargin, secondBlockLength);
    rectMode(CORNERS);
    sideLength = (secondCompletion-(squareArea/4)) ** 0.5;
    rect(secondIndent + secondIncr, 
         secondBlockLength + pageMargin, 
         secondIndent + secondIncr + sideLength, 
         secondBlockLength + pageMargin - sideLength);
    rectMode(CORNER);
  }

  if (fullSecondSquares == 2) {
    square(secondIndent, pageMargin, secondBlockLength);
    square(secondIndent + secondIncr, pageMargin, secondBlockLength);
    square(secondIndent + secondIncr, 
           pageMargin + secondIncr, 
           (secondCompletion - (squareArea/2)) ** 0.5);
  }

  if (fullSecondSquares == 3) {
    square(secondIndent, pageMargin, secondBlockLength);
    square(secondIndent + secondIncr, pageMargin, secondBlockLength);
    square(secondIndent + secondIncr, pageMargin + secondIncr, secondBlockLength);
    rectMode(CORNERS);
    sideLength = (secondCompletion-(3*squareArea/4)) ** 0.5;
    rect(secondIndent + secondBlockLength, 
         secondIncr + pageMargin, 
         secondIndent + secondBlockLength - sideLength, 
         secondIncr + pageMargin + sideLength);
    rectMode(CORNER);
  }

}

// setMinute() sets the minute hand
function setMinute(secs) {
  
    squareLength = 4 * minuteBlockLength;
    
    minuteCompletion= map(secs, 0, 3599, 0, squareLength)
    fullMinuteSquares = Math.floor(minuteCompletion / minuteBlockLength)
  
    rect(minuteIndent, 
         pageMargin + minuteIncr * fullMinuteSquares, 
         minuteBlockLength, 
         minuteCompletion - minuteBlockLength * fullMinuteSquares);
  
    while (fullMinuteSquares > 0) {
      
      fullMinuteSquares = fullMinuteSquares - 1
      square(minuteIndent, 
             pageMargin + fullMinuteSquares * minuteIncr, 
             minuteBlockLength);

    }

}

// setHour() sets the hour hand
function setHour(min, hour) {
  
  if (hour >= 12) {hour = hour-12}
  
  hourArea = hourBlockLength ** 2
  incr = hourBlockLength + spaceBetweenBlocks;

  for (let sq1 = 0; sq1 < 6; sq1++) {

    wdth = pageMargin + (incr) * sq1
      
    for (let sq2 = 0; sq2 < 2; sq2++) {
            
      if (hour == 0) {
        
        newLength = map(min, 0, 60, 0, hourArea) ** 0.5;
        square(pageMargin + (incr) * sq2, wdth, newLength);
        
      } if (hour > 0) {
        
        square(pageMargin + (incr) * sq2, wdth, hourBlockLength);
        
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