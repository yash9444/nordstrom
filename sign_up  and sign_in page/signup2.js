var name = JSON.parse(localStorage.getItem("userName"));
console.log(name)
document.querySelector("#showfirstName").innerText = "Welcome," + " "+ name + "!"


document.querySelector("#next").addEventListener("click", messageFunction)

function messageFunction() {
    document.querySelector("#imgDiv2").innerHTML = ""
    document.querySelector("#EM1").innerHTML = ""
    document.querySelector("#EM2").innerHTML = ""
    document.querySelector("#imgDiv3").innerHTML = ""
    document.querySelector("#endDiv").innerHTML = ""

    var h3 = document.createElement("h3")
    h3.innerText = "Call us to update your Nordy Club account"
    h3.style.marginTop = "-100px"
    var p = document.createElement("p")
    p.innerText = "Looks like we might not have the right info for your account. Give us a call at 1.888.665.8779, and we'll sort it out for you."

    document.querySelector("#emptyDiv").append(h3, p);
}