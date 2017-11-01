import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import { HeaderComponent } from '../../components/HeaderComponent';

test('Should render Header correctly', () => {
	const wrapper = shallow(<HeaderComponent logout={ () => {} }/>);
	// expect(toJSON(wrapper)).toMatchSnapshot();
	expect(wrapper).toMatchSnapshot();

	// expect(wrapper.find('h1').length).toBe(1);
	// expect(wrapper.find('h1').text()).toBe('Expensify');
});

test('Should call logout on button click', () => {
	const logoutSpy = jest.fn();
	const wrapper = shallow(<HeaderComponent logout={ logoutSpy }/>);
	wrapper.find('button').simulate('click');
	expect(logoutSpy).toHaveBeenCalled()
});
