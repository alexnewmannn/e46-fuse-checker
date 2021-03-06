import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  &::before {
    content: '';
    width: 100%;
    max-width: 85rem;
    background: linear-gradient(
      135deg,
      #81c4ff 0%,
      #81c4ff 33%,
      #16588e 33%,
      #16588e 66%,
      #e7222e 66%,
      #e7222e 100%
    );
    height: 10px;
  }
`;

const Main = styled.main`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 85rem;
  // https://shadows.brumm.af/
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
  padding: 1.5rem;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Head>
        <title>E46 Fuse Checker</title>
        <meta
          name="description"
          content="A simple application to show all fuses within an e46, primarily used to show shared fuses and filter on a per-fuse basis."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
