let points=0,pps=0,ppc=1;

const characters=[
{name:"Judy Keeler",cost:10,pps:1,count:0},
{name:"Christopher Keeler",cost:50,pps:5,count:0},
{name:"Kitty",cost:100,pps:10,count:0},
{name:"Christopher Shelley",cost:250,pps:25,count:0},
{name:"Kaz",cost:500,pps:50,count:0},
{name:"Connor Spaulding",cost:1000,pps:100,count:0},
{name:"Ty Keeler",cost:2000,pps:200,count:0},
{name:"Olivia Keeler",cost:4000,pps:400,count:0},
{name:"Emma Keeler",cost:8000,pps:800,count:0},
{name:"Jamie Keeler",cost:16000,pps:1600,count:0},
{name:"Penny",cost:32000,pps:3200,count:0},
{name:"Jackson Connell",cost:64000,pps:6400,count:0},
{name:"Zayden Xiong",cost:128000,pps:12800,count:0},
{name:"Makenna Overholt",cost:256000,pps:25600,count:0},
{name:"Brandon Jarmin",cost:1,pps:-10000,count:0},
{name:"Orion Blamires",cost:512000,pps:51200,count:0},
{name:"Rachel Tidwell",cost:1024000,pps:102400,count:0},
{name:"Chloe Glass",cost:2048000,pps:204800,count:0},
{name:"Elena Anderson",cost:4096000,pps:409600,count:0}
];

function updateDisplay(){
 document.getElementById("pointsDisplay").innerText=Math.floor(points);
 document.getElementById("ppsDisplay").innerText=pps;
 document.getElementById("ppcDisplay").innerText=ppc;
}

function renderStore(){
 const store=document.getElementById("storeList");
 store.innerHTML="";
 characters.forEach((c,i)=>{
  const div=document.createElement("div");
  div.className="store-item";
  div.innerHTML=`${c.name} (${c.count}) - ${c.cost} pts <button onclick="buy(${i})">Buy</button>`;
  store.appendChild(div);
 });
}

function buy(i){
 let c=characters[i];
 if(points>=c.cost){
  points-=c.cost;
  c.count++;
  pps+=c.pps;
  c.cost=Math.floor(c.cost*1.5);
  updateDisplay();
  renderStore();
 }
}

setInterval(()=>{
 points+=pps;
 updateDisplay();
},1000);

document.getElementById("mainClickButton").onclick=(e)=>{
 points+=ppc;
 updateDisplay();
};

renderStore();
updateDisplay();