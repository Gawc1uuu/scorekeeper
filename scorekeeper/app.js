const p1 = {
    display:document.querySelector('.p1Score'),
    button: document.querySelector('#p1Button'),
    result: 0
}
const p2 = {
    display:document.querySelector('.p2Score'),
    button: document.querySelector('#p2Button'),
    result: 0
}
 
const playTo =  document.querySelector('#playTo');
const resetButton = document.querySelector('#reset');

let endScore;
endScore=parseInt(playTo.value);

function updateScores(player,opponent){
    player.result +=1;
    player.display.innerText = player.result;

    if(player.result == endScore && player.result-opponent.result<2){
        endScore++;
    }

    if(player.result == endScore){
        player.button.disabled=true;
        opponent.button.disabled=true;
        player.display.style.color='green'
        opponent.display.style.color='red';
    }
}

playTo.addEventListener('change',function(){
    endScore=parseInt(playTo.value);
    reset();
})




p1.button.addEventListener('click',function(){
    updateScores(p1,p2);
})

p2.button.addEventListener('click',function(){
  updateScores(p2,p1);
})

resetButton.addEventListener('click',reset)

function reset(){
  for(let p of [p1,p2]){
    console.log(p);
    p.button.disabled=false;
    p.result=0;
    p.display.innerText = p.result;
    p.display.style.color='black';
  }
  endScore=parseInt(playTo.value);
}

