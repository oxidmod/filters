(function () {
    var products = [{
        id: 1,
        price: '$15.00',
        title: 'Test 1',
        attributes: {
            screen: '5"',
            CPU: "4 Cores, 1.5GHz"
        }
    }, {
        id: 2,
        title: 'Test 2',
        price: '$15.00',
        attributes: {
            screen: '5"',
            CPU: "4 Cores, 1.5GHz"
        }
    }, {
        id: 3,
        title: 'Test 3',
        price: '$15.00',
        attributes: {
            screen: '5"',
            CPU: "4 Cores, 1.5GHz"
        }
    }, {
        id: 4,
        title: 'Test 4',
        price: '$15.00',
        attributes: {
            screen: '5"',
            CPU: "4 Cores, 1.5GHz"
        }
    }, {
        id: 5,
        title: 'Test 5',
        price: '$15.00',
        attributes: {
            screen: '5"',
            CPU: "4 Cores, 1.5GHz"
        }
    }, {
        id: 6,
        title: 'Test 6',
        price: '$15.00',
        attributes: {
            screen: '5"',
            CPU: "4 Cores, 1.5GHz"
        }
    }, {
        id: 7,
        title: 'Test 7',
        price: '$15.00',
        attributes: {
            screen: '5"',
            CPU: "4 Cores, 1.5GHz"
        }
    }];

    function renderProduct(product) {
        return '' +
        '<div class="product-card mdl-shadow--2dp">' +
            '<i class="product-info-icon material-icons mdl-color-text--accent" id="product-item-'+product.id+'">info</i>' +
            '<div class="product-image">' +
                '<img src="/images/product_'+product.id+'.png" alt="'+product.title+'" />' +
            '</div>' +
            '<div class="product-info">' +
                '<h5>'+product.title+'</h5>' +
                '<h6>'+product.price+'</h6>' +
            '</div>'+
            '<div class="mdl-tooltip mdl-tooltip--large" for="product-item-'+product.id+'">' +
                renderAttributes(product) +
            '</div>' +
        '</div>';
    }

    function renderProducts(products) {
        return products.map(function (p) {
            return renderProduct(p);
        }).join('');
    }

    function renderAttributes(product) {
        var attributes = '';
        for (var attribute in product.attributes) {
            if (product.attributes.hasOwnProperty(attribute)) {
                attributes += attribute + ': ' + product.attributes[attribute] + '<br />';
            }
        }
        return attributes;
    }

    document.getElementById('productList').innerHTML = renderProducts(products);
})();
