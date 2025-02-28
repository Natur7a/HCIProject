document.addEventListener("DOMContentLoaded", function(){
    grabData()
    //button newest catalog click
    document.getElementById("scrollbutton").addEventListener("click", function () {
        document.querySelector(".Springheading").scrollIntoView({behavior: "smooth"})
    })
})







//grabing and using api using async and promise

const baseURL = "https://fakestoreapi.com/products"

const grabData = async () => {
    try{
        const responseData = await axios.get(baseURL)
        renderItem(responseData.data)
        console.log(responseData.data)
    }
    catch(error){
        console.log(error)
    }
}


const renderItem = (items) => {
    const catalog = document.querySelector(".catalog")
    
    catalog.innerHTML = ' '

    for(let i = 0; i < 8; i++){
        const products = items[i]

        const item = document.createElement("div")
        item.classList.add("item")
        item.innerHTML = `<img src="${products.image}" alt="${products.title}" class="itemimage1"/>
                <b>${products.title}</b>
                <div class="PriceTag">
                    <a href="#">$${products.price}</a>
                </div>`
        catalog.append(item)
    }

}


