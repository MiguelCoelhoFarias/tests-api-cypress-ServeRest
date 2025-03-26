import { faker } from '@faker-js/faker';

export function productValid() {
    return {
        nome: faker.commerce.product(),
        price: faker.number.int(),
        descricao: faker.lorem.words(),
        quantidade: faker.number.int()
    }
}

export function validIdProduct() {
    return {
        id: Cypress.env("PRODUCT_ID")
    }
}

export function invalidProductId() {
    return faker.database.mongodbObjectId()
}