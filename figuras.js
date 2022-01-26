//codigo del cuadrado
console.group('Cuadrados')

function perimeterSquare(lado){
    return lado*4;
}


function squareArea(side){
    return side*side;
}

console.groupEnd();

//codigo del triangulo

console.group('Triángulos')

function perimeterTriangle(side1,side2,base){
    const perimetro=side1+side2+base;
    return perimetro;
}

function areaTriangle(base,high){
    return (base*high)/2;    
}
console.groupEnd()

//codigo del circulo

console.group('Circulos')


function diametroCirculo(radio){
    return radio*2;
}

const PI=Math.PI

function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio)
    return diametro*PI;
}
function areaCirculo(radio){
    return (radio*radio)*PI;
}
console.groupEnd()


// Cuadrado

function calcularPerimetroCuadrado(){
    const input=document.getElementById('InputCuadrado');
    const value=input.value;
    const perimetro=perimeterSquare(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input=document.getElementById('InputCuadrado');
    const value=input.value;
    const area=squareArea(value);
    alert(area)
}

// Triangulo

function calcularPerimetroTriangulo(){
    const input1=document.getElementById('InputSide1');
    const side1=parseInt(input1.value);
    const input2=document.getElementById('InputSide2');
    const side2=parseInt(input2.value);
    const input3=document.getElementById('InputBase');
    const base=parseInt(input3.value);
    const perimetro=perimeterTriangle(side1,side2,base);
    alert(perimetro)
}
function calcularAreaTriangulo(){
    const input1=document.getElementById('InputBase');
    const base=parseInt(input1.value);
    const input2=document.getElementById('InputHigh');
    const altura=parseInt(input2.value);
    const area=areaTriangle(base,altura);
    alert(area)
}

// Circulo

function calcularPerimetroCirculo(){
    const input1=document.getElementById('InputRadio');
    const radio=parseInt(input1.value);
    const perimetro=perimetroCirculo(radio);
    alert(perimetro)
}
function calcularAreaCirculo(){
    const input1=document.getElementById('InputRadio');
    const radio=parseInt(input1.value);
    const area=areaCirculo(radio);
    alert(area)
}