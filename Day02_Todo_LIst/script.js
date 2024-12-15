const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const row = document.querySelector('.row'); // Assuming this is the row element that contains the input box and button

function AddTask() {
  if (inputBox.value === '') {
    row.style.border = '3px solid red'; 
    alert('You Must write something!');
  } else {
    row.style.border = 'none'; 
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask()

inputBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { // Check if Enter key is pressed
      AddTask();
    }
  });