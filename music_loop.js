// //variables 
// // var background = colour(15, 2, 245)
// let circleY = 450;
// let circleSize;
// let blue= color(15,2,245)
// // let sunY=350
// // let sunSize;

// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB,50,100);
 background(0);
 strokeWeight(9);
stroke(drum,80,80);
fill(drum,100,100)
let drumMap=map(drum,0,100,30,90)
let circlex=150
let circley=250

for(let i=1;i<drumMap;i=i+1){
  let circley=i*10
  //let circlex=i+50
circle(circlex,circley,50)
circle(circlex+50,circley,50)
circle(circlex+100,circley,50)
circle(circlex+150,circley,50)
circle(circlex+200,circley,50)

}


// let drumMap=map(bass,0,100,30,90)
// let lengthOfLine = 300;
// let lineStart = 100;
// let lineEnd= lineStart+lengthOfLine;


//  for(let i=1;i<drumMap;i=i+1){
//   let linestep = i*10;
// line(lineStart,linestep,lineEnd,linestep);

 //}

// for(let i=0; i<=10; i=i+1){
//   circle(i*20,i*20,10)
// }

}