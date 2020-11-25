let state='menu';
let video;
let poseNet;
let pose;
let position=[];
let noseX=200;
let noseY=200;
let name;
let ancestry;
let haircolor;
let house;
candles=[];
let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/kpv_KvykJ/';
let label = "";

function preload(){
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  img=loadImage("sortinghat.png");
  bg1=loadImage("hogwarts wallpaper.jpg");
  music=loadSound("Harry Potter Hedwigs Theme short.mp3");
  hpfont=loadFont('HARRYP.TTF');
  candle=loadImage("images/candle.png");
  prof1=loadImage("images/remus.jpg");
  gesture1=loadImage("images/victory gesture.png");
}
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  for(i=0; i<20; i++){
    candles.push({
      x:random(20, 440),
      y: random(40, 100),
    })
  }
}

function gotPoses(poses) {
  //console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}


function draw() {
  background(220);
  if (state==='menu') {
    drawMenu();
    music.play();
  }
  else if (state==='hatsort') {
    startHatSort();
    clicker1.draw();
  }
  else if(state==='game'){
    drawGame();
  }
  else if(state==='game over'){
    drawGameOver();
  }
}

function drawMenu(){
  imageMode(CENTER);
  image(bg1, 320, 240, 640, 480);
  textAlign(CENTER);
  textSize(30);
  textFont(hpfont);
  fill(255);
  text("Welcome to Hogwarts!", 320, 290);
  text("Press Enter to begin", 320, 320);
}

function startHatSort(){
  //text("Hat sort", 200, 100);
  imageMode(CENTER);
  videoimg= video.get();
  filter1();
  if (pose) {
    noseX=(noseX+pose.nose.x)/2;
    noseY=(noseY+pose.nose.y)/2;
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    
    let earR = pose.rightEar;
    let earL = pose.leftEar;
    let c = dist(earR.x, earR.y, earL.x, earL.y);
    if(pose.nose.confidence>0.1){
       image(img, noseX, noseY-2*c, 2*c, d+d+c);
       }
       else{
         text('Cannot Detect your face', 320, 240);
       }
  }
  let x=random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  clicker1 = new Clickable();
  clicker1.text = "Get your House!";
  clicker1.x = 100;
  clicker1.y = 140;
  clicker1.width = 100;
  clicker1.height = 50;
  clicker1.cornerRadius=40;
  clicker1.color= "#c9840c";
  clicker1.textColor="#ffffff";
  clicker1.onPress = function(){
    getData(x);
}
  textFont(hpfont);
  textSize(30);
  if(ancestry){
  text(ancestry, 100, 200);
  }
  if(house){
  text(house, 100, 300);
  }
}
function drawGame(){
  background(0);
  //text("play game", 200, 100);
  imageMode(CENTER);
  image(prof1, 100, 250, 120, 180);
  textAlign(CENTER);
  text("Hi, I am Professor Remus", 240, 160 );
  text("I will teach you a spell", 240, 175 );
  text("Do this Gesture", 240, 190 );
  image(gesture1, 240, 230, 50, 60);
  text("To light the floating candles", 240, 270 );
  if(label=== victory) {
   for(c of candles){
    image(candle, c.x, c.y, 60, 60);
  }
  for(c of candles){
    c.x=c.x+random(-0.25, 0.25);
  } 
}
  
}
function drawGameOver(){
  
}


function keyPressed(){
  if(state==='menu' && keyCode===ENTER){
    state='hatsort';
  }
  if(state==='hatsort' && keyCode===TAB){
    state='game';
  }
}

function getData(x){
  
  //console.log("FETCHING!");
  fetch("https://yacdn.org/serve/http://hp-api.herokuapp.com/api/characters/students")
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    name=data[x].name;
    ancestry=data[x].ancestry;
    haircolor=data[x].haircolor;
    house=data[x].house;
  });
}

function filter1() { 
    videoimg.loadPixels()
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;

            let r = videoimg.pixels[index + 0];
            let g = videoimg.pixels[index + 1];
            let b = videoimg.pixels[index + 2];
            let a = videoimg.pixels[index + 3];
            newRed = 0.7*r + 0.769*g + 0.189*b;
          newGreen = 0.349*r + 0.686*g + 0.168*b;
          newBlue = 0.272*r + 0.534*g + 0.38*b;
            videoimg.pixels[index + 0] = newRed;
            videoimg.pixels[index + 1] = newGreen;
            videoimg.pixels[index + 2] = newBlue;
        }
    }

    videoimg.updatePixels()
  image(videoimg, 320, 240, 640, 480);
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  console.log(label);
  classifyVideo();
}