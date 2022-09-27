document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const ul = document.querySelector("ul");
    const liTest = document.getElementById("test");

    document.addEventListener("click", function (event) {
        console.log("document", event.target, event.currentTarget);
    });

    ul.addEventListener("click", function (event) {
        console.log("ul", event.target, event.currentTarget);
    });

    liTest.addEventListener("click", function (event) {
        console.log("li", event.target, event.currentTarget);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const task = form.elements.task.value;

        const newTask = document.createElement("li");
        newTask.innerText = task;

        ul.appendChild(newTask);
    });

    ul.addEventListener("click", function (event) {
        if (event.target.matches("li")) event.target.remove();
    });
});
const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
};
const genNew = document.querySelector("submit");
genNew.addEventListener("click", setBg);
setBg();
