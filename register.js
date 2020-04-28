function check(){
    var fistname = document.getElementById("firstname").value;
    var checkFirstname = "[A-Za-z]+";
    if(checkFirstname.test(fistname)==true){
        document.getElementById("checkFirstName").innerHTML="true";
    }
    else{
        document.getElementById("checkFirstName").innerHTML="false";
    }
}