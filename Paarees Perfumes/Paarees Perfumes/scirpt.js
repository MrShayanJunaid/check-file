let TomFord = [
    {
        img: "images/TF2.jpg",

    },
    {
        img: "images/TF3.jpg",

    },
    {
        img: "images/TF6.jpg",

    },
    {
        img: "images/TF8.jpg",

    },

]
function renderProducts(getArray) {
    

    let imgContainer = document.querySelector(".img_container")
    imgContainer.innerHTML = " "

    for (let index = 0; index < getArray.length; index++) {
        console.log(getArray[index])
        imgContainer.innerHTML += `
        <img class="allimgs" src=${getArray[index].img} width="350" height="400">
        
        `

    }
}
renderProducts(TomFord)
let Dior = [
    {
        img: "images/dior9.jpg",

    },
    {
        img: "images/dior1.jpg",

    },
    {
        img: "images/dior3.jpg",

    },
    {
        img: "images/dior4.jpg",

    },

]

// let imgContainer1 = document.querySelector(".img_container")
// for (let index = 0; index < Dior.length; index++) {
//     imgContainer1.innerHTML += `
//     <img class="allimgs" src=${Dior[index].img} width="350" height="400">

//     ` 

// }
let CalvinKlein = [
    {
        img: "images/ck1.webp",

    },
    {
        img: "images/ck2.webp",

    },
    {
        img: "images/ck3.webp",

    },
    {
        img: "images/ck4.webp",

    },

]

// let imgContainer2 = document.querySelector(".img_container")
// for (let index = 0; index < CalvinKlein.length; index++) {
//     imgContainer.innerHTML += `
//     <img class="allimgs" src=${CalvinKlein[index].img} width="350" height="400">

//     ` 

// }
let Gucci = [
    {
        img: "images/gc1.jpg",

    },
    {
        img: "images/gc2.jpg",

    },
    {
        img: "images/gc3.jpg",

    },
    {
        img: "images/gc4.jpg",

    },

]

// let imgContainer3 = document.querySelector(".img_container")
// for (let index = 0; index < Gucci.length; index++) {
//     imgContainer.innerHTML += `
//     <img class="allimgs" src=${Gucci[index].img} width="350" height="400">

//     ` 

// }
let perfumes = [
    {
        img: "images/top3.jpg",
        title: "Dun-Hill",
        price: "Rs 10,000"
    },
    {
        img: "images/top 2.jpg",
        title: "Dolce & Gabbana",
        price: "Rs 7,000"
    },
    {
        img: "images/top 6.jpg",
        title: "Nautica Voyage",
        price: "Rs 12,000"
    },
    {
        img: "images/top 5.jpg",
        title: "Coco Nior Chanel",
        price: "Rs 9,000"
    },
    {
        img: "images/tom ford 1.jpg",
        title: "Tom Ford Tobacco Vanille",
        price: "Rs 15,000"
    },
    {
        img: "images/top 8.jpg",
        title: "N-5 Chanle Paris",
        price: "Rs 20,000"
    },



]
let prfmContainer = document.querySelector(".products_container")
for (let index = 0; index < perfumes.length; index++) {
    prfmContainer.innerHTML += `
    <div class="card" style="width: 19rem;">
    <img src="${perfumes[index].img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${perfumes[index].title}</h5>
      <p class="card-text">${perfumes[index].price}</p>
      <div><a href='mens-collection.html?id=${index}' class=" cardbtn px-2 py-2">Buy Now</a></div>
      </div>
  </div>

    `
}
let Blogs =[
    {
        img:"images/blog9.jpg",
        date:" December 01, 2023",
        title:"The essence Of Happiness",
        para:" The core of joy, the very essence of happiness."
    },

    {
        img:"images/blog8.jpg",
        date:" December 01, 2023",
        title:"The essence Of Happiness",
        para:" The core of joy, the very essence of happiness."
    },

    {
        img:"images/blog7.jpg",
        date:" December 01, 2023",
        title:"The essence Of Happiness",
        para:" The core of joy, the very essence of happiness."
    },
]
let blogscontainer= document.querySelector(".blogs-container")
for (let index=0; index < Blogs.length; index++){
    blogscontainer.innerHTML +=`  
    <div>
    <div class="card-img mt-5">
    <img src="${Blogs[index].img} " width="350" height="450">
  </div>
  <div class="icons">
  <i class="fa-regular fa-calendar"></i>
<p class=""date mt-3""> ${Blogs[index].date}</p>
</div>
  <div class="card_body mt-3">
    <h5 class="card_title">${Blogs[index].title}</h5>
    <p class="card_text"> ${Blogs[index].para}</p>
  </div>

  <div class="card-body">
    <a href="https://perfumesociety.org/blog/" class="card_link">Learn More</a>
    </div>
    `
}




// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function handleClick(d) {
    if (d.innerHTML == "Dior") {
        renderProducts(Dior)

    }
    else if (d.innerHTML == "Calvin Klein") {
        renderProducts(CalvinKlein)

    }
    else if (d.innerHTML == "Gucci") {
        renderProducts(Gucci)

    }
    else {
        renderProducts(TomFord)

    }
}