// https://docs.cypress.io/api/table-of-contents

import { StickersOptions } from "../../../src/utils/Constants";

describe("home test", () => {
  it("test images visible", () => {
    cy.visit("/purchase");
    cy.get("img").should("be.visible");
  });

  it("test strings", () => {
    cy.visit("/purchase");
    cy.contains("Quais adesivos");
    cy.contains("Quantos adesivos de cada?");
    cy.contains("Observações");
    cy.contains("Forma de pagamento");
  });

  it("test buttons purchase", () => {
    cy.visit("/purchase");
    cy.contains("button", "Enviar");
  });

  it("test stickers quantity", () => {
    cy.visit("/purchase");
    cy.get(".plus-icon").click().click();
    cy.get('input[class="stickers-quantity-input"]').should("have.value", 2);

    cy.get(".minus-icon").click();
    cy.get('input[class="stickers-quantity-input"]').should("have.value", 1);
  });

  it("test observations textarea", () => {
    cy.visit("/purchase");
    cy.get('textarea[class="base-textarea-textarea"]').type("teste");
    cy.get('textarea[class="base-textarea-textarea"]').should(
      "have.value",
      "teste"
    );
  });

  it("test witch stickers count", () => {
    cy.visit("/purchase");
    cy.get("input[type='checkbox']").should(
      "have.length",
      StickersOptions.length
    );
  });

  it("mark checkboxes", () => {
    cy.visit("/purchase");

    const randomNumbers = generateRandomNumberNotRepeat(
      StickersOptions.length,
      3
    );

    cy.get(`input[id='${randomNumbers[0]}']`).check().should("be.checked");
    cy.get(`input[id='${randomNumbers[1]}']`).check().should("be.checked");
    cy.get(`input[id='${randomNumbers[2]}']`).check().should("be.checked");

    cy.get("input[type='checkbox']").should("be.checked", 3);
  });

  it("test payment methods", () => {
    cy.visit("/purchase");
    cy.get("div[class='payment-item'][id='0']").click();
    cy.get("div[class='payment-item'][id='2']").click();

    cy.get("div[class='payment-item selected'][id='2']").should("be.visible");
  });

  it("test general checkout error - without data", () => {
    cy.visit("/purchase");
    cy.get("button[class='send-data-btn']").click();

    cy.contains("Preencha todos os campos necessários");
  });

  it("test general checkout error - with stickers select", () => {
    cy.visit("/purchase");

    const randomNumbers = generateRandomNumberNotRepeat(
      StickersOptions.length,
      1
    );

    cy.get(`input[id='${randomNumbers[0]}']`).check();
    cy.get("button[class='send-data-btn']").click();

    cy.contains("Preencha todos os campos necessários");
  });

  it("test all general checkout", () => {
    cy.visit("/");

    // Verifica se está na página inicial
    cy.get("button").contains("Comprar adesivos");
    // Avança para página de compra
    cy.get("button").contains("Comprar adesivos").click();

    const randomNumbers = generateRandomNumberNotRepeat(
      StickersOptions.length,
      3
    );

    // Seleciona os adesivos
    cy.get(`input[id='${randomNumbers[0]}']`).check();
    cy.get(`input[id='${randomNumbers[1]}']`).check();
    // Seleciona a quantidade
    cy.get(".plus-icon").click().click();
    // Adiciona uma observação
    cy.get('textarea[class="base-textarea-textarea"]').type("teste");
    // Seleciona a forma de pagamento
    cy.get("div[class='payment-item'][id='2']").click();

    // Envia os dados
    cy.get("button[class='send-data-btn']").contains("Enviar").click();

    // Verifica na página de checkout se os adesivos adicionados foram os corretos
    cy.contains(`${StickersOptions[randomNumbers[0]]}`);
    cy.contains(`${StickersOptions[randomNumbers[1]]}`);
    // Verifica a quantidade de adesivos adicionados
    cy.contains("2");
    // Verifica a observação
    cy.contains("teste");
    // Verifica a forma de pagamento
    cy.contains("Cartão de Débito");

    // Volta para a página de compra
    cy.get("button[class='send-data-btn']").contains("Voltar").click();
    // Seleciona outra forma de pagamento
    cy.get("div[class='payment-item'][id='1']").click();

    // Envia os dados
    cy.get("button[class='send-data-btn']").contains("Enviar").click();

    // Verifica a nova forma de pagamento
    cy.contains("Cartão de Crédito");
    // Confirma a compra
    cy.get("button[class='send-data-btn']").contains("Comprar").click();

    // Verifica se está na página de agradecimento
    cy.contains("Muito obrigado por sua compra!");
    // Clica no link de voltar para a página inicial
    cy.get("a").click();

    // Verifica se está na página inicial
    cy.get("button").contains("Comprar adesivos");
  });
});

function generateRandomNumberNotRepeat(limit, quantity) {
  const numbers = [];
  while (numbers.length < quantity) {
    const randomNumber = Math.floor(Math.random() * limit);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}
