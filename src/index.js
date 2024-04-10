document.addEventListener("DOMContentLoaded", () => {
  // your code here

let form = document.querySelector("form")
form.addEventListener("submit", () => {
  e.preventDefault();
  todo(e.target.new-task-description.value);
  form.reset();
})
 
});

function todo(dotask){
  let p = document.createElement("p")
  let btn = document.createElement("button");
  btn.textContent = "Delete";
  p.textContent = `${dotask}`;
  console.log(p);
  document.querySelector('#tasks').appendChild(p);
}
function deleting(e){
  e.target.parentNode.remove();
}