function login(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if(username == "" || password == ""){
        alert("Nhập thông tin đăng nhập");
    }
    else{
        window.location = "manager.html";
    }
}

