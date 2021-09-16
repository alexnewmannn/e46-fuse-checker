import styled from 'styled-components';
import fusesData from '../data/fuses.json';
import { splitArrayToChunks } from '../utils/split-array-to-chunks';
import FuseItem from './fuse-item';
import { useAppStateContext } from '../context/state';

const Dl = styled.dl`
  margin-bottom: 0;

  &:nth-child(odd) {
    margin-right: 1.5rem;
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

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  width: 100%;
`;

type ItemWrapperType = {
  hideInactiveFuses?: boolean;
  isCurrentFuseActive?: boolean;
};

const ItemWrapper = styled.div<ItemWrapperType>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #e6e6e7;
  display: ${(props: ItemWrapperType) => {
    if (!props.hideInactiveFuses || props.isCurrentFuseActive) {
      return 'flex';
    } else {
      return 'none';
    }
  }};

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &:nth-child(1) {
    border-top: 0;
  }
`;

type AppProps = {
  groupSize: number;
};

const FuseList = ({ groupSize = 10 }: AppProps) => {
  const groups = splitArrayToChunks(fusesData, groupSize);
  const { state } = useAppStateContext();
  const { hideInactiveFuses, activeFuse, errors } = state;
  return (
    <ListWrapper>
      {errors.length > 0 && <div>{errors[0].message}</div>}
      {!errors.length &&
        groups.map((fuseGroup, i) => (
          <Dl key={i}>
            {fuseGroup.map((fuseItem, j) => (
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
        ))}
    </ListWrapper>
  );
};

export default FuseList;
