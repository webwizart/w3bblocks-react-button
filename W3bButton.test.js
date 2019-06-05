import React from 'react';
import W3bButton from './W3bButton.component';
import Enzyme,{shallow, mount, render} from 'enzyme';

it('renders shallow without cratshing', () => {
  var wrapper = shallow(<W3bButton />);
  wrapper.simulate('click');
  expect(wrapper.hasClass('btn-primary')).toBeTruthy();
});
it('renders shallow without crashing', () => {
  var wrapper = shallow(<W3bButton />);
  expect(wrapper.hasClass('btn-medium')).toBeTruthy();
});
it('renders shallow  crashing', () => {
  var wrapper = shallow(<W3bButton />);
  expect(wrapper.text()).toEqual('button');
});
it('renders shallow without crashing', () => {
  var wrapper = shallow(<W3bButton />);
  expect(wrapper.props().type).toEqual('primary');
});``