const btn = document.querySelector('.form-todo .btn');
console.log(btn)
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('.form-todo input');
    const todo = input.value;
    input.value = '';
    const ul = document.querySelector('.todo-list');
    ul.innerHTML+=`<li>
    <span class="text">${todo}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
  </li>`

    // console.log(todo)
})
const todoList = document.querySelector(".todo-list");
todoList.addEventListener("click", (e) => {
    // check if user clicked on done button
    if (e.target.classList.contains("remove")) {
      const targetedLi = e.target.parentNode.parentNode;
      targetedLi.remove();
    }
    if (e.target.classList.contains("done")) {
      const liSpan = e.target.parentNode.previousElementSibling;
      liSpan.style.textDecoration = "line-through";
    }
  });
