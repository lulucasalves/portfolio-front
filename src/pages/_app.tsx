import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from '../store/config'
import { LangProvider } from '../store/Translate'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </Provider>
  )
}

export default MyApp
