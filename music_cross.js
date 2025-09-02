// //variables 

let center=640

//vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
//colorMode(HSB,50)
background(255, 153, 0)
//stroke(15,2,245)
// strokeWeight(200)
//line(0,360,1280,360)
// strokeWeight(70);

let mountStroke = map(vocal,0,100,20,80)
stroke(mountStroke,0,0);
fill(0, 255, 42);
triangle(0,720,426,720,213,360);//left
triangle(370,720,880,720,639,240);//centre
triangle(823,720,1280,720,1036,360);//right
 
 stroke(255,0,0);

let offsetFromTop=50;
let offsetFromBottom = 720 - 50;
let halfWayDown = 720 / 2.5;
let leftx= center-(620/2);


let crossStrokeWeight = map(drum, 0,100, 10,100);
 strokeWeight(crossStrokeWeight);
 line(center,offsetFromTop,center,offsetFromBottom);
 line(leftx,halfWayDown,leftx + 620, halfWayDown);

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


