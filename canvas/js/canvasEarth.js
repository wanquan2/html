/** @type {HTMLCanvasElement} */ 
const Earth = {
    box      : document.getElementById('canvasEarth'),
    canvas   : {},//画布对象
    angle    : 0,//地球轨道弧度
    angleMars: 180,//火星轨道弧度
    /*
    ** 初始化
    */
    init(){
        this.canvas = this.box.getContext('2d');
        this.strokeCanvas();
        setInterval(() => {
            this.strokeCanvas();
        },1000/60)
    },

    /*
    ** 绘制背景
    */
    strokeSun(){
        const canvas = this.canvas;
        canvas.save();
        canvas.translate(500,500);

        //太阳
        canvas.save();
        canvas.beginPath();
        canvas.fillStyle   = '#f8b906';
        canvas.shadowColor = '#fce298';
        canvas.shadowBlur  = 20;
        canvas.arc(0,0,60, 0,Math.PI * 2);
        canvas.stroke();
        canvas.fill();
        canvas.restore();
        //地球轨道
        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#047dfa';
        canvas.lineWidth   = 1;
        canvas.arc(0,0,220,0,Math.PI * 2);
        canvas.stroke();
        canvas.restore();
        //地球
        canvas.save();
        canvas.beginPath();
        canvas.fillStyle   = '#0667f8';
        canvas.shadowColor = '#64b9f6';
        canvas.shadowBlur  = 10;
        canvas.rotate(this.angle * Math.PI / 180);
        canvas.translate(220,0);//月球围绕地球转 需要重新定位以地球为原点
        canvas.arc(0,0,10, 0,Math.PI * 2);
        canvas.stroke();
        canvas.fill();
        //月球轨道
        canvas.beginPath();
        canvas.strokeStyle = '#45f282';
        canvas.lineWidth   = 1;
        canvas.rotate(this.angle * Math.PI / 180);
        canvas.arc(0,0,30,0,Math.PI * 2);
        canvas.stroke();
        //月球
        canvas.beginPath();
        canvas.fillStyle   = '#f1f2d3';
        canvas.shadowColor = '#fafaef';
        canvas.shadowBlur  = 5;
        canvas.rotate(this.angle * Math.PI / 180);
        canvas.arc(30,0,2, 0,Math.PI * 2);
        canvas.stroke();
        canvas.fill();
        canvas.restore();
        //火星轨道
        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#f00';
        canvas.arc(0,0,400,0,Math.PI * 2);
        canvas.stroke();
        canvas.restore();
        //火星
        canvas.save();
        canvas.beginPath();
        canvas.fillStyle   = '#fa8309';
        canvas.shadowColor = "#fab976";
        canvas.shadowBlur  = 10;
        canvas.rotate(this.angleMars * Math.PI / 180);
        canvas.arc(400,0,20,0,Math.PI * 2);
        canvas.stroke();
        canvas.fill();
        canvas.restore();
        //火星卫星
        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#9c5c1966';
        canvas.lineWidth   = 10;
        canvas.rotate(this.angleMars * Math.PI / 180);
        canvas.arc(400,0,40,0,Math.PI * 2);
        canvas.stroke();
        canvas.restore();

        canvas.restore();

        if(this.angle === 360){
            this.angle = 0;
        }else{
            this.angle++;
        }
        if(this.angleMars === 360){
            this.angleMars = 0;
        }else{
            this.angleMars++;
        }
    },

    /*
    ** 绘制背景
    */
    strokeCanvas(){
        const canvas = this.canvas;
        canvas.clearRect(0,0,1500,1500);

        canvas.save();
        canvas.beginPath();
        canvas.fillStyle = '#000';
        canvas.fillRect(0,0,1500,1500);
        canvas.stroke();
        canvas.restore();

        this.strokeSun();
    }
}
Earth.init()