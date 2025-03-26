/// <reference types="cypress" />
import { createdUser, invalidId, userValid } from "../../../fixtures/factory/userFactory";
import usersClient from "../../../support/clients/usersClient";


describe('Testes de editar usuario', () => {

    let createdUser = userValid();
    let userResponseId;
        beforeEach(() => {
            createdUser = userValid();
            usersClient.createUser(createdUser.nome, createdUser.email, createdUser.password, createdUser.administrador)
                .then((response) => {
                    userResponseId = response.body._id;
                })
        })


    it('Editar usuario com sucesso', () => {
       let attUser = userValid();
        usersClient.editUser(userResponseId, attUser.nome, attUser.email, attUser.password, attUser.administrador,)
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.not.null
                expect(response.body).to.have.property('message', 'Registro alterado com sucesso')
            })
            usersClient.deleteUser(userResponseId)
        });

        it('Deve falhar ao tentar passar usuario invalido', () => {
            let attUser = userValid();
            usersClient.editUser(userResponseId, "", attUser.email, attUser.password, attUser.administrador,)
                .then((response) => {
                    expect(response.status).to.equal(400)
                    expect(response.body).to.not.null
                    expect(response.body).to.have.property('nome', 'nome não pode ficar em branco')
                })
                usersClient.deleteUser(userResponseId)
            });
        
        it('Deve não alterar nenhuma informação do usuario existente', () => {
            usersClient.editUser(userResponseId, createdUser.nome, createdUser.email, createdUser.password, createdUser.administrador,)
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.not.null
                expect(response.body).to.have.property('message', 'Registro alterado com sucesso')
            })
            usersClient.deleteUser(userResponseId)
        });

    });