const character = document.querySelector('img');
const score = document.querySelector('.score');

let counter = 0;

character.addEventListener('click', function(){
 counter++;
 score.textContent = counter;
 
 character.animate([
   {transform: 'scale(1)'},
   {transform: 'scale(1.2)'},
 ],20);

 if(counter == 100 && counter < 200){
  character.src = './img/fire.png';
 }
 else if(counter >= 200){
 character.src = './img/heart.png';
 score.textContent = "You won!";
 }
})
