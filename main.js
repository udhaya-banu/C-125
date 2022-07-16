noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(560,100);
posenet=ml5.poseNet(video,modalLoaded);
posenet.on("pose",gotposes);
}
function modalLoaded(){
    console.log("poseNet is initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        difference=floor(leftwristX-rightwristX);
        console.log("lwX="+leftwristX+"rwX="+rightwristX+"diff="+difference);
    }
}
function draw(){
background("grey");
fill("red");
stroke("red");
square(noseX,noseY,difference);
document.getElementById("squareSides").innerHTML="size of the square"+difference+"px";
textSize(difference);
fill("pink");
text("Sonika",50,80);
}