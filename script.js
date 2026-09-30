
const board=document.getElementById('board');
const pieces=[
['♜','♞','♝','♛','♚','♝','♞','♜'],
['♟','♟','♟','♟','♟','♟','♟','♟'],
['','','','','','','',''],
['','','','','','','',''],
['','','','','','','',''],
['','','','','','','',''],
['♙','♙','♙','♙','♙','♙','♙','♙'],
['♖','♘','♗','♕','♔','♗','♘','♖']
];
let selected=null;
function draw(){
board.innerHTML='';
for(let r=0;r<8;r++){
for(let c=0;c<8;c++){
const d=document.createElement('div');
d.className='square '+((r+c)%2?'dark':'light');
if(selected&&selected.r===r&&selected.c===c)d.classList.add('selected');
d.textContent=pieces[r][c];
d.onclick=()=>clickSq(r,c);
board.appendChild(d);
}
}
}
function clickSq(r,c){
if(!selected && pieces[r][c]){selected={r,c};draw();return;}
if(selected){
pieces[r][c]=pieces[selected.r][selected.c];
pieces[selected.r][selected.c]='';
selected=null;
draw();
}
}
draw();
