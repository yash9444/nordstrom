document.querySelector("#next").addEventListener("click", nextFunction)

function nextFunction () {
    var Email = document.querySelector("#email").value;
    
    if(Email.length !==  0){
        var arr = JSON.parse(localStorage.getItem("userDataList"))
        if(arr !== null) {
            for(var i = 0; i < arr.length; i++) {
                if(arr[i].userEmail == Email) {
                    window.location.href = "signin2.html"
                    // console.log("1")
                    break;
                }
                else {
                    localStorage.setItem("userEmail", JSON.stringify(Email))
                    window.location.href = "signup.html";
                    // console.log("2")
                }
            }
        }
        else {
            localStorage.setItem("userEmail", JSON.stringify(Email))
            window.location.href = "signup.html";
            // console.log("3")
        }
    }
    else {
        alert("Enter Your Email")
    }
}