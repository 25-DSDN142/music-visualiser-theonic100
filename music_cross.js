// //variables 
 //cross variables
 let center=640
let offsetFromTop=50;
let offsetFromBottom = 720 - 50;
let halfWayDown = 720 / 2.5;
let leftx= center-(620/2);
let seconds=counter/60


//vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
 


//background change
if(counter<900){
    background(0,0,0)}

if(counter>900){
  background(3, 148, 252)}




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
if(counter>3150 && counter<10200){
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

//again and again
if(counter>5400&& counter<10200){
vocalLength=map(vocal,0,100,200,300)
stroke(255, 0,0)
strokeWeight(20)
line(0,150,vocalLength,150)//ll1
line(0,200,vocalLength,200)//ll2
line(0,250,vocalLength,250)//ll3
line(1280,150,1280-vocalLength,150)//rl3
line(1280,200,1280-vocalLength,200)//rl2
line(1280,250,1280-vocalLength,250)//rl3
}


//again and again
if(counter>6180&& counter<10200){
vocalLength=map(vocal,0,100,200,300)
stroke(255, 0,0)
strokeWeight(20)
line(150,720,150,720-vocalLength)//ll1
line(200,720,200,720-vocalLength)//ll2
line(250,720,250,720-vocalLength)//ll3
line(1130,720,1130,720-vocalLength)//rl3
line(1080,720,1080,720-vocalLength)//rl2
line(1030,720,1030,720-vocalLength)//rl3
}


// //big drums circles
// if(counter>=7200){
// circleSize=map(drum,0,100,500,800)
// circle(640,360,circleSize)}

//this section was assisted by AI(copilot) based on the code above

if (counter >= 7200) {

  let numLayers = 5; 
  let baseSize = map(drum, 0, 100, 300, 600);
  let sizeStep = 50; 
  let alphaStep = 50; 

  noStroke();

  for (let i = 0; i < numLayers; i++) {
    let circleSize = baseSize + i * sizeStep;
    let alpha = (255 - i * alphaStep); // combine both fades
    fill(255, 150, 0, alpha);
    circle(640, 360, circleSize);
  }
}


//first round
//i wont turn back left 1
if(counter>10260 && counter<10320){
   let crossStrokeWeight = map(vocal, 0,100, 10,30);
stroke(255,0,0);
strokeWeight(crossStrokeWeight);
 line(300,360,300,650);//vert line
line(150,520,450,520);//horz line
}

//i wont turn back right 1
if(counter>10320&&counter<10440){
   let crossStrokeWeight = map(vocal, 0,100, 10,30);
stroke(255,0,0);
strokeWeight(crossStrokeWeight);
 line(980,70,980,370);//vert line
line(1130,200,830,200);//horz line
    }


// //i wont turn back left 2 
 if(counter>10440&&counter<10560){
let crossStrokeWeight = map(vocal, 0,100, 10,30);
stroke(255,0,0);
strokeWeight(crossStrokeWeight);
 line(300,360,300,650);//vert line
line(150,520,450,520);//horz line
 }

// //i wont turn back right 2
 if(counter>10560&&counter<10620){
   let crossStrokeWeight = map(vocal, 0,100, 10,30);
stroke(255,0,0);
strokeWeight(crossStrokeWeight);
 line(980,70,980,370);//vert line
line(1130,200,830,200);//horz line
}


// // //break
//second round
//i wont turn back left 1
if(counter>10920 && counter<11040){
   let crossStrokeWeight = map(vocal, 0,100, 10,30);
stroke(255,0,0);
strokeWeight(crossStrokeWeight);
 line(300,360,300,650);//vert line
line(150,520,450,520);//horz line
}

//i wont turn back right 1
if(counter>11040&&counter<11160){
   let crossStrokeWeight = map(vocal, 0,100, 10,30);
stroke(255,0,0);
strokeWeight(crossStrokeWeight);
 line(980,70,980,370);//vert line
line(1130,200,830,200);//horz line
    }


// //i wont turn back left 2 
if(counter>11160&&counter<11220){
let crossStrokeWeight = map(vocal, 0,100, 10,30);
stroke(255,0,0);
strokeWeight(crossStrokeWeight);
 line(300,360,300,650);//vert line
line(150,520,450,520);//horz line
}

// //i wont turn back right 2
if(counter>11220&&counter<11280){
   let crossStrokeWeight = map(vocal, 0,100, 10,30);
stroke(255,0,0);
strokeWeight(crossStrokeWeight);
 line(980,70,980,370);//vert line
line(1130,200,830,200);//horz line
}
// //i wont turn back left 2 
if(counter>11280&&counter<11400){
let crossStrokeWeight = map(vocal, 0,100, 10,30);
stroke(255,0,0);
strokeWeight(crossStrokeWeight);
 line(300,360,300,650);//vert line
line(150,520,450,520);//horz line
}


//again and again
if(counter>11760){
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

//again and again
if(counter>11760){
vocalLength=map(vocal,0,100,200,300)
stroke(255, 0,0)
strokeWeight(20)
line(0,150,vocalLength,150)//ll1
line(0,200,vocalLength,200)//ll2
line(0,250,vocalLength,250)//ll3
line(1280,150,1280-vocalLength,150)//rl3
line(1280,200,1280-vocalLength,200)//rl2
line(1280,250,1280-vocalLength,250)//rl3
}

//again and again
if(counter>12540){
vocalLength=map(vocal,0,100,200,300)
stroke(255, 0,0)
strokeWeight(20)
line(150,720,150,720-vocalLength)//ll1
line(200,720,200,720-vocalLength)//ll2
line(250,720,250,720-vocalLength)//ll3
line(1130,720,1130,720-vocalLength)//rl3
line(1080,720,1080,720-vocalLength)//rl2
line(1030,720,1030,720-vocalLength)//rl3
}

//again and again
if(counter>12540){
vocalLength=map(vocal,0,100,200,300)
stroke(255, 0,0)
strokeWeight(20)
line(0,570,vocalLength,570)//ll1
line(0,520,vocalLength,520)//ll2
line(0,470,vocalLength,470)//ll3
line(1280,570,1280-vocalLength,570)//rl3
line(1280,520,1280-vocalLength,520)//rl2
line(1280,470,1280-vocalLength,470)//rl3
}

// //ending 

//cross fade in/out and pulse
if(counter>14040 ){
  let crossOpacity
  if(counter>14040){ 
    crossOpacity = map(counter,14040,14100,0,255,true);
      }
stroke(255,0,0,crossOpacity);
strokeWeight(50)
 line(center,offsetFromTop,center,offsetFromBottom);//vert line
line(leftx,halfWayDown,leftx + 620, halfWayDown);//horz line
}



// //counter
fill(255)
noStroke()
textSize(80)
// text(co,100,200)
 

  let seconds = counter / 60;  // assuming 60 fps
  text("Seconds: " + nf(seconds, 1, 2), 50, 50);
}


