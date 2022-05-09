var data = JSON.parse(localStorage.getItem("finalPay"))
   
    data.forEach(function(el){

        var product = document.createElement("div")
        product.setAttribute("id","Product")
 
        var img = document.createElement("img")
        img.setAttribute("id","proimg")
        img.setAttribute("src",el.image);

        var itemdiv = document.createElement("div")
        itemdiv.setAttribute("id","text")
        var proName = document.createElement("p")
        proName.innerText = el.name

        var catagory = document.createElement("p")
        catagory.innerText = "Brand:"+el.brand

        var size = document.createElement("p")
        size.innerText = "Size:" + el.size

        var qty = document.querySelector("p")
        qty.innerText = "Quantity" + el.qtn2

        var price = document.createElement("p")
        price.innerText = "Price:" + el.price

        itemdiv.append(proName,catagory,size,qty,price)

        product.append(img,itemdiv);
        document.querySelector("#price").append(product);
    })

    var Prop = JSON.parse(localStorage.getItem("Total"))
    document.querySelector("#pp").append(Prop)

    var Totalp = Number(Prop) + 70 + 60
    document.querySelector("#tt").append(Totalp)



    document.querySelector("#continue").addEventListener("click",func1)

    var arr=[];

    function func1(){
        var mail = form.mail.value
        var fname = form.fname.value
         var lname  = form.lname.value
         var add = form.add.value
         var pcode = form.pcode.value
         var region = form.region.value
         var phone = form.phone.value
        
        if(mail==="")
        {
            alert("Enter mail");
        }
        else if(fname=="")
        {
            alert("Enter First Name")
        }
        else if(lname=="")
        {
            alert("Enter Last Name")
        }
        else if(add=="")
        {
            alert("Enter Address")
        }
        else if(pcode=="")
        {
            alert("Enter Pincode")
        }
        else if(region=="")
        {
            alert("Enter Region")
        }
        else if(phone=="")
        {
            alert("Enter Phone")
        }
        else
        {
            window.location.href = "payment.html"
        }
    }

var cartproduct = JSON.parse(localStorage.getItem("cartList")) || [];
var len=document.querySelector("#cart-len");
len.innerText=cartproduct.length;
