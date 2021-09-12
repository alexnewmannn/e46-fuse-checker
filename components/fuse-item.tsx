import styled, { keyframes, css } from 'styled-components';
import { useAppStateContext, useAppDispatchContext } from '../context/state';

type FuseType = {
  activeFuse?: number;
  fuse?: number;
  isCurrentFuseActive: boolean;
};

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5)
  }
  100% {
    transform: scale(1)
  }
`;

const animation = () =>
  css`
    ${scaleUp} 0.3s linear;
  `;

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
  transform: scale(1);
  background: ${(props: FuseType) =>
    props.isCurrentFuseActive ? '#33a0d1' : '#e6e6e7'};
  animation: ${(props: FuseType) =>
    props.isCurrentFuseActive ? animation : ''};

  &:hover {
    background: #33a0d1;
  }
  &:nth-of-type(1n + 2) {
    margin-left: 10px;
  }
`;

type FuseItemType = {
  fuse: number;
  activeFuse?: number;
  key: number;
};

const FuseItem = ({ fuse }: FuseItemType) => {
  const appStateContext = useAppStateContext();
  const dispatch = useAppDispatchContext();
  console.log(dispatch, 'dispatch');
  const { activeFuse } = appStateContext;
  const isCurrentFuseActive = activeFuse === fuse;

  const setActiveFuse = (activeFuse: number) =>
    dispatch({
      type: 'SET_ACTIVE_FUSE',
      payload: {
        activeFuse,
      },
    });

  return (
    <Fuse
      type="button"
      isCurrentFuseActive={isCurrentFuseActive}
      onClick={setActiveFuse.bind(this, fuse)}
      data-isactive={isCurrentFuseActive}
    >
      {fuse}
    </Fuse>
  );
};

export default FuseItem;
