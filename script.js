let inputs = document.getElementById("inputbx");
let list = document.getElementById("todo-list");
console.log(inputs.value)
function add() {
    if (inputs.value) {
        let newELement = document.createElement("ul");
        newELement.innerHTML = `${inputs.value}<i class="fa fa-times" style="font-size:24px"></i>`
        list.appendChild(newELement);
        inputs.value = "";
        newELement.querySelector("i").addEventListener("click", removeElement);
        function removeElement() {
            newELement.remove()

        }
    } else {
        alert("plz Enter your taxk");
    }
}