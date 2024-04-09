function store(link,key){
    fetch(link)
    .then(function (respose){
        if(!respose){
        return console.log("error")
        }else{
        return respose.json();
        }
    }).then(function (infor){
        const jsstr = JSON.stringify(infor);

        localStorage.setItem(key,jsstr);
    }).catch(function(error){
        console.log(`error is ${error}`);
    })
}

var animals = store('animals.json', 'animals');
var getanimal = localStorage.getItem('animals');
var new_get_animals=JSON.parse(getanimal);

// Function to populate form fields with existing data
function populateForm() {
    document.getElementById('animal-name-0').value = new_get_animals.animals[0].animal;
    document.getElementById('scientific-name-0').value = new_get_animals.animals[0].scientific_name;
    document.getElementById('description-0').value = new_get_animals.animals[0].description;
    document.getElementById('habitat-0').value = new_get_animals.animals[0].habitat;

    document.getElementById('animal-name-1').value = new_get_animals.animals[1].animal;
    document.getElementById('scientific-name-1').value = new_get_animals.animals[1].scientific_name;
    document.getElementById('description-1').value = new_get_animals.animals[1].description;
    document.getElementById('habitat-1').value = new_get_animals.animals[1].habitat;

    document.getElementById('animal-name-2').value = new_get_animals.animals[2].animal;
    document.getElementById('scientific-name-2').value = new_get_animals.animals[2].scientific_name;
    document.getElementById('description-2').value = new_get_animals.animals[2].description;
    document.getElementById('habitat-2').value = new_get_animals.animals[2].habitat;
}

// Function to save changes
function saveChanges() {
    new_get_animals.animals[index].animal = document.getElementById('animal-name-0').value;
    new_get_animals.animals[index].scientific_name = document.getElementById('scientific-name-0').value;
    new_get_animals.animals[index].description = document.getElementById('description-0').value;
    new_get_animals.animals[index].habitat = document.getElementById('habitat-0').value;
    console.log(animals); // You can replace this with code to send data to a server or perform any other action

    new_get_animals.animals[index].animal = document.getElementById('animal-name-1').value;
    new_get_animals.animals[index].scientific_name = document.getElementById('scientific-name-1').value;
    new_get_animals.animals[index].description = document.getElementById('description-1').value;
    new_get_animals.animals[index].habitat = document.getElementById('habitat-1').value;
    console.log(animals); // You can replace this with code to send data to a server or perform any other action

    new_get_animals.animals[index].animal = document.getElementById('animal-name-2').value;
    new_get_animals.animals[index].scientific_name = document.getElementById('scientific-name-2').value;
    new_get_animals.animals[index].description = document.getElementById('description-2').value;
    new_get_animals.animals[index].habitat = document.getElementById('habitat-2').value;
    console.log(animals); // You can replace this with code to send data to a server or perform any other action

    localStorage.setItem('animals', JSON.stringify(animals));
}

// Initially populate form with first animal data
populateForm();