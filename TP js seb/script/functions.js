export function addTask(newTask) {

    // on ajoute un nouvel élément li à chaque submit
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = "Title:     " + newTask.title + " " + "Description:      " + newTask.description;
    list.appendChild(li);

    // créer un bouton supprimer dépendant du li
    let del = document.createElement("button");
    del.textContent = "supprimer";
    del.setAttribute("id", "btnDel");
    li.appendChild(del);
    // clic permet de supprier la ligne créer
    del.addEventListener("click", function (){
        li.remove('li');
    })


    // créer un bouton modifier dépendant du li
    let edit = document.createElement("button");
    edit.textContent = "modifier";
    edit.setAttribute("id", "btnModify");
    li.appendChild(edit);
    // action au click sur le bouton modifier permettant de modifier notre tâche
    edit.addEventListener("click", function (){

        li.textContent = ""
        let modTitleInput = document.createElement("input");
        modTitleInput.value = newTask.title
        let modDescriptionInput = document.createElement("input");
        modDescriptionInput.value = newTask.description

        // création du bouton valider
        let valButton = document.createElement("button");
        valButton.textContent = "Valider";
        valButton.setAttribute("id", "btnValider");
        li.appendChild(modTitleInput);
        li.appendChild(modDescriptionInput);
        li.appendChild(valButton);
        // action au click sur le bouton valider permettant de valider la modification
        // et de remplacer le texte précedent
        valButton.addEventListener("click", function(){

            newTask.title = modTitleInput.value;
            newTask.description = modDescriptionInput.value;

            li.textContent = "Title:   " + newTask.title + " " + "Description:   " + newTask.description;

            modTitleInput.remove()
            modDescriptionInput.remove()
            valButton.remove()

            li.appendChild(del);
            li.appendChild(edit);
            console.log(newTask);

    })
})}
