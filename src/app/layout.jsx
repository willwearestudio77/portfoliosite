import { Header } from '@/components/Header'
import clsx from 'clsx'
import { Inter, Lexend, Gochi_Hand } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})
const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  variable: '--font-gochi-hand',
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: {
    template: '%s - Jane Doe',
    default:
      'Jane - Developer, entrepreneur, and general technology enthusiast',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          'font-sans',
          inter.variable,
          lexend.variable,
          gochiHand.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
