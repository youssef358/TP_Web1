const fnameValue = document.querySelector('#fname');
const contentValue = document.querySelector('#fcontent');
const selectButton = document.querySelector('#bouton');
const taskList = document.querySelector('#taskList');

selectButton.addEventListener('click', (e) => {
    addTodo();
})

function addTodo() {
    event.preventDefault();
    if (fnameValue.value && contentValue.value) {
        const listItem = document.createElement('li');

        const paragraph = document.createElement("p");
        paragraph.textContent = `${fnameValue.value}: ${contentValue.value}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-danger btn-sm float-right';

        deleteButton.addEventListener('click', function() {
            this.parentElement.remove();
        });

        listItem.appendChild(paragraph);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    }
}
