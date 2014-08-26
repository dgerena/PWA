(function(){
    console.log("started");
    var canvas=document.createElement("canvas");
    canvas.width=640;
    canvas.height=480;
    document.body.appendChild(canvas);
    var ctx=canvas.getContext("2d");
    ctx.fillStyle="#ccc";
    ctx.fillRect(0,0,640,480);
//    canvas.addEventListener("mousedown",onDraw);
//    canvas.addEventListener("mouseup",onStopDraw);
//    canvas.addEventListener("mouseout",onStopDraw);
    var mouse=utils.getMouse(canvas);
    var color="rgb(255,0,0)";
    var draw=false;
    //section for drawing with a mouse
//    ctx.beginPath();
//    function onDraw(e){
//        ctx.beginPath();
//        ctx.moveTo(mouse.x,mouse.y);
//        draw=true;
//    };
//    function onStopDraw(e){
//        draw=false;
//    };
//    (function update(){
//        console.log("running");
//        if(draw==true){
//        ctx.lineTo(mouse.x,mouse.y);
//        ctx.stroke();
//        };
//        requestAnimationFrame(update);
//    })();
    //ball section
    var ball=new Ball();
    ball.x=320;
    ball.y=240;
//    (function update(){
//        ctx.fillStyle="#ccc";
//        ctx.fillRect(0,0,640,480);
//        ctx.clearRect(0,0,canvas.width,canvas.height);
//        ball.x+=vx;
//        ball.y+=vy;
//        ball.update(ctx);
//        requestAnimationFrame(update);
//    })();
    //keyboard event listener
    window.addEventListener("keydown",onDown);
    window.addEventListener("keyup",onUp);
    var vx=0;
    var vy=0;
    function onDown(e){
        if(ball.x<640||ball.x>0){
            if(e.keyCode==39){
            vx+=5;//right
            };
            if(e.keyCode==37){
            vx-=5;//left
            };
        }else{
            vx-=-5;
        }
        if(ball.y<480||ball.y>0){
            if(e.keyCode==40){
                vy+=5;//down
            };
            if(e.keyCode==38){
                vy-=5;//up
            };
        };
        console.log(e.keyCode)

    };
    function onUp(e){

        if(e.keyCode==39){
            vx=0;
        };
        if(e.keyCode==37){
            vx=0;
        };
        if(e.keyCode==40){
            vy=0;
        };
        if(e.keyCode==38){
            vy=0;
        };
    };
    (function update(){
        ctx.fillStyle="#ccc";
        ctx.fillRect(0,0,640,480);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ball.x+=vx;
        ball.y+=vy;
        ball.update(ctx);
        requestAnimationFrame(update);
    })();

})();