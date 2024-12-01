/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("<Login />", () => {
    it("Login renders without any errors", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.exists()).toEqual(true);
    });

    it("VVerify that the components renders 2 input tags", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find("div.body-login input")).toHaveLength(2);
    });

    it("Verify that the components renders 2 label tags", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find("div.body-login label")).toHaveLength(2);
    });
})