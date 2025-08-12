//variables 
// var background = colour(15, 2, 245)
let circleY = 450;
let circleSize;
let blue= color(15,2,245)
// let sunY=350
// let sunSize;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(15,2,245)


circleSize = map(bass,0,100,10,400)

fill(250, 122, 10);
  ellipse(200,circleY,circleSize);




}