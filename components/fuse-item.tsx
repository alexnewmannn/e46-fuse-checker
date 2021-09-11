import styled from 'styled-components';
import { useAppStateContext, useAppDispatchContext } from '../context/state';

type FuseType = {
  activeFuse?: Number;
  fuse?: Number;
};

const Fuse = styled.button<FuseType>`
  appearance: none;
  border: 0;
  font-weight: bold;
  text-align: center;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
  background: ${(props: FuseType) =>
    props.activeFuse === props.fuse ? '#33a0d1' : '#e6e6e7'};

  &:hover {
    background: #33a0d1;
  }
  &:nth-of-type(1n + 2) {
    margin-left: 10px;
  }
`;

type FuseItemType = {
  fuse: Number;
  activeFuse?: Number;
  key: Number;
};

const FuseItem: React.FC<FuseItemType> = ({ fuse }) => {
  const appStateContext = useAppStateContext();
  const dispatch = useAppDispatchContext();
  const { activeFuse } = appStateContext;

  const setActiveFuse = (activeFuse: Number) =>
    dispatch({
      type: 'SET_ACTIVE_FUSE',
      payload: {
        activeFuse,
      },
    });

  return (
    <Fuse
      type="button"
      activeFuse={activeFuse}
      onClick={setActiveFuse.bind(this, fuse)}
      fuse={fuse}
    >
      {fuse}
    </Fuse>
  );
};

export default FuseItem;
