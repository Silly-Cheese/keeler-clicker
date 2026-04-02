let state={points:0,pps:0,ppc:1,multiplier:1,prestige:0};

const chaosMessages=[
"Grandma Overdrive Activated",
"Kitty has seized control",
"Economic collapse imminent",
"Brandon event detected RUN",
"Keeler empire expanding rapidly"
];

function rand(arr){return arr[Math.floor(Math.random()*arr.length)];}

function updateUI(){
 document.getElementById('pointsDisplay').innerText=Math.floor(state.points);
 document.getElementById('ppsDisplay').innerText=state.pps;
 document.getElementById('ppcDisplay').innerText=state.ppc;
 document.getElementById('multiplierDisplay').innerText=state.multiplier+"x";
}

function floatText(x,y,val){
 const el=document.createElement('span');
 el.className='float-text';
 el.innerText='+'+val;
 el.style.left=x+'px';
 el.style.top=y+'px';
 document.body.appendChild(el);
 setTimeout(()=>el.remove(),1000);
}

function clickMain(e){
 let gain=state.ppc*state.multiplier;
 state.points+=gain;
 floatText(e.clientX,e.clientY,gain);
 updateUI();
}

setInterval(()=>{
 state.points+=state.pps*state.multiplier;
 updateUI();
},1000);

setInterval(()=>{
 document.getElementById('eventText').innerText=rand(chaosMessages);
},5000);

// SAVE SYSTEM
function save(){localStorage.setItem('keelerSave',JSON.stringify(state));}
function load(){let s=localStorage.getItem('keelerSave');if(s){state=JSON.parse(s);}updateUI();}

setInterval(save,5000);

document.getElementById('mainClickButton').onclick=clickMain;
document.getElementById('saveBtn').onclick=save;
document.getElementById('resetBtn').onclick=()=>{localStorage.clear();location.reload();};

load();
updateUI();