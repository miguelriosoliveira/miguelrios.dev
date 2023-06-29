import { Poppins } from 'next/font/google';
import classNames from 'classnames';
import { Header } from '@/components';
import Link from 'next/link';
import { Metadata } from 'next';
import './globals.css';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'Miguel Rios',
		template: 'Miguel Rios - %s',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={classNames(
					poppins.className,
					'h-screen text-gray-300 p-7 pt-4 bg-[url("/assets/me.webp")] bg-cover flex flex-col',
				)}
			>
				<Header>
					<Link className="hover:text-white transition-all" href="/">
						Home
					</Link>
					<Link className="hover:text-white transition-all" href="/portfolio">
						Portfolio
					</Link>
				</Header>
				{children}
			</body>
		</html>
	);
}
