var resText='READY',prdText='PERIOD: -----',btnText='START HACK',isScanning=false;

function openM(){
    document.getElementById('mainModal').style.display='block';
    document.getElementById('miniContainer').style.display='none';
    render();
}
function closeM(){
    document.getElementById('mainModal').style.display='none';
    document.getElementById('miniContainer').style.display='block';
}
function render(){
    var c=document.getElementById('dynamicContent'),b=document.getElementById('mainBtn');
    if(!c||!b)return;
    var anim=isScanning?"style='color:var(--accent);animation:scanText 1s infinite;'":'';
    c.innerHTML="<div class='result-text' id='resDisp' "+anim+">"+resText+"</div><div class='period-badge' id='prdDisp'>"+prdText+"</div><div style='color:var(--green);font-size:8px;letter-spacing:1.5px;'>SERVER ACTIVE &#10003;</div>";
    b.innerText=btnText;
    b.disabled=isScanning;
}
function handleAction(){
    if(!isScanning)startHack();
}
function startHack(){
    if(isScanning)return;
    isScanning=true;
    resText='SCANNING...';
    btnText='PROCESSING...';
    render();
    var x=0;
    var scan=setInterval(function(){
        var r=Math.floor(Math.random()*10);
        var s=r<=4?'SMALL':'BIG';
        var cl=['#FFD600','#00E5FF','#FF4081','#00E676'];
        document.getElementById('resDisp').style.color=cl[Math.floor(Math.random()*4)];
        document.getElementById('resDisp').innerText=s+' '+r;
        x++;
        if(x>25){
            clearInterval(scan);
            var n=Math.floor(Math.random()*10);
            var sz=n<=4?'SMALL':'BIG';
            var p=Math.floor(Math.random()*90000)+10000;
            document.getElementById('resDisp').style.color='#FFE600';
            document.getElementById('resDisp').innerText=sz+' '+n;
            document.getElementById('prdDisp').innerText='PERIOD: '+p;
            isScanning=false;
            btnText='NEXT HACK';
            render();
        }
    },80);
}
render();
