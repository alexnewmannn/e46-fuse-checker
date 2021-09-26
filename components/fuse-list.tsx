import styled from 'styled-components';
import fusesData from '../data/fuses.json';
import FuseItem from './fuse-item';
import Errors from './errors';
import { useAppStateContext } from '../context/state';

const Dl = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  width: 100%;

  margin-bottom: 0;
  margin-right: -1.5rem;
`;

const Dd = styled.dd`
  margin: 0;
`;

const Dt = styled.dt`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

type ItemWrapperType = {
  hideInactiveFuses?: boolean;
  isCurrentFuseActive?: boolean;
};

const ItemWrapper = styled.div<ItemWrapperType>`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  border-top: 1px solid #e6e6e7;
  margin-right: 1.5rem;
  display: ${(props: ItemWrapperType) => {
    if (!props.hideInactiveFuses || props.isCurrentFuseActive) {
      return 'flex';
    } else {
      return 'none';
    }
  }};
`;

const FuseList = () => {
  const { state } = useAppStateContext();
  const { hideInactiveFuses, activeFuse, errors } = state;

  if (errors.length > 0) {
    return <Errors errors={errors} />;
  }

  return (
    <Dl>
      {fusesData.map((fuseItem, j) => (
        <ItemWrapper
          key={j}
          hideInactiveFuses={hideInactiveFuses}
          isCurrentFuseActive={fuseItem.fuseNumbers.includes(activeFuse)}
        >
          <Dd>{fuseItem.equipmentName}</Dd>
          <Dt>
            {fuseItem.fuseNumbers.map((fuse: number, k: number) => (
              <FuseItem
                fuse={fuse}
                key={k}
                equipmentName={fuseItem.equipmentName}
              />
            ))}
          </Dt>
        </ItemWrapper>
      ))}
    </Dl>
  );
};

export default FuseList;
