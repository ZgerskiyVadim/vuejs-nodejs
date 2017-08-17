'use strict';
const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../../app');
const shortId = require('shortid');

let user = {
  userName: shortId() + 'userName',
  city: shortId() + 'city',
  email: shortId() + 'email',
  password: shortId() + 'password',
  dispatch: true,
};

describe('users', () => {
  it('should create user', done => {
    supertest(app)
      .post('/users')
      .send(user)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).have.property('status', 201);
        expect(res.body.userName).to.be.equal(user.userName);
        expect(res.body.city).to.be.equal(user.city);
        expect(res.body.dispatch).to.be.equal(user.dispatch);
        expect(res.body.email).to.be.equal(user.email);
        expect(res.body._id).to.be.a('string');
        expect(res.body.password).to.be.a('string');
        user = res.body;
        done();
      });
  });

  it('should autorisation user', done => {
    supertest(app)
      .post('/login')
      .send({
        userName: shortId() + 'userName',
        password: shortId() + 'password'
      })
      .end((err, res) => {
        if (err) {
          console.log('ERROR', err);
          return done(err);
        }
        expect(res.body.password).to.be.equal(user.password);
        expect(res.body.userName).to.be.equal(user.userName);
        expect(res.body.token).to.be.a('string');
        expect(res.body.user).to.be.an('object');
        done();
      });
  });

  it('should get all users', done => {
    supertest(app)
      .get('/users')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).have.property('status', 200);
        expect(res.body.length > 0).to.be.equal(true);
        expect(res.body.find((obj) => obj._id === user._id)).to.deep.equal(user);
        done();
      });
  });

  it('should get user by id', done => {
    supertest(app)
      .get(`/users/${user._id}`)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).have.property('status', 200);
        expect(res.body.userName).to.be.equal(user.userName);
        expect(res.body.city).to.be.equal(user.city);
        expect(res.body.dispatch).to.be.equal(user.dispatch);
        expect(res.body.email).to.be.equal(user.email);
        expect(res.body._id).to.be.equal(user._id);
        expect(res.body.password).to.be.a('string');
        done();
      });
  });

  it('should update user', done => {
    const userUpdate = {
      userName: shortId() + 'userName',
      city: shortId() + 'city',
      dispatch: false,
      email: shortId() + 'email',
      password: shortId() + 'password'
    };
    supertest(app)
      .put(`/users/${user._id}`)
      .send(userUpdate)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.ok).to.be.equal(1);
        expect(res.body.nModified).to.be.equal(1);
        expect(res.body.n).to.be.equal(1);
        done();
      });
  });

  it('should delete user', done => {
    supertest(app)
      .delete(`/users/${user._id}`)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).have.property('status', 200);
        expect(res.body.ok).to.be.equal(1);
        expect(res.body.n).to.be.equal(1);
        done();
      });
  });
});
