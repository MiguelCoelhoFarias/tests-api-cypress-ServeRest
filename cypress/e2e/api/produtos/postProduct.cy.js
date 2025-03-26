/// <reference types="cypress" />
import { productValid } from "../../../fixtures/factory/productFactory";
import { getUserLoginValid } from "../../../fixtures/factory/userFactory";
import loginClient from "../../../support/clients/loginClient";
import productClient from "../../../support/clients/productClient";

describe('Testes de criacao de produtos', () => {

    let authorization;
    beforeEach(() => {
        let userAdmin = getUserLoginValid();
        loginClient.login(userAdmin.email, userAdmin.password)
            .then((response) => {
                authorization = response.body.authorization;
            })
    })

    it('Criar um produto com sucesso', () => {
        let newProduct = productValid();
        productClient.createProduct(
            newProduct.nome, 
            newProduct.price,
            newProduct.descricao, 
            newProduct.quantidade,
            authorization
        ).then((response) => {
            expect(response.status).to.be.equal(201)
            expect(response.body).to.not.null
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
            expect(response.duration).lessThan(3000)
        })
    });

    it('Deve falhar ao tentar criar produto passando nome vazio ', () => {
        let newProduct = productValid();
        productClient.createProduct(
            "", 
            newProduct.price,
            newProduct.descricao, 
            newProduct.quantidade,
            authorization
        ).then((response) => {
            expect(response.status).to.be.equal(400)
            expect(response.body).to.not.null
            expect(response.body).to.have.property('nome', 'nome não pode ficar em branco')
        })
    });

    it('Deve falhar ao tentar criar produto passando preco com formato invalido', () => {
        let newProduct = productValid();
        productClient.createProduct(
            newProduct.nome, 
            "",
            newProduct.descricao, 
            newProduct.quantidade,
            authorization
        ).then((response) => {
            expect(response.status).to.be.equal(400)
            expect(response.body).to.not.null
            expect(response.body).to.have.property('preco', 'preco deve ser um número')
        })
    });

    it('Deve falhar ao tentar criar produto passando descricao vazia', () => {
        let newProduct = productValid();
        productClient.createProduct(
            newProduct.nome, 
            newProduct.price,
            "", 
            newProduct.quantidade,
            authorization
        ).then((response) => {
            expect(response.status).to.be.equal(400)
            expect(response.body).to.not.null
            expect(response.body).to.have.property('descricao', 'descricao não pode ficar em branco')
        })
    });

    it('Deve falhar ao tentar criar produto passando quantidade em formato invalido', () => {
        let newProduct = productValid();
        productClient.createProduct(
            newProduct.nome, 
            newProduct.price,
            newProduct.descricao, 
            "",
            authorization
        ).then((response) => {
            expect(response.status).to.be.equal(400)
            expect(response.body).to.not.null
            expect(response.body).to.have.property('quantidade', 'quantidade deve ser um número')
        })
    });

})