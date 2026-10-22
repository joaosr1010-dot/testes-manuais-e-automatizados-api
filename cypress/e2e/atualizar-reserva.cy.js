
describe('Testes de API - Restful Booker', () => {
    it('Deve atualizar uma reserva', () => {
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
            }).then((response) => {
                expect(response.status).to.eq(200);

                const bookingId = response.body.bookingid;
                expect(bookingId).to.be.a('number');

                cy.request({
                    method: 'PUT',
                    url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
                    headers: {
                        Cookie: `token=${token}`,
                    },
                    body: {
                        firstname: 'Joao',
                        lastname: 'Rodrigues',
                        totalprice: 150,
                        depositpaid: true,
                        bookingdates: {
                            checkin: '2026-11-01',
                            checkout: '2026-11-05',
                        },
                        additionalneeds: 'Breakfast',
                    },
                }).then((updateResponse) => {
                    expect(updateResponse.status).to.eq(200);

                    cy.request({
                        method: 'GET',
                        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
                    }).then((getResponse) => {
                        expect(getResponse.status).to.eq(200);
                        expect(getResponse.body.totalprice).to.eq(150);
                    });
                });
            });
        });
    });
});
