// cypress/e2e/testes.cy.js

import agiBlogPage from './agiBlogPage';



describe("Funcionalidade de busca do blog Agi", () => {
  beforeEach(() => {
    agiBlogPage.acessarPagina();
  });

  it("CT001 - Deve retornar artigos ao realizar busca com termo válido", () => {
    agiBlogPage.selecionarLupa();
    agiBlogPage.digitarBusca();
    agiBlogPage.validarResultadoBusca();
    agiBlogPage.selecionarPrimeiroResultado();
    agiBlogPage.validarConteudoArtigo();



  });

  it("CT002 - Deve informar ausência de resultados ao pesquisar por termo inexistente", () => {
    agiBlogPage.selecionarLupa();
    agiBlogPage.digitarBuscaInexistente();
    agiBlogPage.validarResultadoVazio();



  });

  it("CT003 - Deve realizar busca ao pressionar ENTER", () => {
    agiBlogPage.selecionarLupa();
    agiBlogPage.buscarComEnter();
    agiBlogPage.validarResultadoBusca();



  });



});
