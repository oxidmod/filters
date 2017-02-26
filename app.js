(function () {
    var products = [{
        id: 1,
        price: '$ 15.00',
        title: 'Test 1',
        attributes: {}
    }, {
        id: 2,
        title: 'Test 2',
        price: '$ 15.00',
        attributes: {}
    }, {
        id: 3,
        title: 'Test 3',
        price: '$ 15.00',
        attributes: {}
    }, {
        id: 4,
        title: 'Test 4',
        price: '$ 15.00',
        attributes: {}
    }, {
        id: 5,
        title: 'Test 5',
        price: '$ 15.00',
        attributes: {}
    }, {
        id: 6,
        title: 'Test 6',
        price: '$ 15.00',
        attributes: {}
    }, {
        id: 7,
        title: 'Test 7',
        price: '$ 15.00',
        attributes: {}
    }];

    function renderProduct(product) {
        return '<div class="product-card-square mdl-card mdl-shadow--2dp">' +
            '<div class="mdl-card__title mdl-card--expand">' +
                '<h2 class="mdl-card__title-text">'+product.price+'</h2>' +
            '</div>' +
            '<div class="mdl-card__supporting-text">' + product.title + '</div>' +
            '</div>';
    }

    function renderProducts(products) {
        return products.map(function (p) {
            return renderProduct(p);
        }).join('');
    }

    document.getElementById('productList').innerHTML = renderProducts(products);
})();
