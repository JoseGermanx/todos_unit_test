
import dotenv from 'dotenv'
dotenv.config()
import { use } from "chai";
import chaiHttp, { request } from "chai-http";
import app from "../app.js";
const chai = use(chaiHttp);
const port = process.env.NODE_ENV === 'test' ? process.env.TEST_PORT : process.env.PORT || 3100;


chai.should();

describe("GET /", () => {
  let server
  beforeEach(function (done) {
    server = app.listen(port, done); // Iniciar el servidor antes de las pruebas
    console.log(server)
  });

   afterEach(function (done) {
    if (server && server.close) {
      server.close(done); // Cerrar el servidor después de las pruebas
  } else {
      done();
  }
  });

  it("should have 200 OK", (done) => {
    chai.request
      .execute(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("should have a title ToDos en page", (done) => {
    chai.request
      .execute(server)
      .get("/")
      .end((err, res) => {
        res.text.should.include("ToDos");
        done();
      });
  });


});
