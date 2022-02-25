import { Layout } from '$application/components/templates/Layout';
import { GlobalStyle } from '$application/theme/GlobalStyles';
import { ThemeProvider } from '$application/theme/ThemeProvider';
import type { AppProps } from 'next/app';
import '$application/theme/font.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
