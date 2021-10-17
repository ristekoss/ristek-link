import request from "supertest";
import fetchMock from "jest-fetch-mock";

import shortenApi from "../../pages/api/shorten";
import { setupServer } from "../utils";

describe("Shorten API tests", () => {
  let apiServer: ReturnType<typeof setupServer>;

  beforeAll(() => {
    apiServer = setupServer(shortenApi);

    fetchMock.resetMocks();
  });

  it("POST /api/shorten should return 200 OK", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ short_url: "foo", long_url: "bar" })
    );

    await request(apiServer)
      .post("/api/shorten")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
