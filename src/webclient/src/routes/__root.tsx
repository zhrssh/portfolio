import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { Anchor, createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Portfolio",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

const theme = createTheme({
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        c: "blue",
      },
    }),
  },
  primaryColor: "aquamarine",
  colors: {
    aquamarine: [
      "oklch(96.50% 0.0400 172.56)",
      "oklch(93.50% 0.0800 172.56)",
      "oklch(91.72% 0.1254 172.56)", // your original
      "oklch(85.00% 0.1650 172.56)",
      "oklch(78.00% 0.2000 172.56)",
      "oklch(72.00% 0.2300 172.56)",
      "oklch(66.00% 0.2450 172.56)",
      "oklch(60.00% 0.2350 172.56)",
      "oklch(54.00% 0.2150 172.56)",
      "oklch(48.00% 0.1900 172.56)",
    ],
    jetblack: [
      "oklch(0.98 0.002 228.78)",
      "oklch(0.93 0.004 228.78)",
      "oklch(0.87 0.006 228.78)",
      "oklch(0.75 0.010 228.78)",
      "oklch(0.60 0.015 228.78)",
      "oklch(0.45 0.020 228.78)",
      "oklch(0.3097 0.0265 228.78)", // original
      "oklch(0.26 0.024 228.78)",
      "oklch(0.22 0.020 228.78)",
      "oklch(0.18 0.015 228.78)",
    ],
  },
  black: "oklch(0.3097 0.0265 228.78)",
  white: "oklch(0.9911 0 0)",
  fontFamily: "Inter, sans-serif",
  lineHeights: {
    xs: "1.6",
    sm: "1.6",
    md: "1.6",
    lg: "1.6",
    xl: "1.6",
  },
  fontSizes: {
    xs: "0.79rem",
    sm: "0.889rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.125rem",
  },
  headings: {
    fontFamily: "Inter, sans-serif",
    sizes: {
      h1: {
        fontSize: "2.027rem",
      },
      h2: {
        fontSize: "1.802rem",
      },
      h3: {
        fontSize: "1.602rem",
      },
      h4: {
        fontSize: "1.424rem",
      },
    },
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
