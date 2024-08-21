let addBtn = document.getElementById("btn");
let inputTxt = document.getElementById("txt");

showNotes();

addBtn.addEventListener("click", () => {
    let taskObj;
    let getLocalStorageItem = localStorage.getItem("notes");
    
    if(inputTxt.value.length != 0){
        if(getLocalStorageItem == null){
            taskObj = [];
        }else{
            taskObj = JSON.parse(getLocalStorageItem);
        }
        taskObj.unshift(inputTxt.value);
        localStorage.setItem("notes", JSON.stringify(taskObj));
    }
    showNotes();
})

// Function to display items
function showNotes(){
    let taskObj;
    let getLocalStorageItem = localStorage.getItem("notes");
    if(getLocalStorageItem == null){
        taskObj = [];
    }else{
        taskObj = JSON.parse(getLocalStorageItem);
    }
    
    let html = "";
    
    taskObj.forEach((element, index) => {
        html += `
            <div class="newList">
                <p class="para">${element}</p>
                <img src="img/x-square.svg" alt="close-icon" class="delete" id="${index}" />
            </div>
        `;
    });
    
    
    let lists = document.getElementById('lists');
    if(taskObj.length === 0){
        lists.innerHTML = "Nothing to Show!";
    }else{
        lists.innerHTML = html;
    }
    inputTxt.value = "";
    
    let deleteButtons = document.getElementsByClassName("delete");
    Array.from(deleteButtons).forEach((button) => {
        button.addEventListener("click", () => {
            deleteElem(event, button.id);
        });
    });
    
}


// Function to delete items
function deleteElem(event, index){
    let taskObj;
    let getLocalStorageItem = localStorage.getItem("notes");
    
    if(getLocalStorageItem == null){
        taskObj = [];
    }else{
        taskObj = JSON.parse(getLocalStorageItem);
    }
    
    taskObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(taskObj));
    
    showNotes();
}





























































































