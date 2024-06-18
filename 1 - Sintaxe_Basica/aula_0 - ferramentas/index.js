// modulo externo  
import chalk from "chalk"          // https://www.npmjs.com/package/chalk
import inquirer from "inquirer"   // https://www.npmjs.com/package/inquirer

var texto = "Ola mundo"

console.log(chalk.bgGreen(texto))


// única questão
inquirer
  .prompt([
    {
        message: "Informe o valor", 
        name: "valor"
    }
  ])
  .then((answers) => {
    console.log(chalk.bgBlue(answers["valor"]))
  })
  .catch((error) => {
    console.log(error)
  });

  inquirer.prompt([
    {
        type: "list", 
        name: "action",
        choices: ["A", "B", "C", "D", "SAIR"]
    }
])
.then((answers) => {
    switch (answers["action"]) {
        case "A":
            console.log(chalk.bgCyan("A"))
            break;
        case "B":
            console.log(chalk.bgGray("B"))
            break;
        case "C":
            console.log(chalk.bgGreen("C"))
            break;
        case "D":
            console.log(chalk.bgCyanBright("D"))
            break;
        case "SAIR":
            console.log(chalk.bgGreen.bold("Obrigado"))
            break;
        default:
            console.log(chalk.bgRed.bold("Digite uma opção válida"))
            break;
    }
})
.catch((error) => {
    console.log(error)
  });