const etiquetasEl=document.querySelectorAll('.etiqueta');
const wrongLetters=[];
const correctLetters=[];
const word=['HANGMAN','JAVASCRIPT','NODEJS','REACT','VUEJS'];
const wordToGuess=word[Math.floor(Math.random()*word.length)];
const wordLength=wordToGuess.length;
const maxWrongGuesses=6;
const showNotification=document.querySelector('#notification');
const containerGameEl=document.querySelector('#container-game');
function displayWord(){
    const containerWordEl=document.createElement('div');
    containerWordEl.innerHTML=`
        ${wordToGuess.split('').map(letter=>`
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}  
            </span>
        `).join('')}
    `;
    containerGameEl.appendChild(containerWordEl);
}
displayWord();
function notification(){
    showNotification.classList.add('show');
    setTimeout(()=>showNotification.classList.remove('show'),2000);
};
function updateWrong(){
    
};
window.addEventListener('click',e=>{
    notification();
});
window.addEventListener('keydown',e=>{
    const letter=e.key;
    console.log(letter,wordToGuess);
    if(
        e.key==="a"||
        e.key==="b"||
        e.key==="c"||
        e.key==="d"||
        e.key==="e"||
        e.key==="f"||
        e.key==="g"||
        e.key==="h"||
        e.key==="i"||
        e.key==="j"||
        e.key==="k"||
        e.key==="l"||
        e.key==="m"||
        e.key==="n"||
        e.key==="o"||
        e.key==="p"||
        e.key==="q"||
        e.key==="r"||
        e.key==="s"||
        e.key==="t"||
        e.key==="u"||
        e.key==="v"||
        e.key==="w"||
        e.key==="x"||
        e.key==="y"||
        e.key==="z"||
        e.key==="A"||
        e.key==="B"||
        e.key==="C"||
        e.key==="D"||
        e.key==="E"||
        e.key==="F"||
        e.key==="G"||
        e.key==="H"||
        e.key==="I"||
        e.key==="J"||
        e.key==="K"||
        e.key==="L"||
        e.key==="M"||
        e.key==="N"||
        e.key==="O"||
        e.key==="P"||
        e.key==="Q"||
        e.key==="R"||
        e.key==="S"||
        e.key==="T"||
        e.key==="U"||
        e.key==="V"||
        e.key==="W"||
        e.key==="X"||
        e.key==="Y"||
        e.key==="Z"
    ){
        if(wordToGuess.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                showNotification()
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrong();
            }else{
                showNotification();
            }
        }
    }
});