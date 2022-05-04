var Email = JSON.parse(localStorage.getItem("userEmail"));
document.querySelector("#emailPara").innerText = Email

document.querySelector("#userDataForm").addEventListener("submit", userDataSubmit)

var userDataArr = JSON.parse(localStorage.getItem("userDataList")) || []
function userDataSubmit() {
    event.preventDefault();

    var userDataObj = {
        userEmail: Email,
        userFirstName: userDataForm.firstName.value,
        userLastName: userDataForm.lastName.value,
        userPassword: userDataForm.password.value,
    };
    console.log(userDataForm.firstName.value)
    if(userDataObj["userFirstName"].length != 0 && userDataObj["userLastName"].length != 0 && userDataObj["userPassword"].length != 0) {
        userDataArr.push(userDataObj)
        console.log(userDataArr);
        localStorage.setItem("userName", JSON.stringify(userDataForm.firstName.value))
        localStorage.setItem("userDataList", JSON.stringify(userDataArr));
        window.location.href = "signup2.html";
    }
    else {
        alert("Fill required fields")
    }
}



