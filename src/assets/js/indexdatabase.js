import {
  onGetTasks,
  saveTask,
  deleteTask,
  getTask,
  updateTask,
  getTasks,
} from "./database.js";

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getTasks();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });

  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();

      tasksContainer.innerHTML += `
   
      <div  class="main-menu">
      <div style="width: fit-content; height: fit-content;" class="option">
      <img src="./assets/images/verificar.ico" alt="">
    <p>${task.title}</p>
    <button style="cursor: pointer;
    border: 1px solid #cccccc;
    border-radius: 15px;
    padding: 5px 5px;
    margin: 2px;
    background: #a51111;
    display: inline-block;
    color: #ffffff;
    width: 90%;" class="btn btn-secondary btn-delete" data-id="${doc.id}">🗑 Eliminar</button>
    <button style="cursor: pointer;
    border: 1px solid #cccccc;
    border-radius: 15px;
    padding: 5px 5px;
    margin: 2px;
    background: #268b33;
    display: inline-block;
    color: #ffffff;
    width: 90%;" class="btn btn-primary btn-edit" data-id="${doc.id}">🖉 Descargar</button>
    <p style="display: none;>${task.description}</p>  
  </div>
     </div>
    `;
    });

    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await deleteTask(dataset.id);
          
        } catch (error) {
          console.log(error);
        }
      })
    );

    


    const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();
          taskForm["task-title"].value = task.title;
          taskForm["task-description"].value = task.description;


          let url = document.getElementById("task-description").value;
          console.log(url);
          window.open(url);
          
          editStatus = true;
          id = doc.id;
          taskForm["btn-task-form"].innerText = "Update";
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});


function abrir(){
  let url = document.getElementById("url").value;
  console.log(url);
  window.open("http://" + url, '_blank');}






taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = taskForm["task-title"];
  const description = taskForm["task-description"];

  try {
    if (!editStatus) {
      await saveTask(title.value, description.value);
    } else {
      await updateTask(id, {
        title: title.value,
        description: description.value,
      });

      editStatus = false;
      id = "";
      taskForm["btn-task-form"].innerText = "Save";
    }

    taskForm.reset();
    title.focus();
  } catch (error) {
    console.log(error);
  }
});












  