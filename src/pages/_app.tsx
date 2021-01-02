import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Miguel Rios</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Header>
				<a href="/">Home</a>
				<a href="/portfolio">Portfolio</a>
			</Header>

			<Component {...pageProps} />

			<GlobalStyle />
		</ThemeProvider>
	);
};

export default MyApp;
