import React from 'react'

import './globals.css'
import { Header } from '@components/shared/header/header'

export const metadata = {
  title: 'Template app',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pt-BR">
    <body>
      <main className='bg-light-yellow min-h-screen text-dark-blue'>
        <Header/>
        {children}
      </main>
    </body>
  </html>
)

export default RootLayout
