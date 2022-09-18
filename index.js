fetch("https://fakestoreapi.com/products").then((response)=>{
   return response.json();
}).then((data)=>{
    // console.log(data);
     let data1="";
     data.map((values)=>{
        data1+=`<div class="card">
            <h3 class="title">${values.title}</h3>
            <img src="${values.image}" alt="" class="imagereq">
            <p>${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
        </div>`
     });
     document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})
