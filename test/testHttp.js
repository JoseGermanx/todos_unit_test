import { use } from 'chai'
import chaiHttp, { request } from 'chai-http'
import app from '../app.js';
const chai = use(chaiHttp)

chai.should();

describe('GET /', () => {
    it('should have 200 OK', done => {
      chai.request.execute(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('should have a title ToDos', done => {
      chai.request.execute(app)
        .get('/')
        .end((err, res) => {
          res.text.should.include('ToDos');
          done();
        });
    });
  });