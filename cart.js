cartData=JSON.parse(localStorage.getItem("dotcart"));
console.log(cartData)
var total=cartData.reduce(function(acc,elem,index,arr){
    return acc+(elem.price)
},0)
console.log(total);
var length=cartData.length;
document.querySelector("p").innerText=`Add products worth ${length} get a Lavender Vanity Pouch worth ${total}`

cartData.map(function(elem,index){
    var innerdiv=document.createElement("div");
    var image=document.createElement("img");
    image.src=elem.image_url;
    
    var name=document.createElement("p")
    name.innerText=elem.name;

    var price=document.createElement("p")
    price.innerText=elem.price;

    var btn=document.createElement("button")
    btn.innerText="Remove";
    btn.setAttribute("id","removebtn")

    btn.addEventListener("click",function(){
        remove(elem,index)
    })

    innerdiv.append(image,name,price,btn);
    document.querySelector("#contain").append(innerdiv)
    
})
function remove(elem,index){
    console.log(elem,index);
    cartData.splice(index,1)
    console.log(cartData);
    
    localStorage.setItem("dotcart",JSON.stringify(cartData));
    window.location.reload()
}