import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

// MODULARIZAÇÃO: Importação de lógica independente (Padrão Clean Code)
import { adicao } from "./services/adicao.js";
import { subtracao } from "./services/subtracao.js";
import { multiplicacao } from "./services/multiplicacao.js";
import { divisao } from "./services/divisao.js";

// INTERNACIONALIZAÇÃO (i18n): Utilitário que padroniza números para o formato brasileiro (BRL)
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

async function main() {
  const interfaceConsole = createInterface(stdin, stdout);

  try {
    // INTERFACE DE USUÁRIO (CLI): Cabeçalho informativo
    console.log("\n________________________________________________ \n ");
    console.log("      Dayana do Valle | Projeto SCTEC");
    console.log("             [0_0]  -  Status: OK!");
    console.log("   Tudo certo por aqui! (por enquanto) ¯\\_(ツ)_/¯");
    console.log("________________________________________________\n");

    console.log("====================================================");
    console.log("           💰 CALCULADORA FINANCEIRA                ");
    console.log("====================================================");
    console.log(" INSTRUÇÕES DE USO:");
    console.log(" • Use VÍRGULA ou PONTO para centavos (Ex: 50,25 ou 50.25)");
    console.log(" • NÃO use pontos para milhares (Ex: use 1500 e não 1.500)");
    console.log("====================================================\n");

    // --- 1. VALIDAÇÃO DE OPERAÇÃO ---
    const operacao = await interfaceConsole.question(
      "Digite a operação (+, -, *, /):\n",
    );
    const operacoesValidas = ["+", "-", "*", "/"];

    if (!operacoesValidas.includes(operacao)) {
      throw new Error(
        `A entrada '${operacao}' não é válida. \n   [DICA]: Use apenas: +, -, * ou /.`,
      );
    }

    // --- 2. TRATAMENTO DO PRIMEIRO NÚMERO ---
    const aInput = await interfaceConsole.question(
      "Digite o primeiro número: \n",
    );

    // ENTRADA LIMPA: Apenas troca a vírgula pelo ponto (Padrão ADS)
    const a = Number(aInput.replace(",", "."));

    if (isNaN(a)) {
      throw new Error(
        `O valor '${aInput}' é inválido. \n   [DICA]: Utilize apenas números, não use pontos de milhar, apenas uma vírgula ou ponto para centavos.`,
      );
    }

    // --- 3. TRATAMENTO DO SEGUNDO NÚMERO ---
    const bInput = await interfaceConsole.question(
      "Digite o segundo número: \n",
    );

    // ENTRADA LIMPA: Padronização do segundo valor
    const b = Number(bInput.replace(",", "."));

    if (isNaN(b)) {
      throw new Error(
        `O valor '${bInput}' é inválido. \n   [DICA]: Digite um número real sem pontos de milhar.`,
      );
    }

    let resultado;

    // EXECUÇÃO DA LÓGICA
    switch (operacao) {
      case "+":
        resultado = adicao(a, b);
        break;
      case "-":
        resultado = subtracao(a, b);
        break;
      case "*":
        resultado = multiplicacao(a, b);
        break;
      case "/":
        if (b === 0)
          throw new Error(
            "Operação impossível: Divisão por zero não é permitida.",
          );
        resultado = divisao(a, b);
        break;
    }

    // OUTPUT FORMATADO: Resultado com máscara brasileira
    console.log("\n==========================");
    console.log(`RESULTADO FINAL: ${formatadorMoeda.format(resultado)}`);
    console.log("==========================\n");
  } catch (error) {
    console.error(`\n⚠️  [ALERTA DO SISTEMA]: ${error.message}\n`);
  } finally {
    interfaceConsole.close();
    console.log("Conexão encerrada. Até logo! 👋");
  }
}

main();
