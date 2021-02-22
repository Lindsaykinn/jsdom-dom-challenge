document.addEventListener("DOMContentLoaded", function(){
 
})
const likes = document.getElementsByClassName('likes')[0];

const commentInput = document.getElementById('comment-input');
const comments = document.getElementById('comment-form')

let seconds = document.getElementById('counter');
let totalSeconds = 0;

let pause = document.getElementById('pause')

let counter = setInterval(setTime, 1000);  

function setTime(){
  totalSeconds++;
  seconds.innerHTML = totalSeconds % 60;
}

document.getElementById('heart').addEventListener('click', function(){
  const heartList = document.createElement('li');
  let heartTracker = document.createTextNode(`${seconds.innerText} has been liked.`)
  heartList.appendChild(heartTracker);
  likes.appendChild(heartList);

})

pause.addEventListener('click', function(){

  if(pause.innerText == 'pause'){
    clearInterval(counter)
    pause.innerText = 'resume'
    document.getElementById('plus').disabled = true
    document.getElementById('minus').disabled = true
    document.getElementById('heart').disabled = true
    document.getElementById('submit').disabled = true
  } else {
    setTime()
    counter = setInterval(setTime, 1000)
    pause.innerText = 'pause'
    document.getElementById('plus').disabled = false
    document.getElementById('minus').disabled = false
    document.getElementById('heart').disabled = false
    document.getElementById('submit').disabled = false
  }
})

function plus(){
  totalSeconds++;
  document.getElementById('counter').innerHTML = totalSeconds;
}

function minus(){
  totalSeconds--;
  document.getElementById('counter').innerHTML = totalSeconds;
}

document.getElementById('submit').addEventListener('click', function(){
  event.preventDefault();
  const newComment = document.createElement('p');
  let commentContent = document.createTextNode(`${commentInput.value}`);
  newComment.appendChild(commentContent);
  comments.appendChild(newComment);
  commentContent.value = ''

})


  