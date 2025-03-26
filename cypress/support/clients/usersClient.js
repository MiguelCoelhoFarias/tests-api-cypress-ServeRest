
const baseUrl = "http://localhost:3000";
const baseUrlUsers = "http://localhost:3000/usuarios";
const baseUrlUserId ="http://localhost:3000/usuarios" + "/{_id}"
class usersClient {

    getAllUsers() {
        return cy.request("GET", baseUrlUsers, {
            failOnStatusCode: false
        })
    }

    createUser(nome, email, password, administrador) {
        return cy.request({
            method: "POST",
            url: baseUrlUsers,
            body: {nome, email, password, administrador},
            failOnStatusCode: false
        })
    }

    getUserById(idUser) {
        return cy.request({
            method: "GET",
            url: `${baseUrlUsers}/${idUser}`,
            failOnStatusCode: false
        })
    }

    getUserByName(nome) {
        return cy.request({
            method: "GET",
            url: baseUrlUsers,
            qs:{ nome },
            failOnStatusCode: false 
        })
    }

    getUserByEmail(email) {
        return cy.request({
            method: "GET",
            url: baseUrlUsers,
            qs:{ email },
            failOnStatusCode: false 
        })
    }

    getUserByPassword(password) {
        return cy.request({
            method: "GET",
            url: baseUrlUsers,
            qs:{ password },
            failOnStatusCode: false 
        })
    }

    getUserByAuthorization(administrador) {
        return cy.request({
            method: "GET",
            url: baseUrlUsers,
            qs:{ administrador },
            failOnStatusCode: false 
        })
    }


}export default new usersClient();