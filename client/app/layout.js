import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '../redux/provider'; 
import 'tailwindcss/tailwind.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Better Commerce',
  description: 'prueba tecnica',
}

export default function RootLayout({ children }) {
  return (
    <Providers>
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
    </Providers>
  )
}
