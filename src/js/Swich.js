let operador = '+'
switch (operador) {
    case '+':
        console.log('Se va arealizar una suma:');
        break;
    case '-':
        console.log('Se va arealizar una resta:');
        break;
    case '*':
        console.log('Se va arealizar una multiplicacion:');
        break;
    default:
        console.log('Error!!');
        break;
}


//Swch multiple 
const nameFruit = "Strawberry";
switch (nameFruit) {
    case 'apple':
    case 'banana':
    case 'Strawberry':
        console.log(`${nameFruit} is a fruit`);
        break;
    default:
        console.log(' is not fruit')
}