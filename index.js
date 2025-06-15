var form = document.getElementById('add-todo')
var input = document.querySelector('input')
var list = document.getElementById('todo-list') 

form.onsubmit = function(e) {
    
    // Refresh field when list item is added
    e.preventDefault()

    // Add items to ul#todo-list
    var todoText = input.value.trim()
    if (todoText ==='') return // Do nothing for empty input

    var li = document.createElement('li')
    var button = document.createElement('button')
    button.textContent = todoText

    // Add strikethrough to clicked items
    button.onclick = function() {
        if (button.style.textDecoration === 'line-through') {
            li.remove()
        } else {
            button.style.textDecoration = 'line-through'
        }
    }

    li.appendChild(button)
    list.appendChild(li)
    input.value = ''

}