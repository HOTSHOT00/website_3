function store(link, key) {
    fetch(link)
        .then(function (respose) {
            if (!respose) {
                return console.log("error")
            } else {
                return respose.json();
            }
        }).then(function (infor) {
            const jsstr = JSON.stringify(infor);

            localStorage.setItem(key, jsstr);
        }).catch(function (error) {
            console.log(`error is ${error}`);
        })
}
// animals page
//if ((localStorage.getItem('animals') === undefined) || (localStorage.getItem('animals') === null)) {
store('animals.json', 'animals');
//}
let getanimals = localStorage.getItem('animals');
let new_get_animals = JSON.parse(getanimals);

const animals_section = document.querySelector("#animals-section");
let animals_content = `
            <div class="animal-1-section">
                <div class="animal-description">
                    <h1 class="animal-description-title">${new_get_animals.animals[0].animal}<p class="italic">${new_get_animals.animals[0].scientific_name}</p> </h1>
                    <br/>
                    <p>
                       <h3 class="animal-description-dis">Discription:</h3>
                        <p class="animal-description-para">${new_get_animals.animals[0].description}</p>
                        <br><br>
                        <h3 class="animal-description-dis">Habitat:</h3>
                        <p class="animal-description-para">${new_get_animals.animals[0].habitat}</p>
                    </p>
                </div>
                <div class="animal-img">
                    <img  src="image/\sambaru deer3.jpg" alt="animal-img">
                </div>
            </div>
            <div class="animal-2-section">
                <div class="animal-img">
                    <img  src="image/\wilpaththu3.jpg" alt="animal-img">
                </div>
                <div class="animal-description">
                    <h1>
                        ${new_get_animals.animals[1].animal}<p class="italic">${new_get_animals.animals[1].scientific_name}</p> 
    
                    </h1>
                    <h3>Description:</h3>
                    <br/>
                    <p class="animal-description-para">
                        ${new_get_animals.animals[1].description} </p>
                    <h3>Habitat:</h3>
                    <p class="animal-description-para" >${new_get_animals.animals[1].habitat}</p>
                </div>
                
            </div>
            <div class="animal-3-section">
                <div class="animal-description">
                    <h1 class="animal-description-dis">
                    ${new_get_animals.animals[2].animal}<p class="italic">${new_get_animals.animals[2].scientific_name}</p>
                    </h1>
                    <h3>Description:</h3>
                    <br/>
                    <p  class="animal-description-para">
                        ${new_get_animals.animals[2].description}
                    </p>
                    <h3>Habitat:</h3>
                    <P class="animal-description-para">${new_get_animals.animals[2].habitat}</P>
    
                </div>
                <div class="animal-img">
                    <img  src="image/\\bakamuna.jpg" alt="animal-img">
                </div>
            </div>
    `

animals_section.innerHTML = animals_content;