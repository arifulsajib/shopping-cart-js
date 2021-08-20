function qunatityUpdate(product, inputType, price) {
    const qunatityInput = document.getElementById(product + "-quantity-input");
    let quantity = parseInt(qunatityInput.value);
    // quanity update
    if (inputType == "plus") {
        quantity = quantity + 1;
    } else if (inputType == "minus") {
        if (quantity > 0) {
            quantity = quantity - 1;
        }
    } else if (inputType == "direct") {
        quantity = qunatityInput.value;
    }
    qunatityInput.value = quantity;

    // update each items total price
    const productTotalField = document.getElementById(product + "-total");
    const productTotal = quantity * price;
    productTotalField.innerText = productTotal;

    //update subtotal, tax and total
    calculateTotal();
}

function getProductTotal(product, price) {
    const qunatityInput = document.getElementById(product + "-quantity-input");
    const quantity = parseInt(qunatityInput.value);
    const productTotal = quantity * price;
    return productTotal;
}

function calculateTotal() {
    const phoneTotal = getProductTotal("phone", 1219);
    const caseTotal = getProductTotal("case", 59);
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
}

// phone
document.getElementById("phone-plus-btn").addEventListener("click", function () {
    qunatityUpdate("phone", "plus", 1219);
});

document.getElementById("phone-minus-btn").addEventListener("click", function () {
    qunatityUpdate("phone", "minus", 1219);
});

document.getElementById("phone-quantity-input").addEventListener("change", function () {
    qunatityUpdate("phone", "direct", 1219);
})

// case
document.getElementById("case-plus-btn").addEventListener("click", function () {
    qunatityUpdate("case", "plus", 59);
});

document.getElementById("case-minus-btn").addEventListener("click", function () {
    qunatityUpdate("case", "minus", 59);
});

document.getElementById("case-quantity-input").addEventListener("change", function () {
    qunatityUpdate("case", "direct", 59);
});

// checkout
document.getElementById("checkout-btn").addEventListener("click", function () {
    const succesMsg = document.getElementById("success-msg");
    const errorMsg = document.getElementById("error-msg");
    const totalPrice = document.getElementById("total-price").innerText;
    if (totalPrice <= 0) {
        errorMsg.style.display = "block";
        succesMsg.style.display = "none";
    } else {
        succesMsg.style.display = "block";
        errorMsg.style.display = "none";
    }
});