import {addTask} from "./functions.js";


// objet qui représente une tâche
let taskModel ={
    title: '',
    description: '',
}

// tableau qui stockera nos taches
let taskList = [];


// recupère les élément dans le html et on les stocks
let form = document.getElementById('form');
let inputTitle = document.getElementById('title');
let texteAreaDescription = document.getElementById('description');

// depuis la variable form, je lui attache un évenement de type submit (soumission de formulaire)
form.addEventListener("submit", function (event) {
    // empeche le rechargement de la page
    event.preventDefault();

    let titleInputValue = inputTitle.value;
    let descriptionInputValue = texteAreaDescription.value;
    let newTask = {
        title: titleInputValue,
        description: texteAreaDescription.value,
    }


    // affiche les valeurs dans le navigateur
    taskList.push(newTask);

    addTask(newTask);
    console.log(newTask);

})

