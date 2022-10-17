function getApiProduct1() {
    
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: 'JSON',
    });

    promise.then(function (result) {
        // console.log('result', result.data.content);

        renderProduct1(result.data.content,"data-product");
        
    });
    promise.catch(function (err) {
        console.log(err);
    })
};

function getApiDetail(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParams = urlParams.get('productid');
    console.log(myParams);
    var promise = axios({
        
        url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParams}`,
        method:'GET',
        ResponseType:'JSON',
    });
    promise.then(function(result){
        console.log(result.data.content);
        renderDetail(result.data.content,"data_carousel_detail")
    });
    promise.catch(function(err){
        console.log(err);
    });
}

function renderDetail(product,id){
    
        var contentHTML =`
        <div class="detail_img col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <img src="${product.image}" alt="...">
      </div>
      <div class="detail_content col-lg-8 col-md-6 col-sm-12 col-xs-12">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <h4>Available size</h4>
        <div class="size">
          <button><span>${product.size[0]}</span></button>
          <button><span>${product.size[1]}</span></button>
          <button><span>${product.size[2]}</span></button>
          <button><span>${product.size[3]}</span></button>
          <button><span>${product.size[4]}</span></button>
          <button><span>${product.size[5]}</span></button>
          <button class="mt-1"><span>${product.size[6]}</span></button>
        </div>
        <p class="gia">${product.price}$</p>
        <div class="add">
          <button><span>+</span></button>
          <p>1</p>
          <button><span>-</span></button>
        </div>
        <button class="btnAdd">Add to cart</button>

      </div>
        `
    
    document.getElementById(id).innerHTML=contentHTML;
};

function renderProduct1(arrProduct,id) {
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
                        <a href="./detail.html?productid=${product.id}">Buy now</a>
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
    const urlParams = new URLSearchParams(window.location.search);
    const myParams = urlParams.get('productid');
    console.log(myParams);
    getApiDetail();
    // getApiProduct(false);
    
    getApiProduct1();

    
}