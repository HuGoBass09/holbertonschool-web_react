import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("utils_tests", function () {
  describe("getFullYear", function () {
    it("Return a current year", function () {
      const year = getFullYear();
      expect(year).toEqual(new Date().getFullYear());
    });
  });

  describe("getFooterCopy", function () {

    it("Return a true message", function () {
      expect(getFooterCopy(true)).toEqual("Holberton School");
    });

    it("Return a false message", function () {
      expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });
  });

  describe("getLatestNotification", function () {
    it("Return correct element", function () {
      expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
    });
  });
});