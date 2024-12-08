import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

  describe('<BodySection />', () => {
	let wrapper;

	beforeEach(() => {
	  wrapper = shallow(
	  <BodySection title="test title">
	  <p>test children node</p>
	  </BodySection>
	  );
	});

	it('should render one h2 element that includes the text test title', () => {
	  expect(wrapper.contains(<h2>test title</h2>)).toBe(true);
  });
  it('should render one p element that includes the text test children node', () => {
	expect(wrapper.contains(<p>test children node</p>)).toBe(true);
});
});
