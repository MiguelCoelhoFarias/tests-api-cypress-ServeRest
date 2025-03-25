
const baseUrl = "http://localhost:3000";
const baseUrlLogin = "http://localhost:3000/login";

class LoginClient {


    login(email,password) {
        return cy.request({
            method: 'POST',
            url: baseUrlLogin,
            body: {email, password},
            failOnStatusCode: false   
        }) 
    }


} export default new LoginClient();