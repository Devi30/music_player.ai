leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
song1=""
song2=""
function preload(){
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}
function setup(){
    canvas=createCanvas(600,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotposes)
}
function modelloaded(){
    console.log("posenet is loaded")
}
function gotposes(results){
 if(results.length>0){
    console.log(results)
    leftwristx=results[0].pose.leftWrist.x 
    leftwristy=results[0].pose.leftWrist.y 
    rightwristx=results[0].pose.rightWrist.x
    rightwristy=results[0].pose.rightWrist.y
    console.log("leftwristx="+leftwristx+" leftwristy="+leftwristy)
    console.log("rightwristx="+rightwristx+" rightwristy="+rightwristy)
 }
}
function draw(){
    image (video,0,0,600,500)
}
