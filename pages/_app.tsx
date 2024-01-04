import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Mono } from 'next/font/google'

const primaryFont = Roboto_Mono({ subsets: ['latin'], 
weight: ['400', '700'] 
})

function MyApp({ Component, pageProps }: AppProps) {
  return <main className={primaryFont.className}>
    <Component {...pageProps} />
    </main>
}

export default MyApp
