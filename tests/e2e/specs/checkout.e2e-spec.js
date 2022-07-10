// https://docs.cypress.io/api/table-of-contents

import { StickersOptions } from "../../../src/utils/Constants";

describe("home test", () => {
  it("test images visible", () => {
    cy.visit("/checkout");
    cy.get("img").should("be.visible");
  });

  it("test strings", () => {
    cy.visit("/checkout");
    cy.contains("Quais adesivos");
    cy.contains("Quantos adesivos de cada?");
    cy.contains("Observações");
    cy.contains("Forma de pagamento");
  });

  it("test buttons", () => {
    cy.visit("/checkout");
    cy.contains("button", "Enviar");
  });

  it("test stickers quantity", () => {
    cy.visit("/checkout");
    cy.get(".plus-icon").click().click();
    cy.get('input[class="stickers-quantity-input"]').should("have.value", 2);

    cy.get(".minus-icon").click();
    cy.get('input[class="stickers-quantity-input"]').should("have.value", 1);
  });

  it("test observations textarea", () => {
    cy.visit("/checkout");
    cy.get('textarea[class="base-textarea-textarea"]').type("teste");
    cy.get('textarea[class="base-textarea-textarea"]').should(
      "have.value",
      "teste"
    );
  });

  it("test witch stickers count", () => {
    cy.visit("/checkout");
    cy.get("input[type='checkbox']").should(
      "have.length",
      StickersOptions.length
    );
  });

  it("mark checkboxes", () => {
    cy.visit("/checkout");

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
    cy.visit("/checkout");
    cy.get("div[class='payment-item'][id='0']").click();
    cy.get("div[class='payment-item'][id='2']").click();

    cy.get("div[class='payment-item selected'][id='2']").should("be.visible");
  });

  it("test general checkout", () => {
    cy.visit("/checkout");

    const randomNumbers = generateRandomNumberNotRepeat(
      StickersOptions.length,
      3
    );

    cy.get(`input[id='${randomNumbers[0]}']`).check();
    cy.get(`input[id='${randomNumbers[1]}']`).check();

    cy.get(".plus-icon").click().click();

    cy.get('textarea[class="base-textarea-textarea"]').type("teste");
    cy.get("div[class='payment-item'][id='2']").click();

    cy.get("button[class='send-data-btn']").click();
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
