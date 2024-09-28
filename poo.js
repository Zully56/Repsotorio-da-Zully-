class Carro{
    constructor(cor, marca, modelo, ano){
        this.cor = cor
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = 0;
        this.ligado = false

    }

    ligar(){
        console.log("Carro Ligado!")
        this.ligado = true
    }

    desligar(){
        console.log("Carro Desligado")
    }
    
    acelerar(){
        if(this.ligado){
            this.velocidade += 5;
            console.log(`A velocidade atual do carro é ${this.velocidade}`)
        } else{
            console.log("Você precisa ligar o carro")

        }
    }




}


//código principal
let carro1 = new Carro("Ciano", "Mercedes", "GLA", 2024)
let carro2 = new Carro("Verde", "Fiat", "Uno", 2021)
carro1.ligar()
carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
carro1.desligar()