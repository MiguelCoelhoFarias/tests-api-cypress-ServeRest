import { getUserLoginInvalid, getUserLoginValid } from "../../fixtures/factory/userFactory";
import loginClient from "../../support/clients/loginClient";

describe('Testes de login - ', () => {

 it.only('Realizar login de usuário com sucesso', () => {
    let dataUser = getUserLoginValid();
    loginClient.login(dataUser.email, dataUser.password)
        .then((response) => {
            cy.log(response.body)
            expect(response.status).to.equal(200);
            expect(response.body).not.null;
            expect(response.body).to.have.property('message', 'Login realizado com sucesso')
        });
 })

 it('Deve falhar ao tentar realizar login com dados invalidos', () => {
    let dataUser = getUserLoginInvalid();
    loginClient.login(dataUser.email, dataUser.password) 
    .then((response) => {
        expect(response.status).to.equal(401)
        expect(response.body).not.null;
        expect(response.body).to.have.property('message', 'Email e/ou senha inválidos')
    });
 })

 it('Deve falhar ao não preencher campo senha', () => {
    let dataUser = getUserLoginValid();
    loginClient.login(dataUser.email)
    .then((response) => {
        expect(response.status).to.equal(400)
        expect(response.body).not.null
        expect(response.body).to.have.property('password', 'password é obrigatório')
    ;
    })
 })

 it('Deve falhar ao não preencher campo nome de usuario', () => {
    let dataUser = getUserLoginValid();
    loginClient.login("",dataUser.password)
    .then((response) => {
        expect(response.status).to.equal(400)
        expect(response.body).not.null
        expect(response.body).to.have.property('email', 'email não pode ficar em branco')
    ;
    })
 })

})