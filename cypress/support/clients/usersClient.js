
const baseUrl = "http://localhost:3000";
const baseUrlUsers = "http://localhost:3000/usuarios";

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


}export default new usersClient();