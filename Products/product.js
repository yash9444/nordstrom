// Inbuilt Product Data stored in LOCALSTORAGE

var products_data = [
    {
        brand: "Pepe Jeans",
        name: "Women Mustard Yellow Solid Top",
        price: "599",
        productID: "ITBNP12",
        catagory: "Casual",
        rating: "3",
        img: "http://assets.myntassets.com/assets/images/10261927/2019/7/22/82f51a91-37a6-4ae1-a1ac-c134fd0ab2861563768770485-Belle-Fille-Women-Tops-5391563768768656-1.jpg ~ http://assets.myntassets.com/assets/images/10261927/2019/7/22/c7892a1c-32b7-45af-8651-b41b49f9216a1563768770461-Belle-Fille-Women-Tops-5391563768768656-2.jpg ~ http://assets.myntassets.com/assets/images/10261927/2019/7/22/db33c078-f577-4140-9265-172b8914641a1563768770430-Belle-Fille-Women-Tops-5391563768768656-3.jpg ~ http://assets.myntassets.com/assets/images/10261927/2019/7/22/1784a756-461b-4003-a918-d5eb924184931563768770409-Belle-Fille-Women-Tops-5391563768768656-4.jpg ~ http://assets.myntassets.com/assets/images/10261927/2019/7/22/09718dd5-89f6-45bb-a26a-7cdfbc0f9e961563768770378-Belle-Fille-Women-Tops-5391563768768656-5.jpg",
    },
    {
        brand: "Puma",
        name: "selena floral FileList",
        price: "2000",
        productID: "ITBNP1",
        catagory: "Casual",
        rating: "3",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0935_1_984da863.jpg?rnd=20200526195200",
    },
    {
        brand: "Gap",
        name: "balck bella",
        price: "1347",
        productID: "ITBNP2",
        catagory: "festive",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/4/146117301_1_7fcd0574.jpg?rnd=20200526195200",
    },
    {
        brand: "Puma",
        name: "chil pill supersoft palysuit",
        price: "799",
        productID: "ITBNP3",
        catagory: "party",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwsivc466_1_a6c9da54.jpg?rnd=20200526195200",
    },
    {
        brand: "Gap",
        name: "plus size womens",
        price: "2000",
        productID: "ITBNP4",
        catagory: "formal",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/ind158-pnk_1_3dc181e4.jpg?rnd=20200526195200",
    },
    {
        brand: "Bady Moo",
        name: "balck bella",
        price: "1347",
        productID: "ITBNP5",
        catagory: "workout",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/h/pheeta-pht0067_1_96256fbd.jpg?rnd=20200526195200",
    },
    {
        brand: "Pepe jeans",
        name: "plus size womens",
        price: "979",
        productID: "ITBNP6",
        catagory: "travel",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_228327501_1_857abfa6.jpg?rnd=20200526195200",
    },
    {
        brand: "Puma",
        name: "chil pill supersoft palysuit",
        price: "2000",
        productID: "ITBNP7",
        catagory: "sports",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0769_1_90caf4b3.jpg?rnd=20200526195200",
    },
    {
        brand: "Gap",
        name: "chil pill supersoft palysuit",
        price: "1347",
        productID: "ITBNP8",
        catagory: "Casual",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kazo-123019black_1_85f6e006.jpg?rnd=20200526195200",
    },
    {
        brand: "Bady Moo",
        name: "balck bella",
        price: "976",
        productID: "ITBNP9",
        catagory: "festive",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
    },
    {
        brand: "Gap",
        name: "woman cotton off white",
        price: "456",
        productID: "ITBNP10",
        catagory: "party",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/h/ahtufrgfe19523_1_e0416277.jpg?rnd=20200526195200"
    },
    {
        brand: "Bee bay",
        name: "woman cotton off white",
        price: "986",
        productID: "ITBNP11",
        catagory: "formal",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwkea595-1_dc090828.jpg?rnd=20200526195200",
    },
    {
        brand: "Kaniroot",
        name: "chill pill supersoft",
        price: "567",
        productID: "ITBNP12",
        catagory: "workout",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/3/238451501_1_43bf9c90.jpg?rnd=20200526195200",
    },
    {
        brand: "Bee bay",
        name: "Curev multi-Color",
        price: "765",
        productID: "ITBNP13",
        catagory: "travel",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
    },
    {
        brand: "Gap",
        name: "Mega striple",
        price: "9999",
        productID: "ITBNP14",
        catagory: "sports",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_119512401_1_e2d71be7.jpg?rnd=20200526195200",
    },
    {
        brand: "Puma",
        name: "balck bella",
        price: "1347",
        productID: "ITBNP15",
        catagory: "Casual",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/4/146117301_1_7fcd0574.jpg?rnd=20200526195200",
    },
    {
        brand: "Kaniroot",
        name: "chil pill supersoft palysuit",
        price: "799",
        productID: "ITBNP16",
        catagory: "festive",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwsivc466_1_a6c9da54.jpg?rnd=20200526195200",
    },
    {
        brand: "Puma",
        name: "plus size womens",
        price: "2000",
        productID: "ITBNP17",
        catagory: "party",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/ind158-pnk_1_3dc181e4.jpg?rnd=20200526195200",
    },
    {
        brand: "Gap",
        name: "balck bella",
        price: "1347",
        productID: "ITBNP18",
        catagory: "formal",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/h/pheeta-pht0067_1_96256fbd.jpg?rnd=20200526195200",
    },
    {
        brand: "Bee bay",
        name: "plus size womens",
        price: "979",
        productID: "ITBNP19",
        catagory: "workout",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_228327501_1_857abfa6.jpg?rnd=20200526195200",
    },
    {
        brand: "Puma",
        name: "chil pill supersoft palysuit",
        price: "2000",
        productID: "ITBNP20",
        catagory: "travel",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0769_1_90caf4b3.jpg?rnd=20200526195200",
    },
    {
        brand: "Puma",
        name: "chil pill supersoft palysuit",
        price: "1347",
        productID: "ITBNP21",
        catagory: "sport",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kazo-123019black_1_85f6e006.jpg?rnd=20200526195200",
    },
    {
        brand: "Gap",
        name: "balck bella",
        price: "976",
        productID: "ITBNP22",
        catagory: "Casual",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
    },
    {
        brand: "Puma",
        name: "woman cotton off white",
        price: "456",
        productID: "ITBNP23",
        catagory: "festive",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/h/ahtufrgfe19523_1_e0416277.jpg?rnd=20200526195200"
    },
    {
        brand: "Gap",
        name: "woman cotton off white",
        price: "986",
        productID: "ITBNP24",
        catagory: "party",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwkea595-1_dc090828.jpg?rnd=20200526195200",
    },
    {
        brand: "Kaniroot",
        name: "chill pill supersoft",
        price: "567",
        productID: "ITBNP25",
        catagory: "formal",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/3/238451501_1_43bf9c90.jpg?rnd=20200526195200",
    },
];

localStorage.setItem("disp",JSON.stringify(products_data));
// Data from LOCAL STORAGE 

var cartproduct = JSON.parse(localStorage.getItem("cartList")) || [];
var view=[];

// Declaration

var products = document.createElement("div");
products.setAttribute("id", "products")
var main = document.querySelector(".main");
var head = document.createElement("div");
head.setAttribute("id", "prodhead");

var itemscount = document.createElement("span");
itemscount.innerText = products_data.length + " " + "Items";


// Filter By Category

var array = ["All", "Casual", "festive", "party", "workout", "formal", "travel", "sports"];
var btndiv = document.createElement("div");
btndiv.setAttribute("id", "btndiv");

for (var i = 0; i < array.length; i++) {
    var a = document.createElement("button");
    a.setAttribute("id", "sortbtn");
    a.innerText = array[i];
    a.addEventListener("click", function (event) {
        // console.log(event.target.innerText);
        if (event.target.innerText == "All") {
            display(products_data);
            itemscount.innerText = products_data.length + " " + "Items";
            var filter = document.querySelector("#mySelect");
            filter.style.display = "block"
        } else {
            var filtered = products_data.filter(function (ele) {
                return ele.catagory == event.target.innerText;
            });

            display(filtered);
            var filter = document.querySelector("#mySelect");
            filter.style.display = "none"
            itemscount.innerText = filtered.length + " " + "Items";
        }
    })
    btndiv.append(a)
    main.append(btndiv)
}

// Sort values

var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
var sort = [
    { "type": "Featured Products", "value": "none" },
    { "type": "Sort by Price: Low to High", "value": "lth" },
    { "type": "Sort by Price: High to Low", "value": "htl" },
    { "type": "Sort by Name: Ascending", "value": "asc" },
    { "type": "Sort by Name: Descending", "value": "dsc" }
];
for (var i = 0; i <= sort.length - 1; i++) {
    var option = document.createElement("option");
    option.value = sort[i].value;
    option.text = sort[i].type;
    selectList.appendChild(option);
}


// Function to Display Products

function display(data) {
    products.innerHTML = null;

    data.forEach(function (ele,index) {

        let card = document.createElement("div");
        card.setAttribute("id", "card")

        var imgcard = document.createElement("div")
        imgcard.setAttribute("class", "pro-image");

        let img = document.createElement("img");
        img.src = ele.img;
        img.setAttribute("class", "pro-image")

        var info = document.createElement("div");
        info.setAttribute("class", "pro-info")

        var color = document.createElement("div");
        color.setAttribute("id", "colord");

        var colordivs1 = document.createElement("div");
        var colordivs2 = document.createElement("div");
        var colordivs3 = document.createElement("div");
        var colordivs4 = document.createElement("div");
        var colordivs5 = document.createElement("div");

        if (index%2==0) {
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
        }
        else {
            var star = document.createElement("div");
            star.setAttribute("id", "stard");

            var stardivs1 = document.createElement("i");
            stardivs1.setAttribute("class", "ratingstar fas fa-star");
            var stardivs2 = document.createElement("i");
            stardivs2.setAttribute("class", "ratingstar fas fa-star");
            var stardivs3 = document.createElement("i");
            stardivs3.setAttribute("class", "ratingstar fas fa-star");
            var stardivs4 = document.createElement("i");
            stardivs4.setAttribute("class", "ratingstar fas fa-star");
            var stardivs5 = document.createElement("i");
            stardivs5.setAttribute("class", "ratingstar far fa-star");
        }

        var title = document.createElement("h2");
        title.innerText = ele.brand;
        title.setAttribute("class", "pro-brand")

        
        var price = document.createElement("h2");
        price.innerText = "INR " + ele.price;
        price.setAttribute("class", "price")
        
        var desc = document.createElement("a");
        desc.innerText = ele.name;
        desc.setAttribute("class", "pro-desc");
        desc.addEventListener("click", function () {
            quickview(ele);
        })
        var button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.setAttribute("class", "card-btn")

        button.addEventListener("click", function () {
            addtocart(ele);
        })

        imgcard.append(img, button)

        info.append(title, desc, price);

        color.append(colordivs1, colordivs2, colordivs3, colordivs4, colordivs5);

        star.append(stardivs1, stardivs2, stardivs3, stardivs3, stardivs4, stardivs5)

        card.append(imgcard, color, info, star);

        products.append(card);
    });
}

head.append(itemscount, selectList)
main.append(head, products);
display(products_data);


// Function for Sorting

var filter = document.querySelector("#mySelect");
filter.addEventListener("change", function () {

    var selector = document.querySelector("#mySelect").value;
    if (selector == "asc") {
    products_data.sort(function (a, b) {
    var x = a.brand.toUpperCase();
    var y = b.brand.toUpperCase();
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
    return 0;
  });
  // console.log(products_data);
  display(products_data);
}
if (selector == "dsc") {
  products_data.sort(function (a, b) {
    var x = a.brand.toUpperCase();
    var y = b.brand.toUpperCase();
    if (x > y) {
      return -1;
    }
    if (x < y) {
      return 1;
    }
    return 0;
  });
  console.log(products_data);
  display(products_data);
}
    if (selector == "htl") {
        products_data.sort(function (a, b) {
            return b.price - a.price;
        });
        // console.log(products_data);
        display(products_data);
    }
    if (selector == "lth") {
        products_data.sort(function (a, b) {
            return a.price - b.price;
        });
        // console.log(products_data);
        display(products_data);
    }
})

function quickview(ele) {
        // console.log(ele);
        view.push(ele);
        localStorage.setItem("quickviewList", JSON.stringify(view));
        window.location.href="display_product.html";
}

function addtocart(ele) {

    var exists = cartproduct.filter(function (element) {
        return ele.productID == element.productID;
    })

    if (exists.length > 0) {
        alert("Product Exists")
    }
    else {
        // console.log(ele);
        cartproduct.push(ele);
        localStorage.setItem("cartList", JSON.stringify(cartproduct));
        alert("Product added successfully");
        window.location.reload();
    }
}

var len=document.querySelector("#cart-len");
len.innerText=cartproduct.length;