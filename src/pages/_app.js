import '../styles/globals.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import { Inter } from '@next/font/google'
const myInter = Inter({
  weight: ['300', '400','500'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return <main className={myInter.className}><Component {...pageProps} /><ToastContainer autoClose={500} /></main>
}





