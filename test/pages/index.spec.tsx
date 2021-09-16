import React from 'react';
import Home from '../../pages/index';
import { render, fireEvent, createEvent, screen } from '../test-utils';
import { AppWrapper } from '../../context/state';

jest.mock('../../data/fuses.json');

describe('Home', () => {
  it('should match the snapshot', () => {
    const { asFragment, debug } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  describe('search interactions', () => {
    it('should return a list of matches when the user searches', async () => {
      render(
        <AppWrapper>
          <Home />
        </AppWrapper>
      );

      const input = await screen.getByLabelText('Search for a fuse');
      fireEvent.keyUp(input, {
        key: '5',
        code: 'Digit5',
        target: { value: '5' },
      });
      fireEvent.keyUp(input, {
        key: '2',
        code: 'Digit2',
        target: { value: '52' },
      });

      const buttons = await screen.getAllByRole('button');
      const lists = await screen.getAllByRole('definition');

      expect(buttons.length).toBe(7);
      expect(lists.length).toBe(2);
      expect(lists[0].textContent).toBe('Central locking system');
      expect(lists[1].textContent).toBe(
        'Central locking system (only touring)'
      );
    });

    it('should return a list of all results when the search input is emptied', async () => {
      render(
        <AppWrapper>
          <Home />
        </AppWrapper>
      );

      const input = await screen.getByLabelText('Search for a fuse');
      fireEvent.keyUp(input, {
        key: '5',
        code: 'Digit5',
        target: { value: '5' },
      });
      fireEvent.keyUp(input, {
        key: '2',
        code: 'Digit2',
        target: { value: '52' },
      });

      const buttons = await screen.getAllByRole('button');
      const lists = await screen.getAllByRole('definition');

      expect(buttons.length).toBe(7);
      expect(lists.length).toBe(2);

      fireEvent.keyUp(input, {
        key: 'Backspace',
        code: 'Backspace',
        target: { value: '' },
      });

      const noSearchButtons = await screen.getAllByRole('button');
      const noSearchLists = await screen.getAllByRole('definition');

      expect(noSearchButtons.length).toBe(23);
      expect(noSearchLists.length).toBe(11);
    });

    it('should not submit the form when the enter key is pressed', async () => {
      render(
        <AppWrapper>
          <Home />
        </AppWrapper>
      );

      const input = await screen.getByLabelText('Search for a fuse');
      const submitEvent = createEvent.submit(input);
      expect(submitEvent.defaultPrevented).toBe(false);

      fireEvent(input, submitEvent);

      expect(submitEvent.defaultPrevented).toBe(true);
    });

    describe('when no results are found', () => {
      it('should return an error if a number greater than the maximum fuse is entered', async () => {
        render(
          <AppWrapper>
            <Home />
          </AppWrapper>
        );

        const input = await screen.getByLabelText('Search for a fuse');
        fireEvent.keyUp(input, {
          key: '7',
          code: 'Digit7',
          target: { value: '7' },
        });
        fireEvent.keyUp(input, {
          key: '2',
          code: 'Digit2',
          target: { value: '72' },
        });

        const buttons = await screen.queryAllByRole('button');
        const lists = await screen.queryAllByRole('definition');
        const errorParagraph = await screen.getAllByText(
          'No fuses were found for fuse number 72. Note: fuses 1-4, 16-21 are empty as standard and 71 is the highest fuse.'
        );

        expect(buttons.length).toBe(0);
        expect(lists.length).toBe(0);
        expect(errorParagraph.length).toBe(1);
      });
    });
  });
});
