closer = "";
heatwaves = "";

function preload(){
closer = loadSound("closer.mp3");
heatwaves = loadSound("heatwaves.mp3");
}

function setup(){
canvas = createCanvas(600,550);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 0, 0, 600, 550);
}