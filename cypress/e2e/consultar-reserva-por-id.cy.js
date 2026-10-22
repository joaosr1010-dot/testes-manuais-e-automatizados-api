describe('Testes de API - Restful Booker', () => {
  it('Deve consultar uma reserva pelo ID', () => {
    cy.request({
      method: 'GET',
      url: 'https://restful-booker.herokuapp.com/booking/235',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('firstname');
      expect(response.body).to.have.property('lastname');
    });
  });
});