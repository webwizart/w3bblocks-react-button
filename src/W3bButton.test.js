import React from 'react';
import W3bButton from './w3bButton.js/index.js';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

it('renders an attributeless W3bButton without crashing', () => {
  const component = renderer.create(<W3bButton />);
  let tree = component.toJSON();
  expect(component).toBeDefined();
});

it('renders a Disabled W3bButton', () => {
  const component = renderer.create(<W3bButton disabled />);
  let tree = component.toJSON();
  expect(tree.props.disabled).toBe(true);
  });

it('renders a typed W3bButton', () => {
  const component = shallow(<W3bButton type='secondary' />);
  expect(component.props().type).toEqual('secondary');
});

it('renders a small sized W3bButton', () => {
  const component = shallow(<W3bButton size='small' />);
  expect(component.props().size).toEqual('small');
});

it('renders a large sized W3bButton', () => {
  const component = shallow(<W3bButton size='large' />);
  expect(component.props().size).toEqual('large');
});
