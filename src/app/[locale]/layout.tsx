import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import LocalSwitcher from "../components/LocalSwitcher";
import { Inconsolata } from "next/font/google";
import { ThemeProviders } from "../ThemeProvider";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Cursor from "../components/Cursor";

// Configura la fuente
const inconsolata = Inconsolata({
  subsets: ["latin", "latin-ext"], // Agrega todos los subconjuntos disponibles
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"], // Incluye todos los pesos
  style: ["normal"], // Agrega estilos normal e itálico
  variable: "--font-inconsolata", // Variable CSS opcional
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const serializedMessages = JSON.parse(JSON.stringify(messages));

  return (
    <html
      lang={locale}
      className={inconsolata.className}
      suppressHydrationWarning
    >
      <body className="bg-black text-white ">
        <NextIntlClientProvider messages={serializedMessages}>
          <ThemeProviders>
            {/* <Cursor /> */}
            {/* <LocalSwitcher /> */}
            {/* <ThemeSwitcher /> */}
            {children}
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
