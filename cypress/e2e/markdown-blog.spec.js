/// <reference types="Cypress" />

describe("Markdown blog", () => {
  it("Visit the blog", () => {
    cy.visit("/blog")
  })
})