/// <reference types="cypress" />
import { invalidProductId, productValid } from "../../../fixtures/factory/productFactory";
import { getUserLoginValid } from "../../../fixtures/factory/userFactory";
import loginClient from "../../../support/clients/loginClient";
import productClient from "../../../support/clients/productClient";


describe('Testes de deletar Produto', () => {

    let authorization;
    let productId;
    beforeEach(() => {
        let userAdmin = getUserLoginValid();
        loginClient.login(userAdmin.email, userAdmin.password)
            .then((response) => {
                authorization = response.body.authorization;
                let newProduct= productValid();
                productClient.createProduct(
                    newProduct.nome,
                    newProduct.price,
                    newProduct.descricao,
                    newProduct.quantidade,
                    authorization
                ).then((response) => {
                    productId = response.body._id;
                })
            })
    })

    it('Deletar produto com sucesso', () => {
        productClient.deleteProduct(productId, authorization)
            .then((response) => {
                expect(response.status).to.be.equal(200)
                expect(response.body).to.be.not.null
                expect(response.body).to.have.property('message', 'Registro excluído com sucesso')
            })
    });


    it('Deve falhar ao Deletar produto passando um id inexistente', () => {
        let idProduct = invalidProductId();
        productClient.deleteProduct(idProduct, authorization)
        .then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).to.be.not.null
            expect(response.body).to.have.property('message', 'Nenhum registro excluído')
        })
        productClient.deleteProduct(productId, authorization)
    })

    
    it('Deve falhar ao tentar deletar produto sem autorizacao', () => {
        productClient.deleteProduct(productId, "")
        .then((response) => {
            expect(response.status).to.be.equal(401)
            expect(response.body).to.be.not.null
            expect(response.body).to.have.property('message', 'Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
        })
        productClient.deleteProduct(productId, authorization)
    })


})