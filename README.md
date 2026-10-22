# Testes Manuais e Automatizados de API — Restful Booker

## Sobre o projeto

Este projeto consiste na realização de testes manuais e automatizados da API **Restful Booker**, com o objetivo de validar as principais operações relacionadas ao gerenciamento de reservas.

Durante o desenvolvimento, foram realizados testes manuais utilizando Postman e desenvolvidos scripts automatizados com Cypress e JavaScript para verificar o comportamento dos endpoints, as respostas HTTP e a integridade dos dados retornados pela API.

O projeto contempla os principais fluxos de gerenciamento de reservas:

- **Consulta de reservas:** requisição `GET` para obter a lista de reservas e validar a resposta da API.
- **Consulta por ID:** requisição `GET` para recuperar uma reserva específica e verificar a presença dos campos esperados.
- **Criação de reservas:** requisição `POST` com envio de dados no corpo da requisição, validação do status HTTP e captura do identificador (`bookingid`) retornado pela API.
- **Atualização de reservas:** autenticação por meio do endpoint `/auth`, obtenção do token, criação de uma reserva, atualização dos dados com `PUT` e nova consulta para confirmar que o preço foi efetivamente alterado.
- **Exclusão de reservas:** autenticação, criação de uma reserva, exclusão por meio de `DELETE` e consulta posterior para verificar se a reserva deixou de estar disponível, com retorno `404`.

Os testes automatizados foram organizados em arquivos independentes, permitindo executar e validar cada cenário separadamente. Ao longo do desenvolvimento, foram aplicadas asserções para verificar códigos de status HTTP, tipos de dados, presença de propriedades e persistência das alterações realizadas.

O projeto também inclui documentação dos testes manuais e uma pasta destinada às evidências, reunindo os artefatos produzidos durante a execução dos testes.

O foco do trabalho é demonstrar, na prática, a aplicação de técnicas de teste de API, validação de respostas, autenticação, gerenciamento de dados de teste e verificação dos resultados das operações, combinando testes manuais e automação em um mesmo projeto.

## Tecnologias e ferramentas

- **Cypress:** execução dos testes automatizados de API.
- **JavaScript:** linguagem utilizada nos scripts de teste.
- **Postman:** ferramenta utilizada para os testes manuais de API.
- **Restful Booker API:** API utilizada como ambiente de testes.
- **Node.js e npm:** ambiente de execução JavaScript e gerenciamento das dependências do projeto.

## Cenários de testes automatizados

Os testes estão organizados em arquivos independentes dentro da pasta `cypress/e2e/`.

| Arquivo | Objetivo |
|---|---|
| `consultar-lista-reservas.cy.js` | Validar a consulta da lista de reservas e verificar o status HTTP `200` e o formato de array da resposta. |
| `consultar-reserva-por-id.cy.js` | Consultar uma reserva pelo ID e verificar o status HTTP `200` e a presença dos campos `firstname` e `lastname`. |
| `criar-reserva.cy.js` | Criar uma reserva por meio de `POST` e validar o status HTTP `200` e a presença do campo `bookingid`. |
| `atualizar-reserva.cy.js` | Realizar autenticação, criar uma reserva, capturar seu ID, atualizar os dados por meio de `PUT` e consultar novamente a reserva para confirmar a alteração do preço. |
| `excluir-reserva.cy.js` | Realizar autenticação, criar uma reserva, capturar seu ID, excluir a reserva por meio de `DELETE` e verificar, com uma consulta posterior, o retorno HTTP `404`. |

## Principais validações implementadas

Durante a automação, foram utilizadas asserções para verificar:

- Códigos de status HTTP esperados para cada operação.
- Formato e tipo dos dados retornados pela API.
- Presença de propriedades específicas nas respostas.
- Captura dinâmica do identificador da reserva (`bookingid`).
- Autenticação e utilização de token nas operações que exigem autorização.
- Atualização efetiva dos dados, por meio de uma nova consulta após o `PUT`.
- Indisponibilidade da reserva após a exclusão, por meio de uma consulta posterior ao `DELETE`.

## Estrutura do projeto

```text
Projeto testes manuais e automatizados de API/
├── cypress/
│   ├── e2e/
│   │   ├── atualizar-reserva.cy.js
│   │   ├── consultar-lista-reservas.cy.js
│   │   ├── consultar-reserva-por-id.cy.js
│   │   ├── criar-reserva.cy.js
│   │   └── excluir-reserva.cy.js
│   ├── fixtures/
│   │   └── example.json
│   └── support/
├── Evidências/
├── cypress.config.js
├── Documentacao_Testes_Manuais.docx
├── package.json
├── package-lock.json
└── README.md
```

## Como executar os testes

### Pré-requisitos

- Node.js instalado.
- npm disponível no terminal.
- Conexão com a internet para acessar a API Restful Booker.

### 1. Instalar as dependências

Na pasta raiz do projeto, execute:

```bash
npm install
```

### 2. Abrir o Cypress

Para abrir a interface gráfica do Cypress:

```bash
npx cypress open
```

Selecione **E2E Testing**, escolha um navegador disponível e abra o arquivo de teste desejado.

### 3. Executar os testes pelo terminal

Para executar todos os testes automatizados:

```bash
npx cypress run
```

Os resultados serão apresentados no terminal ao final da execução.

## Documentação e evidências

O projeto conta com os seguintes materiais complementares:

- **`Documentacao_Testes_Manuais.docx`:** documento destinado à documentação dos testes manuais.
- **`Evidências/`:** pasta destinada ao armazenamento de capturas de tela e registros das execuções.
- **`README.md`:** apresentação do projeto, descrição dos cenários automatizados e instruções de execução.

## Considerações finais

Este projeto representa uma prática de aplicação de conceitos de Quality Assurance (QA) em testes de API, abrangendo operações CRUD — criação, consulta, atualização e exclusão de dados —, autenticação, validação de respostas e verificação dos resultados das operações.

A combinação entre testes manuais e automatizados permite exercitar diferentes abordagens de validação, desenvolver a capacidade de identificar comportamentos inesperados e estruturar testes de forma organizada e reutilizável.

**Projeto desenvolvido para fins de estudo e construção de portfólio na área de testes de software e Quality Assurance.**

## API utilizada

[Restful Booker — API de demonstração](https://restful-booker.herokuapp.com/)

