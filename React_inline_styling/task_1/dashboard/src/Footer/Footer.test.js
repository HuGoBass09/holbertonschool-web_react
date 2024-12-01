/**
 * @jest-environment jsdom
*/

import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  it('render a Footer component without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
	});

  it("Verify that the components at the very least render the text  Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("footer p")).toHaveLength(1);
    expect(wrapper.find("footer p").text()).toContain("Copyright");
  });
});