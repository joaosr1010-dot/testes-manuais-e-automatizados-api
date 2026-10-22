
describe('Testes de API - Restful Booker', () => {
    it('Deve excluir uma reserva', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                username: 'admin',
                password: 'password123',
            },
        }).then((authResponse) => {
            expect(authResponse.status).to.eq(200);

            const token = authResponse.body.token;

            cy.request({
                method: 'POST',
                url: 'https://restful-booker.herokuapp.com/booking',
                body: {
                    firstname: 'Joao',
                    lastname: 'Rodrigues',
                    totalprice: 111,
                    depositpaid: true,
                    bookingdates: {
                        checkin: '2026-11-01',
                        checkout: '2026-11-05',
                    },
                    additionalneeds: 'Breakfast',
                },
            }).then((createResponse) => {
                expect(createResponse.status).to.eq(200);

                const bookingId = createResponse.body.bookingid;
                expect(bookingId).to.be.a('number');

                cy.request({
                    method: 'DELETE',
                    url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
                    headers: {
                        Cookie: `token=${token}`,
                    },
                    failOnStatusCode: false,
                }).then((deleteResponse) => {
                    expect(deleteResponse.status).to.be.oneOf([200, 201, 204]);

                    cy.request({
                        method: 'GET',
                        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
                        failOnStatusCode: false,
                    }).then((getResponse) => {
                        expect(getResponse.status).to.eq(404);
                    });

                });

            });

        });
    });
});
