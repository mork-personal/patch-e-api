// const express = require('express');
// const request = require('supertest');
// const app = require('../app');

// describe('get juno 106 patch values', function() {

//   // Called once before any of the tests in this block begin.
//   before(function(done) {
//     app.listen(function(err) {
//       if (err) { return done(err); }
//       done();
//     });
//   });

//   it('should return 404 if data is not hex', function() {
//     request(app)
//       .get('/juno-106/patchValues?')
//       .set('Content-Type', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, function(err, res) {
//         if (err) { return done(err); }
//         callStatus = res.body.goodCall;
//         expect(callStatus).to.equal(true);
//         // Done
//         done();
//       });
//   });

// });