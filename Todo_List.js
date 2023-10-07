
const addBtn = document.querySelector('#addBtn');

const todoTaskInput = document.querySelector('#todoTaskInput');

const todoBody = document.querySelector('#todoBody');

const todoTask = document.querySelector('#task');

let num = 0;

addBtn.addEventListener('click', function() {
  
  
  num++;
 

  // Span text from input box(#task)
  let newelement = document.createElement('li'); 
  
  let listNumber = document.createElement('span');
  
 
  
  let taskText = document.createElement('p');

   
    
    let taskTextValue = ` ${listNumber.textContent = 0 + num } . ${todoTask.value}`;
    

        taskText.textContent = taskTextValue; 
    
        
        const deleteItem = document.createElement('button');
        deleteItem.id = 'deleteBtn';
        deleteItem.textContent = "Delete";
        
        
        
        todoBody.append(newelement);
        
        newelement.insertAdjacentElement('beforebegin', deleteItem); 
        newelement.append(taskText);
        
        newelement.append(deleteItem);
    
        
        
      

        deleteItem.addEventListener('click', function(){

          listNumber.remove();
          newelement.remove();
          
          
        
          
          
        });
    
       
});



