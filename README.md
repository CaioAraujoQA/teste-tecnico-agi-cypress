# Automação de Testes com Cypress

## Cenários de Teste

### Cenário 1 - Realizar busca utilizando a lupa

Objetivo:

Validar que o usuário consegue realizar uma busca utilizando a lupa do site.

Passos automatizados:

1 - Acessar o site https://blog.agibank.com.br/

2 - Clicar no ícone da lupa de busca

3 - Digitar um termo válido na busca

4 - Pressionar Enter

5 - Validar que os resultados da busca são exibidos

6 - Acessar um dos resultados e validar se retorna dados na pagina.


### Cenário 2 - Realizar busca com termo inexistente

Objetivo:

Validar o comportamento do sistema quando o usuário realiza uma busca por um termo que não possui resultados.

Passos automatizados:

1 - Acessar o site https://blog.agibank.com.br/

2 - Clicar na lupa de busca

3 - Digitar um termo inexistente

4 - Pressionar Enter

5 - Validar que não existem resultados para a busca realizada e que a página continua carregada corretamente, sem apresentar erros ou quebra do site.


### Cenário 3 - Acessar um artigo através da busca

Objetivo:

Validar que o usuário consegue acessar um artigo a partir dos resultados da busca.

Passos automatizados:

1 - Acessar o site https://blog.agibank.com.br/

2 - Clicar na lupa de busca

3 - Pressionar Enter

4 - Validar que os resultados da busca são exibidos. 




---

# Pré-requisitos

- Node.js (preferencialmente versão LTS)
- npm (gerenciador de pacotes do Node.js)
- Cypress (instalado localmente no projeto)

---

# 1 - Instale Node.js

Acesse o site:

https://nodejs.org/pt

Faça o download e execute o instalador.

Após a instalação reinicie o computador.

Quando o sistema reiniciar siga para o próximo passo.

---

# 2 - Instale o VSCode

No navegador digite:

vscode download

ou acesse:

https://code.visualstudio.com/download

Após baixar execute o arquivo para instalar.

Entre na pasta do projeto, clique com o botão direito do mouse e selecione:

Abrir no Terminal

Digite o comando:

```
code .
```

e pressione Enter.

---

# 3 - Instalação das Dependências

Com o VSCode aberto dentro do projeto:

Clique em **Terminal** no canto superior e depois em **New Terminal**.

No terminal que abriu na parte inferior digite:

```
npm install
```

Esse comando instalará todas as dependências do projeto, incluindo o Cypress.

---

# 4 - Executar os Testes

Após instalar as dependências, execute o seguinte comando no terminal:

```
npx cypress open
```

Esse comando abrirá o **Cypress Test Runner**, onde você poderá selecionar e executar os testes individualmente ou todos juntos abrindo o navegador.

---

# 5 - Executar testes em modo headless

Para executar os testes diretamente no terminal sem abrir o navegador utilize:

```
npx cypress run
```

Esse comando executa todos os testes automaticamente.

---

# Execução automática no GitHub Actions

Este projeto possui execução automática de testes configurada no **GitHub Actions**.

Sempre que há alterações no repositório, o pipeline executa automaticamente os testes Cypress.

Para visualizar a execução dos testes no GitHub:

1 - Acesse o repositório no GitHub

2 - Clique na aba **Actions**

3 - Selecione o workflow chamado **Cypress Tests**

4 - Abra a execução mais recente para visualizar os passos do pipeline

Lá será possível verificar:

- Instalação das dependências
- Execução dos testes Cypress
- Status final da execução (sucesso ou falha)

Dessa forma é possível acompanhar a execução dos testes diretamente pelo GitHub sem necessidade de rodar o projeto localmente.
