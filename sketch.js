// currentMinute is the current minute, updated every 60 seconds
var delayMinute;

// setup() is called once at page-load
function setup() {
    delayMinute = minute();
    createCanvas(300,100);
    colorMode(RGB, 255, 255, 255);
    setBackground();

}

// setBackground() sets the clock's background
function setBackground() {

    let myColor = color(240, 240, 240);
    background(myColor);
  
    strokeWeight(3);
    line(200, 0, 200, 100);
    line(100, 0, 100, 100);
  
    strokeWeight(1);
    line(0, 50, 300, 50);
    line(250, 0, 250, 100);
    line(150, 0, 150, 100);
    line(50, 0, 50, 100);

    fill(255, 255, 255);
    for (let sq1 = 0; sq < 3; i++) {

      wdth = 5 + 25 * sq1
      
      for (let sq2 = 0; sq < 8; i++) {
      
        square(wdth, 5 + sq2 * 25, 20)

      }

    }

    fill(0, 0, 0);

}

// setSecond() sets the second hand
function setSecond(sec) {

  secondCompletion = map(sec, 0, 59, 0, 100 * 100)
  fullSecondSquares = Math.floor(secondCompletion / ((100 * 100)/4))
  
  if (fullSecondSquares == 0) {
    square(200, 0, secondCompletion ** (0.5));
  }

  if (fullSecondSquares == 1) {
    square(200, 0, 50);
    square(250, 0, (secondCompletion-((100 * 100)/4)) ** (0.5));
  }

  if (fullSecondSquares == 2) {
    rect(200, 0, 100, 50);
    square(250, 50, (secondCompletion-((100 * 100)/2)) ** (0.5));
  }

  if (fullSecondSquares == 3) {
    rect(200, 0, 100, 50);
    square(250, 50, 50);
    square(200, 50, (secondCompletion-(3*(100 * 100)/4)) ** (0.5));
  }

}

// setMinute() sets the minute hand
function setMinute(secs) {

    minuteCompletion= map(secs, 0, 3599, 0, 100 * 100)
    fullMinuteSquares = Math.floor(minuteCompletion / ((100 * 100)/4))
    
    if (fullMinuteSquares == 0) {
      square(100, 0, minuteCompletion ** (0.5));
    }
  
    if (fullMinuteSquares == 1) {
      square(100, 0, 50);
      square(150, 0, (minuteCompletion-((100 * 100)/4)) ** (0.5));
    }
  
    if (fullMinuteSquares == 2) {
      rect(100, 0, 100, 50);
      square(150, 50, (minuteCompletion-((100 * 100)/2)) ** (0.5));
    }
  
    if (fullMinuteSquares == 3) {
      rect(100, 0, 100, 50);
      square(150, 50, 50);
      square(100, 50, (minuteCompletion-(3*(100 * 100)/4)) ** (0.5));
    } 

}

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