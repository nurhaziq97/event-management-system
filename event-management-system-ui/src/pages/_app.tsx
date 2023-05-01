import '@/styles/globals.css';
import '@/styles/fonts.css';
import type { AppProps } from 'next/app';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { ThemeProvider } from "@emotion/react";
import { UiTMTheme } from "@/themes/uitm-theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProSidebarProvider>
      <ThemeProvider theme={UiTMTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ProSidebarProvider>
  )
}
