import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { LocationOn } from '@mui/icons-material';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>ISCE Store</title>
				<meta
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
			<main>
				<div>
					<Image
						src='/logo.svg'
						alt='Next.js Logo'
						width={150}
						height={37}
						priority
					/>
					<p className='font-light text-7xl ml-5'>STORES</p>
					<LocationOn />
				</div>

				<div className="grid grid-cols-4">
					<div className="">
						<div className="bg-tertiary-100 h-10 w-[300px]"></div>
						<div className="bg-tertiary-200 h-10 w-[300px]"></div>
						<div className="bg-tertiary-300 h-10 w-[300px]"></div>
						<div className="bg-tertiary-400 h-10 w-[300px]"></div>
						<div className="bg-tertiary-500 h-10 w-[300px]"></div>
						<div className="bg-tertiary-600 h-10 w-[300px]"></div>
						<div className="bg-tertiary-700 h-10 w-[300px]"></div>
						<div className="bg-tertiary-800 h-10 w-[300px]"></div>
						<div className="bg-tertiary-900 h-10 w-[300px]"></div>
					</div>
					<div className="">
						<div className="bg-primary-100 h-10 w-[300px]"></div>
						<div className="bg-primary-200 h-10 w-[300px]"></div>
						<div className="bg-primary-300 h-10 w-[300px]"></div>
						<div className="bg-primary-400 h-10 w-[300px]"></div>
						<div className="bg-primary-500 h-10 w-[300px]"></div>
						<div className="bg-primary-600 h-10 w-[300px]"></div>
						<div className="bg-primary-700 h-10 w-[300px]"></div>
						<div className="bg-primary-800 h-10 w-[300px]"></div>
						<div className="bg-primary-900 h-10 w-[300px]"></div>
					</div>
					<div className="">
						
						<div className="bg-secondary-100 h-10 w-[300px]"></div>
						<div className="bg-secondary-200 h-10 w-[300px]"></div>
						<div className="bg-secondary-300 h-10 w-[300px]"></div>
						<div className="bg-secondary-400 h-10 w-[300px]"></div>
						<div className="bg-secondary-500 h-10 w-[300px]"></div>
						<div className="bg-secondary-600 h-10 w-[300px]"></div>
						<div className="bg-secondary-700 h-10 w-[300px]"></div>
						<div className="bg-secondary-800 h-10 w-[300px]"></div>
						<div className="bg-secondary-900 h-10 w-[300px]"></div>
					</div>
					<div className="">
						
						<div className="bg-white h-10 w-[300px] mb-8"></div>

						<div className="bg-info h-10 w-[300px]"></div>
						<div className="bg-warning h-10 w-[300px]"></div>
						<div className="bg-success h-10 w-[300px]"></div>
						<div className="bg-error h-10 w-[300px]"></div>

					</div>
				</div>
				
			</main>
		</>
	);
}
