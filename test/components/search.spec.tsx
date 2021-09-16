import React from 'react';
import { axe } from 'jest-axe';
import Search from '../../components/search';
import { render } from '../test-utils';

jest.mock('../../data/fuses.json');

describe('Search', () => {
  it('should match the snapshots', () => {
    const { asFragment, debug } = render(<Search />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Search />, {});
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
