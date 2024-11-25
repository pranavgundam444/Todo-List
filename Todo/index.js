let ulEl = document.getElementById("con");
let btnEl = document.getElementById("btn");

const TodoList = [
    {
        text: "Learn HTML",
        id: 1
    },
    {
        text: "Learn CSS",
        id: 2
    },
    {
        text: "Learn JavaScript",
        id: 3
    }
]

let TodosCount = TodoList.length;

function onAddTodo() {
    let userInputElement = document.getElementById("userInput");
    let value = userInputElement.value;
    TodosCount = TodosCount + 1;
    let newTodo = {
        text: value,
        id: TodosCount
    }
    CreateAndAppendTodo(newTodo)
}

btnEl.onclick = function() {
    onAddTodo()
}


function onDeleteTodo(todoId) {
    let TodoElement = document.getElementById(todoId);
    ulEl.removeChild(TodoElement);
}



function CreateAndAppendTodo(todo) {

    let todoId = "todo" + todo.id

    
    let listEl = document.createElement("li");
    listEl.id = todoId
    listEl.classList.add("listEl");
    ulEl.appendChild(listEl)

    let inputEl = document.createElement("input");
    inputEl.type="checkbox";
    inputEl.id = todo.id;
    listEl.appendChild(inputEl)

    let divEl = document.createElement("div");
    divEl.classList.add("ddd")

    let labelEl = document.createElement("label");
    labelEl.textContent = todo.text;
    labelEl.setAttribute("for", todo.id);
    labelEl.classList.add("labelElMargin");
    listEl.appendChild(labelEl);

    let deleteIconContainer = document.createElement("div");
    listEl.classList.add("deleteIcon")
    listEl.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.onclick = function(){
        onDeleteTodo(todoId);
    }
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon")
    deleteIconContainer.appendChild(deleteIcon);
}


for (let todo of TodoList) {
    CreateAndAppendTodo(todo)
}