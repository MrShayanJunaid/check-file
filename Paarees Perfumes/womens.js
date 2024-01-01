let perfumes=[
    {
        img:"images/womennew9.jpg",
        title:"Elie Saab",
        price:"Rs 14,000"
    },
    {
        img:"images/womennew6.jpg",
        title:"Pure Xs",
        price:"Rs 9,000"
    },
    {
        img:"images/womennew7.jpg",
        title:"Lanvin",
        price:"Rs 13,000"
    },
    {
        img:"images/womennew3.jpg",
        title:"Women's Signature",
        price:"Rs 14,000"
    },
    {
        img:"images/womennew8.jpg",
        title:"BvL Gari",
        price:"Rs 20,000"
    },
    {
        img:"images/womennew4.jpg",
        title:"Elie Saab Gold Edition",
        price:"Rs 40,000"
    },
    {
        img:"images/womennew2.jpg",
        title:"Acqua Di Parma",
        price:"Rs 17,000"
    },
    {
        img:"images/womennew.jpg",
        title:"CHHC Women's",
        price:"Rs 33,000"
    },
    {
        img:"images/womennew10.jpg",
        title:"Gucci Flora",
        price:"Rs 45,000"
    },
    {
        img:"images/womennew11.jpg",
        title:"N-5 Chanel",
        price:"Rs 23,000"
    },
    {
        img:"images/womennew12.jpg",
        title:"YSL For Women's",
        price:"Rs 16,000"
    },
    {
        img:"images/womennew13.jpg",
        title:"YSL Silver",
        price:"Rs 15,000"
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
