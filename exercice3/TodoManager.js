function addTodo() {

    event.preventDefault();

    const fnameValue = document.getElementById('fname').value;
    const contentValue = document.getElementById('fcontent').value;


    if (fnameValue && contentValue) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = fnameValue + ': ' + contentValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-danger btn-sm float-right';

        deleteButton.addEventListener('click', function() {
            this.parentElement.remove();
        });

        listItem.appendChild(deleteButton);

        document.getElementById('taskList').appendChild(listItem);
    }
}

