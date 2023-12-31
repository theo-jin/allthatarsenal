import './globals.css'
import { Inter } from 'next/font/google'
import { NaviBar } from './components/NaviBar'
import { Box } from './components/Box'
import { getServerSession } from 'next-auth';
import { authOptions } from "./../pages/api/auth/[...nextauth]"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ALLTHATARSENAL',

}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let session = await getServerSession(authOptions)
  
  return (
    <html lang="en">
      <body className={inter.className}>  
      <Box
    css={{
      maxW: "100%"
    }}
  > <NaviBar session={session}/>
      {children}   </Box></body>

    </html>
  )
}
