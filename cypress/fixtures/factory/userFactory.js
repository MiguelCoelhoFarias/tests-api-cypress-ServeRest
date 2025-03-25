import { faker } from '@faker-js/faker';


export function getUserLoginInvalid() {
    return {
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}

export function getUserLoginValid() {
    return {
        email: Cypress.env('DATA_USER_EMAIL'),
        password: Cypress.env('DATA_USER_PASSWORD')
    }
}