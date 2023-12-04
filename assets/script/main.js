let input = document.querySelector(".input input");
let add_task_btn = document.querySelector(".input button");
let id = 0;
// Add Task When click on the button Add
add_task_btn.addEventListener("click", () => {
  if (input.value != "") {
    document.querySelector("ul").innerHTML += `
    <li >
        <span data-left-id = ${id} class="left"> <i class="bi bi-circle"></i> </span>
        ${input.value}
        <span data-right-id = ${id}  class="right">
          <i class="bi bi-x-circle"></i>
        </span>
    </li>
    
    `;
    saveData();
    id++;
    input.value = "";
  } else {
    alert("You must add a true value");
  }

  // To complete tasks
  let complete_btns = document.querySelectorAll("ul li .left");
  complete_btns.forEach((element) => {
    element.addEventListener("click", () => {
      element.innerHTML = `<i class="bi bi-check-circle-fill"></i>`;
      element.parentElement.style.textDecoration = "line-through";
      saveData();
    });
  });

  // To Delete Task

  let delete_elements = document.querySelectorAll("ul li .right");
  delete_elements.forEach((element) => {
    element.addEventListener("click", () => {
      let ans = confirm("Are You Sure ?");
      if (ans == true) {
        element.parentElement.remove();
        saveData();
      }
    });
  });
});

function saveData() {
  let data = document.querySelector("ul");
  localStorage.setItem("data", data.innerHTML);
}

function showAllData() {
  let data = document.querySelector("ul");
  data.innerHTML = localStorage.getItem("data");
}

showAllData();
