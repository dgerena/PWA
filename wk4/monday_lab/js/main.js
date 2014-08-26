// Damasio Gerena
(function(){
    var canvas=document.createElement("canvas");
    var ctx=canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.width=800;
    canvas.height=600;
    var bgnd=new Image();
    bgnd.src="image/images.jpg";
    bgnd.addEventListener("load",imgLd,false);
    function imgLd(){
        console.log("loaded");
        ctx.drawImage(bgnd,0,0);
        drawing();
        function drawing(){
            var percentage
            var r= ~~(Math.random()*255);
            var g= ~~(Math.random()*255);
            var b= ~~(Math.random()*255);
            ctx.strokeStyle="rgb("+r+","+g+","+b+")";
            ctx.lineWidth=3;
            ctx.moveTo(2,0);
            ctx.lineTo(2,599);
            ctx.lineTo(800,599);
            ctx.lineTo(800,0);
            ctx.lineTo(2,2);
            ctx.stroke();
            ctx.beginPath();
            infoLine();
            lineHeights();
        };
        function lineHeights(){
            for(i=0;i<10;i++){
                ctx.strokeStyle="#999";
                ctx.lineWidth=1;
                ctx.moveTo(0,(i)*canvas.height/10);
                ctx.lineTo(800,(i)*canvas.height/10);
                ctx.stroke();
            };
        };
        function infoLine(){
            ctx.strokeStyle="rgb(20,200,20)";
            ctx.moveTo(2,599);
            ctx.lineTo(202,300);
            ctx.lineTo(402,540);
            ctx.lineTo(602,360);
            ctx.lineTo(800,420);
            ctx.stroke();
            ctx.beginPath();
        };

    };
})();

