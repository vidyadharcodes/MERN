const products = [
    {productId: 1 , productName: "p1", price : 8000},
    {productsId: 2, productName :"p2", price : 300},
    {productId : 3, productName: "p3", price : 5000},
    {productId : 4, productName: "p4", price : 7000},
    {productId : 5, productName : "p5", price : 9000},
]

products.sort((a,b)=>{
      return a.price-b.price
});

console.log(products);
