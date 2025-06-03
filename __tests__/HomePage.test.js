import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../src/HomePage';

describe('HomePage', () => {
  it('renders welcome message', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
