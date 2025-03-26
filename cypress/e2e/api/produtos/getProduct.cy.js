/// <reference types="cypress" />
import { productValid, validIdProduct } from "../../../fixtures/factory/productFactory";
import productClient from "../../../support/clients/productClient";


describe('Testes de obter produto', () => {

    it('Deve obter produtos com sucesso', () => {
        productClient.getAllProducts()
            .then((response) => {
                expect(response.status).to.be.equal(200)
                expect(response.body).to.not.null
                expect(response.duration).lessThan(3000)
            })
    });

    it('Deve obter produto por id com sucesso', () => {
        let idProduct = validIdProduct()
        productClient.getProductById(idProduct.id)
            .then((response) => {
                expect(response.status).to.be.equal(200)
                expect(response.body).to.not.null
                expect(response.duration).lessThan(3000)
            })
    });
})