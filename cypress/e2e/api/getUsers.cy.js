/// <reference types="cypress" />
import { createdUser, userValid } from "../../fixtures/factory/userFactory";
import usersClient from "../../support/clients/usersClient";


describe('Testes de obter usuarios', () => {
  
    let createdUser = userValid();
    let userResponseId;
    beforeEach(() => {
        createdUser = userValid();
        usersClient.createUser(createdUser.nome, createdUser.email, createdUser.password, createdUser.administrador)
            .then((response) => {
                userResponseId = response.body._id;
            })
    })

it('Listar todos os usuários com sucesso', () => {
    usersClient.getAllUsers()
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).not.null
            cy.log(response.body)
            
        })
    })
it('Listar usuario por id', () => {
    usersClient.getUserById(userResponseId)
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).not.null
            expect(response.body.nome).to.equal(createdUser.nome)
        })
    })

it('Listar usuario por nome', () => {
    usersClient.getUserByName(createdUser.nome) 
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).not.null
            expect(response.body.usuarios[0].nome).to.equal(createdUser.nome)

        })
});

it('Listar usuario por email', () => {
    usersClient.getUserByEmail(createdUser.email) 
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).not.null
            expect(response.body.usuarios[0].email).to.equal(createdUser.email)

        })
});

it('Listar usuario por senha', () => {
    usersClient.getUserByPassword(createdUser.password) 
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).not.null
            expect(response.body.usuarios[0].password).to.equal(createdUser.password)

        })
});

it('Listar usuario por cargo', () => {
    usersClient.getUserByAuthorization(createdUser.administrador) 
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).not.null
            cy.log(JSON.stringify(response.body))
        })
});

afterEach(() => {
    
})

});
