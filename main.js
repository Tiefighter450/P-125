noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
fontSize = 0;
function preload() {

}
function setup() {
    canvas = createCanvas(597, 498);
    video = createCapture(VIDEO);
    video.size(301, 228);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("Model is initialized!");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        fontSize = floor(Number(leftWristX - rightWristX));
        document.getElementById("fontSize").innerHTML = "Font size: " + fontSize;
    }
}
function draw() {
    canvas.center();
    video.center();
    fill('white');
    textSize(fontSize);
    background(255, 0, 65);
    text("Shreevijay", noseX, noseY);
}