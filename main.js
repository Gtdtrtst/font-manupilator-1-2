function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(550,400);
    canvas.position(560,100);
    video.position(40,50);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotResults);
}
function draw(){
background('#DEDAED')
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotResults(results){
    if(results.length>0){
        console.log(results);
    }
}