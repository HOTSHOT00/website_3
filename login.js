username = document.getElementById("#username");
password = document.getElementById("#password");

button = document.getElementById("button");

  // index page
  let index=store('users.json','users');
  
  //console.log(index);
  let getindex=localStorage.getItem('index');
  let new_get_index=JSON.parse(getindex);
  console.log(new_get_index);

  
document.getElementById("#button").onclick=function() {
    // Looping through the array
    for (let i = 0; i < new_get_index.users; i++) {
        let _username = new_get_index.users[i].username
        let _password = new_get_index.users[i].password
        let _role = new_get_index.users[i].role
        if ((username == _username) && (password == _password)) {
            console.log(username, password)
            if (_role == "admin") {
                window.location.href = "http://127.0.0.1/dashboard.html";
            } else { 
                window.location.href = "http://127.0.0.1/index.html";
            }
        }
    }
}

