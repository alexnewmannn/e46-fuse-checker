import React from 'react';
import FuseList from '../../components/fuse-list';
import { render, screen, fireEvent } from '../test-utils';
import fusesData from '../../data/fuses.json';
import { AppWrapper } from '../../context/state';

jest.mock('../../data/fuses.json');

describe('FuseList', () => {
  it('should match the snapshots', () => {
    const { asFragment, debug } = render(<FuseList groupSize={4} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('should generate a new DL per groupSize', () => {
    const { container } = render(<FuseList groupSize={4} />, {});
    expect(container.querySelectorAll('dl').length).toBe(3);
    expect(container.querySelectorAll('dd').length).toBe(11);
    expect(container.querySelectorAll('dt').length).toBe(11);
    // Make sure the amount of items in the dataset matches the amount of generated elements
    expect(fusesData.length).toBe(11);
  });
});
