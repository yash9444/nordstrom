var Email = JSON.parse(localStorage.getItem("userEmail"));
document.querySelector("#emailPara").innerText = Email;

document.querySelector("#signinBtn").addEventListener("click", loginFunction);
    
function loginFunction() {
    var password = document.querySelector("#inputPassword").value;
    var Email = JSON.parse(localStorage.getItem("userEmail"));
    
    var arr = JSON.parse(localStorage.getItem("userDataList"))
    var found = true;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].userEmail == Email && Number(arr[i].userPassword) == Number(password)) {
            alert("Login successful")
            break;
        }
        else {
            found = false
        }
    }
    if (found == false) {
        alert("Please enter valid credentials")
    }
}
