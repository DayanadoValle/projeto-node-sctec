# 💻 Backend Project: Calculadora Modularizada - SCTEC

Projeto desenvolvido para o curso **Desenvolvimento de Software Backend**. A aplicação foca na construção de uma lógica de negócio desacoplada, utilizando **Node.js** e seguindo princípios de **Clean Code**.

## 🎯 Desafios do Professor

1. **Transformação e Validação**: Realizar a conversão para número e disparar um erro caso o input do usuário seja inválido.
2. **Modularização Independente**: Isolar as operações (subtração, multiplicação, divisão) em arquivos próprios e realizar a importação no arquivo principal.
3. **BÔNUS**: Resolver o problema do console travado/preso quando a aplicação dispara um erro.

## 🛠️ Minha Implementação (O que eu fiz)

### 🧹 Solução: Entrada Limpa (Desafio 1)
* **Sanitização**: Implementei a solução de **Entrada Limpa** utilizando `.replace(',', '.')` para garantir que a conversão para número funcione perfeitamente.
* **Validação**: Criei uma trava com `isNaN()` que dispara um erro imediato se o usuário digitar letras.

### 📂 Estrutura Modular e Imports (Desafio 2)
* **Organização**: Criei a pasta `/services` para isolar cada operação em módulos independentes.
* **Responsabilidade Única**: Utilizei imports no `main.js`, garantindo que cada arquivo tenha uma única função.

### 🛡️ Tratamento de Exceções (Desafio 3 - BÔNUS)
* **Solução do Bônus**: Coloquei o fechamento da interface no bloco `finally`, garantindo que o console não fique preso.

## 🚀 Tecnologias
* **Node.js**, **VS Code**, **Git & GitHub**

## 📥 Instalação e Uso

1. Clone o repositório e acesse a pasta.
2. Instale as dependências com `npm install`.
3. **Instruções**: O sistema aceita decimais com `.` ou `,`, mas bloqueia pontos de milhar para evitar erros de magnitude financeira.

## 💻 Como Rodar
```bash
npm start
