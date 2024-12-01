/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("<Notifications />", () => {
  it("NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Verify that by passing dummy type and value props, it renders the correct html", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li")).toHaveLength(1);
    expect(wrapper.find("li").text()).toEqual("test");
    expect(wrapper.find("li").prop("data-notification-type")).toEqual("default");
  });

  it("Passing a html prop, it renders the correct html (for example", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
    expect(wrapper.find("li").html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
  });
});
