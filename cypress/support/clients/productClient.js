
const baseUrl = "http://localhost:3000";
const baseUrlProducts = "http://localhost:3000/produtos";
const baseUrlProductsId ="http://localhost:3000/produtos" + "/{_id}"

class productClient {
    getAllProducts() {
        return cy.request("GET", baseUrlProducts, {
            failOnStatusCode: false
        })
    }

    getProductById(idProduct) {
        return cy.request({
            method: "GET",
            url: `${baseUrlProducts}/${idProduct}`,
            failOnStatusCode: false
        })
    }


    createProduct(nome, preco, descricao, quantidade, authorization) {
        return cy.request({
            method: "POST",
            url: baseUrlProducts,
            body: {nome, preco, descricao, quantidade},
            headers: {
                Authorization: authorization
            },
            failOnStatusCode: false
        })
    }

    deleteProduct(idProduct, authorization) {
        return cy.request({
            method: "DELETE",
            url: `${baseUrlProducts}/${idProduct}`,
            headers: {
                Authorization: authorization
            },
            failOnStatusCode: false
        })
    }

    editProduct(idProduct, nome, preco, descricao, quantidade, authorization) {
        return cy.request({
            method: "PUT",
            url: `${baseUrlProducts}/${idProduct}`,
            body: {nome, preco, descricao, quantidade},
            headers: {
                Authorization: authorization
            },
            failOnStatusCode: false
        })
    }




} export default new productClient();
