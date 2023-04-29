"use strict"
let trashElement = [];

const createTask = () => {
  const inputValue = document.getElementById("todo-input").value;
  const task = document.createTextNode(inputValue);
  const testLi = createNewElement(task);
  if (inputValue === '') {
    alert("You didn't write anything");
  } else {
    document.getElementById("myUL").appendChild(testLi);
  }
  document.getElementById("todo-input").value = "";
  
};

const getDate = () =>{
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
};


function addDeleteButtonClickHandler(deleteButton) {
  $(deleteButton)
    .off()
    .click(function () {
      const listItem = $(this).closest('li');
      const returnItem = $(this).closest('li').text();
      $("#modal-window").removeClass("hidden");
      $("#overlay").removeClass("hidden");

      $("#yes-btn")
        .off()
        .click(function () {
          $("#modal-window").addClass("hidden");
          $("#overlay").addClass("hidden");
          const button = listItem.find(".close");
          button.removeClass("remove-button").addClass("return-button");
          trashElement.push(listItem);
          listItem.remove();
        });

      $("#no-btn").click(function () {
        $("#modal-window").addClass("hidden");
        $("#overlay").addClass("hidden");
      });
    });
}

const returnButtonClick = () => {
    if (trashElement.length > 0 ) {
      const taskToReturn = trashElement.pop();
      const returnButton = $(taskToReturn).find('.return-button');
      addDeleteButtonClickHandler($(taskToReturn).find(".close"));
      $('#myUL').append(taskToReturn);
  }
  
}

const createNewElement = (task) => {
  const li = document.createElement("li");
  li.setAttribute("id", "liat")

  const taskSpan = document.createElement("SPAN");
  taskSpan.className = "textTask";
  taskSpan.appendChild(task);
  li.appendChild(taskSpan);
  //Data
  const dateSpan = document.createElement("SPAN");
  const date = getDate();
  const dateText = document.createTextNode(` (${date})`);
  dateSpan.className = "date";
  dateSpan.appendChild(dateText);
  li.appendChild(dateSpan);
    
  li.addEventListener('click', function() {
    const task = this.querySelector('.textTask');
    task.classList.toggle('checked');
    const date = this.querySelector('.date');
    date.classList.toggle('show');
  });
  //Delete
  const deleteButton = document.createElement("button");
  const txt = document.createTextNode(" X ");
  deleteButton.className = "close";
  deleteButton.appendChild(txt);
  addDeleteButtonClickHandler(deleteButton);
  li.appendChild(deleteButton);

  return li;
}