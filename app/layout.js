
import './globals.css'

export const metadata = {
  title: 'Contact',
  description: 'Kontakt sa codewilderness.me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
