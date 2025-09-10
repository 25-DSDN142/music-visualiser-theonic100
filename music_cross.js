// //variables 

let center=640


//vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
 


//background change
if(counter<900){
  //backOpacityA=map(counter,850,1000,255,0)
    background(0,0,0)}

if(counter>900){
  //backOpacityB=map(counter,1000,1150,0,255)
  background(3, 148, 252)}

//counter
fill(255)
noStroke()
textSize(100)
text(counter,100,200)


//circle sun down 
if(counter<900){
circlesOpacity = map(counter,850,950,255,0,true)
fill(247, 195, 5,circlesOpacity)
let circleY=map(counter,0,900,300,720,true)
circle(640,circleY,400)
}
//circle sun rise
if(counter>900&& counter<1300){
  let circlesOpacity;
  if(counter>900&&counter<1000){
circlesOpacity = map(counter,900,1000,0,255,true);
  }
  if(counter>1200&&counter<1300){
    circlesOpacity=map(counter,1200,1300,255,0,true);
  }
circleSize=map(bass,0,100,400,600)
fill(247, 195, 5,circlesOpacity)
circle(640,360,circleSize)
}

 //cross variables
let offsetFromTop=50;
let offsetFromBottom = 720 - 50;
let halfWayDown = 720 / 2.5;
let leftx= center-(620/2);

//cross fade in/out and pulse
if(counter>1200 && counter<7200){
  let crossOpacity
  if(counter>1200){ 
    crossOpacity = map(counter,1200,1300,0,255,true);
      }
 if(counter>7000){
  crossOpacity = map(counter,7000,7200,255,0,true)
 }
   let crossStrokeWeight = map(drum, 0,100, 10,100);
stroke(255,0,0,crossOpacity);
strokeWeight(crossStrokeWeight);
 line(center,offsetFromTop,center,offsetFromBottom);//vert line
line(leftx,halfWayDown,leftx + 620, halfWayDown);//horz line
}


//2400 mark lines jump fade in/out
if(counter>2400 && counter < 3150){
  let lineOpacity;
  if(counter<2550){
lineOpacity=map(counter,2400,2550,0,255,true);
  }
   if(counter>3000){
    lineOpacity=map(counter,3000,3150,255,0,true);
   }
lineLength=map(bass,0,100,320,160)
lineLength1=map(drum,0,100,320,160)
lineLength2=map(other,0,100,320,160)
stroke(255, 0,0,lineOpacity)
strokeWeight(20)
line(150,720,150,lineLength)//ll1
line(200,720,200,lineLength1)//ll2
line(250,720,250,lineLength2)//ll3
line(1130,720,1130,lineLength)//rl3
line(1080,720,1080,lineLength1)//rl2
line(1030,720,1030,lineLength2)//rl3

}

//again and again
if(counter>3150){
//lineOpacity=map(counter,2400,2500,0,255,true)
//lineOpacity=map(counter,3000,3150,255,0,true)
vocalLength=map(vocal,0,100,200,300)
stroke(255, 0,0)
strokeWeight(20)
line(150,0,150,vocalLength)//ll1
line(200,0,200,vocalLength)//ll2
line(250,0,250,vocalLength)//ll3
line(1130,0,1130,vocalLength)//rl3
line(1080,0,1080,vocalLength)//rl2
line(1030,0,1030,vocalLength)//rl3
}
// //big drums circles
// if(counter>=7200){
// circleSize=map(drum,0,100,500,800)
// circle(640,360,circleSize)}

if (counter >= 7200) {
  let numLayers = 5; // number of concentric circles
  let baseSize = map(drum, 0, 100, 400, 600); // base size reacts to drum
  let sizeStep = 50; // how much each layer increases
  let alphaStep = 50; // opacity decrease for outer layers

  noStroke();

  for (let i = 0; i < numLayers; i++) {
    let circleSize = baseSize + i * sizeStep; // bigger for outer layers
    let alpha = 255 - i * alphaStep; // fade out outer layers
    fill(255, 150, 0, alpha); // orange with varying transparency
    circle(640, 360, circleSize);
  }
}




 }


