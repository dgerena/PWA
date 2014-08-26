console.log("YAY CANVASS");
(function(){
    var canvas=document.createElement("canvas");
    var ctx=canvas.getContext("2d")
    document.body.appendChild(canvas);
    canvas.width=550;
    canvas.height=400;
    var r= ~~(Math.random()*255);
    var g= ~~(Math.random()*255);
    var b= ~~(Math.random()*255);
    ctx.strokeStyle="rgb("+r+","+g+","+b+")";//"#F00";  //can also use rgb ...="rgb(0,0,0)";
    ctx.lineWidth=3;
    ctx.moveTo(275,0);
    ctx.lineTo(275,400);
    ctx.moveTo(0,200);
    ctx.lineTo(550,200);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle="#F00";
    ctx.fillStyle="#777";
    ctx.rect(255,180,40,40);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle="#0F0";
    ctx.arc(275,200,20,0,Math.PI*2);//for radians if degrees doesnt work you can use Math.pi*2;
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle="#000";
    ctx.font="24px Arial";
    ctx.fillText("Hello World",218,100);
    var qr=new Image();
    qr.src="data:image/jpeg;base64,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";
    qr.addEventListener("load",imgLd);
    function imgLd(e){
        console.log("img ldd");
        ctx.drawImage(qr,0,0,275,275);
    };
//    for(i=0;i<500;i++){
//        ctx.beginPath();
//        var r= ~~(Math.random()*255);
//        var g= ~~(Math.random()*255);
//        var b= ~~(Math.random()*255);
//    //    var width=~~(Math.random()*550);
//    //    var height=~~(Math.random()*400);
//        ctx.strokeStyle="rgb("+r+","+g+","+b+")";//"#F00";  //can also use rgb ...="rgb(0,0,0)";
//        ctx.lineWidth=3;
//        ctx.moveTo(~~(Math.random()*500),~~(Math.random()*400));
//        ctx.lineTo(~~(Math.random()*500),~~(Math.random()*400));
//        ctx.stroke();
//    };for random color and 500 random lines.
})()