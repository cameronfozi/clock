// currentMinute is the current minute, updated every 60 seconds
var delayMinute = minute();

// setup() is called once at page-load
function setup() {
    createCanvas(300,100);
    colorMode(RGB, 255, 255, 255);
    let myColor = color(200, 200, 200);
    background(myColor);
  
    // square(0, 0, 100);
    // square(100, 0, 100);
    // square(200, 0, 100); 
  
}

// draw() is called 60 times per second
function draw() {
  
    setup();
  
    let hr = hour();
    let min = minute();
    let sec = second();
  
    fill(0, 0, 0);
    secondHandLength = map(sec, 0, 59, 0, 100 * 100) ** (0.5)
    square(200, 0, secondHandLength);
  
    minuteHandLength = map(sec + min * 60, 
                           0, 
                           3599, 
                           0, 
                           100 * 100) ** (0.5)
    square(100, 0, minuteHandLength);
    
    textSize(32);
    fill(180);
    text(hr, 10, 30);
    fill(100);
    text(min, 10, 60);
    fill(50);
    text(sec, 10, 90);

    if (min != delayMinute) {

        console.log(min);
        delayMinute = min

    }
}