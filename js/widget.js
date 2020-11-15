/**
 * Get the final image for the product.
 * Priorities as follows: product image, model image, placeholder.
 */
function setImage(product) {
    if (!product.image) {
        if (!product.model_image) {
            return "https://via.placeholder.com/100";
        } else {
            return product.model_image;
        }
    } else {
        return product.image;
    }
}


/**
 * Parse product data by picking only the information that's displayed.
 */
function parseData(data) {
    var products = [];
    $.each(data.widget.data.offers, function(index, product) {
        var image = setImage(product);
        var product_data = {
            name: product.offer.name,
            price: product.offer.price,
            currency_symbol: product.offer.currency_symbol,
            image: image,
            merchant_text: product.offer.merchant_link_text,
            link: product.offer.link,
            percentage: product.percentage,
            id: product.id
        };
        // Replace missing values with a placeholder
        Object.keys(product_data).forEach(function(key) {
            if(product_data[key] === null) product_data[key] = '---';
        });
        products.push(product_data);
    });
    return products;
}


/**
 * Sets product data into product table.
 */
function setData() {
    const url = "https://search-api.fie.future.net.uk/widget.php?id=review&model_name=xbox_one_s&area=GB";
    $.ajax({
        url: url,
        success: function(raw_data) {
            var data = parseData(raw_data);
            $('.product-table').append(data.map(Item).join(''));
            $.each(data, function(index, product) {
                $("#rating-" + product.id).starRating({
                    starSize: 15,
                    initialRating: 0.05 * product.percentage,
                    readOnly: true,
                });
            });
        }
    });
}