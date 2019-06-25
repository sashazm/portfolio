it("finds page title", function() {
  cy.visit("/")
  cy.get("#about").contains("SashaMiller")
})

it("menu toggle button opens and closes main menu", function() {
  cy.visit("/")
  cy.get(".sidebar__nav").should("be.hidden")
  cy.get(".nav-toggle").click()
  cy.get(".sidebar__nav").should("be.visible")
  cy.get(".nav-toggle").click()
  cy.get(".sidebar__nav").should("be.hidden")
})

it("rotator switches text", function() {
  cy.get(".intro__greeting-rotator").contains("Hello")
  cy.get(".intro__greeting-rotator").contains("Вiтаю Вас")
})
