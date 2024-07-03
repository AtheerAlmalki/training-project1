window.addEventListener('load', () => {

    const form = document.querySelector("#New-form");
    const input = document.querySelector("#new-task");
    const list_el = document.querySelector("#tasks");

    const task_del_all = document.createElement('button');
    task_del_all.classList.add("Delete_all");
    task_del_all.innerText = 'Delete All';

    form.appendChild(task_del_all);


    form.addEventListener('submit', (e) => {

        e.preventDefault();
        const task = input.value;
        if (!task) {

            // alert 
            showAlert("please fill out the task");
            return;

        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');

        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'Trash.PNG';
        task_delete_el.appendChild(deleteIcon);

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        task_edit_el.addEventListener('click', (e) => {

            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerText = "Save";

                task_input_el.remove.textDecoration = "line-through";

            }
            else {

                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = "Edit";

            }

        })

        task_delete_el.addEventListener('click', function () {
            list_el.removeChild(task_el);
        })


        task_del_all.addEventListener("click", function () {

            list_el.remove();
        })



        task_content_el.addEventListener('dblclick', function () {
            task_content_el.style.textDecoration = "line-through";
        })


        function showAlert(message) {

            const alertContainer = document.createElement('div');
            alertContainer.classList.add('alert-container');
        
            const alertBox = document.createElement('div');
            alertBox.classList.add('alert-box');
        
            const alertMessage = document.createElement('p');
            alertMessage.textContent = message;
        
            const closeButton = document.createElement('button');
            closeButton.classList.add('close-button');
            closeButton.textContent = 'X';
        
            alertBox.appendChild(alertMessage);
            alertBox.appendChild(closeButton);
            alertContainer.appendChild(alertBox);
            
            document.body.appendChild(alertContainer);
           
            closeButton.addEventListener('click', () => {
                alertContainer.remove();
            });
        }

        input.value = "";


    })




})
