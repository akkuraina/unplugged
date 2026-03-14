import './globals.css'
import CursorGlow from '@/components/CursorGlow'

export const metadata = {
  title: 'UNPLUGGED 3.0',
  description: 'An adventure 65 million years in the making',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}