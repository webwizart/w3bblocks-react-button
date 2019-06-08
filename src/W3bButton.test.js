import React from 'react';
import W3bButton from './w3bButton.js';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders a typed W3bButton', () => {
  const component = shallow(<W3bButton type='secondary' />);
  expect(component.props().type).toEqual('secondary');
});

it('renders a small sized W3bButton', () => {
  const component = shallow(<W3bButton size='small' />);
  console.log(component.props());
  
  expect(component.props().className).toEqual(' btn-small ');
});

it('renders a large sized W3bButton', () => {
  const component = shallow(<W3bButton size='large' />);
  expect(component.props().className).toEqual(' btn-large ');
});
