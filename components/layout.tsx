import Head from 'next/head';
import styled from 'styled-components';
import styles from '../styles/Layout.module.css';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  background: white;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 3rem;
  align-items: center;
  margin: auto;
  max-width: 120rem;
  box-shadow: 0 0 5rem rgba(0, 0, 0, 0.4);
  padding: 1rem;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper className={styles.wrapper}>
      <Head>
        <title>Create Next Asspp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
