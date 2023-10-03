
const addBtn = document.querySelector('#addBtn');
const todoTaskInput = document.querySelector('#todoTaskInput');


const task = document.querySelector('#task');

const todoBody = document.querySelector('#todoBody');




addBtn.addEventListener('click', function() {
    
    let newelement = document.createElement('li');

    newelement.textContent = ""
     
    todoBody.appendChild(newelement);

    
})

