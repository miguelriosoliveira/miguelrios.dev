import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Miguel Rios</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Header>
				<Link href="/">Home</Link>
				<Link href="/portfolio">Portfolio</Link>
			</Header>

			<Component {...pageProps} />

			<GlobalStyle />
		</ThemeProvider>
	);
}
