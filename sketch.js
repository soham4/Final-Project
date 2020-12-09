let state='welcome';
let facemesh;
let video;
let predictions = [];
let dementors=[];
let name;
let ancestry;
let haircolor;
let house;
candles=[];
let label="";
let pos="";
let modelready=false
let witches = [];
let m=0;
let check=0;
let s=0;
let h=0;
let r=0;
let g=0;

function preload(){
  img=loadImage("sortinghat.png");
  bg1=loadImage("hogwarts wallpaper.jpg");
  music=loadSound("Harry Potter Hedwigs Theme short.mp3");
  hpfont=loadFont('HARRYP.TTF');
  candle=loadImage("images/candle.png");
  prof1=loadImage("images/remus.PNG");
  gesture1=loadImage("images/victory gesture.png");
  wall=loadImage("images/brick wall.jpg");
  dem1= loadImage("images/dementor1.png");
  dem2= loadImage("images/dementor2.png");
  dem3= loadImage("images/dementor3.png");
  greybg=loadImage("images/grey bg1.jpg");
  window1=loadImage("images/window1.png");
  gryffindor1=loadSound("sounds/gryffindor.mp3");
  ravenclaw1=loadSound("sounds/ravenclaw.mp3");
  hufflepuff1=loadSound("sounds/hufflepuff.mp3");
  slytherin1=loadSound("sounds/slytherin.mp3");
  bg2=loadImage("images/old paper.jpg");
  expectopatronum=loadSound("sounds/expectopatronum.mp3");
  anim=loadImage("images/animation.gif");
  witch=loadImage("images/witch4.png");
  castle=loadImage("images/spookycastle.png");
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);
  facemesh = ml5.facemesh(video, modelReady);
  facemesh.on("predict", results => {
    predictions = results;
  });

  video.hide();
  for(i=0; i<60; i++){
    candles.push({
      x:random(20, windowWidth),
      y: random(40, windowHeight/4),
    })
  }
  for(i=0; i<5; i++){
    dementors.push(new dementor());
  }
  
  for (let i=0; i<5; i++) {
    witches.push({
      x: random(0, windowWidth), 
      y: random(0, windowHeight),
      vx: random(-2, -0.5),
      vy: random(-2, 0), 
    })
  }
  clicker3 = new Clickable();
  clicker3.text = "Next";
  clicker3.x = windowWidth/1.5;
  clicker3.y = windowHeight/6;
  clicker3.width = 100;
  clicker3.height = 50;
  clicker3.cornerRadius=40;
  clicker3.color= "#c9840c";
  clicker3.textColor="#ffffff";
  clicker3.onPress = function(){
    state='letter';
}
  clicker4 = new Clickable();
  clicker4.text = "Next";
  clicker4.x = windowWidth/1.5;
  clicker4.y = windowHeight/6;
  clicker4.width = 100;
  clicker4.height = 50;
  clicker4.cornerRadius=40;
  clicker4.color= "#c9840c";
  clicker4.textColor="#ffffff";
  clicker4.onPress = function(){
    state='candle';
}
  clicker5 = new Clickable();
  clicker5.text = "Next";
  clicker5.x = windowWidth/1.5;
  clicker5.y = windowHeight/2;
  clicker5.width = 100;
  clicker5.height = 50;
  clicker5.cornerRadius=40;
  clicker5.color= "#c9840c";
  clicker5.textColor="#ffffff";
  clicker5.onPress = function(){
    state='wall';
}
  clicker6 = new Clickable();
  clicker6.text = "Next";
  clicker6.x = windowWidth/1.5;
  clicker6.y = windowHeight/6;
  clicker6.width = 100;
  clicker6.height = 50;
  clicker6.cornerRadius=40;
  clicker6.color= "#c9840c";
  clicker6.textColor="#ffffff";
  clicker6.onPress = function(){
    state='quiz';
}
  clicker7 = new Clickable();
  clicker7.text = "Next";
  clicker7.x = windowWidth/1.5;
  clicker7.y = windowHeight/6;
  clicker7.width = 100;
  clicker7.height = 50;
  clicker7.cornerRadius=40;
  clicker7.color= "#c9840c";
  clicker7.textColor="#ffffff";
  clicker7.onPress = function(){
    state='dementer game';
}
  clicker8 = new Clickable();
  clicker8.text = "Next";
  clicker8.x = windowWidth/1.5;
  clicker8.y = windowHeight/6;
  clicker8.width = 100;
  clicker8.height = 50;
  clicker8.cornerRadius=40;
  clicker8.color= "#c9840c";
  clicker8.textColor="#ffffff";
  clicker8.onPress = function(){
    state='hatsort';
}
  checkbox1 = createCheckbox('Intelligent', false);
  checkbox1.position(windowWidth/4, windowHeight/6.5);
  checkbox1.changed(myCheckedEvent1);
  checkbox2 = createCheckbox('Brave', false);
  checkbox2.position(checkbox1.x, checkbox1.y+30);
  checkbox2.changed(myCheckedEvent2);
  checkbox3 = createCheckbox('Helping', false);
  checkbox3.position(checkbox1.x, checkbox1.y+60);
  checkbox3.changed(myCheckedEvent3);
  checkbox4 = createCheckbox('Hardworking', false);
  checkbox4.position(checkbox1.x, checkbox1.y+90);
  checkbox4.changed(myCheckedEvent4);
  checkbox5 = createCheckbox('Cunning', false);
  checkbox5.position(checkbox1.x, checkbox1.y+120);
  checkbox5.changed(myCheckedEvent5);
  checkbox6 = createCheckbox('Resourceful', false);
  checkbox6.position(checkbox1.x, checkbox1.y+150);
  checkbox6.changed(myCheckedEvent6);
  checkbox7 = createCheckbox('Patient', false);
  checkbox7.position(checkbox1.x, checkbox1.y+180);
  checkbox7.changed(myCheckedEvent7);
  checkbox8 = createCheckbox('Knowledgeable', false);
  checkbox8.position(checkbox1.x, checkbox1.y+210);
  checkbox8.changed(myCheckedEvent8);
  checkbox9 = createCheckbox('Planner', false);
  checkbox9.position(checkbox1.x, checkbox1.y+240);
  checkbox9.changed(myCheckedEvent9);
  checkbox10 = createCheckbox('Determination', false);
  checkbox10.position(checkbox1.x, checkbox1.y+270);
  checkbox10.changed(myCheckedEvent10);
  checkbox11 = createCheckbox('Fair Player', false);
  checkbox11.position(checkbox1.x, checkbox1.y+300);
  checkbox11.changed(myCheckedEvent11);
  checkbox12 = createCheckbox('Ambitious', false);
  checkbox12.position(checkbox1.x, checkbox1.y+330);
  checkbox12.changed(myCheckedEvent12);
  checkbox1.hide();
  checkbox2.hide();
  checkbox3.hide();
  checkbox4.hide();
  checkbox5.hide();
  checkbox6.hide();
  checkbox7.hide();
  checkbox8.hide();
  checkbox9.hide();
  checkbox10.hide();
  checkbox11.hide();
  checkbox12.hide();
  
}


function modelReady() {
  console.log("Model ready!");
  modelready=true;
}


function draw() {
  background(220);
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;
    const[x1, y1]=keypoints[78];
    const[x2, y2]=keypoints[308];
    const[a1, b1]=keypoints[13];
    const[a2, b2]=keypoints[14];
    const[g1, h1]=keypoints[159];
    const[g2, h2]=keypoints[27];
    let p=dist(g1, h1, g2, h2);
    let o=dist(a1, b1, a2, b2);
    if(state==='dementer game' && p>7.3){
      state='patronum';
      if (!expectopatronum.isPlaying()){
    expectopatronum.play();
    }
    }
    if(state==='wall' && o>10){
      state='dementer';
    }
    let d =dist(x1, y1, x2, y2);
    if(d>65 && d<73){
      pos="okay";
    }
    else if(d>73){
      pos="near";
    }
    else if(d<65){
      pos="far";
    }
    if(d>75){
      label="smile";
    }
    else{
      label="normal";
    }
  }
  if(!modelready){
    background(255);
    imageMode(CENTER);
    image(anim, windowWidth/2, windowHeight/4, width, height);
    textAlign(CENTER);
    textSize(30);
    textFont(hpfont);
    text("Loading your wizarding passport....", windowWidth/2, windowHeight/2);
  }
  else if(state==='welcome'){
    drawWelcome();
    if(m>=5){
    clicker6.draw();
    }
  }
  else if (state==='letter') {
     checkbox1.hide();
  checkbox2.hide();
  checkbox3.hide();
  checkbox4.hide();
  checkbox5.hide();
  checkbox6.hide();
  checkbox7.hide();
  checkbox8.hide();
  checkbox9.hide();
  checkbox10.hide();
  checkbox11.hide();
  checkbox12.hide();
    drawMenu();
    clicker8.draw();
  }
  else if(state==='quiz'){
    drawQuiz();
    if (!music.isPlaying()){
    music.play();
    }
    checkbox1.show();
  checkbox2.show();
  checkbox3.show();
  checkbox4.show();
  checkbox5.show();
  checkbox6.show();
  checkbox7.show();
  checkbox8.show();
  checkbox9.show();
  checkbox10.show();
  checkbox11.show();
  checkbox12.show();
    if(check===5){
    clicker3.draw();
    }
  }
  else if (state==='hatsort') {
    startHatSort();
    clicker1.draw();
    clicker4.draw();
  }
  else if(state==='candle'){
    drawGame();
    clicker5.draw();
  }
  else if(state==='wall'){
    drawWall();
  }
  else if(state==='dementer'){
    dementer();
    clicker7.draw();
  }
  else if(state==='dementer game'){
    dementergame();
  }
  else if(state==='patronum'){
    patronum();
  }
}

function drawMenu(){
  imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(30);
  textFont(hpfont);
  fill(255, 0, 0);
  text("Position Check!", windowWidth/2, windowHeight/3);
  if (pos==='okay'){
  text("Be at the same distance from the screen for remaining game", windowWidth/2, windowHeight/2.5);
  }
  else if (pos==='far'){
  text("Move Closer to screen", windowWidth/2, windowHeight/2.5);
  }
  else if (pos==='near'){
  text("Move further away from screen", windowWidth/2, windowHeight/2.5);
  }
}

function drawWelcome(){
  //background(3, 111, 252);
  imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  /*fill(255);
  noStroke();
  ellipse(windowWidth/2, windowHeight/2, windowWidth/4);
  textAlign(CENTER);*/
  textSize(25);
  textFont(hpfont);
  fill(0);
  text("Welcome to the wizarding world!", windowWidth/2, windowHeight/3);
  text("Catch all the witches by clicking on them to proceed", windowWidth/2, windowHeight/2.5);
  for (let w of witches) {
    
    if(w.ltouch=== true){
      push();
      translate(w.x, w.y);
      scale(-1, 1);
      image(witch, 0, 0, 80 ,80);
      pop();
    }
    else if (w.rtouch=== true){
      image(witch, w.x, w.y, 80 ,80);
    }
    else{
      image(witch, w.x, w.y, 80 ,80);
    }
    
  }
  
   for (let w of witches) {
     if(!w.paired){
      w.x += w.vx; 
      w.y += w.vy; 
     }
    
    if (w.x <= 0) {
      w.ltouch = true;
      w.rtouch = false;
      w.vx = -w.vx;
    }
    if (w.x >= windowWidth){
      w.rtouch = true;
      w.ltouch = false;
      w.vx = -w.vx;
    }
    if (w.y > windowHeight || w.y < 0) {
      w.vy = -w.vy;
    }
  }
  imageMode(CENTER);
  image(castle, windowWidth/2, windowHeight/1.25, windowWidth, windowHeight);
}

function drawQuiz(){
  imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(30);
  textFont(hpfont);
  fill(143, 12, 7);
  text("Select five qualities that you feel you have", windowWidth/2, windowHeight/8); 
}

function startHatSort(){
  //text("Hat sort", 200, 100);
  imageMode(CENTER);
  videoimg= video.get();
  filter1();
  //image(videoimg, 320, 240, 640, 480);
  //video.show();
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;
    const[c1, d1]=keypoints[54];
    const[c2, d2]=keypoints[251];
    const[c3, d3]=keypoints[168];
    const[c4, d4]=keypoints[10];
    let c =dist(c1, d1, c2, d2);
    let e =dist(c3, d3, c4, d4);
    image(img, c3, d3-4*e, 2*c, 3*c);
  }
  clicker1 = new Clickable();
  clicker1.text = "Get your House!";
  clicker1.x = windowWidth/4;
  clicker1.y = windowHeight/6;
  clicker1.width = 100;
  clicker1.height = 50;
  clicker1.cornerRadius=40;
  clicker1.color= "#c9840c";
  clicker1.textColor="#ffffff";
  clicker1.onPress = function(){
    houseSort();
    if(house==='Gryffindor'){
  if (!gryffindor1.isPlaying()){
    gryffindor1.play();
    }
  }
  else if(house==='Slytherin'){
  if (!slytherin1.isPlaying()){
    slytherin1.play();
    }
  }
  else if(house==='Hufflepuff'){
  if (!hufflepuff1.isPlaying()){
    hufflepuff1.play();
    }
  }
  else if(house==='Ravenclaw'){
  if (!ravenclaw1.isPlaying()){
    ravenclaw1.play();
    }
  }
}
  /*textFont(hpfont);
  textSize(30);
  fill(0);
  text(house, 100, 300);*/
}
function drawGame(){
  background(0);
  //text("play game", 200, 100);
  imageMode(CENTER);
  image(prof1, 150, windowHeight/1.25, 150, 150);
  textAlign(CENTER);
  let ypos=windowHeight/1.25;
  text("Hi, I am Professor Remus", 240, ypos );
  text("I will teach you a spell", 240, ypos+15 );
  text("Now smile wide", 240, ypos+30 );
  //image(gesture1, 240, 230, 50, 60);
  text("To light the floating candles", 240, ypos+30);
  console.log(label);
  if(label==="smile") {
   for(c of candles){
    image(candle, c.x, c.y, 60, 60);
  }
  for(c of candles){
    c.x=c.x+random(-0.25, 0.25);
  } 
}
}

 function drawWall(){
    image(wall, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
   textAlign(CENTER);
   fill(0);
   textSize(30);
   text("Open your mouth long", windowWidth/2, windowHeight/2);
   text("To get through the wall", windowWidth/2, windowHeight/1.5);
  }
function dementer(){
  background(250);
  imageMode(CENTER);
  image(greybg,windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  noStroke();
  for(let d of dementors){
  d.view();
    d.move();
  }
  image(window1, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  fill(0);
  rect(0, windowHeight/1.5, windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("Dementors are out there", windowWidth/2, windowHeight/1.3);
  text("Go out and fight with them", windowWidth/2, windowHeight/1.2);
}

function dementergame() {
  background(220);
  imageMode(CENTER);
  image(greybg, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  for(let d of dementors){
  d.view();
    d.move();
  }
}
function patronum(){
  background(220);
  imageMode(CENTER);
  image(greybg, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
   spell(255, 4);
}

/*function keyPressed(){
  if(state==='letter' && keyCode===ENTER){
    state='hatsort';
  }
}*/

function filter1() { 
    videoimg.loadPixels()
    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;

            let r = videoimg.pixels[index + 0];
            let g = videoimg.pixels[index + 1];
            let b = videoimg.pixels[index + 2];
            let a = videoimg.pixels[index + 3];
            newRed = r + 0.769*g + 0.189*b;
          newGreen = 0.5*r + 0.9*g;
          newBlue = 0.272*r + 0.534*g + 0.38*b;
            videoimg.pixels[index + 0] = newRed;
            videoimg.pixels[index + 1] = newGreen;
            videoimg.pixels[index + 2] = newBlue;
        }
    }

    videoimg.updatePixels()
  image(videoimg, 320, 240, 640, 480);
}


class dementor {
  constructor () {
    this.y=random(10, 150);
    this.x= random(10, 150);
    this.r= random(40, 150);//radius
    this.speed=0.002;
    this.angle= random(0, 360);
    let imgs=[dem1, dem2, dem3];
    this.img=random(imgs);
  }
  
  view () {
    push();
    translate(windowWidth/2, windowHeight/2);
    rotate(this.angle);
   image(this.img, this.x, this. y, width/8, height/8);
    pop();
  }
  
  move () {
    this.x=this.r+sin(this.angle);
    this.y=this.r+cos(this.angle);
    this.angle+=this.speed;
    
  }
  
}
function spell(alpha, s){
    noStroke();   
  fill(255, 255, 255, alpha);
ellipse(windowWidth/2, windowHeight/2, 640/s);
  alpha-=10;
  s-=0.11;
  if(s>0){
  spell(alpha, s);
  }  
}
function houseSort(){
  if(g>s && g>h && g>r){
    house='Gryffindor';
}
  else if(s>g && s>h && s>r){
    house='Slytherin';
}
  else if(h>s && h>g && h>r){
    house='Hufflepuff';
}
  else if(r>s && r>h && r>g){
    house='Ravenclaw';
}
  else if(g===s){
    let houses1=['Gryffindor', 'Slytherin'];
    house=random(houses1);
  }
  else if(g===h){
    let houses2=['Gryffindor', 'Hufflepuff'];
    house=random(houses2);
  }
  else if(g===r){
    let houses3=['Gryffindor', 'Ravenclaw'];
    house=random(houses);
  }
  else if(s===h){
    let houses4=['Hufflepuff', 'Slytherin'];
   house=random(houses4);
  }
  else if(s===r){
    let houses5=['Ravenclaw', 'Slytherin'];
    house=random(houses5);
  }
  else if(h===r){
    let houses6=['Hufflepuff', 'Ravenclaw'];
  house=random(houses6);
  }
}

function myCheckedEvent1() {
  if (this.checked()) {
    r+=1;
    check+=1;
  } else {
    r-=1;
    check-=1;
  }
}
function myCheckedEvent2() {
  if (this.checked()) {
    g+=1;
    check+=1;
  } else {
    g-=1;
    check-=1;
  }
}
function myCheckedEvent3() {
  if (this.checked()) {
    g+=1;
    check+=1;
  } else {
    g-=1;
    check-=1;
  }
}
function myCheckedEvent4() {
  if (this.checked()) {
    h+=1;
    check+=1;
  } else {
    h-=1;
    check-=1;
  }
}
function myCheckedEvent5() {
  if (this.checked()) {
    s+=1;
    check+=1;
  } else {
    s-=1;
    check-=1;
  }
}
function myCheckedEvent6() {
  if (this.checked()) {
    s+=1;
    check+=1;
  } else {
    s-=1;
    check-=1;
  }
}
function myCheckedEvent7() {
  if (this.checked()) {
   h+=1;
    check+=1;
  } else {
    h-=1;
    check-=1;
  }
}
function myCheckedEvent8() {
  if (this.checked()) {
    r+=1;
    check+=1;
  } else {
    r-=1;
    check-=1;
  }
}
function myCheckedEvent9() {
  if (this.checked()) {
    r+=1;
    check+=1;
  } else {
    r-=1;
    check-=1;
  }
}
function myCheckedEvent10() {
  if (this.checked()) {
    g+=1;
    check+=1;
  } else {
    g-=1;
    check-=1;
  }
}
function myCheckedEvent11() {
  if (this.checked()) {
    h+=1;
    check+=1;
  } else {
    h-=1;
    check-=1;
  }
}
function myCheckedEvent12() {
  if (this.checked()) {
    s+=1;
    check+=1;
  } else {
    s-=1;
    check-=1;
  }
}
function mousePressed(){
  for (let w of witches) {
      let wDistance = dist(w.x, w.y, mouseX, mouseY);
      if (wDistance <= 25) {
        w.paired = true;
        m+=1;
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}