import '../styles/globals.css'
import { TransactionProvider } from '../context/TranscationContext'

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  )
}

export default MyApp
