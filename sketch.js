let state='welcome';
let facemesh;
let video;
let predictions = [];
let dementors=[];
let dementors2=[];
let name;
let ancestry;
let haircolor;
let house;
let time=0;
let resettime=0;
candles=[];
candlestate=false;
let clicker0=false;
let label="";
let pos="";
let feath="";
let modelready=false
let witches = [];
let cand=0;
let xp=0;
let yp=0;
let m=0;
let n=0;
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
  hagrid=loadImage("images/hagrid.PNG");
  butterbeer=loadImage("images/butterbeer.png");
  minerva=loadImage("images/minerva.png");
  beep=loadSound("sounds/beep.mp3");
  magic=loadSound("sounds/magic.mp3");
  flitwick=loadImage("images/flitwick.PNG");
  feather=loadImage("images/feather.png");
  cup=loadImage("images/trophy.png");
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
  for(i=0; i<5; i++){
    dementors.push(new dementor());
  }
  for(i=0; i<5; i++){
    dementors2.push({
      x:random(windowWidth/2-320, windowWidth/2+320),
      y: random(20, windowHeight-60),
      vx: random(-2, 2),
      vy: random(-2, 2), 
    })
  }
  for(i=0; i<100; i++){
    candles.push({
      x:random(20, windowWidth),
      y: random(100, windowHeight/2),
      s:random(10, 80),
    })
  }
  for (let i=0; i<5; i++) {
    witches.push({
      x: random(0, windowWidth), 
      y: random(0, windowHeight),
      vx: random(-3, -0.5),
      vy: random(-3, 0), 
    })
  }
  clicker2 = new Clickable();
  clicker2.text = "Next";
  clicker2.x = windowWidth/2-50;
  clicker2.y = windowHeight/2;
  styleClicker(clicker2);
  clicker2.onPress = function(){
    state='quiz';
}
  clicker3 = new Clickable();
  clicker3.text = "Submit";
  clicker3.x = windowWidth/2-50;
  clicker3.y = windowHeight/2;
  styleClicker(clicker3);
  clicker3.onPress = function(){
    state='quiz1';
}
  clicker4 = new Clickable();
  clicker4.text = "Next";
  clicker4.x = windowWidth/1.5;
  clicker4.y = windowHeight/1.125;
  styleClicker(clicker4);
  clicker4.onPress = function(){
    state='candle';
}
  clicker5 = new Clickable();
  clicker5.text = "Next";
  clicker5.x = windowWidth/1.5;
  clicker5.y = windowHeight/1.25;
   styleClicker(clicker5);
  clicker5.onPress = function(){
    state='wall';
}
  clicker6 = new Clickable();
  clicker6.text = "Next";
  clicker6.x = windowWidth/2-50;
  clicker6.y = windowHeight/1.125;
  styleClicker(clicker6);
  clicker6.onPress = function(){
    state='end';
}
  clicker7 = new Clickable();
  clicker7.text = "Next";
  clicker7.x = windowWidth/1.5;
  clicker7.y = windowHeight/1.25;
  styleClicker(clicker7);
  clicker7.onPress = function(){
    state='dementer game';
}
  clicker8 = new Clickable();
  clicker8.text = "Next";
  clicker8.x = windowWidth/2-50;
  clicker8.y = windowHeight/1.125;
  styleClicker(clicker8);
  clicker8.onPress = function(){
    state='hogwarts';
}
  clicker9 = new Clickable();
  clicker9.text = "Next";
  clicker9.x = windowWidth/2-50;
  clicker9.y = windowHeight/1.25;
  styleClicker(clicker9);
  clicker9.onPress = function(){
    state='dementer';
}
  clicker10 = new Clickable();
  clicker10.text = "Next";
  clicker10.x = windowWidth/1.5;
  clicker10.y = windowHeight/1.7;
  styleClicker(clicker10);
  clicker10.onPress = function(){
    state='warning';
}
  clicker11 = new Clickable();
  clicker11.text = "Next";
  clicker11.x = windowWidth/2-50;
  clicker11.y = windowHeight/2;
  styleClicker(clicker11);
  clicker11.onPress = function(){
    state='quiz2';
}
  clicker12 = new Clickable();
  clicker12.text = "Next";
  clicker12.x = windowWidth/2-50;
  clicker12.y = windowHeight/2;
  styleClicker(clicker12);
  clicker12.onPress = function(){
    state='letter';
}
  clicker13 = new Clickable();
  clicker13.text = "Replay";
  clicker13.x = windowWidth/2-50;
  clicker13.y = windowHeight/1.125;
  styleClicker(clicker13);
  clicker13.onPress = function(){
    state='welcome';
    reset();
}
  clicker14 = new Clickable();
  clicker14.text = "Next";
  clicker14.x = windowWidth/2-50;
  clicker14.y = windowHeight/1.5;
  styleClicker(clicker14);
  clicker14.onPress = function(){
    state='hatsort';
}
  checkbox1 = createCheckbox('Intelligent', false);
  checkbox1.position(windowWidth/3.25, windowHeight/4.5);
  checkbox1.changed(myCheckedEvent1);
  checkbox1.class('mybox');
  checkbox2 = createCheckbox('Brave', false);
  checkbox2.position(checkbox1.x, checkbox1.y);
  checkbox2.changed(myCheckedEvent2);
  checkbox2.class('mybox');
  checkbox3 = createCheckbox('Helping', false);
  checkbox3.position(checkbox1.x, checkbox1.y+40);
  checkbox3.changed(myCheckedEvent3);
  checkbox3.class('mybox');
  checkbox4 = createCheckbox('Hardworking', false);
  checkbox4.position(checkbox1.x, checkbox1.y);
  checkbox4.changed(myCheckedEvent4);
  checkbox4.class('mybox');
  checkbox5 = createCheckbox('Cunning', false);
  checkbox5.position(windowWidth*3/5, windowHeight/4.5);
  checkbox5.changed(myCheckedEvent5);
  checkbox5.class('mybox');
  checkbox6 = createCheckbox('Resourceful', false);
  checkbox6.position(checkbox1.x, checkbox1.y+40);
  checkbox6.changed(myCheckedEvent6);
  checkbox6.class('mybox');
  checkbox7 = createCheckbox('Patient', false);
  checkbox7.position(windowWidth*3/5, windowHeight/4.5);
  checkbox7.changed(myCheckedEvent7);
  checkbox7.class('mybox');
  checkbox8 = createCheckbox('Knowledgeable', false);
  checkbox8.position(checkbox7.x, checkbox7.y+40);
  checkbox8.changed(myCheckedEvent8);
  checkbox8.class('mybox');
  checkbox9 = createCheckbox('Planner', false);
  checkbox9.position(checkbox1.x, checkbox1.y+40);
  checkbox9.changed(myCheckedEvent9);
  checkbox9.class('mybox');
  checkbox10 = createCheckbox('Determined', false);
  checkbox10.position(checkbox7.x, checkbox7.y);
  checkbox10.changed(myCheckedEvent10);
  checkbox10.class('mybox');
  checkbox11 = createCheckbox('Fair Player', false);
  checkbox11.position(checkbox5.x, checkbox5.y+40);
  checkbox11.changed(myCheckedEvent11);
  checkbox11.class('mybox');
  checkbox12 = createCheckbox('Ambitious', false);
  checkbox12.position(checkbox7.x, checkbox7.y+40);
  checkbox12.changed(myCheckedEvent12);
  checkbox12.class('mybox');
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

function styleClicker(btn){
  btn.width = 100;
  btn.height = 50;
  btn.cornerRadius=40;
  btn.color= "#c9840c";
  btn.textColor="#ffffff";
   btn.onHover = function(){
    btn.color= "#e03b0d";
} 
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
    const[c5, d5]=keypoints[1];
    let p=dist(g1, h1, g2, h2);
    let o=dist(a1, b1, a2, b2);
    if(o>13){
      feath="up";
    }
    else{
      feath="down";
    }
    if(state==='dementer game'){
      /*let x=windowWidth-(c5-320+windowWidth/2);
      let y=d5;
       for(let dem of dementors2){
        let dDistance = dist(dem.x, dem.y, x, d5);
      if (dDistance <= 50 && o>11) {
        console.log(dDistance);
        dem.pressed = true;
        n+=1;
        console.log(n);
        if(!beep.isPlaying()){
          beep.play();
             
           }
         }
      }*/
      if(p>7.3){
        state='patronum';
        resettime=millis();
          if (!expectopatronum.isPlaying()){
    expectopatronum.play();
    }
      }
     }
    if(state==='wall' && o>13){
      if (!magic.isPlaying()){
    magic.play();
    }
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
    image(anim, windowWidth/2, windowHeight/4, 500, 500);
    textAlign(CENTER);
    textSize(30);
    textFont(hpfont);
    text("Loading your wizarding passport....", windowWidth/2, windowHeight/2);
    if (!music.isPlaying()){
    music.play();
    }
  }
  else if(state==='welcome'){
    drawWelcome();
    if (!music.isPlaying()){
    music.play();
    }
    clicker2.draw();
    /*if(m>=5){
    state='quiz';
    }*/
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
 
  checkbox4.show();
  checkbox9.show();
  checkbox10.show();
  checkbox12.show();
    if(check===1){
    clicker3.draw();
    }
  }
   else if(state==='quiz1'){
    drawQuiz1();
    if (!music.isPlaying()){
    music.play();
    }
    checkbox1.show();
  checkbox3.show();
  checkbox4.hide();
  checkbox5.show();
  checkbox9.hide();
  checkbox10.hide();
  checkbox11.show();
  checkbox12.hide();
    if(check===3){
    clicker11.draw();
    }
  }
   else if(state==='quiz2'){
    drawQuiz2();
    if (!music.isPlaying()){
    music.play();
    }
    checkbox1.hide();
  checkbox2.show();
  checkbox3.hide();
  checkbox4.hide();
  checkbox5.hide();
  checkbox6.show();
  checkbox7.show();
  checkbox8.show();
  checkbox9.hide();
  checkbox10.hide();
  checkbox11.hide();
  checkbox12.hide();
    if(check===5){
    clicker12.draw();
    }
  }
  else if(state==='hogwarts'){
    drawhogwarts();
    clicker14.draw();
  }
  else if (state==='hatsort') {
    startHatSort();
    clicker1.draw();
    if(clicker0===true){
    clicker4.draw();
    }
  }
  else if(state==='candle'){
    drawGame();
    if(candlestate===true){
    clicker5.draw();
    }
  }
  else if(state==='wall'){
    drawWall();
    clicker10.draw();
  }
  else if(state==='warning'){
    warning();
    clicker9.draw();
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
    time=millis();
    console.log(time);
    if(time>resettime+4000){
      state='end';
    }
    //clicker6.draw();
  }
  else if(state==='end'){
    ending();
    clicker13.draw();
  }
}

function drawMenu(){
  imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  videoimg= video.get();
  image(videoimg, windowWidth/2, windowHeight/2, 640, 480);
  //image(castle, windowWidth/2, windowHeight/1.25, windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(30);
  textFont(hpfont);
  fill(255, 0, 0);
  text("Position Check!", windowWidth/2, windowHeight/3);
  if (pos==='okay'){
  fill(0, 255, 0);
  text("Be at the same distance from the screen for remaining game", windowWidth/2, windowHeight/2.5);
  }
  else if (pos==='far'){
    fill(255, 0, 0);
  text("Move Closer to screen", windowWidth/2, windowHeight/2.5);
  }
  else if (pos==='near'){
    fill(255, 0, 0);
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
   if(windowWidth<650){
    textSize(30);
   }
  else{
     textSize(45);
  }
  textFont(hpfont);
  //fill(0);
  fill(156, 18, 11);
  text("Welcome to the wizarding world!", windowWidth/2, windowHeight/3);
  /*textSize(35);
  fill(156, 18, 11);
  text("Catch all the witches by clicking on them to proceed", windowWidth/2, windowHeight/2.5);*/
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
     
      w.x += w.vx; 
      w.y += w.vy; 
    
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
  image(castle, windowWidth/2, windowHeight/1.25, windowWidth, windowHeight);
  textAlign(CENTER);
   if(windowWidth<650){
    textSize(20);
   }
  else{
     textSize(30);
  }
  textFont(hpfont);
  fill(143, 12, 7);
text("Take this quiz, for house sorting", windowWidth/2, windowHeight/8); 
  text("Choose ONE of the following qualities, most important to you", windowWidth/2, windowHeight/8+30);
}
function drawQuiz1(){
  imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  image(castle, windowWidth/2, windowHeight/1.25, windowWidth, windowHeight);
  textAlign(CENTER);
  if(windowWidth<650){
    textSize(20);
   }
  else{
     textSize(30);
  }
  textFont(hpfont);
  fill(143, 12, 7);
  text("Choose TWO of the following qualities, most important to you", windowWidth/2, windowHeight/8);
}
function drawQuiz2(){
  imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  image(castle, windowWidth/2, windowHeight/1.25, windowWidth, windowHeight);
  textAlign(CENTER);
  if(windowWidth<650){
    textSize(20);
   }
  else{
     textSize(30);
  }
  textFont(hpfont);
  fill(143, 12, 7);
  text("Choose TWO of the following qualities, most important to you", windowWidth/2, windowHeight/8); 
}
function drawhogwarts(){
    imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  image(minerva, windowWidth/7, windowHeight/3, windowWidth*15/100, windowHeight*6/10);
  textAlign(LEFT);
  if(windowWidth<750){
    textSize(20);
   }
  else{
     textSize(30);
  }
  textFont(hpfont);
  fill(143, 12, 7);
  text("Welcome to hogwarts!", windowWidth/4, windowHeight/6);
  fill(0);
  text("Now you will be sorted into your houses", windowWidth/4, windowHeight/6+30);
   text("While you are here, your house will be like your family!", windowWidth/4, windowHeight/6+60);
  text("Your triumphs will earn you points", windowWidth/4, windowHeight/6+90);
  text("The house with maximum points will win the House Cup!", windowWidth/4, windowHeight/6+120);
}
function startHatSort(){
  //text("Hat sort", 200, 100);
  imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  //image(castle, windowWidth/2, windowHeight/1.25, windowWidth, windowHeight);
  videoimg= video.get();
  filter1();
  //image(videoimg, 320, 240, 640, 480);
  //video.show();
  //image(minerva, windowWidth/1.25, windowHeight/3, 200, 300);
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;
    const[c1, d1]=keypoints[54];
    const[c2, d2]=keypoints[251];
    const[c3, d3]=keypoints[168];
    const[c4, d4]=keypoints[10];
    let c =dist(c1, d1, c2, d2);
    let e =dist(c3, d3, c4, d4);
    image(img, c3-320+windowWidth/2, d3-3.5*e, 2*c, 3*c);
  }
  clicker1 = new Clickable();
  clicker1.text = "Get your House!";
  clicker1.x = windowWidth/2-50;
  clicker1.y = windowHeight/1.125;
  styleClicker(clicker1);
  clicker1.onPress = function(){
    clicker0=true;
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
  //console.log(label);
  if(label==="smile") {
    background(41, 13, 3);
   candlestate=true;
   for(let c of candles){
    image(candle, c.x, c.y, c.s, c.s);
     fill('rgba(250, 205, 5, 0.25)');
     ellipse(c.x, c.y-(30*c.s/100), 40*c.s/100);
  }
  for(let c of candles){
    c.x=c.x+random(-0.25, 0.25);
  }
      textAlign(LEFT);
  if(windowWidth<650){
    textSize(20);
   }
  else{
     textSize(30);
  }
  textFont(hpfont);
  let ypos=windowHeight/1.3;
    fill(224, 177, 22);
  text("Well done!", 280, ypos );
    
  }
  if(label==="normal"){
    background(0);
  textAlign(LEFT);
  if(windowWidth<650){
    textSize(20);
   }
  else{
     textSize(30);
  }
  textFont(hpfont);
  let ypos=windowHeight/1.3;
     if(windowWidth<650){
  text("Hi, I am Professor Remus", 250, ypos );
  text("I will teach you a spell", 250, ypos+30 );
  text("Now smile wide", 250, ypos+60 );
     }
    else{
  text("Hi, I am Professor Remus", 280, ypos );
  text("I will teach you a spell", 280, ypos+30 );
  text("Now smile wide", 280, ypos+60 );
    }
  }
  imageMode(CENTER);
  if(windowWidth<650){
    image(prof1, 100, windowHeight/1.25, 130, 130);
  }
  else{
    image(prof1, 150, windowHeight/1.25, 150, 150);
  }
  
}

 function drawWall(){
   imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
   if(windowWidth<650){
  image(flitwick, 120, windowHeight/1.25, 130, 130);
   }
   else{
     image(flitwick, 150, windowHeight/1.25, 150, 150);
   }
   if(feath==="up"){
     yp-=5;
     xp+=random(-20, 20);
   }
   if(feath==="down"){
     if(yp===0){
     }
     else{
     yp+=5;
     xp+=random(-20, 20);
     }
   }
   image(feather, windowWidth/1.5+xp, windowHeight/1.25+yp, 170, 170);
   textAlign(LEFT);
   fill(0);
   if(windowWidth<750){
    textSize(20);
   }
  else{
     textSize(30);
  }
   textFont(hpfont);
   if(windowWidth<650){
   text("Hi, I am professor Flitwick", 220, windowHeight/1.35);
   text("Open your mouth long", 220, windowHeight/1.25);
   text("To activate the charm, 'Wingardium Leviosa'", 220, windowHeight/1.125);
   }
   else{
      text("Hi, I am professor Flitwick", 300, windowHeight/1.35);
   text("Open your mouth long", 300, windowHeight/1.25);
   text("To activate the charm, 'Wingardium Leviosa'", 300, windowHeight/1.125);
   }
  }
function warning(){
  imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  image(hagrid, 150, windowHeight/7, 150, 150);
   textAlign(LEFT);
   fill(0);
   if(windowWidth<850){
    textSize(20);
   }
  else{
     textSize(30);
  }
   textFont(hpfont);
  let ycor=windowHeight/3.5;
   text("Hi, I am Hagrid", 50, ycor);
   text("I need to warn you that all wizards aren't good", 50, ycor+30);
   text("There is a dark lord", 50, ycor+60);
  text("Also there are soulless creatures called Dementors", 50, ycor+90);
   text("They gradually deprive human minds of happiness and intelligence", 50, ycor+120);
text("They can be waived off by the spell Expecto Patronum", 50, ycor+150);
  if(windowWidth<850){
    textSize(25);
   }
  else{
     textSize(35);
  }
  fill(156, 18, 11);
  text("Remember you can activate this spell,", 50, ycor+190);
   text("by simply raising your eyebrows!", 50, ycor+220);
  fill(0);
  text("click next to fight with them!", 50, ycor+250);
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
  if(windowWidth<700){
    textSize(20);
   }
  else{
     textSize(30);
  }
  fill(255);
  textFont(hpfont);
  text("Dementors are out there", windowWidth/2, windowHeight/1.3);
  text("Click next to go out and fight with them", windowWidth/2, windowHeight/1.2);
}

function dementergame() {
  background(220);
  imageMode(CENTER);
  image(greybg, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
 for (let dem of dementors2) {
    if(!dem.pressed){
    if(dem.ltouch=== true){
      push();
      translate(dem.x, dem.y);
      scale(-1, 1);
      image(dem3, 0, 0, 80 ,80);
      pop();
    }
    else if (dem.rtouch=== true){
      image(dem3, dem.x, dem.y, 80 ,80);
    }
    else{
      image(dem3, dem.x, dem.y, 80 ,80);
    }
    }
  }
  
   for (let dem of dementors2) {
      dem.x += dem.vx; 
      dem.y += dem.vy; 
     
    
    if (dem.x <= 0) {
      dem.ltouch = true;
      dem.rtouch = false;
      dem.vx = -dem.vx;
    }
    if (dem.x >= windowWidth){
      dem.rtouch = true;
      dem.ltouch = false;
      dem.vx = -dem.vx;
    }
    if (dem.y > windowHeight-60 || dem.y < 0) {
      dem.vy = -dem.vy;
    }
  }
}
function patronum(){
  background(220);
  imageMode(CENTER);
  image(greybg, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
   spell(255, 4);
}
function ending(){
  imageMode(CENTER);
  image(bg2, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
   textAlign(CENTER);
   if(windowWidth<650){
    textSize(30);
   }
  else{
     textSize(35);
  }
   textFont(hpfont);
  let ycor=windowHeight/7;
  fill(143, 12, 7);
   text("Congratulations!", windowWidth/2, windowHeight/7);
  if(windowWidth<650){
    textSize(20);
   }
  else{
     textSize(30);
  }
  fill(0);
   text("You have successfully waived off the dementors", windowWidth/2, ycor+50);
   text("And your first year at hogwarts comes to an end", windowWidth/2, ycor+100);
  text("Your courage gives 100 points to " +house, windowWidth/2, ycor+150);
  fill(143, 12, 7);
   text("The house cup goes to "+house, windowWidth/2, ycor+200);
  if(windowWidth<950){
    image(cup, windowWidth/2, ycor+300, 150, 150);
   }
  else if(windowHeight<650){
    image(cup, windowWidth/2, ycor+300, 120, 120);
  }
  else{
     image(cup, windowWidth/2, ycor+350, 200, 200);
  }
  
  //text("Happy holidays!", windowWidth/2, ycor+470);
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
  image(videoimg, windowWidth/2, windowHeight/2, 640, 480);
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
    house=random(houses3);
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
/*function mousePressed(){
  for (let w of witches) {
      let wDistance = dist(w.x, w.y, mouseX, mouseY);
      if (wDistance <= 25) {
        w.pressed = true;
        m+=1;
        if(!beep.isPlaying()){
          beep.play();
        }
    }
  }
}*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
   clicker2.x = windowWidth/2-50;
  clicker2.y = windowHeight/2;
  clicker3.x = windowWidth/2-50;
  clicker3.y = windowHeight/2;
clicker4.x = windowWidth/1.5;
  clicker4.y = windowHeight/1.125;
clicker5.x = windowWidth/1.5;
  clicker5.y = windowHeight/1.25;
clicker6.x = windowWidth/2-50;
  clicker6.y = windowHeight/1.125;
clicker7.x = windowWidth/1.5;
  clicker7.y = windowHeight/1.25;
clicker8.x = windowWidth/2-50;
  clicker8.y = windowHeight/1.125;
clicker9.x = windowWidth/2-50;
  clicker9.y = windowHeight/1.25;
clicker10.x = windowWidth/1.5;
  clicker10.y = windowHeight/1.7;
clicker11.x = windowWidth/2-50;
  clicker11.y = windowHeight/2;
clicker12.x = windowWidth/2-50;
  clicker12.y = windowHeight/2;
clicker13.x = windowWidth/2-50;
  clicker13.y = windowHeight/1.125;
  clicker14.x = windowWidth/2-50;
  clicker14.y = windowHeight/1.5;
  checkbox1.position(windowWidth/3.25, windowHeight/4.5);
checkbox2.position(checkbox1.x, checkbox1.y);
checkbox3.position(checkbox1.x, checkbox1.y+40);
checkbox4.position(checkbox1.x, checkbox1.y);
checkbox5.position(windowWidth*3/5, windowHeight/4.5);
 checkbox6.position(checkbox1.x, checkbox1.y+40);
checkbox7.position(windowWidth*3/5, windowHeight/4.5);
checkbox8.position(checkbox7.x, checkbox7.y+40);
checkbox9.position(checkbox1.x, checkbox1.y+40);
checkbox10.position(checkbox7.x, checkbox7.y);
checkbox11.position(checkbox5.x, checkbox5.y+40);
checkbox12.position(checkbox7.x, checkbox7.y+40);
  reposition();
}
function reposition(){
  if(windowWidth<650){
    checkbox1.class('mybox2');
    checkbox2.class('mybox2');
    checkbox3.class('mybox2');
    checkbox4.class('mybox2');
    checkbox5.class('mybox2');
    checkbox6.class('mybox2');
    checkbox7.class('mybox2');
    checkbox8.class('mybox2');
    checkbox9.class('mybox2');
    checkbox10.class('mybox2');
    checkbox11.class('mybox2');
    checkbox12.class('mybox2');
    clicker5.y = windowHeight/1.6;
    clicker13.height=30;
  }
  else{
    checkbox1.class('mybox');
    checkbox2.class('mybox');
    checkbox3.class('mybox');
    checkbox4.class('mybox');
    checkbox5.class('mybox');
    checkbox6.class('mybox');
    checkbox7.class('mybox');
    checkbox8.class('mybox');
    checkbox9.class('mybox');
    checkbox10.class('mybox');
    checkbox11.class('mybox');
    checkbox12.class('mybox');
    clicker5.y = windowHeight/1.25;
    clicker13.height=50;
  }
}
function reset(){
predictions = [];
dementors=[];
dementors2=[];
  candles=[];
  witches=[];
 setup();
 candlestate=false;
 clicker0=false;
 label="";
 pos="";
 feath="";
 modelready=false
  time=0;
 cand=0;
 xp=0;
 yp=0;
 m=0;
 n=0;
 check=0;
 s=0;
 h=0;
 r=0;
 g=0;

}