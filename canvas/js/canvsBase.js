/** @type {HTMLCanvasElement} */ 

var canvasBase = {
    box:    document.getElementById('canvasBase'),
    canvas: {},//画布对象
    width:  0,
    height: 0,
    index:  0,

    init(){//初始化
        this.canvas = this.box.getContext('2d');
        this.canvas.clearRect(0,0,1500,1500);//清空画布
        this.cretGrid();
        this.canvasBase();
    },
    
    /*
    **基本画图 canvas只支持矩形一种原生图形
    */
    canvasBase(){
        let canvas  = this.canvas;
        this.width  = canvas.canvas.width;
        this.height = canvas.canvas.height;

        //创建矩形
        canvas.beginPath();   
        canvas.rect(20,20,100,100);      //rect(x,y,width,height)定义矩形
        canvas.strokeStyle   = '#1d91e4';//设置或返回笔触的颜色、渐变或模式
        canvas.lineWidth     = 6;        //设置或返回当前的线条宽度
        canvas.shadowColor   = '#e41d39';//设置或返回阴影颜色
        canvas.shadowBlur    = 20;       //设置或返回阴影模糊级别
        canvas.shadowOffsetX = 15;       //设置或返回阴影与形状的水平距离
        canvas.shadowOffsetY = 10        //设置或返回阴影与形状的垂直距离
        canvas.stroke();                 //绘制定义的路线 {fill()填充}

        //绘制矩形
        canvas.beginPath();              //起始一条路径或重置当前路径
        canvas.strokeStyle   = '#2b07f1';
        canvas.lineWidth     = 1;
        canvas.shadowColor   = '#fff';
        canvas.shadowOffsetX = 0;
        canvas.shadowOffsetY = 0;
        canvas.strokeRect(20,160,100,100);//直接绘制矩形(无填充)

        //绘制填充矩形
        canvas.beginPath();
        canvas.rect(20,300,100,100);
        canvas.fillStyle   = '#FF0000';  //设置或返回填充颜色、渐变或模式
        canvas.fill();                   //绘制定义的路线(填充当前路径)

        //绘制路径
        canvas.beginPath();
        canvas.strokeStyle = '#f00';
        canvas.lineWidth   = 15;
        canvas.lineCap     = 'round',//设置或返回线条末端线冒的样式 butt：平直，round：圆形 square：正方形
        canvas.lineJoin    = 'miter' //设置或返回两线相交时间所创建的拐角类型 round：圆角，bevel：斜角，miter：尖角
        canvas.miterLimit  = 1;      //设置或返回最大斜借长度（两条线交汇处内角和外交间的距离）
        canvas.moveTo(200,20);       //把路径移入到画布制定点，不划线
        canvas.lineTo(200,120);      //添加一个新点，然后绘制从改点到最后指定点的线条
        canvas.lineTo(260,80);
        canvas.lineTo(190,180);
        canvas.lineTo(240,280);
        canvas.lineTo(200,350);
        canvas.stroke();

        //绘制三角形
        canvas.beginPath();
        canvas.lineWidth   = 2;
        canvas.strokeStyle = '#000';
        canvas.moveTo(300,20);
        canvas.lineTo(300,220);
        canvas.lineTo(400,120);
        canvas.closePath();         //创建从当前点到起始点的路径（链接起点、终点，闭合路径）
        canvas.stroke();

        //绘制填充三角形
        canvas.beginPath();
        canvas.fillStyle   = '#f17b7b';
        canvas.strokeStyle = '#f17b7b';
        canvas.moveTo(300,250);
        canvas.lineTo(300,400);
        canvas.lineTo(400,300);
        canvas.closePath();
        canvas.stroke();
        canvas.fill();

        //绘制圆形
        canvas.beginPath();
        canvas.lineWidth   = 5;
        canvas.strokeStyle = '#3bd614';
        canvas.arc(460,80,40,0,2 * Math.PI); //创建弧度曲线 arc(x,y,r,sAngle,eAngle,counterclockwise) x、y:圆中心坐标，r:圆半径，sAngle：开始角，eAngle：结束角，counterclockwise：逆时针/顺时针 false = 顺时针 true = 逆时针
                                             //创建圆形起始角设为0，结束角设为2*Math.PI
                                             //角度转换成弧度 radians = (Math.PI / 180) * degrees(度)  
        canvas.stroke();

        //绘制实心圆
        canvas.beginPath();
        canvas.lineWidth   = 1;
        canvas.fillStyle   = '#e42f1d';
        canvas.strokeStyle = '#e42f1d';
        canvas.shadowColor = '#e42f1d';
        canvas.shadowBlur  = 10;
        canvas.arc(500,200,50,0,2 * Math.PI);
        canvas.stroke();
        canvas.fill();

        //绘制弧线(arc方法)
        canvas.beginPath();
        canvas.lineWidth  = 5;
        canvas.shadowBlur = 0;
        canvas.lineCap    = 'butt';
        canvas.arc(500,300,80,0,(Math.PI/180) * 90);
        // canvas.closePath();
        // canvas.fill();
        canvas.stroke();

        //绘制弧线（arcTo）
        canvas.beginPath();
        canvas.lineWidth   = 10;
        canvas.strokeStyle = '#e4de1c';
        canvas.moveTo(600,20);
        canvas.lineTo(700,20);          //第一条线
        canvas.arcTo(800,20,800,120,100)//arcTo(x1,y1,x2,y2,r)创建介于两个切线之间的弧线 x1:l两切线焦点横坐标，y1:两切线焦点纵坐标，x2:第二条切线上一点横坐标，y2:第二条切线上一点的纵坐标，r:弧的半径
        canvas.lineTo(800,240);         //第二条线
        canvas.stroke();

        //贝塞尔曲线
        canvas.beginPath();
        canvas.lineWidth   = 2;
        canvas.strokeStyle = '#09f526';
        canvas.moveTo(650,300);
        canvas.quadraticCurveTo(650,400, 800,400); //创建一条二次贝塞尔曲线quadraticCurveTo(cpx,cpy,x,y) cpx:控制点x坐标，cpy控制点y坐标，x:结束点x坐标，y:结束点y坐标
        canvas.stroke();

        //贝塞尔曲线
        canvas.beginPath()
        canvas.strokeStyle = '#17b3a3';
        canvas.moveTo(700,300);
        canvas.bezierCurveTo(700,420,900,420,900,300);//创建一条三次贝塞尔曲线bezierCurveTo(cpx1,cpy1,cpx2,cpy3,x,y)cpx1:第一个控制点x坐标，cpy1第一个控制点y坐标，第二个控制点x坐标，cpy1第二个控制点y坐标，x:结束点x坐标，y:结束点y坐标
        canvas.closePath();
        canvas.stroke();

        //虚线
        canvas.save();
        canvas.beginPath();
        canvas.moveTo(900,20);
        canvas.lineTo(900,220);
        canvas.setLineDash([20,5]);//制定线段与间隙的交替 setLineDash([线段长度,间隙距离])
        canvas.lineDashOffset = -1;//设置起始偏移量
        canvas.stroke();
        canvas.restore();

        //变形(改变画布原点)
        canvas.save();//保存之前状态
        canvas.translate(350,750);//改变画布原点坐标translate(x,y)
        canvas.fillRect(0,0,100,100);
        canvas.restore();//恢复到之前状态


        //旋转
        canvas.save();//保存当前环境的状态
        canvas.beginPath();
        canvas.strokeStyle = '#f705d9';
        canvas.moveTo(900,450);
        canvas.rotate(10*Math.PI/180);//旋转绘图rotate(angle);
        canvas.lineTo(900,600);
        canvas.stroke();
        canvas.restore();//返回之前保存过的路径状态
        //save restore 防止角度旋转污染

        //扇形
        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#f00';
        canvas.moveTo(110,600);
        canvas.arc(110,600,100,0,Math.PI / 180 * 90);
        canvas.closePath();
        canvas.stroke();
        canvas.fill();
        canvas.restore();

        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#3bd614';
        canvas.fillStyle   = '#3bd614';
        canvas.moveTo(110,600);
        canvas.arc(110,600,100,Math.PI / 180 * 90,Math.PI / 180 * 180);
        canvas.closePath();
        canvas.stroke();
        canvas.fill();
        canvas.restore();

        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#e4de1d';
        canvas.fillStyle   = '#e4de1d';
        canvas.moveTo(110,600);
        canvas.arc(110,600,100,Math.PI / 180 * 180,Math.PI / 180 * 200);
        canvas.closePath();
        canvas.stroke();
        canvas.fill();
        canvas.restore();

        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#e06bdd';
        canvas.fillStyle   = '#e06bdd';
        canvas.moveTo(110,600);
        canvas.arc(110,600,100,Math.PI / 180 * 200,Math.PI / 180 * 260);
        canvas.closePath();
        canvas.stroke();
        canvas.fill();
        canvas.restore();

        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#e4de1d';
        canvas.fillStyle   = '#e4de1d';
        canvas.moveTo(110,600);
        canvas.arc(110,600,100,Math.PI / 180 * 260,Math.PI / 180 * 360);
        canvas.closePath();
        canvas.stroke();
        canvas.fill();
        canvas.restore();

       
        //环形统计图
        const list = [{
            color:'#3bd614',
            angle:20
        },{
            color:'#31bbad',
            angle:50
        },{
            color:'#e42f1d',
            angle:10
        },{
            color:'#e4de1c',
            angle:5
        },{
            color:'#f17b7b',
            angle:1
        },{
            color:'#1d91e4',
            angle:14
        }]
        this.crectsector(list);

        //绘制文本
        canvas.save();
        canvas.beginPath();
        canvas.font         = '40px Arial';//设置字体属性，使用语法与css font属性相同
        canvas.textAlign    = 'left';//文本对其方式 可选值start、end、right、center 默认start
        canvas.fillText('有填充文本',600,500);
        canvas.textBaseline = 'top';//延基线对其方式 可选值top、hanging、middle、alphabetic、ideographic、bottom默认是alphabetic
        canvas.strokeStyle  = '#1d91e4';
        canvas.strokeText('无填充文本',600,550);
        canvas.direction    = 'ltr';//文本方向 可选值ltr、rtl、inherit 默认inferit
        canvas.fillText('文本方向',600,600);
        canvas.restore();

        //绘制图片
        let img = new Image();
        img.src = './images/1.png';
        img.onload = () => {
            canvas.drawImage(img,20,750,100,100);//绘制图像画布或视频drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
                                                 //img:要是用的图像、画布或视频，sx、sy：开始剪切坐标，swidth、sheight：被剪切图片宽高，
                                                 //x、y：在画布上放置位置坐标，width、height：要使用图像的宽高
                                                 //前四个参数定义源图像大小位置，后四个参数定义切片显示的大小位置
            //切片                                    
            canvas.drawImage(img,130,750,300,300,180,750,100,100)
        }

        //缩放
        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#ef72f1';
        canvas.lineWidth   = 5;
        canvas.strokeRect(20,900,100,100);
        canvas.scale(10,10);//缩放当前绘图，scale(width,height) width：缩放当前绘图的宽度 1=100% 0.5=50% 2=200% 以次类推，height 缩放当前绘图的高度
        canvas.strokeRect(20,900,100,100);//缩放后重绘
        canvas.stroke();
        canvas.restore();

        //变形矩阵
        canvas.save();
        canvas.beginPath();
        canvas.fillStyle = '#89e6c8';
        canvas.transform(.5,1,0,1,0,0);//变形矩阵 transform(a,b,c,d,e,f) a:水平缩放 b:水平倾斜 c:垂直缩放 d:垂直倾斜 e:水平移动 f:垂直移动
                                       //a c e
                                       //b d f
                                       //0 0 1
        canvas.fillRect(160,900,100,100);
        canvas.restore();

        //合成
        canvas.save();
        canvas.beginPath();
        canvas.fillStyle = '#f3766a';
        canvas.fillRect(200,900,100,100);
        canvas.globalCompositeOperation = "source-over";//全局合成操作 canvas.globalCompositeOperation = type type共有13个值
                                                        //source-over     :新图像覆盖原有图像
                                                        //source-in       :仅显示新图像与旧图像重合的地方，其余部分隐藏
                                                        //source-out      :仅显示新图像与老图像没有重合的地方，其余隐藏
                                                        //source-atop     :新图像仅显示与老图像重合的部分，老图像仍然可以显示
                                                        //destination-over:新图像在老图像下面
                                                        //destination-in  :仅显示老图像与新图像重合的地方，其余部分隐藏
                                                        //destionation-out:仅显示老图像与新图像没有重合的地方，其余隐藏
                                                        //destination-atop:老图像仅仅显示重叠部分，新图像显示在老图像下面
                                                        //lighter         :新老图都显示，重叠部分做颜色处理
                                                        //darken          :保留重叠部分最黑的像素
                                                        //lighten         :保留重叠部分最亮的像素
                                                        //xor             :重叠部分透明
                                                        //copy            :只保留新图像，其余的全部清除
        canvas.fillStyle = '#e4b120';
        canvas.fillRect(250,950,100,100);
        canvas.restore();


        //裁剪路径
        canvas.save();
        canvas.beginPath();
        canvas.fillStyle = '#d9da81';
        canvas.arc(500,950,100,0,Math.PI * 2);//显示的裁剪绘图
        canvas.fill();
        canvas.stroke();
        canvas.clip();//clip() 裁剪的作用就是遮罩，只显示裁剪区域的内容，裁剪区域外的隐藏
                      //clip() 只能遮罩该方法调用之后的绘图。
        canvas.fillStyle = '#b8eae8';
        canvas.fillRect(370,900,300,300);//该图被遮罩之外的绘图
        canvas.restore();


        //钟表盘
        this.timeDisc();

        //精度钟表盘
        this.timeTranslateDisc();

    },

    /*
    *绘制仪表盘(旋转)
    */
    timeTranslateDisc(){
        const canvas = this.canvas;
        const pi = Math.PI;

        //大表盘
        canvas.save();
        canvas.translate(800,1300);
        canvas.beginPath();
        canvas.lineWidth   = 15;
        canvas.strokeStyle = "#093a00";
        canvas.fillStyle   = '#0d4802';
        canvas.arc(0,0,150,0,pi * 2);
        canvas.stroke();
        canvas.fill();

        //刻度
        for(let i =0; i < 60; i++){
            canvas.save();
            canvas.beginPath();
            canvas.lineWidth   = i % 5 === 0 ? 3 : 1;
            canvas.strokeStyle = "#08abf9";
            canvas.rotate(pi / 180 * 6 * i);
            canvas.moveTo(120,0);
            canvas.lineTo(150,0);
            canvas.stroke();
            canvas.restore();
        }
        canvas.restore();

        canvas.save();
        canvas.translate(800,1300);

        //时针
        canvas.save();
        canvas.rotate(pi / 180 * 140)
        canvas.beginPath();
        canvas.lineCap     = 'round';
        canvas.lineWidth   = 6;
        canvas.strokeStyle = '#e4a885';
        canvas.moveTo(-10,-10);
        canvas.lineTo(60,60);
        canvas.stroke();
        canvas.restore();
        //分针
        canvas.save();
        canvas.rotate(pi / 180 * 30)
        canvas.beginPath();
        canvas.lineWidth   = 4;
        canvas.strokeStyle = '#fd792c';
        canvas.lineCap     = 'round';
        canvas.moveTo(-20,-20);
        canvas.lineTo(70,70);
        canvas.stroke();
        canvas.restore();
        //秒针
        canvas.save();
        canvas.beginPath();
        canvas.lineWidth   = 2;
        canvas.strokeStyle = '#fd3204';
        canvas.lineCap     = 'round';
        canvas.moveTo(-30,-30);
        canvas.lineTo(75,75);
        canvas.stroke();
        canvas.restore();
        //中心点
        canvas.save();
        canvas.beginPath();
        canvas.fillStyle = "#020a00";
        canvas.lineWidth = 6;
        canvas.arc(0,0,2,0,pi * 2)
        canvas.stroke();
        canvas.fill();
        canvas.restore();

    },

    /*
    *绘制仪表表盘
    */
    timeDisc(){
        const canvas = this.canvas;
        //大表盘
        canvas.save();
        canvas.beginPath();
        canvas.strokeStyle = '#1d0124';
        canvas.fillStyle   = '#0d2d03';
        canvas.lineWidth   = 15;
        canvas.arc(800,920,150,0,2 * Math.PI);
        canvas.stroke();
        canvas.fill();
        canvas.restore();
        //秒刻度
        let sstart = 0;
        let send   = 0;
        for(let i = 0;i < 60; i++){
            canvas.save();
            canvas.beginPath();
            canvas.strokeStyle = '#33bf07';
            canvas.lineWidth   = 30;
            sstart = Math.PI / 180 * i * 6;
            send   = sstart +  Math.PI / 180;
            canvas.arc(800,920,135,sstart,send);
            canvas.stroke();
            canvas.restore();
        }
        //时刻度
        let hstart = 0;
        let hsend   = 0;
        for(let i = 0;i < 12; i++){
            canvas.save();
            canvas.beginPath();
            canvas.strokeStyle = '#1500bb';
            canvas.lineWidth   = 35;
            hstart = Math.PI / 180 * i * 30;
            hsend   = hstart +  Math.PI / 180;
            canvas.arc(800,920,135,hstart,hsend);
            canvas.stroke();
            canvas.restore();
        } 
    },

    /*
    *绘制扇形
    */
   crectsector(list){
        let canvas = this.canvas;
        let sangle = 0;
        let eangle = 0;
        let r      = 120;
        list.forEach((item,i) => {
                eangle = 360 / 100 * item.angle + eangle;
                if(i == 0){
                    r = 130;
                }else{
                    r = 120;
                }
                //console.log(`sangle:${sangle}`,`eangle:${eangle}`);
                canvas.save();
                canvas.beginPath();
                canvas.strokeStyle = item.color;
                canvas.fillStyle   = item.color;
                canvas.moveTo(400,600);
                canvas.arc(400,600,r,Math.PI / 180 * sangle,Math.PI / 180 * eangle);
                canvas.closePath();
                canvas.stroke();
                canvas.fill();
                canvas.restore();
                sangle = eangle;
                if(i == (list.length - 1)){
                    canvas.save();
                    canvas.beginPath();
                    canvas.strokeStyle = '#fff';
                    canvas.fillStyle = '#fff';
                    canvas.arc(400,600,80,0,Math.PI * 2);
                    canvas.closePath();
                    canvas.stroke();
                    canvas.fill();
                    canvas.restore();
                }
            }
        )

       
   },

    /*
    *绘制网格
    */
    cretGrid(){
        let canvas = this.canvas;
        
        for(let i = 10;i <= 1500;i = i+10){
            //竖条
            canvas.beginPath();
            canvas.lineWidth   = 1;
            canvas.strokeStyle = '#eee';
            canvas.shadowBlur  = 0;
            canvas.moveTo(i,0);
            canvas.lineTo(i,1500);
            canvas.stroke();
            //横条
            canvas.beginPath();
            canvas.moveTo(0,i);
            canvas.lineTo(1500,i);
            canvas.stroke();
        }
    },

    /*
    *鼠标事件
    */
    mouseEvent(){
        let canvas = this.canvas;
        this.box.onmousedown = (e) => {
            this.init();
            canvas.fillStyle  = '#2440b3';
            canvas.shadowBlur = 0;
            canvas.fillText(`坐标：x:${e.offsetX},y:${e.offsetY}`,e.offsetX,e.offsetY);
        }
        // this.box.onmousemove = (e) => {
        //     this.init();
        //     this.canvas.fillText(`坐标：x:${e.offsetX},y:${e.offsetY}`,e.offsetX,e.offsetY);
        // }
    }
    
}

canvasBase.init();
canvasBase.mouseEvent();

