import { AppProps } from 'next/app';
import 'src/styles/theme.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
