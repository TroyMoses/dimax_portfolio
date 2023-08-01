import './globals.css';
import Link from "next/link";
const Head = require('next/head');
import icon from './public/favicon.ico';

export const metadata = {
    title: 'Dimax Engineering Company',
    description: 'Developed by TroyMoses',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <Head>
                <title>Dimax Engineering Company</title>
                <Link rel="icon" href='/favicon.icon' />
            </Head>
            <body>
                { children }
            </body>
        </html>
    )
};