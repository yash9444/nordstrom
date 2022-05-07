var displayName  = JSON.parse(localStorage.getItem("userName"));

var loggedIn = JSON.parse(localStorage.getItem("is_loggedIn"));

if (loggedIn == "true" && displayName != null) {
    var userDataArr = JSON.parse(localStorage.getItem("userDataList"));
    for(let i = 0; i < userDataArr.length; i++) {
        if(userDataArr[i].userFirstName == displayName) {
            var lastname = userDataArr[i].userLastName
        }
    }
    document.querySelector("#displayHere").innerHTML = "Hi,"+ " " + displayName  
    document.querySelector("#displayHere").removeAttribute("href")
    document.querySelector("#fullName").innerHTML = displayName + " " + lastname
    document.querySelector("#sign").innerHTML = ""  
    document.querySelector("#changeHere").innerHTML = "Log Out";

    document.querySelector("#logoutDiv").addEventListener("click", logoutFunction);

    function logoutFunction() {
        localStorage.setItem("is_loggedIn", JSON.stringify("false"));
        localStorage.setItem("userName", JSON.stringify(""));
        localStorage.setItem("userEmail", JSON.stringify(""));
        alert("Log Out Successfully")
        location.reload()
    }
}
