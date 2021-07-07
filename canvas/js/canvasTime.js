const Time = {
    box    : document.getElementById('canvasTime'),
    canvas : {},
    /*
    ** 初始化
    */
    init(){
        this.canvas = this.box.getContext('2d');
        this.strokeTime();
        setInterval(item => {
            this.strokeTime();
        })
    },
    /*
    ** 网格
    */
    strokeTime(){
        const canvas = this.canvas;
        canvas.clearRect(0,0,1500,1500);
       
        //网格
        for(let i = 10;i <= 1500;i = i+10){
            //竖条
            canvas.save();
            canvas.beginPath();
            canvas.lineWidth   = i % 100 ? 1 : 2;
            canvas.strokeStyle = '#eee';
            canvas.moveTo(i,0);
            canvas.lineTo(i,1500);
            canvas.stroke();
            canvas.restore();
            //横条
            canvas.save();
            canvas.beginPath();
            canvas.lineWidth   = i % 100 ? 1 : 2;
            canvas.strokeStyle = '#eee';
            canvas.moveTo(0,i);
            canvas.lineTo(1500,i);
            canvas.stroke();
            canvas.restore();
        }

        //时钟
        canvas.save();
        canvas.translate(500,500);

        //表盘
        canvas.save();
        canvas.beginPath();
        canvas.fillStyle = '#013905';
        canvas.strokeStyle = '#035605';
        canvas.lineWidth = 20;
        canvas.arc(0,0,300,0,Math.PI * 2);
        canvas.stroke();
        canvas.fill();
        canvas.restore();
        //刻度
        for(let i = 0; i < 360; i = i + 6){
            canvas.save();
            canvas.beginPath();
            canvas.strokeStyle = '#0594fa';
            canvas.lineWidth   = i % 30 ? 2 : 4;
            canvas.rotate(Math.PI / 180 * i);
            canvas.moveTo(i % 30 ? 270 : 265,0);
            canvas.lineTo(300,0);
            canvas.stroke();
            canvas.restore();
        }
        //获取时、分、秒
        const time    = new Date();
        let   seconds = time.getSeconds();
        let   minutes = time.getMinutes();
        let   hours   = time.getHours();
        //秒针
        canvas.save();
        canvas.beginPath();
        canvas.lineCap   = 'round';
        canvas.strokeStyle = '#f00';
        canvas.lineWidth = '2';
        canvas.rotate(Math.PI / 180 * (6 * seconds - 90));//每秒旋转6度。因为旋转0度默认在3点钟方向,所以要将旋转角度减去90度定位在0点位置
        canvas.moveTo(-40,0);
        canvas.lineTo(240,0);
        canvas.stroke();
        canvas.restore();
        //分针
        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#f27438';
        canvas.lineCap     = 'round';
        canvas.lineWidth   = 4;
        canvas.rotate(Math.PI / 180 * (6 * minutes - 90));//每分钟旋转6度
        canvas.moveTo(-40,0);
        canvas.lineTo(220,0);
        canvas.stroke();
        canvas.restore();
        //时针针
        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#f2b997';
        canvas.lineCap     = 'round';
        canvas.lineWidth   = 6;
        canvas.rotate(Math.PI / 180 * (30 * hours - 90));//每小时旋转30度
        canvas.moveTo(-40,0);
        canvas.lineTo(200,0);
        canvas.stroke();
        canvas.restore();
        //中心点
        canvas.save();
        canvas.beginPath();
        canvas.lineWidth   = 5;
        canvas.fillStyle   = '#1d91e4';
        canvas.strokeStyle = '#fff';
        canvas.arc(0,0,5,0,Math.PI * 2);
        canvas.stroke();
        canvas.fill();
        canvas.restore();
        
        canvas.restore();

        //时间文本
        canvas.save();
        canvas.beginPath();
        canvas.fillStyle = '#0592f6';
        canvas.font      = 'bold 40px Arial';
        canvas.fillText(`${hours} : ${minutes} : ${seconds}`,410,100);
        canvas.restore();

        
    }
}
Time.init();