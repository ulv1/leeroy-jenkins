var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello Leeroy Jenkins', function(done) {
    request(app).get('/').expect('Leeroy Jenkins - third commit - first node.js app', done);
  });
});
