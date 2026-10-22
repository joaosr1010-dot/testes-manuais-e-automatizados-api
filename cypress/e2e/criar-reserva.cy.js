describe('Testes de API - Restful Booker', () => {
  it('Deve criar uma reserva', () => {
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
      expect(response.body).to.have.property('bookingid');
    });
  });
});