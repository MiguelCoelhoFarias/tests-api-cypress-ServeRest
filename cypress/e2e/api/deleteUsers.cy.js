/// <reference types="cypress" />
import { createdUser, userValid } from "../../fixtures/factory/userFactory";
import usersClient from "../../support/clients/usersClient";

describe('Testes de deletar usuario', () => {

    let createdUser = userValid();
    let userResponseId;
    beforeEach(() => {
        createdUser = userValid();
        usersClient.createUser(createdUser.nome, createdUser.email, createdUser.password, createdUser.administrador)
            .then((response) => {
                userResponseId = response.body._id;
            })
    })


    it('Deletar usuario com sucesso', () => {
        usersClient.deleteUser(userResponseId)
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).not.be.null
            expect(response.body).to.have.property('message', 'Registro excluído com sucesso')
        })
    });

    



})