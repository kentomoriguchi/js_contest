'use strict';
window.onload=function(){
  //コンストラクタ作成
  function Card(type,num){
    this.type=type;
    this.num=num;
    this.front;
    this.setFront=function(){
      this.front=`${this.type}${this.num<10?'0':''}${this.num}.gif`;
    };
  }
  
  //カード配列作成
  const cards=[];
  const types=['m','mm','w','ww'];
  for(let i=0;i<types.length;i++){
    for(let j=1;j<=10;j++){
      let card=new Card(types[i],j);
      card.setFront();
      cards.push(card);
    }
  }
  //テーブル作成
  const table=document.getElementById('table');
  for(let i=0;i<types.length;i++){
    let tr=document.createElement('tr');
    for(let j=0;j<10;j++){
      let td=document.createElement('td');
      let tempCard=cards[i*10+j];
      td.classList.add('card');
      td.style.backgroundImage=`url(images/${tempCard.front})`;
      //td.textContent=`${tempCard.suit}:${tempCard.num}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
