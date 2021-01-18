canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
    
var last_x,last_y;

color="black";
width=1;

var screenwidth=screen.width;

new_width=screen.width-80;
new_height=screen.height-30;

if (screenwidth < 992) {
    canvas.width=new_width;
    canvas.height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",mytouchstart);

function mytouchstart(e) {
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;

    console.log("Touch Has Started");
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",mytouchmove);

function mytouchmove(e) {
    console.log("Touch Move Has Started");
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    
    ctx.moveTo(last_x,last_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();

    last_x=current_x;
    last_y=current_y;
}

var Mouse_Event="empty";
var Start_X,Start_Y;

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e) {
    Mouse_Event="mousedown";
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e) {
    Mouse_Event="mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e) {
    Mouse_Event="mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e) {
    current_X =e.clientX-canvas.offsetLeft;
    current_Y =e.clientY-canvas.offsetTop;

    if(Mouse_Event=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("last position of x and y cooradinates= ");
        console.log("X= " +Start_X +",Y= " +Start_Y);
        ctx.moveTo(Start_X,Start_Y);

        console.log("current position of x and y cooradinates= ");
        console.log("X= " +current_X +",Y= " +current_Y);
        ctx.lineTo(current_X,current_Y);
        ctx.stroke();
    }
    Start_X=current_X;
    Start_Y=current_Y;
}

function cleararea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}