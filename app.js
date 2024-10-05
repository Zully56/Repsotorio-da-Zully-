const readline = require('readline')

//criando interface para ler entrad e saida do terminal 
const rl= readline.createInterface({
    input:process.stdin, //captura entrada
    output:process.stdout //exibe saida do terminal 
})

//Faz uma pergunta ao usuario 
rl.question(" Qual é seu nome " , (nome)=>{
    console.log(`Ola ${nome}!`)
    rl.close()
})
