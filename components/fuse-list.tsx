import styled from 'styled-components';
import fusesData from '../data/fuses.json';
import FuseItem from './fuse-item';

const Dl = styled.dl`
  margin-right: 3rem;
  margin-bottom: 0;

  &:nth-child(odd) {
    margin-left: 3rem;
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

const FuseList: React.FC = () => {
  const fuseGroupLength = 10;
  // https://stackoverflow.com/a/19679493
  const groups = fusesData
    .map((item, index) => {
      return index % fuseGroupLength === 0
        ? fusesData.slice(index, index + fuseGroupLength)
        : null;
    })
    .filter(function (item) {
      return item;
    });

  return (
    <ListWrapper>
      {groups &&
        groups.map((fuseGroup, i) => (
          <Dl key={i}>
            {fuseGroup &&
              fuseGroup.map((fuseItem, j) => (
                <ItemWrapper key={j}>
                  <Dd>{fuseItem.equipmentName}</Dd>
                  <Dt>
                    {fuseItem.fuseNumbers.map((fuse, k) => (
                      <FuseItem fuse={fuse} key={k}>
                        {fuse}
                      </FuseItem>
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
