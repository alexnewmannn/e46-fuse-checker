import styled from 'styled-components';

type errorType = {
  message: string;
  status?: number;
};

interface Errors {
  errors: errorType[];
}

const ErrorContainer = styled.ul`
  padding: 1rem;
  padding-left: 2.5rem;
  border: 2px solid #e7222e;
  margin-top: 1.5rem;

  li {
    font-weight: bold;
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 0;
    }
  }
`;

const Errors = ({ errors }: Errors) => {
  return (
    <ErrorContainer>
      {errors.map((error, i) => (
        <li key={i}>{error.message}</li>
      ))}
    </ErrorContainer>
  );
};

export default Errors;
