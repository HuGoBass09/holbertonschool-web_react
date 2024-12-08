import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}),
  },
  css: () => '',
}));

describe('<BodySectionWithMarginBottom />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
  });

  it('should render a BodySection component', () => {
    expect(wrapper.find(BodySection).length).toBe(1);
  });

  it('should pass the correct props to BodySection', () => {
    expect(wrapper.find(BodySection).prop('title')).toEqual('test title');
    expect(wrapper.find(BodySection).prop('children')).toEqual(<p>test children node</p>);
  });
});

