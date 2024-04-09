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
//if((localStorage.getItem('introduction') === undefined) || (localStorage.getItem('introduction') === null)) {
store('introduction.json', 'introduction');
//}

let getintroduction = localStorage.getItem('introduction');
let new_get_introduction = JSON.parse(getintroduction);
console.log(new_get_introduction);

let udawalawa_section = document.querySelector("#udawalawe");
let udawalawe = `
    <p class="section-heading">${new_get_introduction.udawalawe.title}</p>
    <p class="section-description">${new_get_introduction.udawalawe.content}</p>
    `

let kuama_section = document.querySelector("#kumana");
let kuama = `
    <p class="section-heading">${new_get_introduction.kumana.title}</p>
    <p class="section-description">${new_get_introduction.kumana.content}</p>
    `


udawalawa_section.innerHTML = udawalawe;
kuama_section.innerHTML = kuama;