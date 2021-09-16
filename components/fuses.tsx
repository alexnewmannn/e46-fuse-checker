import styled from 'styled-components';
import FuseItem from './fuse-item';

const FuseWrapper = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

const Fuses = () => {
  const fuses = Array.from(Array(71));
  return (
    <FuseWrapper>
      {fuses.map((fuse, i) => (
        <FuseItem fuse={i + 1} key={i} />
      ))}
    </FuseWrapper>
  );
};

export default Fuses;
// {
//   fuses.map((fuse, i) => (
//   ))
// }
