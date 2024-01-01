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
    {
        img:"images/top 9.jpg",
        title:"Gentleman Givenchy",
        price:"Rs 30,000"
    },
    {
        img:"images/top 10.jpg",
        title:"Acqua Di Gio",
        price:"Rs 18,000"
    },
    {
        img:"images/top 11.jpg",
        title:"Gucci",
        price:"Rs 15,000"
    },
    {
        img:"images/top 12.jpg",
        title:"Signature for Men's",
        price:"Rs 40,000"
    },
    {
        img:"images/top 13.jpg",
        title:"Men's Oud Edition",
        price:"Rs 35,000"
    },
    {
        img:"images/top 14.jpg",
        title:"Hugo Boss",
        price:"Rs 8,000"
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

