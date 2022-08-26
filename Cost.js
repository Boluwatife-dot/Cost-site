const form = document.querySelector("#form");
const result = document.querySelector(".result");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let weight = form.weight.value;
    let lenght = form.lenght.value;
    let breadth = form.breadth.value;
    let height = form.height.value;
    let shipping = form.shipping.value;


    let weightCost = weight * 500;
    let dimCost = (lenght * breadth * height) / 10 * 120;

    let shippingCost = 0;

    if(shipping == 'air'){
        shippingCost = 5000;
    }else if (shipping == 'sea'){
        shippingCost = 2000;
    }else{
        alert('Invalid selection')
    }

    let total = weightCost + dimCost + shippingCost;
    let grandTotal = (total * 0.075) + total;
   
    let final =`Your total shipping cost is $${grandTotal} (VAT included)`
    result.textContent = final;
})
