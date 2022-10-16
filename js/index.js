function getApiProduct(xo) {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: 'JSON',
    });

    promise.then(function (result) {
        console.log('result', result.data.content);
        if(xo)
        {renderCarousel(result.data.content,"data-carousel")};
        renderProduct(result.data.content,"data-product");
    });
    promise.catch(function (err) {
        console.log(err);
    })
}
function renderCarousel(arrProduct,id) {
    var contentHTML = `
    <div class="carousel-item active">
    <div class="carousel__left">
        <img src="${arrProduct[0].image}" alt="image4">
    </div>
    <div class="carousel__right">
        <h2>${arrProduct[0].name}</h2>
        <p>${arrProduct[0].description}</p>
        <a href="./_html/detail.html?productid=${arrProduct[0].id}">Buy now</a>
    </div>
</div>
    `;
    for (var index = 1; index < arrProduct.length; index++) {
        var product = arrProduct[index];
        contentHTML += `
        <div class="carousel-item">
        <div class="carousel__left">
            <img src="${product.image}" alt="image4">
        </div>
        <div class="carousel__right">
            <h2>${product.name}</h2>
            <p>${product.description.length > 75? product.description.substr(0,75)+'...':product.description}</p>
            <a href="./_html/detail.html?productid=${product.id}">Buy now</a>
        </div>
    </div>
        `

        }
    


    document.getElementById(id).innerHTML = contentHTML;
};
function renderProduct(arrProduct,id) {
    var contentHTML = ``;
    for (var index = 0; index < arrProduct.length; index++) {
        var product = arrProduct[index];
        contentHTML += `
        <div class="col-lg-4 col-md-6 pt-5">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.shortDescription.length > 65? product.shortDescription.substr(0,65)+'...':product.shortDescription}</p>
                </div>
                <div class="card-footer py-0 px-0 d-flex ">
                    <div class="left">
                        <a href="./_html/detail.html?productid=${product.id}">Buy now</a>
                    </div>
                    <div class="right">
                        <p>${product.price}$</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `
    }

    document.getElementById(id).innerHTML = contentHTML;
};
window.onload = function(){
    getApiProduct(true);
}


