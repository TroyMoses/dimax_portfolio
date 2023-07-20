import './globals.css';

export const metadata = {
    title: 'Dimax Portfolio',
    description: 'Developed by TroyMoses',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                { children }
            </body>
        </html>
    )
}