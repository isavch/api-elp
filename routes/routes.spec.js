const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);

describe('GET /products', () => {
  it('should return all products', (done) => {
    chai.request(server).get('/products').end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});
