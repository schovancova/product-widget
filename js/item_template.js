const Item = ({ id, name, price, currency_symbol, image, merchant_text, link, percentage }) => `
    <div class="card mt-2 p-2">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-row align-items-center time">
                <div id="rating-${id}"></div>
                <small class="text-muted mt-2">(${percentage}%)</small>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2 col-sm-12 mr-3"> <img src="${image}" width="100px"> </div>
            <div class="col-lg-9 col-sm-12 d-flex flex-column">
                <h5>${name}</h5>
                <div class="row mt-auto">
                    <div class="col-lg-4 col-sm-12">
                        <span class="text-success align-middle">${price}${currency_symbol}</span>
                    </div>
                    <div class="text-center col-lg-8 col-sm-12">
                        <a href="${link}" target="_blank" class="btn-block btn-primary btn-sm active" role="button">${merchant_text}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;