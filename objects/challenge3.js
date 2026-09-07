let product = {
    name : "banana" , 
    price : "19" , 
    categorie : "food" , 
    quantity : "20" ,
    availability : true 
}
console.log(product.name);
console.log(product.price);
console.log(product.categorie);
if (product.availability == true){
    console.log("this product is available !");
}
else{
    console.log("this product is not available !");
}
console.log(product.price * product.quantity);
