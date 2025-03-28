/// <reference types="cypress" />
import { userValid } from "../../../fixtures/factory/userFactory";
import usersClient from "../../../support/clients/usersClient";

describe('Testes de criar usuario', () => {

    it('Deve criar um usuario com sucesso', () => {
        let user = userValid(); 
        usersClient.createUser(user.nome, user.email, user.password, user.administrador)
            .then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body).not.null
                expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
                expect(response.duration).lessThan(3000)
                usersClient.deleteUser(response.body._id);
            })
            

    });

    it('Deve falhar ao tentar criar usuario sem passar nome valido', () => {
        let user = userValid();
        usersClient.createUser("",user.email, user.password, user.administrador)
            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body).not.null
                expect(response.body).to.have.property('nome', 'nome não pode ficar em branco')
            })
    })

    it('Deve falhar ao tentar criar usuario sem passar email valido', () => {
        let user = userValid();
        usersClient.createUser(user.nome,"",user.password, user.administrador)
            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body).not.null
                expect(response.body).to.have.property('email', 'email não pode ficar em branco')
            })
    })

    it('Deve falhar ao tentar criar usuario sem passar senha valida', () => {
        let user = userValid();
        usersClient.createUser(user.nome,user.email,"", user.administrador)
            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body).not.null
                expect(response.body).to.have.property('password', 'password não pode ficar em branco')
            })
    })

    it('Deve falhar ao tentar criar usuario sem passar cargo valido', () => {
        let user = userValid();
        usersClient.createUser(user.nome,user.email,user.password, "")
            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body).not.null
            })
    })
})