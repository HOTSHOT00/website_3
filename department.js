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
//if ((localStorage.getItem('department') === undefined) || (localStorage.getItem('department') === null)) {
store('department.json', 'department');
//}
let getdepartment = localStorage.getItem('department');
let new_get_department = JSON.parse(getdepartment);
console.log(getdepartment)

let department_section = document.querySelector("#department");
let department_content = `
        <center><h1><u>${new_get_department.topic}</u></h1></center>
        <br/><br/>
        <p class="department-description">
        ${new_get_department.content}
        </p>
    `

department_section.innerHTML = department_content;    