let openPopup=()=>{
    let firstname=document.getElementById('firstname').value;
    if(firstname==''){
        document.getElementById('checkFirstname').innerHTML='Enter firstname'
    }
    let lastname=document.getElementById('lastname').value;
    if(lastname==''){
        document.getElementById('checkLastname').innerHTML='Enter lastname'
    }
    let email=document.getElementById('email').value;
    if(email==''){
        document.getElementById('checkMail').innerHTML='Enter email'
    }
    let phone=document.getElementById('phone').value;
    if(phone==''){
        document.getElementById('checkPhone').innerHTML='Enter phone'
    }
    if(checkFirstname(firstname) == true && this.checkLastname(lastname) == true 
        && this.checkMail(email)== true && this.checkPhone(phone)==true){
        document.getElementById("myPopup").style.display='block';
        document.getElementById("form-regis").style.opacity=0.5;
        document.getElementById("btn-regis").style.display = 'none';
    }
}

let checkFirstname=(value)=>{
    if(value!=''){
        document.getElementById('checkFirstname').innerHTML ='ok'

    }
    return true;
}

function checkLastname(value){
    if(value!=''){
        document.getElementById('checkLastname').innerHTML ='ok'

    }
    return true;
}

function checkMail(value){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){       
        document.getElementById('checkMail').innerHTML='ok'
        return true;
    }else{
        document.getElementById('checkMail').innerHTML='Example: Chinh198@gmail.com'
        return false;
    }
}

function checkPhone(value){
    if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)){       
        document.getElementById('checkPhone').innerHTML='ok'
        return true;
    }else{
        document.getElementById('checkPhone').innerHTML='Enter a 10 or 11-digit phone number'
        return false;
    }
}

