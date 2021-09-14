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

  describe('user interactions', () => {
    it('it should change colour of the fuses the user has clicked', async () => {
      render(
        <AppWrapper>
          <FuseList groupSize={4} />
        </AppWrapper>
      );

      const buttons = await screen.getAllByText('52');

      expect(buttons.length).toBe(2);

      expect(buttons[0]).toHaveStyle('background: #e6e6e7');
      expect(buttons[1]).toHaveStyle('background: #e6e6e7');

      fireEvent.click(buttons[0]);

      expect(buttons[0]).toHaveStyle('background: #33a0d1');
      expect(buttons[1]).toHaveStyle('background: #33a0d1');
    });
  });
});
