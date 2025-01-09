// currentMinute is the current minute, updated every 60 seconds
var delayMinute;

// setup() is called once at page-load
function setup() {
    delayMinute = minute();
    createCanvas(396, 148);
    colorMode(RGB, 255, 255, 255);
    setBackground();

}

// setBackground() sets the clock's background
function setBackground() {

    let myColor = color(240, 240, 240);
    background(myColor);
  
    strokeWeight(2);
    line(248, 0, 248, 148);
    line(100, 0, 100, 148);
  
    strokeWeight(0.5);
    line(100, 74, 396, 74);
    line(322, 0, 322, 148);
    line(174, 0, 174, 148);
   
    strokeWeight(1);
    fill(255, 255, 255);
    for (let sq1 = 0; sq1 < 4; sq1++) {

      wdth = 4 + 24 * sq1
      
      for (let sq2 = 0; sq2 < 6; sq2++) {
      
        square(wdth, 4 + sq2 * 24, 20);

      }

    }

    fill(0, 0, 0);

}

// setSecond() sets the second hand
function setSecond(sec) {

  secondCompletion = map(sec, 0, 59, 0, 148 * 148)
  fullSecondSquares = Math.floor(secondCompletion / ((148 * 148)/4))
  
  if (fullSecondSquares == 0) {
    square(248, 0, secondCompletion ** (0.5));
  }

  if (fullSecondSquares == 1) {
    square(248, 0, 74);
    square(322, 0, (secondCompletion-((148 * 148)/4)) ** (0.5));
  }

  if (fullSecondSquares == 2) {
    rect(248, 0, 148, 74);
    square(322, 74, (secondCompletion-((148 * 148)/2)) ** (0.5));
  }

  if (fullSecondSquares == 3) {
    rect(248, 0, 148, 74);
    square(322, 74, 74);
    square(248, 74, (secondCompletion-(3*(148 * 148)/4)) ** (0.5));
  }

}

// setMinute() sets the minute hand
function setMinute(secs) {

    minuteCompletion= map(secs, 0, 3599, 0, 148 * 148)
    fullMinuteSquares = Math.floor(minuteCompletion / ((148 * 148)/4))
    
    if (fullMinuteSquares == 0) {
      square(100, 0, minuteCompletion ** (0.5));
    }
  
    if (fullMinuteSquares == 1) {
      square(100, 0, 74);
      square(174, 0, (minuteCompletion-((148 * 148)/4)) ** (0.5));
    }
  
    if (fullMinuteSquares == 2) {
      rect(100, 0, 148, 74);
      square(174, 74, (minuteCompletion-((148 * 148)/2)) ** (0.5));
    }
  
    if (fullMinuteSquares == 3) {
      rect(100, 0, 148, 74);
      square(174, 74, 74);
      square(100, 74, (minuteCompletion-(3*(148 * 148)/4)) ** (0.5));
    } 

}

// setHour() sets the hour hand
function setHour(mins) {

  hourCompletion= map(mins, 0, 1439, 0, 100 * 100)
  fullHourSquares = Math.floor(hourCompletion / ((100 * 100)/4))
  
  // if (fullHourSquares == 0) {
  //   square(0, 0, hourCompletion ** (0.5));
  // }

  // if (fullHourSquares == 1) {
  //   square(0, 0, 50);
  //   square(50, 0, (hourCompletion-((100 * 100)/4)) ** (0.5));
  // }

  // if (fullHourSquares == 2) {
  //   rect(0, 0, 100, 50);
  //   square(50, 50, (hourCompletion-((100 * 100)/2)) ** (0.5));
  // }

  // if (fullHourSquares == 3) {
  //   rect(0, 0, 100, 50);
  //   square(50, 50, 50);
  //   square(0, 50, (hourCompletion-(3*(100 * 100)/4)) ** (0.5));
  // } 

}

function checkPrint(min) {
  
  if (min != delayMinute) {

    console.log(min);
    setBackground();
    delayMinute = min;

  }

}

// draw() is called 60 times per second
function draw() {
  
    let hr = hour();
    let min = minute();
    let sec = second();
  
    fill(0, 0, 0);
    setSecond(sec);
    setMinute(sec + min * 60);
    setHour(min + hr * 60);
    checkPrint(min);
  
}