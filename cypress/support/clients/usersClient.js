
const baseUrl = "http://localhost:3000";
const baseUrlUsers = "http://localhost:3000/usuarios";

class usersClient {

    getAllUsers() {
        return cy.request("GET", baseUrlUsers, {
            failOnStatusCode: false
        })
    }


}export default new usersClient();