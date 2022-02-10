// FUNCIÓN PARA AÑADIR NUEVAS TAREAS
function addElement() {
    // Crear elementos en el DOM
    let div = document.createElement('div');
    div.classList.add('group-task-item');
    let inputValue = document.getElementById('input').value;
    let task = `
    <div class="card-body">
        <div class="form-check">
            <input class="checkBox form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="testChecked()">
            <label class="task-item form-check-label" for="flexCheckDefault">
                ${inputValue}
            </label>
        </div>

        <div class="deleteBtn">
            <button type="button" class="btn btn-outline-danger deleteButton" onclick="deleteElement()">Delete</button>
        </div>
    </div>
    `

    div.innerHTML = task;
    document.getElementById('tasks').appendChild(div);
    document.getElementById('input').value = '';

}

// FUNCIÓN PARA MARCAR COMO COMPLETADAS LAS TAREAS
const testChecked = () => {
    let checkBox = document.getElementsByClassName('checkBox');
    let text = document.getElementsByClassName('task-item');

    // Al hacer click en el checkbox se cambia el estado del texto de la tarea y se tacha el texto de la tarea
    for (let tarea = 0; tarea < checkBox.length; tarea++) {
        if (checkBox[tarea].checked) {
            text[tarea].classList.add('checked');
        } else {
            text[tarea].classList.remove('checked');
        }
    }
}

// FUNCIÓN PARA ELIMINAR CADA TAREA
const deleteElement = () => {
    let task = document.getElementsByClassName('group-task-item');

    for (let i = 0; i < task.length; i++) {
        task[i].addEventListener('click', function () {
            this.remove();
        })}
}

// FUNCIÓN PARA ELIMINAR TODAS LAS TAREAS
const deleteAll = () => {
    //get all tasks with class group-task-item  
    let task = document.getElementsByClassName('group-task-item');

    while (task) {
        task[0].remove();
    }

}

const toggleClass = () => {
    // Al hacer click en alguna etiqueta "a" dentro de la clase "topMenu" se agrega la clase "selected" a la etiqueta "li" pero solo a la etiqueta seleccionada y a las demas se les quita la clase "selected"
    let topMenu = document.getElementsByClassName('topMenu')[0];
    let li = topMenu.getElementsByTagName('li');
    let a = topMenu.getElementsByTagName('a');

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function () {
            for (let j = 0; j < a.length; j++) {
                li[j].classList.remove('selected');
            }
            this.classList.add('selected');
        });
    }
}

// FUNCIÓN QUE MUESTRA TODAS LAS TAREAS
const showAll = () => {
    let checkbox = document.getElementsByClassName('checkBox');
    let task = document.getElementsByClassName('group-task-item');

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            task[i].style.display = 'block';
        } else {
            task[i].style.display = 'block';
        }
    }
}

// FUNCIÓN QUE MUESTRE LAS TAREAS COMPLETADAS
const showCompleted = () => {
    let checkbox = document.getElementsByClassName('checkBox');
    let task = document.getElementsByClassName('group-task-item');
    
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            task[i].style.display = 'block';
        } else {
            task[i].style.display = 'none';
        }
    }
}

// FUNCIÓN QUE MUESTRE LAS TAREAS NO COMPLETADAS
const showUncompleted = () => {
    let checkbox = document.getElementsByClassName('checkBox');
    let task = document.getElementsByClassName('group-task-item');

    for (let i = 0; i < checkbox.length; i ++){
        if(checkbox[i].checked){
            task[i].style.display = 'none';
        } else {
            task[i].style.display = 'block';
        }
    }
}