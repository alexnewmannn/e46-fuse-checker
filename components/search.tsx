import styled from 'styled-components';
import { useAppStateContext } from '../context/state';

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MWrapper = styled.span`
  background: linear-gradient(
    135deg,
    #81c4ff 0%,
    #81c4ff 33%,
    #16588e 33%,
    #16588e 66%,
    #e7222e 66%,
    #e7222e 100%
  );
  height: 4.1rem;
`;

const Input = styled.input`
  font-weight: 400;
  line-height: 1.25;
  height: 3.5rem;
  margin-top: 0;
  padding: 5px;
  border: 2px solid #0b0c0c;
  border-radius: 0;
  appearance: none;
  width: 100%;

  &:focus {
    outline: 3px solid #81c4ff;
    outline-offset: 0;
    box-shadow: inset 0 0 0 1px black;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SearchFuses = () => {
  const { dispatch } = useAppStateContext();
  const emptyFuses = [1, 2, 3, 4, 16, 17, 18, 19, 20, 21];

  const updateFuse = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedFuse = parseInt(event.currentTarget.value);
    const activeFuse = Number.isNaN(parsedFuse) ? 0 : parsedFuse;
    const isValidValue = activeFuse > 0;

    if (event.currentTarget.value === '') {
      return dispatch({
        type: 'RESET_ACTIVE_FUSE',
        payload: {
          activeFuse: false,
          hideInactiveFuses: false,
        },
      });
    }

    if (emptyFuses.includes(activeFuse) || activeFuse > 71 || activeFuse <= 0) {
      return dispatch({
        type: 'SET_EMPTY_FUSE',
        payload: {
          activeFuse,
        },
      });
    }

    return dispatch({
      type: 'SET_ACTIVE_FUSE',
      payload: {
        activeFuse,
        hideInactiveFuses: isValidValue,
      },
    });
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      autoComplete="off"
    >
      <FormGroup>
        <Label htmlFor="search">Search for a fuse</Label>
        {/* <MWrapper> */}
        <Input id="search" onKeyUp={(e) => updateFuse(e)} />
        {/* </MWrapper> */}
      </FormGroup>
    </Form>
  );
};

export default SearchFuses;
