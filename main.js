// 1- Setting up variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
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
        
        let noTasksMsg =document.querySelector(".no-tasks-message");

        // Check if span with no tasks message is exist
        if(document.body.contains(document.querySelector(".no-tasks-message"))) {

            // Remove no taske message
            noTasksMsg.remove();
        }


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

        // Calculate Tasks
        calculateTasks();

    }
    
}

document.addEventListener("click", function(event) {

    // Delete Task
    if(event.target.className == "delete") {
        // Remove Current task
        event.target.parentNode.remove();

        // Check number of tasks inside the container
        if(tasksContainer.childElementCount == 0) {
            createNoTasks();
        }
        // To Best Performance// Calculate Tasks
        calculateTasks();
    }

    // Finish Task
    if(event.target.classList.contains("task-box")) {
        //Toggle Class finish
        event.target.classList.toggle("finished");
        // To Best Performance// Calculate Tasks
        calculateTasks();
    }

    // // Calculate Tasks
    // calculateTasks();

});

// Function to create no tasks message
function createNoTasks() {
    // Create message span element
    let msgSpan = document.createElement("span");

    // Create the text message
    let msgText = document.createTextNode("No Tasks To Show");

    // Add text to message span element
    msgSpan.appendChild(msgText);

    // Add Class to message span
    msgSpan.className = "no-tasks-message";

    // Append the message span element to the tasks container
    tasksContainer.appendChild(msgSpan);
}

// Function To calculate tasks
function calculateTasks() {

    // Calculate all Tasks
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;

    // Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}