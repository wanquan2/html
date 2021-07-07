/*
** canvs 画图
*/

const box = document.getElementById('canvsId');

let canem = box.getContext('2d');

//画一个方框
canem.fillStyle = "#FF0000";//填充方框颜色
canem.fillRect(200,0,80,80);//绘图

//画一个圆
canem.beginPath();
canem.arc(240,140,40,0,2*Math.PI);
canem.stroke();

//路径
canem.beginPath();
canem.lineWidth=10;
canem.lineJoin="round";
canem.moveTo(20,20);
canem.lineTo(100,50);
canem.lineTo(20,100);
canem.stroke();

canem.beginPath();
canem.moveTo(200,200);
canem.lineTo(300,300);
canem.stroke();

canem.moveTo(200,200);
canem.lineTo(100,300);
canem.stroke();

//文字
canem.lineWidth=1;
canem.font = "30px Airal";
canem.fillText('张三',30,400);
canem.strokeText('张三',30,450);//空心字

let m = 0; 
const x = [0,100,150,200,250,300,350,400,450,500,550,600];
const y = [500,520,510,530,570,480,580,450,500,505,540,0];
canem.lineWidth=5;
canem.strokeStyle="#34c427";
canem.moveTo(x[0],y[0]);
function strokes(i){
    console.log(i);
    canem.lineTo(x[i+1],y[i+1]);
    canem.stroke();
    m++;
    run()
}

function run(){
    if(m < 11){
        setTimeout(function(){
            strokes(m)
        },70)
    }
}

run();




var canvas, ctx;
var clockRadius = 250;
var clockImage;

// draw functions :
function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawScene() { // main drawScene function
    clear(); // clear canvas

    // get current time
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours = hours > 12 ? hours - 12 : hours;
    var hour = hours + minutes / 60;
    var minute = minutes + seconds / 60;

    // save current context
    ctx.save();

    //draw clock image (as background)
    //ctx.drawImage(clockImage, 0, 0, 500, 500);

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.beginPath();

    //draw numbers
    ctx.font = '36px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var n = 1; n <= 12; n++) {
        var theta = (n - 3) * (Math.PI * 2) / 12;
        var x = clockRadius * 0.7 * Math.cos(theta);
        var y = clockRadius * 0.7 * Math.sin(theta);
        console.log(theta,x,y);
        ctx.fillText(n, x, y);
    }

    // draw hour
    // ctx.save();
    // var theta = (hour - 3) * 2 * Math.PI / 12;
    // ctx.rotate(theta);
    // ctx.beginPath();
    // ctx.moveTo(-15, -5);
    // ctx.lineTo(-15, 5);
    // ctx.lineTo(clockRadius * 0.5, 1);
    // ctx.lineTo(clockRadius * 0.5, -1);
    // ctx.fill();
    // ctx.restore();

    // draw minute
    // ctx.save();
    // var theta = (minute - 15) * 2 * Math.PI / 60;
    // ctx.rotate(theta);
    // ctx.beginPath();
    // ctx.moveTo(-15, -4);
    // ctx.lineTo(-15, 4);
    // ctx.lineTo(clockRadius * 0.8, 1);
    // ctx.lineTo(clockRadius * 0.8, -1);
    // ctx.fill();
    // ctx.restore();

    // draw second
    // ctx.save();
    // var theta = (seconds - 15) * 2 * Math.PI / 60;
    // ctx.rotate(theta);
    // ctx.beginPath();
    // ctx.moveTo(-15, -3);
    // ctx.lineTo(-15, 3);
    // ctx.lineTo(clockRadius * 0.9, 1);
    // ctx.lineTo(clockRadius * 0.9, -1);
    // ctx.fillStyle = '#0f0';
    // ctx.fill();
    // ctx.restore();

    ctx.restore();
}

// initialization
(function(){
    canvas = document.getElementById('canvsTime');
    ctx = canvas.getContext('2d');

    // var width = canvas.width;
    // var height = canvas.height;

clockImage = new Image();
clockImage.src = 'https://static.runoob.com/images/mix/125855_nnla_89964.png';

    setInterval(drawScene, 1000); // loop drawScene
})();

