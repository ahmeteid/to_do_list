// 1- Setting up variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg =document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// 2- focus on input field
window.onload = function() {
    theInput.focus();
}

// 3- Adding the task
theAddButton.onclick = function() {

    // if input is Empty
    if(theInput.value === "") {

        // Sweet Alert
        Swal.fire("Empty Value");

    } else {

        // Remove no taske message
        noTasksMsg.remove();

        // Create span Element
        let mainSpan = document.createElement("span");

        // Create delete Button
        let deleteElement = document.createElement("span");

        // Create the main span text
        let text = document.createTextNode(theInput.value);

        // Create the delete Button text
        let deleteText = document.createTextNode("Delete");

        // Add text to main span
        mainSpan.appendChild(text);
        // Add class to main span
        mainSpan.className = "task-box";

        // Add text to delete Button
        deleteElement.appendChild(deleteText);
        // add class to delete button
        deleteElement.className = "delete";

        // Add delete button to main span
        mainSpan.appendChild(deleteElement);

        // Add task to the Container
        tasksContainer.appendChild(mainSpan);

        // Empty the input
        theInput.value = "";

        // focus on field
        theInput.focus();

    }
    
}


