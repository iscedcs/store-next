import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { LocationOn } from '@mui/icons-material';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>ISCE Store</title>
				<meta
					name='description'
					content='ISCE Store UI'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/logo.ico'
				/>
			</Head>
			<main className={styles.main}>
				<div className={styles.center}>
					<Image
						className={styles.logo}
						src='/logo.svg'
						alt='Next.js Logo'
						width={150}
						height={37}
						priority
					/>
					<p className='font-light text-7xl ml-5'>STORES</p>
					<LocationOn />
				</div>
			</main>
		</>
	);
}
