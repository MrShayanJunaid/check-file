let TomFord=[
    {
        img:"images/TF2.jpg",

    },
    {
        img:"images/TF3.jpg",

    },
    {
        img:"images/TF6.jpg",

    },
    {
        img:"images/TCXO01_APPENDGRID.png",

    },

]

let imgContainer = document.querySelector(".img_container")
for (let index = 0; index < TomFord.length; index++) {
    imgContainer.innerHTML += `
    <img class="allimgs" src=${TomFord[index].img} width="350" height="400">
    
    ` 

}
let Dior=[
    {
        img:"images/TF2.jpg",

    },
    {
        img:"images/TF3.jpg",

    },
    {
        img:"images/TF6.jpg",

    },
    {
        img:"images/TCXO01_APPENDGRID.png",

    },

]

let imgContainer1 = document.querySelector(".img_container")
for (let index = 0; index < Dior.length; index++) {
    imgContainer.innerHTML += `
    <img class="allimgs" src=${Dior[index].img} width="350" height="400">
    
    ` 

}
let CalvinKlein=[
    {
        img:"images/TF2.jpg",

    },
    {
        img:"images/TF3.jpg",

    },
    {
        img:"images/TF6.jpg",

    },
    {
        img:"images/TCXO01_APPENDGRID.png",

    },

]

let imgContainer2 = document.querySelector(".img_container")
for (let index = 0; index < CalvinKlein.length; index++) {
    imgContainer.innerHTML += `
    <img class="allimgs" src=${CalvinKlein[index].img} width="350" height="400">
    
    ` 

}
let Gucci=[
    {
        img:"images/TF2.jpg",

    },
    {
        img:"images/TF3.jpg",

    },
    {
        img:"images/TF6.jpg",

    },
    {
        img:"images/TCXO01_APPENDGRID.png",

    },

]

let imgContainer3 = document.querySelector(".img_container")
for (let index = 0; index < Gucci.length; index++) {
    imgContainer.innerHTML += `
    <img class="allimgs" src=${Gucci[index].img} width="350" height="400">
    
    ` 

}
let perfumes=[
    {
        img:"images/top3.jpg",
        title:"Dun-Hill",
        price:"Rs 10,000"
    },
    {
        img:"images/top 2.jpg",
        title:"Dolce & Gabbana",
        price:"Rs 7,000"
    },
    {
        img:"images/top 6.jpg",
        title:"Nautica Voyage",
        price:"Rs 12,000"
    },
    {
        img:"images/top 5.jpg",
        title:"Coco Nior Chanel",
        price:"Rs 9,000"
    },
    {
        img:"images/tom ford 1.jpg",
        title:"Tom Ford Tobacco Vanille",
        price:"Rs 15,000"
    },
    {
        img:"images/top 8.jpg",
        title:"N-5 Chanle Paris",
        price:"Rs 20,000"
    },
    
   
    
] 
let prfmContainer = document.querySelector(".products_container")
for(let index = 0; index< perfumes.length; index++){
    prfmContainer.innerHTML+=`
    <div class="img4">
          <img src="${perfumes[index].img}" width="300" height="400">
          <h1 class="name">${perfumes[index].title}</h1>
          <p class="price">${perfumes[index].price}</p>
          <a href='./E-commerce website/e-commerce.html' class="btn2">Buy Now</a>
        </div>

    `
}




// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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

