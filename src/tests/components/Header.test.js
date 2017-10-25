import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/HeaderComponent';

test('Should render Header correctly', () => {
	const wrapper = shallow(<Header/>);
	expect(toJSON(wrapper)).toMatchSnapshot();

	// expect(wrapper.find('h1').length).toBe(1);
	// expect(wrapper.find('h1').text()).toBe('Expensify');
});