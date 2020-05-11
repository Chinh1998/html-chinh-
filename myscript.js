function login(){
    const user = document.getElementById("username").value
    const pass= document.getElementById("password").value
    const dataLogin = {
        username:user,
        password:pass
    };
    if(user == "" || pass == ""){
        alert("Nhập thông tin đăng nhập");
    }
    else{
            fetch('http://localhost:8080/api/user/login', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(dataLogin),
            })
            .then(response => response.json())
            .then(data => {
                if(data.meta.code==200){
                    alert(data.meta.message);
                    window.location = "manager.html";
                }
                else{
                    document.getElementById('err-lb').innerHTML = data.meta.message;
                }
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }
}

