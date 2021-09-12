import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppWrapper } from '../context/state';
import { StyleSheetManager } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager disableVendorPrefixes={true}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </StyleSheetManager>
  );
}
export default MyApp;
