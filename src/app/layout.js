import './globals.css'

export const metadata = {
  title: 'Skyjo',
  description: 'Skyjo card game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
