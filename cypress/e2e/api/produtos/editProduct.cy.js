/// <reference types="cypress" />
import { productValid } from "../../../fixtures/factory/productFactory";
import { getUserLoginValid } from "../../../fixtures/factory/userFactory";
import loginClient from "../../../support/clients/loginClient";
import productClient from "../../../support/clients/productClient";


describe('Testes de editar produto', () => {
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


    it('Deve editar produto com sucesso', () => {
        let attProduct = productValid();
        productClient.editProduct(
            productId,
            attProduct.nome,
            attProduct.price,
            attProduct.descricao,
            attProduct.quantidade,
            authorization
        ).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).to.be.not.null
            expect(response.body).to.have.property('message', 'Registro alterado com sucesso')
            expect(response.duration).lessThan(3000)
        })
        productClient.deleteProduct(productId, authorization)
    });

    it('Deve falhar ao tentar editar produto sem autorizacao', () => {
        let attProduct = productValid();
        productClient.editProduct(
            productId,
            attProduct.nome,
            attProduct.price,
            attProduct.descricao,
            attProduct.quantidade,
            ""
        ).then((response) => {
            expect(response.status).to.be.equal(401)
            expect(response.body).to.be.not.null
            expect(response.body).to.have.property('message', 'Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
        })
        productClient.deleteProduct(productId, authorization)
    })

    it('Deve falhar ao tentar editar produto com formato invalido', () => {
        let attProduct = productValid();
        productClient.editProduct(
            productId,
            "",
            attProduct.price,
            attProduct.descricao,
            attProduct.quantidade,
            authorization
        ).then((response) => {
            expect(response.status).to.be.equal(400)
            expect(response.body).to.be.not.null
            expect(response.body).to.have.property('nome', 'nome não pode ficar em branco')
        })
        productClient.deleteProduct(productId, authorization)
    });
})