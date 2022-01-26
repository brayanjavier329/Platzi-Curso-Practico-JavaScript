//codigo del cuadrado
console.group('Cuadrados')
// const squareSide=5;
// console.log('Los lados del cuadrado miden: '+squareSide+' cm.');

function perimeterSquare(lado){
    return squareSide*4;
}
// console.log('El perimetro del cuadrado es: '+perimeterSquare+' cm.');

const squareArea=squareSide*squareSide;
console.log('El area del cuadrado es: '+squareArea+' cm².')
console.groupEnd();

//codigo del triangulo
console.group('Triángulos')

const sideTriangle1=6;
const sideTriangle2=6;
const baseTriangle3=4;
const highTriangle=4;

console.log(
    'Los lados del triangulo miden: '+sideTriangle1+' cm,'
    +sideTriangle2+' cm, '+baseTriangle3+' cm.');

console.log('La altura del triangulo es: '+highTriangle+' cm.');

const perimeterTriangle=sideTriangle1+sideTriangle2+baseTriangle3;
console.log('El perimetro del triangulo es: '+perimeterTriangle+' cm.');

const areaTriangle=(baseTriangle3*highTriangle)/2;
console.log('El area del triangulo es: '+areaTriangle+' cm².');

console.groupEnd()

//codigo del circulo

console.group('Circulos')

const radioCirculo=4;
console.log('El radio del circulo es: '+radioCirculo+' cm.');
const diametroCirculo= radioCirculo*2;
console.log('El diametro del circulo es: '+diametroCirculo+' cm.');
const PI=Math.PI
console.log('PI es: '+PI);
const perimetroCirculo=diametroCirculo*PI
console.log('El perimetro del circulo es: '+perimetroCirculo+' cm.');
const areaCirculo=(radioCirculo*radioCirculo)*PI;
console.log('El area del circulo es: '+areaCirculo+' cm².');
console.groupEnd()