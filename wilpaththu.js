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
//if ((localStorage.getItem('wilpaththu') === undefined) || (localStorage.getItem('wilpaththu') === null)) {
store('wilpaththu.json', 'wilpaththu');
//}
let getwilpaththu = localStorage.getItem('wilpaththu');
let new_get_wilpaththu = JSON.parse(getwilpaththu);

let wilpaththu_section = document.querySelector("#wilpaththu");
let wilpaththu_content = `
        <div class="" style="display: flex; background-color: bisque; padding-top: -4px;">
                <div class="intro-section-left">
                    <p class="section-heading">${new_get_wilpaththu.title}</p>
                    <p class="section-description">${new_get_wilpaththu.content}</p>
                </div>
                <section class="intro-section-right">
                    <img  src="image/\kurulla.jpeg" alt="mainimage">
                </section>
            </div>
    `

wilpaththu_section.innerHTML = wilpaththu_content;