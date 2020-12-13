


function getdistance(){
    var x1=parseInt(document.getElementById("x1").value);
    var x2=parseInt(document.getElementById("x2").value);
    var y1=parseInt(document.getElementById("y1").value);
    var y2=parseInt(document.getElementById("y2").value);
    var dx=x2-x1;
    var dy=y2-y1;
    var distance=Math.sqrt((dx**2)+(dy**2));
    alert(distance);
    distance=distance.toFixed(2);
    
    drawline(x1+100,(-y1+100),x2+100,(-y2+100));
    drawpoint(x1+100,100-y1);
    drawpoint(x2+100,100-y2);
    
    drawtext(x1+100,90-y1,"a",12,"serif","red");
    drawtext(x2+100,90-y2,"b",12,"serif","ref");
    
    drawtext(x1+((x2-x1)/2)+100,100+y1+((y2-y1)/2),distance,12,"serif","red");
    
}


function drawline(x1,y1,x2,y2){
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    
    
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = "black";
    ctx.stroke();
}


function start(){
    drawline(0,100,200,100);
    drawline(100,0,100,200);
    drawline(100,0,90,10);
    drawline(100,0,110,10);
    drawline(100,200,90,190);
    drawline(100,200,110,190);
    drawline(0,100,10,90);
    drawline(0,100,10,110);
    drawline(200,100,190,90);
    drawline(200,100,190,110);
    drawtext(90,20,"y",10,"serif","black");
    drawtext(180,110,"x",10,"serif","black")
    
}


function drawpoint(x,y){
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.arc(x,y,2,0,Math.PI*2)
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function drawtext(x,y,text, size,font,color){
    var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = size+"px"+" "+font;
ctx.fillStyle=color;
ctx.fillText(text,x,y); 
}


function clearcanvas(){
    var canvas =document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 200, 200);
    start();
}


