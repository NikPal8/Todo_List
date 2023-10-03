
const addBtn = document.querySelector('#addBtn');

const todoTaskInput = document.querySelector('#todoTaskInput');


const todoTask = document.querySelector('#task');


addBtn.addEventListener('click', function() {

    let newelement = document.createElement('li'); 
    let taskText = document.createElement('span');
    
    let taskTextValue = todoTask.value;
    
    taskText.textContent = taskTextValue;
    
    
    
    todoBody.append(newelement);
    newelement.append(taskText);
    
    

    
})

