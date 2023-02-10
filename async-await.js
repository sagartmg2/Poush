


async function fetchApi() {
    console.log(1);
    console.log(2);

    /* 
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))
 */
    let products_respopnse = await fetch('https://dummyjson.com/products')

    console.log(products_respopnse);
    let data = await products_respopnse.json()

    console.log(data);

    console.log("end--");
    console.log("end--2");
    console.log("the length of products is", data.products.length);
}

fetchApi()