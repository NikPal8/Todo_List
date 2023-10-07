
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

  listNumber.textContent = 0 + num + ".";
    
    let taskTextValue = ` ${todoTask.value} `;
    

        taskText.textContent = taskTextValue; 
    
        
        const deleteItem = document.createElement('button');
        deleteItem.id = 'deleteBtn';
        deleteItem.textContent = "Delete";
        
        const editItem = document.createElement('button');
        // editItem.id = 'editBtn';
        editItem.textContent = "Edit";
        
        todoBody.append(newelement);
        
        newelement.append(listNumber);
        newelement.append(taskText);

        newelement.append(editItem);
        
        newelement.append(deleteItem);
    
        let checkInputBox = true; 

        editItem.addEventListener('click', function(event) {
          
          if(checkInputBox) {
            let currentText = editItem.previousElementSibling.textContent;
            const inputBox = document.createElement('input');
            inputBox.id = 'inputBox';
            editItem.before(inputBox);
            inputBox.value = currentText;
            inputBox.previousElementSibling.remove();
            checkInputBox = false;
            
          } else {
            let currentText = inputBox.value;
            let newTaskText = document.createElement('p');
            newTaskText.id = 'newTaskText';
            newTaskText.textContent = currentText;
            inputBox.remove();
            editItem.before(newTaskText);
            checkInputBox = true;
          }
        

        });
        
      

        deleteItem.addEventListener('click', function(){

         
          newelement.remove();
          num--;
          let allSpans = document.querySelectorAll('span');
          console.log(allSpans)
          let add1 = 0;
          for (let span of allSpans) {
            add1++;
            span.textContent = add1 + ".";
          }
          
           
          
          
        });
    
       
});



