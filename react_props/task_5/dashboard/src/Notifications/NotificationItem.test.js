import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('renders correct html for type and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('data-priority')).toEqual('default');  // Corrigido para data-priority
    expect(wrapper.text()).toEqual('test');
  });

  it('renders correct html with dangerouslySetInnerHTML', () => {
    const htmlContent = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={htmlContent} type="default" />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});