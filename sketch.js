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

function preload(){
  img=loadImage("sortinghat.png");
}
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
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
  text("Press Enter to begin", 200, 100);
}
function startHatSort(){
  text("Hat sort", 200, 100);
  imageMode(CENTER);
  image(video, 320, 240);
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
  clicker1.x = 270;
  clicker1.y = 140;
  clicker1.width = 100;
  clicker1.height = 50;
  clicker1.cornerRadius=40;
  clicker1.color= "#d40416";
  clicker1.textColor="#ffffff";
  clicker1.onPress = function(){
    getData(x);
}
    if(name){
  text(name, 100, 100);
  }
  if(ancestry){
  text(ancestry, 100, 200);
  }
  if(haircolor){
  text(haircolor, 200, 100);
  }
  if(house){
  text(house, 200, 200);
  }
}
function drawGame(){
  text("play game", 200, 100);
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