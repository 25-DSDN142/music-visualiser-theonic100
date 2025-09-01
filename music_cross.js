// //variables 
// // var background = colour(15, 2, 245)
// let circleY = 450;
// let circleSize;
// let blue= color(15,2,245)
// // let sunY=350
// // let sunSize;
let center=640

//vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
//colorMode(HSB,50)
background(0)
//stroke(15,2,245)
// strokeWeight(200)
//line(0,360,1280,360)
// strokeWeight(70);
 stroke(vocal,80,80);
// let drumMap=map(vocal,0,100,300,680);
//  let drumMap1=map(drum,0,100,180,540);
//  let drumMap2=map(drum,0,100,200,200);
//  let drumMap3=map(drum,0,100,200,650); 
 
//let center=640
let offsetFromTop=50
let offsetFromBottom = 720 - 50;
let halfWayDown = 720 / 2;
let leftx= center-(620/2)

//for(let i=1;i<drumMap;i=i+1){
//var lineStep=i+10;
//let center=i+10;
// line(drumMap,drumMap2,drumMap,drumMap3);//vert top
//     line(center,drumMap1,drumMap2,drumMap1);// horizontal left
let crossStrokeWeight = map(bass, 0,100, 50,90)
 strokeWeight(crossStrokeWeight);
 line(center,offsetFromTop,center,offsetFromBottom);
 line(leftx,halfWayDown,leftx + 620, halfWayDown);


 //  line(center1,liney2,center1+640,liney2);// horizontal left
 




 }


