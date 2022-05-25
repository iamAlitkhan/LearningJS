let taskTextbox = document.getElementById("taskTextbox")
let addTaskBtn = document.getElementById("addTask")
let todoUL = document.getElementById("todoUL")

addTaskBtn.addEventListener("click", function () {

    let text = taskTextbox.value

    // create the div element 
    let taskItemDiv = document.createElement("div")

    // create checkbox 
    let chk = document.createElement("input")

    // set attribute to checkbox
    chk.setAttribute("type", "checkbox")

    // create label 
    let label = document.createElement("label")
    label.innerHTML = text

    // create button 
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("click", function () {
        taskItemDiv.parentNode.removeChild(taskItemDiv)
        console.log(this) // remove button 
        console.log("REMOVE BUTTON CLICKED")
    })

    // add checkbox to div 
    taskItemDiv.appendChild(chk)
    taskItemDiv.appendChild(label)
    taskItemDiv.appendChild(removeButton)

    // add div to ul 
    todoUL.appendChild(taskItemDiv)
})