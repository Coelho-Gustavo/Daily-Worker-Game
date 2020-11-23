const score = document.querySelector('#score');
let i = 0;

i = localStorage.getItem('storageScore');
i++;

score.innerHTML = 'Score: ' + localStorage.getItem('storageScore');

function onClicker() {
    localStorage.setItem('storageScore', i++);
    score.innerHTML = 'Score: ' + localStorage.getItem('storageScore');
}