import styled from 'styled-components';
import fusesData from '../data/fuses.json';
import { useAppStateContext, useAppDispatchContext } from '../context/state';

const Dl = styled.dl`
  width: 80%;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #e6e6e7;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &:nth-child(1) {
    border-top: 0;
  }
`;

const Dd = styled.dd`
  margin: 0;

  @media (min-width: 768px) {
    align-self: center;
  }
`;

const Dt = styled.dt`
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

type FuseItemType = {
  activeFuse?: Number
  fuse: Number
};

const FuseItem = styled.button<FuseItemType>`
  appearance: none;
  border: 0;
  font-weight: bold;
  text-align: center;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
  background: ${(props: FuseItemType) => {
    console.log(props.activeFuse, props.fuse, 'hi there');
    return props.activeFuse === props.fuse ? '#33a0d1' : '#e6e6e7';
  }};

  &:hover {
    background: #33a0d1;
  }
  &:nth-of-type(1n+2) {
    margin-left: 10px;
  }
`;

const FuseList: React.FC = () => {
  const appStateContext = useAppStateContext();
  const dispatch = useAppDispatchContext();
  // const fuseGroupLength = 5;
  // const groups = fusesData.map((item, index) => {
  //   return index % fuseGroupLength === 0 ? fusesData.slice(index, index + fuseGroupLength) : null;
  //   }).filter(function(item){ return item;});

  const someThing = (fuse: Number) => (
    dispatch({
      type: 'TEST', payload: { activeFuse: fuse },
    })
  );

  console.log(fusesData);

  return (
    <Dl>
      {fusesData.map((fuseItem, i) => (
        <ItemWrapper key={i}>
          <Dd>{fuseItem.equipmentName}</Dd>
          <Dt>{fuseItem.fuseNumbers.map((fuse, j) => <FuseItem type="button" fuse={fuse} activeFuse={appStateContext.activeFuse} key={j} onClick={() => {
            someThing(fuse);
          }}>{fuse}</FuseItem>)}</Dt>
        </ItemWrapper>
      ))}
    </Dl>
  );
};

export default FuseList;
