/**
 * Modularização
 * 
 *     O ato de particionar um programa em componentes ou partes relevantes, dá origem a módulos.
 *     Quanto melhor for essa organização, mais fácil será entender o código, encontrar elementos de
 *     interesse e até reusar partes do código.
 * 
 *     Nessa aula iremos estudar como importar trecho de código de um domento para outro, com isso
 *     já estaremos dando inicio aos nosso primeiros passo no processo de modularização.
 * 
 */

import soma from "./soma.js";
import diferenca from "./diferenca.js";
import multiplicacao from "./multiplicacao.js";
import divisao from "./divisao.js";


console.log(soma(5, 5))
console.log(diferenca(4, 2))
console.log(multiplicacao(5, 5))
console.log(divisao(10, 5))