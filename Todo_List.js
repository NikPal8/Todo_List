
const addBtn = document.querySelector('#addBtn');

const todoTaskInput = document.querySelector('#todoTaskInput');


const todoTask = document.querySelector('#task');

let num = 0;
addBtn.addEventListener('click', function() {

  num = num + 1;
        
    // Span text from input box(#task)
        let newelement = document.createElement('li'); 
        let listNumber = document.createElement('span');
        

        let taskText = document.createElement('p');
        let taskTextValue = ` ${listNumber.textContent = 0 + num} . ${todoTask.value}`;
        taskText.textContent = taskTextValue; 
        // Delete Btn
        const deleteItem = document.createElement('button');
        deleteItem.style.color = 'red';
        deleteItem.textContent = "Delete";
        
        
        
        todoBody.append(newelement);
        
        newelement.insertAdjacentElement('beforebegin', deleteItem); 
        newelement.append(taskText);
        
        newelement.append(deleteItem);
    
    
    

    
});




// deletebtn.addEventListener('click', function(){

// });