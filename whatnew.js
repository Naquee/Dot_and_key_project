var Newdata=[
    {
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CLEANSER_360x.png?v=1646547021",
    
  name: "Pea Peptide + Cysteine Hair Volumising Serum",
  price: " 670",
  strikedoffprice: "Rs: 745.00",
},

{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_e9b6f30c-2046-4db7-b304-4999e2442d9c_720x.jpg?v=1646475887",
    
  name: "Moringa & Argan Hair Fall Control Shampoo",
  price: "625",
  strikedoffprice: "Rs: 695.00",
},
{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_4_85b8fcfc-89a1-49d0-bc95-e4d49dfd6619_360x.jpg?v=1646934817",
    
  name: "WATERMELON LIP MASK WITH 20% SHEA",
  price: "612",
  strikedoffprice: "Rs: 645.00",
},
{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-7_1_360x.jpg?v=1646476426",
    
  name: "5-in-1 Nay Acne Kit",
  price: "1245",
  strikedoffprice: "",
},
{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_3_360x.jpg?v=1646476025",
    
  name: "AHA Exfoliation Apple Cider Hair & Scalp Scrub",
  price: "625",
  strikedoffprice: "Rs: 695.00",
},

{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/TOBER_360x.png?v=1646547062",
    
  name: "Cica Calming Anti-Acne Niacinamide Toner with Green Tea | Alcohol-Free",
  price: " 470",
  strikedoffprice: "Rs: 495.00",
},
{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_1_3728096d-d7d3-4616-923f-4220451f4cef_360x.jpg?v=1646476077",
    
  name: "Quinoa Protein & Olive Damage Repair Shampoo",
  price: "625",
  strikedoffprice: "Rs: 695.00",
},
{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/BACK_360x.png?v=1646547142",
    
  name: "Cica Calming Back Acne Spray| With 2% Salicylic | Alcohol-Free",
  price: "660",
  strikedoffprice: "Rs: 695.00",
},
{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1_11bc8a1c-3330-413c-8aaf-bd1ebdb23dbe_360x.jpg?v=1646476045",
    
  name: "Pea Peptide + Cysteine Hair Volumising Serum",
  price: " 670",
  strikedoffprice: "Rs: 745.00",
},

{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_2_6fc754d7-d198-4000-b394-a0f6582c51c8_720x.jpg?v=1646475973",
    
  name: "Hyaluronic Hydrating Quinoa Protein & Olive Hair Mask",
  price: " 580",
  strikedoffprice: "Rs: 645.00",
},
{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_5_360x.jpg?v=1645089859",
    
  name: "All Day Hydration Trio",
  price: "1245",
  strikedoffprice: "Rs: 1,465.00",
},
{
image_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/HTONER_6028d509-a7a2-48e9-b91e-73958c8f7639_360x.png?v=1647236759",
    
  name: "Rice Water Probiotics Hydrating Toner | Alcohol-Free",
  price: " 565",
  strikedoffprice: "Rs: 595.00",
},
];

var cartData=JSON.parse(localStorage.getItem("dotcart")) || [];

Newdata.map(function(elem,index,arr){
    var box=document.createElement("div");
    var img=document.createElement("img");
    img.setAttribute("id","image1")
    img.src=elem.image_url;

    var name=document.createElement("p")
    name.setAttribute("id","name1")
    name.innerText=elem.name;

    var price=document.createElement("p");
    price.innerText=elem.price;
    price.setAttribute("id","price")

    var strike=document.createElement("s");
    strike.setAttribute("id","stark")
    strike.innerText=elem.strikedoffprice;

    var pricediv=document.createElement("div")
    pricediv.append(price,strike);
    pricediv.setAttribute("id","prdiv")

    var btn=document.createElement("button");
    btn.setAttribute("id","button")
    btn.innerText="ADD TO CART"

    btn.addEventListener("click",function(){
        addToCart(elem)
    });


    box.append(img,name,pricediv,btn);
  document.querySelector("#container").append(box);


})

function addToCart(elem){
    // console.log(elem);
    cartData.push(elem)
    console.log(cartData)
    localStorage.setItem("dotcart",JSON.stringify(cartData));
    alert("add to cart")

}
