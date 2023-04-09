// describe('Can you Sign up', function() {
//   it('User is allowed to Register.', function() {
//     cy.visit('http://localhost:3000')
//     cy.contains("Login").click()
//     cy.contains('Sign Up').click()
//     cy.get('#username').type('aleksi111',{force:true})
//     cy.get('#password').type('votkulinen',{force:true})
//     cy.get('#password-again').type('votkulinen',{force:true})
//     cy.get('#email').type('aleksi1@hotmale1.com',{force:true})
//     cy.contains('Sign up').click()
//   })
// })
describe('Creating a new account', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
    cy.contains("Login").click()
    cy.get('input:first').type('allu',{force:true})
    cy.get('input:last').type('testitesti',{force:true})
    cy.contains('Log in').click({force:true})
//    cy.wait(8000)
//    cy.get('alert').should('not.exist');
  })
  // it('User is allowed to add account.', function() {
  //   cy.contains('AddAccount').click()
  //   cy.get('#account-name').type('Paikallispankki',{force:true})
  //   cy.get('#account-balance').type('2500',{force:true})
  //   cy.get('[id=\'account-type\']').parent().click()
  //   cy.contains('Credit Card').click()
  //   cy.contains('Save').click()
  //   cy.contains('Accounts').click()
  //   cy.contains('Osuuspankki')
  // })
  //
  // it('User is allowed to add new categories.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('Add Category').click()
  //   cy.get('#category').type('Turhakkeet',{force:true})
  //   cy.contains('Save').click();
  //   cy.contains("Turhakkeet")
  // })
  // //
  // it('User is allowed to add new subcategories with goals.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('Add subcategory').click()
  //   cy.get('#Category').click();
  //   cy.get('[data-value="Turhakkeet"]').click();
  //   cy.get('#sub-category').type('Lapsivedenkeitin',{force:true})
  //   cy.get("#balance").type('666',{force:true})
  //   cy.get("#switch").click();
  //   cy.get("#ByDateGoal").click()
  //   cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root').eq(1).click();
  //   cy.contains('Jun').click();
  //   cy.get('button').contains("2023").click()
  //   cy.get("#budgetGoal").type("1000")
  //   cy.get("button").contains("Save").click()
  //   cy.contains("Lapsivedenkeitin")
  // })
  //
  // it('User is allowed to edit categories.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('Edit category').click()
  //   cy.get('#Category').click();
  //   cy.get('[data-value="Turhakkeet"]').click();
  //   cy.get('#category').type('Hassuttelu',{force:true})
  //   cy.contains('Save changes').click();
  // })

  // it('User is allowed to delete categories.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('Edit category').click()
  //   cy.get('#Category').click();
  //   cy.get('[data-value="Turhakkeet"]').click();
  //   cy.contains('Delete').click();
  // })

  //
  //
  // it('User is allowed to edit subcategories.', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('edit subcategory').click()
  //   cy.get('#SubCategory').click();
  //   cy.get('[data-value="Tissihiki"]').click();
  //   cy.get('#Category').click();
  //   cy.get('[data-value="Auto"]').click();
  //   cy.get('#sub-category').clear().type('MatinPesuneste',{force:true})
  //   cy.get("#Switch").click();
  //   cy.get("#ByMonth").click()
  //   cy.get("#budgetGoal").clear().type("1000")
  //   cy.get("button").contains("Save").click()
  //   cy.contains('Save changes').click();
  //   cy.contains("MatinPesuneste")
  //
  // })

  // it('User is allowed to budget', function() {
  //   cy.contains('Dashboard').click()
  //   cy.contains('Budget').click()
  //   cy.get('#fromSubcategory').click();
  //   cy.get('[data-value="VedenalainenPyykinpesukone"]').click();
  //   cy.get('#subcategory-name').click();
  //   cy.get('[data-value="Pyllytin"]').click();
  //   cy.get('#amount').type(153.55);
  //   cy.contains("Make budgeting").click()
  // })


  // it('User is allowed to add transactions via accounts view.', function() {
  //
  //   cy.contains('Accounts').click()
  //   cy.wait(1000)
  //   cy.contains('Add transaction').click()
  //   cy.get('#transactionName').type('Vaatekuluista',{force:true})
  //   cy.get('#inflow').type('30',{force:true})
  //   cy.get('#payee').type("äitis")
  //   cy.get('#memo').type('ostoksilla äiteen kanssa',{force:true})
  //   cy.get('#account-name').click();
  //   cy.get('[data-value="S-pankki"]').click();
  //   cy.get('#subcategory-name').click();
  //   cy.get('[data-value="Pyllytin"]').click();
  //   cy.contains('Add new transaction').click();
  // })

  it('User is allowed to add transactions under specific account.', function() {

    cy.contains('Accounts').click()
    cy.wait(1000)
    cy.contains('S-Pankki').click()
    cy.contains("Add transaction").click()
    cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root').click();
    cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.MuiPickersCalendarHeader-switchViewButton.css-12mkn7b-MuiButtonBase-root-MuiIconButton-root-MuiPickersCalendarHeader-switchViewButton').click();
    cy.get("button").contains("2025").click()
    cy.get('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeSmall.MuiPickersArrowSwitcher-button.css-jro82b-MuiButtonBase-root-MuiIconButton-root-MuiPickersArrowSwitcher-button').click();
    cy.contains("18").click()
    cy.get('#transactionName').type('Vaatekuluista',{force:true})
    cy.get('#inflow').type('30',{force:true})
    cy.get('#payee').type("äitis")
    cy.get('#memo').type('ostoksilla äiteen kanssa',{force:true})
    cy.get('#account-name').click();
    cy.get('[data-value="S-Pankki"]').click();
    cy.get('#subcategory-name').click();
    cy.get('[data-value="Lapsivedenkeitin"]').click();
    cy.contains('Add new transaction').click();
  })
})


