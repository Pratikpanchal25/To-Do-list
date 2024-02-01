let list = document.querySelector(".list");
const form  = document.querySelector("form")

let lists = document.querySelector(".lists");
const submit = document.querySelector(".btn");

const remove = document.querySelector(".delete");

form.addEventListener("submit", function (e) {
  e.preventDefault()
  let input = document.getElementById("input");

  if (!input.value) {
    alert("Please Enter The task");
    return;
  }

  const list = document.createElement("div");
  list.classList.add("list");
  lists.appendChild(list);

  const input_el = document.createElement("input");
  input_el.value = input.value;
  input_el.setAttribute("readonly", "readonly");
  input_el.classList.add("inp-2");

  list.appendChild(input_el);

  const edit_el = document.createElement("button");
  edit_el.innerText = "Edit";
  edit_el.classList.add("edit");

  const delete_el = document.createElement("button");
  delete_el.innerText = "Delete";
  delete_el.classList.add("delete");

  list.appendChild(edit_el);
  list.appendChild(delete_el);

  input.value = "";
  input.focus()

  delete_el.addEventListener("click", () => {
    list.remove();
  });

  edit_el.addEventListener("click", () => {

    if (edit_el.innerText === "Save") {
      input_el.setAttribute("readonly", "readonly");
      edit_el.innerText = "Edit";
      input_el.style.color = "white"
      input_el.style.fontStyle = "normal"
    }
     else 
    {
      input_el.removeAttribute("readonly", "readonly");
      edit_el.innerText = "Save";
      input_el.style.color = "#D4ADFC"
      input_el.style.fontStyle = "italic"
      input_el.focus();
    }
  });
});
