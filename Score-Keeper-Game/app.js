const p1={
    Score:0,
    Button: document.querySelector('#p1Button'),
    Display: document.querySelector('#p1Display')
}
const p2={
    Score:0,
    Button: document.querySelector('#p2Button'),
    Display: document.querySelector('#p2Display')
}
const resetButton = document.querySelector('#Reset')
const winningScoreSelect = document.querySelector('#playto')

let winningScore = 5;
let isGameOver = false;


function updateScores(player,opponent){
    if(!isGameOver ){
        player.Score +=1;
        if(player.Score === winningScore){
            isGameOver = true;
            player.Display.classList.add('has-text-success');
            opponent.Display.classList.add('has-text-danger');
            player.Button.disabled=true;
            opponent.Button.disabled=true;
        }
        player.Display.textContent = player.Score;
    }
}
p1Button.addEventListener('click',function(){
    updateScores(p1,p2)
})


p2Button.addEventListener('click',function(){
    updateScores(p2,p1)
})

winningScoreSelect.addEventListener('change',function(){
    winningScore= parseInt(this.value);
    reset()
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver= false;
    for(let p of [p1,p2]){
        p.Score=0;
        p.Display.textContent = 0;
        p.Display.classList.remove('has-text-success','has-text-danger');
        p.Button.disabled=false;
    } 
}