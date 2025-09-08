// //variables 

let center=640

//vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
//colorMode(HSB,50)
//background(255, 153, 0)
//stroke(15,2,245)
// strokeWeight(200)
//line(0,360,1280,360)
// strokeWeight(70);
fill(255,255,255)
stroke(255,255,255)
textSize(100)
text(counter,100,200)

fill(0);
noStroke();
textSize(50);
text(words,200,200);

if(counter<900){background(0)}





if(counter>900){background(255, 153, 0)}
let mountStroke = map(vocal,0,100,10,30);
strokeWeight(mountStroke);
stroke(41, 89, 33);
fill(34, 255, 0);
triangle(370,720,880,720,639,240);//centre
triangle(0,720,426,720,213,360);//left
triangle(823,720,1280,720,1036,360);//right

 //cross info
let offsetFromTop=50;
let offsetFromBottom = 720 - 50;
let halfWayDown = 720 / 2.5;
let leftx= center-(620/2);


let crossStrokeWeight = map(drum, 0,100, 10,100);
let crossOpacity = map(bass, 0, 100, 50, 255);
stroke(255,0,0);
strokeWeight(crossStrokeWeight);
 line(center,offsetFromTop,center,offsetFromBottom);//vert line
line(leftx,halfWayDown,leftx + 620, halfWayDown);//horz line

// if(counter<= 250)
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


