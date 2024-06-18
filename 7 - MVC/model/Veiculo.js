
export default class Veiculo {
    constructor(modelo, marca, ano, placa, cor){
        this.modelo = modelo,
        this.marca = marca,
        this.ano = ano,
        this.placa = placa, 
        this.cor = cor
    }

    getModelo(){
        return this.modelo
    }

    setModelo(novoModelo){
        this.modelo = novoModelo
    }

    getMarca(){
        return this.marca
    }

    setMarca(novaMarca){
        this.marca = novaMarca
    }

    getAno(){
        return this.ano
    }

    setAno(novoAno){
        this.ano = novoAno
    }

    getPlaca(){
        return this.placa
    }

    setPlaca(novaPlaca){
        this.placa = novaPlaca
    }

    getCor(){
        return this.cor
    }

    setCor(novaCor){
        this.cor = novaCor
    }
}