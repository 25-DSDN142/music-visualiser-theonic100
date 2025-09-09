// //variables 

let center=640

//vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {


//background change
if(counter<900){
  //backOpacityA=map(counter,700,1000,255,0)
    background(0,0,0)}

if(counter>900){
  background(255, 153, 0)}

// fill(255)
// noStroke()
// textSize(100)
// text(seconds,100,200)

fill(255)
noStroke()
textSize(100)
text(counter,100,200)

// fill(255);
// noStroke();
// textSize(50);
// text(words,200,200);

//circle sun
if(counter<900){
circlesOpacity = map(counter,850,950,255,0)
fill(247, 195, 5,circlesOpacity)
let circleY=map(counter,0,900,300,720,true)
circle(640,circleY,400)
}
//stars
// if(counter<900){
//   let starsize=30
// circlesOpacity = map(counter,850,950,255,0)
// fill(255,255,255,circlesOpacity)
// circle(100,100,starsize)
// circle(30,50,starsize)
// circle(700,50,starsize)
 //}


 //cross variables
let offsetFromTop=50;
let offsetFromBottom = 720 - 50;
let halfWayDown = 720 / 2.5;
let leftx= center-(620/2);
let crossOpacity = 0; //cross fade in from 0

//cross fade in and pulse
if(counter>900){
  crossOpacity = map(counter,900,1000,0,255,true);
let crossStrokeWeight = map(drum, 0,100, 10,100);
//let crossOpacity = map(bass, 0, 100, 50, 255);
stroke(255,0,0,crossOpacity);
strokeWeight(crossStrokeWeight);
 line(center,offsetFromTop,center,offsetFromBottom);//vert line
line(leftx,halfWayDown,leftx + 620, halfWayDown);//horz line
}

//2400 mark
if(counter>2400 && counter < 3150){
lineLength=map(bass,0,100,320,160)
lineLength1=map(drum,0,100,320,160)
lineLength2=map(other,0,100,320,160)
//lineOpacity=map(bass,2400,2600,0,255)
stroke(255, 255, 255)
strokeWeight(20)
line(150,720,150,lineLength)
line(200,720,200,lineLength1)
line(250,720,250,lineLength2)
line(1130,720,1130,lineLength)
line(1080,720,1080,lineLength1)
line(1030,720,1030,lineLength2)
}

if(counter>=7200){
circleSize=map(drum,0,100,500,800)
circle(640,360,circleSize)}












//three peaks
// let mountStroke = map(vocal,0,100,10,30);
// strokeWeight(mountStroke);
// stroke(41, 89, 33);
// fill(34, 255, 0);
// triangle(370,720,880,720,639,240);//centre
// triangle(0,720,426,720,213,360);//left
// triangle(823,720,1280,720,1036,360);//right





















// let crossOpacity = 0;
// if(counter>=900)
//   crossOpacity = map(counter,900,1000,0,255,true);
// for(let i = 0; i<2; i=i+1){
//   stroke(255,0,0,crossOpacity)
//   strokeWeight(crossStrokeWeight)

// if (i === 0){
//   //vert line
// line(center,offsetFromTop,center,offsetFromBottom);
// }else if (i === 1){
//   //horz line
// line(leftx,halfWayDown,leftx + 620, halfWayDown);
// }
// }

// // store line coordinates in an array
// let crossLines = [
//   [center, offsetFromTop, center, offsetFromBottom],     // vertical
//   [leftx, halfWayDown, leftx + 620, halfWayDown]         // horizontal
// ];




// let drumMap=map(vocal,0,100,300,680);
//  let drumMap1=map(drum,0,100,180,540);
//  let drumMap2=map(drum,0,100,200,200);
//  let drumMap3=map(drum,0,100,200,650); 


 //for(let i=1;i<drumMap;i=i+1){
//var lineStep=i+10;
//let center=i+10;
// line(drumMap,drumMap2,drumMap,drumMap3);//vert top
//     line(center,drumMap1,drumMap2,drumMap1);// horizontal left

 //  line(center1,liney2,center1+640,liney2);// horizontal left
 




 }


