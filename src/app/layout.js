import './globals.css'

export const metadata = {
  title: 'Տանիս - Հայկական Ռեստորան',
  description: 'Հայկական ավանդական խոհանոց ժամանակակից մեկնաբանությամբ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hy">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
