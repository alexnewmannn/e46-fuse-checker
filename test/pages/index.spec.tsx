import React from 'react';
import Home from '../../pages/index';
import { render, fireEvent } from '../test-utils';

jest.mock('../../data/fuses.json');

describe('Home', () => {
  it('should match the snapshot', () => {
    const { asFragment, debug } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
