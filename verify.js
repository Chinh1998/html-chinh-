const verify=[];
function foCus(elmnt, content) {
    if (content.length == elmnt.maxLength) {
        next = elmnt.tabIndex
        console.log(elmnt.tabIndex);
        if (next < document.forms[1].elements.length) {
            document.forms[1].elements[next].focus()
                verify.push(content);
        }
    }
   if(verify.length>=6){
       document.getElementById("verify").disabled = false;
       document.getElementById("verify").style.opacity = '1.0'
   } 
}
