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


// document.getElementById("#button1").onlick = function () {
//     email = document.getElementById("#email").value;
//     var emails = new Array();
//     emails = localStorage.getItem("emails");
//     emails.push(email);
//     localStorage.setItem('emails', emails);
// }

//index page
//if ((localStorage.getItem('index') === undefined) || (localStorage.getItem('index') == null)) {
store('index.json', 'index');
//}


//console.log(index);
let getindex = localStorage.getItem('index');
let new_get_index = JSON.parse(getindex);
console.log(new_get_index);

const main2 = document.querySelector('#main2');
let main2_content = ` 
  <div class="intro-section-left">
  <h1 class="intro-section-left-headings">${new_get_index.main2.left}</h1>
    </div>
        <div class="intro-section-right">
        <p>
        ${new_get_index.main2.right}
        </p>                   
    </div>
  `

const section2 = document.querySelector("#section2");
let section2_content = `
  <h1 class="homepage-p2">${new_get_index.section2.title}</h1>
        </br></br>
            <p>
            ${new_get_index.section2.content.welcome}
            </br></br>
                <h4>${new_get_index.section2.content.sub_title_1}</h4>
                ${new_get_index.section2.content.sub_content_1}
            </br></br>
            <h4>${new_get_index.section2.content.sub_title_2}</h4>
            ${new_get_index.section2.content.sub_content_2}
            </br></br>   
            <h4>${new_get_index.section2.content.sub_title_3}</h4>
            ${new_get_index.section2.content.sub_content_3}
            </br></br>
            <h4>${new_get_index.section2.content.sub_title_4}</h4>
            ${new_get_index.section2.content.sub_content_4}
            </br></br>
            <h4>${new_get_index.section2.content.sub_title_5}</h4>
            ${new_get_index.section2.content.sub_content_5}
            </br></br> 
            <h4>${new_get_index.section2.content.sub_title_6}</h4>
            ${new_get_index.section2.content.sub_content_6}
            </br></br> 
            <h4>${new_get_index.section2.content.sub_title_7}</h4>
            ${new_get_index.section2.content.sub_content_7}
            </br></br> 
            <h4>${new_get_index.section2.content.sub_title_8}</h4>
            ${new_get_index.section2.content.sub_content_8}
            </br></br> 
            <h4>${new_get_index.section2.content.sub_title_9}</h4>
            ${new_get_index.section2.content.sub_content_9}
            </br></br>
            <h4>${new_get_index.section2.content.sub_title_10}</h4> 
            ${new_get_index.section2.content.sub_content_10}
            </br></br>
            ${new_get_index.section2.content.warning}
  `


main2.innerHTML = main2_content;
section2.innerHTML = section2_content;

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

function redirectToIndex() {
    // Redirect to index.html
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get username and password from the form
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Save username and password to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Redirect to index.html
        window.location.href = 'index.html';
    });
});
