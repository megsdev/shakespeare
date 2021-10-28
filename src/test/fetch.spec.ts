import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
import axios from "axios";
import sinonChai from "sinon-chai";
import * as sinon from "sinon";
import { fetchAll, fetch } from "../fetch";
import { Review } from "../interfaces";
import config from "../config";

let expect = chai.expect;
chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.should();

let sandbox = sinon.createSandbox();

context("#fetchAll specs", () => {
  describe("When fetching all reviews successfully", () => {
    let result: Review[];
    const mockedResponse = [
      {
        rating: 0.8,
        publish_date: "2016-09-05T23:25:47.642350Z",
        id: "9783221620868",
        body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "Kaley Schiller",
      },
      {
        rating: 3.2,
        publish_date: "2016-09-04T23:25:47.642388Z",
        id: "9793364045824",
        body: "Can one desire too much of a good thing?.",
        author: "Fay Lemke",
      },
      {
        rating: 4.1,
        publish_date: "2016-09-03T23:25:47.642545Z",
        id: "9784620626604",
        body: "How bitter a thing it is to look into happiness through another man's eyes!",
        author: "Tatyana Olson",
      },
    ];

    const expected: Review[] = [
      {
        rating: 0.8,
        publishDate: new Date("2016-09-05T23:25:47.642350Z"),
        id: 9783221620868,
        body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "Kaley Schiller",
      },
      {
        rating: 3.2,
        publishDate: new Date("2016-09-04T23:25:47.642388Z"),
        id: 9793364045824,
        body: "Can one desire too much of a good thing?.",
        author: "Fay Lemke",
      },
      {
        rating: 4.1,
        publishDate: new Date("2016-09-03T23:25:47.642545Z"),
        id: 9784620626604,
        body: "How bitter a thing it is to look into happiness through another man's eyes!",
        author: "Tatyana Olson",
      },
    ];

    beforeEach(async function () {
      sandbox
        .stub(axios, "get")
        .returns(Promise.resolve({ data: mockedResponse }));
      result = await fetchAll();
    });

    afterEach(() => sandbox.restore());

    it("should call the correct url", () =>
      axios.get.should.have.been.calledWithExactly(config.apiUrl, {
        headers: { "x-api-key": config.apiAuthToken },
      }));

    it("should have returned the correct data", () =>
      result.should.deep.equal(expected));
  });

  describe("When fetching all reviews unsuccessfully", () => {
    let result: Review[];

    beforeEach(async function () {
      sandbox.stub(axios, "get").returns(Promise.reject("failure"));
      result = await fetchAll();
    });

    afterEach(() => sandbox.restore());

    it("should call the correct url", () =>
      axios.get.should.have.been.calledWithExactly(config.apiUrl, {
        headers: { "x-api-key": config.apiAuthToken },
      }));
    it("should be null", () => expect(result).to.be.null);
  });
});

context("#fetch specs", () => {
  describe("When fetching a single review successfully", () => {
    let result: Review;

    const mockedResponse = {
      rating: 0.8,
      publish_date: "2016-09-05T23:25:47.642350Z",
      id: "9783221620868",
      body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      author: "Kaley Schiller",
    };

    const expected: Review = {
      rating: 0.8,
      publishDate: new Date("2016-09-05T23:25:47.642350Z"),
      id: 9783221620868,
      body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      author: "Kaley Schiller",
    };

    const id = expected.id;

    beforeEach(async function () {
      sandbox
        .stub(axios, "get")
        .returns(Promise.resolve({ data: mockedResponse }));
      result = await fetch(id);
    });

    afterEach(() => sandbox.restore());

    it("should call the correct url", () =>
      axios.get.should.have.been.calledWithExactly(`${config.apiUrl}/${id}`, {
        headers: { "x-api-key": config.apiAuthToken },
      }));

    it("should have returned the correct data", () =>
      result.should.deep.equal(expected));
  });

  describe("When fetching a single review unsuccessfully", () => {
    let result: Review;
    const id = 1234;

    beforeEach(async function () {
      sandbox.stub(axios, "get").returns(Promise.reject("Totes failure...ya"));
      result = await fetch(id);
    });

    afterEach(() => sandbox.restore());

    it("should call the correct url", () =>
      axios.get.should.have.been.calledWithExactly(`${config.apiUrl}/${id}`, {
        headers: { "x-api-key": config.apiAuthToken },
      }));
    it("should be null", () => expect(result).to.be.null);
  });
});
