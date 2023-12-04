import './global.css'
import { VT323 } from 'next/font/google'

const vt323 = VT323({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

export const metadata = {
    title: 'Countdown'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={vt323.className}>
            <body>
                {children}
            </body>
        </html>
    )
}