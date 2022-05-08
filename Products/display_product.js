
//Data from LOCAL STORAGE

var view=JSON.parse(localStorage.getItem("quickviewList"));
var cartproduct = JSON.parse(localStorage.getItem("cartList")) || [];
var wishproduct = JSON.parse(localStorage.getItem("wishList")) || [];

// Declaration

var main = document.querySelector("#main");
var backbtn=document.querySelector("#back");
back.addEventListener("click",backfun);

function backfun(){
    window.location.href="product.html";
}

var products = document.createElement("div");
products.setAttribute("id", "prd")

// Function to display Quickview item List

function display(data) {
    products.innerHTML = null;

    // console.log(data);
    data.forEach(function (ele) {
        var imgdiv=document.createElement("div");
        imgdiv.setAttribute("class","imgdiv");

        var img=document.createElement("img");
        img.src=ele.img;
        img.setAttribute("class","zoom");

        var info=document.createElement("div");
        info.setAttribute("id","prd2")

        var title=document.createElement("h2");
        title.innerText=ele.brand;

        var desc=document.createElement("h3");
        desc.innerText=ele.name;
        desc.setAttribute("class","pro-desc");

        var price=document.createElement("p");
        price.innerText="INR "+ele.price;
        price.setAttribute("class","price")

        var selectList2 = document.createElement("select");
        selectList2.setAttribute("class", "sk");
        selectList2.setAttribute("id", "size");
        var size = [
            { "name": "Choose Size", "value": "none" },
            { "name": "Small", "value": "small" },
            { "name": "Medium", "value": "medium" },
            { "name": "Large", "value": "large" },
            { "name": "X-Large", "value": "xlarge" },
        ];
        for (var i = 0; i <= size.length - 1; i++) {
            var option = document.createElement("option");
            option.value = size[i].value;
            option.text = size[i].name;
            selectList2.appendChild(option);
        }

        var selectList = document.createElement("select");
        selectList.setAttribute("class", "sk");
        selectList.setAttribute("id", "clr");
        var color = [
            { "name": "Choose Color", "value": "none" },
            { "name": "Red", "value": "red" },
            { "name": "Pink", "value": "pink" },
            { "name": "Blue", "value": "blue" },
            { "name": "White", "value": "white" },
        ];
        for (var i = 0; i <= color.length - 1; i++) {
            var option = document.createElement("option");
            option.value = color[i].value;
            option.text = color[i].name;
            selectList.appendChild(option);
        }

        var star = document.createElement("div");
        star.setAttribute("id", "stard");

        var stardivs1 = document.createElement("i");
        stardivs1.setAttribute("class", "ratingstar fas fa-star");
        var stardivs2 = document.createElement("i");
        stardivs2.setAttribute("class", "ratingstar fas fa-star");
        var stardivs3 = document.createElement("i");
        stardivs3.setAttribute("class", "ratingstar fas fa-star");
        var stardivs4 = document.createElement("i");
        stardivs4.setAttribute("class", "ratingstar far fa-star");
        var stardivs5 = document.createElement("i");
        stardivs5.setAttribute("class", "ratingstar far fa-star");

        var button = document.createElement("button");
        button.innerText = "Add to bag";
        button.setAttribute("id", "btn")

        button.addEventListener("click", function () {
            addtocart(ele);
        })

        var wish=document.createElement("div");
        wish.setAttribute("id","wishdiv");

        var i=document.createElement("i");
        i.setAttribute("class","fa fa-plus");

        var p=document.createElement("p");
        p.innerText = "Add to Wish List";
        p.style.cursor="pointer";

        p.addEventListener("click", function () {
            addtowish(ele);
        })

        star.append(stardivs1, stardivs2, stardivs3, stardivs3, stardivs4, stardivs5)
        wish.append(i,p)
        imgdiv.append(img);
        info.append(star,title, desc, price, selectList2, selectList, button,wish);

        products.append(imgdiv,info);
    });
}
main.append(products);

display(view);

var wishpro = document.createElement("div");
wishpro.setAttribute("id", "wishpd");
var head=document.createElement("h2");
head.innerHTML="WishList Items";

wishpro.append(head);

// Function to Display WishList

function displayQl(data) {
    wishpro.innerHTML=null;
    // console.log(data);
    data.forEach(function (ele) {

        var card=document.createElement("div");
        card.setAttribute("class","wishpc");

        var img=document.createElement("img");
        img.src=ele.img;
        img.setAttribute("class","pic");

        var pinfo=document.createElement("div");

        var title=document.createElement("h2");
        title.innerText=ele.brand;

        var price=document.createElement("p");
        price.innerText="INR "+ele.price;

        var button = document.createElement("button");
        button.innerText = "Add to bag";
        button.setAttribute("id", "wishbtn")

        button.addEventListener("click", function () {
            addtocart(ele);
        })

        pinfo.append(title, price, button);

        card.append(img,pinfo);
        wishpro.append(card);
    });
}
products.append(wishpro);
displayQl(wishproduct);

// Function for Cart

function addtocart(ele) {

    var exists = cartproduct.filter(function (element) {
        return ele.productID == element.id;
    })

    if (exists.length > 0) {
        alert("Already in Cart")
    }
    else {
            var item_image= ele.img;
            var item_name= ele.name;
            var item_brand= ele.brand;
            var item_price= +ele.price;
            var item_size=document.querySelector('#size').value;
            var item_color=document.querySelector('#clr').value;
            var item_id=ele.productID;
            var obj={
                image:item_image,
                name:item_name,
                brand:item_brand,
                price:item_price,
                size:item_size,
                color:item_color,
                id:item_id
            }
        cartproduct.push(obj);
        // console.log(cartproduct);
        localStorage.setItem("cartList", JSON.stringify(cartproduct));
        alert("Product added successfully");
        window.location.href="cart.html"
    }
}

// Function for WishList

function addtowish(ele) {
    var exists = wishproduct.filter(function (element) {
        return ele.productID == element.productID;
    })

    if (exists.length > 0) {
        alert("Already in wish List")
    }
    else {
        wishproduct.push(ele);
        // console.log(wishproduct);
        localStorage.setItem("wishList", JSON.stringify(wishproduct));
        alert("Product added successfully");
        window.location.reload();
    } 
}
var len=document.querySelector("#cart-len");
len.innerText=cartproduct.length;