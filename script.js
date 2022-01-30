// MODEL
let todos = [];

// Create a toDo 
function createTodo(title) {
    const id = '' + new Date().getTime();

    todos.push({
        title: title,
        id: id
    });
}

// delete a todo
function removeTodo(idToDelete) {

    todos = todos.filter(function (todo) {
        if (todo.id === idToDelete) {
            return false;
        } else {
            return true;
        }
    });
    // confirm('are you sure you want to delete this todo?')
}

render();

// CONTROLLER
function addTodo() {
    const textbox = document.getElementById('text');
    const title = textbox.value;
    createTodo(title);

    render();
}

function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete);
    render();
}

function deleteTodoFromIcon(event) {
    const deleteButton = event.target.parentElement;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete);
    render();
}

// VIEW
function render() {
    document.getElementById('todolist').innerHTML = '';

    todos.forEach(function (todo) {
        const element = document.createElement('div');
        element.classList.add('list');
        element.innerText = todo.title;

        const container = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        container.appendChild(checkbox);
        const deleteButton = document.createElement('div');
        // deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        const icon = document.createElement('i');
        icon.classList.add('fas','fa-trash');
        deleteButton.appendChild(icon);
        
        deleteButton.style.display = 'inline';
        container.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteTodoFromIcon);
        // deleteButton.onclick = deleteTodo;
        // deleteButton.addEventListener('click', deleteTodo)
        deleteButton.id = todo.id;
        element.appendChild(container);

        const todoList = document.getElementById('todolist');
        todoList.appendChild(element);
    })
}



const textInput = document.getElementById('text');
const addButton = document.getElementById('plus');
const content = textInput.value;

addButton.addEventListener("click", () => {
    addTodo();
    render();
}) 