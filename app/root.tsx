import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from "./tailwind.css?url";
import { ThemeProvider } from "providers/ThemeProvider";
import { NextUIProvider } from "@nextui-org/react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1 className="text-onNeutralBg bg-neutralBg">Neutral bg</h1>
        <h1 className="text-onNeutralBg bg-primary-500">primary bg</h1>

        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NextUIProvider>
        <Outlet />
      </NextUIProvider>
    </ThemeProvider>
  );
}
