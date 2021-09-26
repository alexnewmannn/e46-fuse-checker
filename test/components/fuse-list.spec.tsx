import React from 'react';
import { axe } from 'jest-axe';
import FuseList from '../../components/fuse-list';
import { render, screen, fireEvent } from '../test-utils';
import fusesData from '../../data/fuses.json';
import { AppWrapper } from '../../context/state';

jest.mock('../../data/fuses.json');

describe('FuseList', () => {
  it('should match the snapshots', () => {
    const { asFragment, debug } = render(<FuseList />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('should generate the correct amount of elements', () => {
    const { container } = render(<FuseList />, {});
    expect(container.querySelectorAll('dl').length).toBe(1);
    expect(container.querySelectorAll('dd').length).toBe(11);
    expect(container.querySelectorAll('dt').length).toBe(11);

    // Make sure the amount of items in the dataset matches the amount of generated elements
    expect(fusesData.length).toBe(11);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<FuseList />, {});
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('user interactions', () => {
    it('it should change colour of the fuses the user has clicked', async () => {
      render(
        <AppWrapper>
          <FuseList />
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
