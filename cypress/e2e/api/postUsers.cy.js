/// <reference types="cypress" />
import { userValid } from "../../fixtures/factory/userFactory";
import usersClient from "../../support/clients/usersClient";

describe('Testes de criar usuario', () => {

    it('Deve criar um usuario com sucesso', () => {
        let user = userValid(); 
        usersClient.createUser(user.nome, user.email, user.password, user.administrador).then((response) => {
            cy.log(response.body)
            expect(response.status).to.equal(201)
            expect(response.body).not.null
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
            expect(response.duration).lessThan(3000)
        })

    });

    it('Deve falhar ao tentar criar usuario sem passar nome', () => {
        
    })
})