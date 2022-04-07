# Demonstração Cypress

### Índice
* *Objetivo*
* *Fundamentação*
* *Dados*
* *Prioridades atribuídas*
* *Técnicas aplicadas*
* *Metodologia utilizada*
* *Cenários desenvolvidos*
* *Comportamento esperado*
* *Codificação*
* *Evidências*
* *Análise de resultado*
---

### Objetivo

#### *Realizar a demostração de teste de validação de login desenvolvido no framework cypress*
---
### Fundamentação

#### *O teste consiste em validar comportamentos inadequados durante o login na plataforma Unifor Online, verificando cenários onde o login pode ser efetuado de maneira incorreta, seja por caracteres inválidos ou por motivos de segurança, por exemplo senha incorreta ou em branco, a automação vai realizar validações assertivas do comportamento previsto em regra de negócio, de tal forma que seja possível ter uma quantidade aceitável de validações que garanta qualidade da funcionalidade de login do software.*
---
### Dados
* Ambiente
    ##### *Homologação*
    ##### *Url: https://celula07.unifor.br/acesso/app/autenticacao*
* Tempo previsto para desenvolvimento
    ##### *12 horas*
* Tempo previsto para execução
    ##### *30 segundos*
* Framework 
    ##### *Cypress*
* Linguagem
    ##### *Java Script - Node JS*
* Número de cenários
    ##### *1 cenário positivo*
    ##### *9 cenários negativos*
    ##### Total 10 cenários
---
### Prioridades atribuídas
* *Execução bem sucedida*
* *Usuário incorreto*
* *Senha inválida*
---
### Técnicas aplicadas
#### Matriz de resultado
#### *Consiste em aplicar uma regra de validação da saída esperada, utilizando uma matriz para organizar o resultado do comportamento da funcionalidade.*
##### Matriz desenvolvida

|Login|Senha|Comportamento|
|:---:|:---:|:---:|
|1|1|1|
|1|0|0|
|0|1|0|
|0|0|0|
---
### Metodologia utilizada
#### Behavior Driven Development 
#### *Consiste em práticas que visa auxiliar na construção de um produto auxiliando os envolvidos na compreensão do que está sendo construído, através de análise do comportamento esperado de cada funcionalidade.*
---
### Cenários desenvolvidos
* Teste de login
 
        Feature: Unifor Online

         Scenario Outline: Realizando testes de login
            Given Que acesso a página do Unifor Online
            When Preencho o usuário e o password 
            Then Verifico se o elemento  contém a o valor esperado
---
### Comportamento esperado

|Login|Senha|Comportamento|
|:---:|:---:|:---:|
|válido|válida|sucesso|
|válido|inválida|falha|
|inválido|válida|falha|
|inválido|inválida|falha|
---
### Codificação
#### *Segue abaixo trecho do código dos cenários desenvolvidos, o trecho traz os passos do acesso ao site unifor on line, em seguida a autenticação do usuário e por último a validação do comportamento esperado.*

~~~javascript
Given('Que acesso a página do Unifor Online', ()=>{
    cy.visit('https://celula07.unifor.br/acesso/app/autenticacao') 
})

When('Preencho o usuário e o password', (user, password)=>{
    uniforOnline.login(user, password)
})

Then('Verifico se o elemento contém a o valor esperado', (element, message)=>{
    validacaoAssertiva.validacaologin(element, message)
})
 ~~~~
 ---

### Evidências
#### *Ao executar o framework cypress em modo headless, automaticamente será gravado um video com a evidência do teste realizado dentro da pasta cypress/videos, e no caso de erro em algum momento do teste além do video gravado também será gerado automaticamente um screenshot dentro da pasta cypress/screenshot do momento exato do erro*
---
### Análise de resultado
* Ferramenta
    ##### *CypressDashboard*
    ##### *Url: https://dashboard.cypress.io/organizations/6c49512c-72d8-4602-84da-80b528cfb8aa/projects*
* Periodicidade
    ##### *6 em 6 horas durante o periodo de validação*
