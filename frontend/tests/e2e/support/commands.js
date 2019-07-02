Cypress.Commands.add("login", () => {
    
    const credential = {
        email: 'vagner@gmail.com',
        password: '123'
    }
    
    cy.request({
        method: 'POST',
        url: Cypress.env('URL_API') + '/login',
        body: {            
            email: credential.email,
            password: credential.password
        }
    })
    .then((resp) => {
        window.localStorage.setItem('token', resp.body.token);

        let user = {
            name: resp.body.name,
            email: credential.email
        }
        window.localStorage.setItem('user', JSON.stringify(user));
    })
});

Cypress.Commands.add('removeclients', () => {
    
    cy.login();
    
    cy.window().then(window => {
        
        let token = window.localStorage.getItem('token');
        cy.request({
            headers: {
                'x-acess-token': token
            },
            method: 'GET',
            url: Cypress.env('URL_API') + '/clients',
            body: {}
        })
        .then((resp) => {
            let clients = resp.body;
            for(let client of clients){
                cy.request({
                    headers: {
                        'x-acess-token': token
                    },
                    method: 'DELETE',
                    url: Cypress.env('URL_API') + '/clients',
                    body: {
                        '_id': client._id
                    }
                })
                .then((result) => {
                    expect(result.body._id).to.equal(client._id);
                })
            }
        })
    })
});