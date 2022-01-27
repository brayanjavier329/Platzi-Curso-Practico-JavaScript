function calcularDescuento(precio,descuento){
    const precioFinal= ((precio*(100-descuento))/100);
    return precioFinal;
}

const cupones=['Navidad','Halloween','San Valentín','Semana Santa']
function calculateDiscount(){
    const inputPrice=document.getElementById('InputPrice');
    const price=inputPrice.value;

    const inputCupon=document.getElementById('InputCupon');
    const cupon=inputCupon.value;

    let descuento;

    switch(cupon){
        case cupones[0]:
            descuento=35;
            break;
        case cupones[1]:
            descuento=10;
            break;
        case cupones[2]:
            descuento=17;
            break;
        case cupones[3]:
            descuento=20;
            break;
    }

    const finalPrice=calcularDescuento(price,descuento);
    const resultPrice=document.getElementById('ResultPrice');
    resultPrice.innerText='El precio a pagar es: $'+finalPrice;
}