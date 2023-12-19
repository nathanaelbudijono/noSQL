import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ThemeProvider attribute="class" defaultTheme="light">
        <main className="bg-neutral-700">
          <NextNProgress
            color="#29D"
            startPosition={0.3}
            height={2}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ThemeProvider>
    </main>
  );
}
