import usersClient from "../../support/clients/usersClient";


describe('Testes de obter usuarios', () => {
  
    
it('Listar todos os usuários com sucesso', () => {
    usersClient.getAllUsers()
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).not.null
            cy.log(response.body)
        })

});

})