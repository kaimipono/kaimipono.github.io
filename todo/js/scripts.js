const addTaskButton = document.getElementsByClassName('inputForm__btn')[0];

// Function handlerButton

const handlerButton = () => {
    let value = document.getElementsByClassName('inputForm__input')[0].value;
    if (!value) return;
    addItem(value);
    document.getElementsByClassName('inputForm__input')[0].value = '';
}

// Function addItem(str)

const addItem = (text) => {
    let listUncompleted = document.getElementById('uncompleted');
    let listItem = document.createElement('li');
    let itemText = document.createElement('div');
    itemText.classList.add('item__text');
    itemText.innerText = text;
    let itemButtons = document.createElement('div');
    itemButtons.classList.add('item__buttons');
    
    let completeButton = document.createElement('button');
    completeButton.classList.add('complete');
    completeButton.innerHTML = '<i class="fa fa-check"></i>';
    completeButton.addEventListener('click', completeTask);

    let removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.innerHTML = '<i class="fa fa-trash"></i>';
    removeButton.addEventListener('click', removeTask);
    
    itemButtons.appendChild(completeButton);
    itemButtons.appendChild(removeButton);

    listItem.appendChild(itemText);
    listItem.appendChild(itemButtons);
    listItem.classList.add('tasks__item');

    if (!listUncompleted.children) {
        listUncompleted.appendChild(listItem);
    } else {
        listUncompleted.insertBefore(listItem, listUncompleted.children[0]);
    }
}

// Adding a task

addTaskButton.addEventListener('click', handlerButton);

const completeTask = (event) => {
    let target = event.target.parentNode;
    let item = target.parentNode.parentNode;
    
    let refreshButton = document.createElement('button');
    refreshButton.classList.add('refresh');
    refreshButton.innerHTML = '<i class="fa fa-sync"></i>';
    refreshButton.addEventListener('click', refreshTask);

    target.parentNode.replaceChild(refreshButton, target);

    let listCompleted = document.getElementById('completed');
    if (!listCompleted.children) {
        listCompleted.appendChild(item);
    } else {
        listCompleted.insertBefore(item, listCompleted.children[0]);
    }
};

const removeTask = (event) => {
    let target = event.target.parentNode;
    let item = target.parentNode.parentNode;

    item.parentNode.removeChild(item);
};

const refreshTask = (event) => {
    let target = event.target.parentNode;
    let item = target.parentNode.parentNode;
    
    let completeButton = document.createElement('button');
    completeButton.classList.add('complete');
    completeButton.innerHTML = '<i class="fa fa-check"></i>';
    completeButton.addEventListener('click', completeTask);

    target.parentNode.replaceChild(completeButton, target);

    let listUncompleted = document.getElementById('uncompleted');
    if (!listUncompleted.children) {
        listUncompleted.appendChild(item);
    } else {
        listUncompleted.insertBefore(item, listUncompleted.children[0]);
    }
};
