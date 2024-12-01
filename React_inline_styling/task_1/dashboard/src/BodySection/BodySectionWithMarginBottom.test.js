import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();


describe('<BodySectionWithMarginBottom />', () => {
  it('renders a <BodySectionWithMarginBottom /> component', () => {
		const wrapper = shallow(
			<BodySectionWithMarginBottom title="test title">
				<p>test children node</p>
			</BodySectionWithMarginBottom>
		);
		expect(wrapper.find(BodySection).length).toEqual(1);
		expect(wrapper.find(BodySection).props().title).toEqual('test title');
		expect(wrapper.find(BodySection).props().children.type).toEqual('p');
		expect(wrapper.find(BodySection).props().children.props.children).toEqual('test children node');
	});
});