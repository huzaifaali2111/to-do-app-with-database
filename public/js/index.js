var modal = document.getElementById("myModal");
var btn = document.querySelectorAll(".editbtn");
let edit_form = document.getElementById("edit_form");
var span = document.getElementsByClassName("close")[0];

btn.forEach(btn => {
    btn.onclick = function (e) {
        modal.style.display = "block";
        const { id, task, priority, date } = e.target.dataset;
        edit_form.action = `/update-todo/${id}`;
        document.getElementById('edit-task-input').value = task;
        const prioritySelect = document.getElementById('edit-priority-select')
        prioritySelect.value = priority;
        document.getElementById('edit-date-input').value = date;
    }
});
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
