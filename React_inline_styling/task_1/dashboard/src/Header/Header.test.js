/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("<Header />", () => {
  it("Header renders without any errors", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Verify that the components render img", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("header img")).toHaveLength(1);
  });

  it("Verify that the components render h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("header h1")).toHaveLength(1);
  });
})