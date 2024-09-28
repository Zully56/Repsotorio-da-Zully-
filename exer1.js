//codigo principal 
const nomeRetornado = calcu(3.20,6.00)
console.log(nomeRetornado)

//declaracao de funcoes 
function calcu (alcool, gasolina){
    if (alcool <= 0.70 * gasolina){
       return "É mais ventajoso o alcool"
       
    }else{
       return "É mais ventajoso a gasolina"
       
    } 
    
}