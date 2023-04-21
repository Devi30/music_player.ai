leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
song1=""
song2=""
scoreleftWrist=0;
scorerightWrist=0;
song_id="";
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
function gotposes(results){
 if(results.length>0){
    console.log(results)
    leftwristx=results[0].pose.leftWrist.x 
    leftwristy=results[0].pose.leftWrist.y 
    rightwristx=results[0].pose.rightWrist.x
    rightwristy=results[0].pose.rightWrist.y
    console.log("leftwristx="+leftwristx+" leftwristy="+leftwristy)
    console.log("rightwristx="+rightwristx+" rightwristy="+rightwristy)
    scoreleftWrist=results[0].pose.keypoints[9].score
    console.log("scoreleftWrist="+scoreleftWrist)
 }
}
function draw(){
    image (video,0,0,600,500)
    fill ("chartreuse")
    stroke("chartreuse")
    song_name = song1.isPlaying();
    console.log(song_id);

    if(scoreleftWrist > 0.2){
        circle(leftwristx,leftwristy,20);
        song1.stop();
        if(song_id == false){
           song1.play();
        }
        else{
            console.log("Song Name: Peter Pan Song");
            document.getElementById("song_name").innerHTML = "Song Name: Peter Pan Song";
        }
    
    }

    if(scorerightWrist > 0.2){
        circle(rightWristx,rightWristy,20);
        song1.stop();
        if(song_id == false){
            song2.play();
        }
        else{
            console.log("Song Name: Harry Potter Theme Song");
            document.getElementById("song_name").innerHTML = "Song Name: Harry Potter Theme Song";
        }
    }
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log(scorerightWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftwristx = "+leftwristx+" leftwristy = "+leftwristy);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightwristx = "+rightwristx+" rightwristy= "+rightwristy);
    }
}
