import React from 'react';
import W3bButton from './w3bButton.js';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders a typed W3bButton', () => {
  const component = shallow(<W3bButton theme='secondary' />);
  expect(component.props().theme).toEqual('secondary');
});

it('renders a small sized W3bButton', () => {
  const component = shallow(<W3bButton size='small' />);
  expect(component.props().className).toEqual('w3bbutton  btn-small ');
});

it('renders a large sized W3bButton', () => {
  const component = shallow(<W3bButton size='large' />);
  expect(component.props().className).toEqual('w3bbutton  btn-large ');
});

it('renders a W3bButton with custom value', () => {
  const component = mount(<W3bButton value="testButton" />);
  expect(component.props().value).toEqual('testButton');
});

it('renders a disabled W3bButton', () => {
  const component = shallow(<W3bButton disabled />);
  expect(component.props().className).toEqual('w3bbutton   disabled');
  expect(component.props().disabled).toBe(true);
});

it('renders a W3bButton with onClick which is called', () => {
  const mockCallBack = jest.fn();
  const component = shallow(<W3bButton onClick={mockCallBack} />);
  component.simulate('click');
  expect(mockCallBack).toBeCalled();
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
