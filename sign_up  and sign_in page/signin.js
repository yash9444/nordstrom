document.querySelector("#next").addEventListener("click", nextFunction)

function nextFunction () {
    var Email = document.querySelector("#email").value;
    
    if(Email.length !==  0){
        var arr = JSON.parse(localStorage.getItem("userDataList"))

        for(var i = 0; i < arr.length; i++) {
            if(arr[i].userEmail == Email) {
                window.location.href = "signin2.html"
            }
            else {
                localStorage.setItem("userEmail", JSON.stringify(Email))
                window.location.href = "signup.html";
            }
        }
        
    }
    else {
        alert("Enter Your Email")
    }
}