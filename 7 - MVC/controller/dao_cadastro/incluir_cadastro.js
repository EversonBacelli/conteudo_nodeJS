import conexao from "../Conexao.js";

export function incluir_cadastro(cliente, id_funcionario){
    const pool = conexao()

    const {cpf, nome, sexo, dataNasc, cnh, endereco} = cliente
    const {modelo, marca, ano, placa, cor, qtdPortas, desempenho, quilometragem} = cliente.getVeiculo()


    return new Promise(
        (resolve, reject) => {
            let query = `CALL pdr_incluir_cadastro(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
            const infos = [
                cpf, nome, sexo, dataNasc, cnh, endereco, 
                modelo, marca, ano, placa, cor, qtdPortas, desempenho, quilometragem, 
                8
            ]
            console.log("INFOS: " + infos)

            pool.query(query, infos, (err, data)=>{
                console.log(query)
                if(err){
                    resolve(err)
                } else {
                    console.log("exec")
                    resolve(data)
                }
            })
        }
    )
}