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
      "oklch(91.72% 0.1254 172.56)",
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
      "oklch(0.3097 0.0265 228.78)",
      "oklch(0.26 0.024 228.78)",
      "oklch(0.22 0.020 228.78)",
      "oklch(0.18 0.015 228.78)",
    ],
  },

  black: "oklch(0.3097 0.0265 228.78)",
  white: "oklch(0.9911 0 0)",

  fontFamily: "Inter, sans-serif",

  lineHeights: {
    xs: "clamp(1.25, 1.2 + 0.2vw, 1.3)",
    sm: "clamp(1.25, 1.2 + 0.2vw, 1.3)",
    md: "clamp(1.3, 1.25 + 0.2vw, 1.35)",
    lg: "clamp(1.3, 1.25 + 0.3vw, 1.4)",
    xl: "clamp(1.35, 1.3 + 0.3vw, 1.45)",
  },

  fontSizes: {
    xs: "clamp(0.72rem, 0.7rem + 0.2vw, 0.79rem)",
    sm: "clamp(0.8rem, 0.8rem + 0.2vw, 0.889rem)",
    md: "clamp(0.95rem, 0.9rem + 0.2vw, 1rem)",
    lg: "clamp(1.05rem, 1rem + 0.3vw, 1.125rem)",
    xl: "clamp(1.1rem, 1.05rem + 0.3vw, 1.25rem)",
  },

  headings: {
    fontFamily: "Inter, sans-serif",
    sizes: {
      h1: {
        fontSize: "clamp(1.8rem, 1.3rem + 2vw, 2.027rem)",
        lineHeight: "clamp(1.05, 1.02 + 0.2vw, 1.15)",
      },
      h2: {
        fontSize: "clamp(1.6rem, 1.2rem + 1.6vw, 1.802rem)",
        lineHeight: "clamp(1.1, 1.05 + 0.2vw, 1.2)",
      },
      h3: {
        fontSize: "clamp(1.4rem, 1.1rem + 1.2vw, 1.602rem)",
        lineHeight: "clamp(1.1, 1.05 + 0.2vw, 1.2)",
      },
      h4: {
        fontSize: "clamp(1.2rem, 1rem + 1vw, 1.424rem)",
        lineHeight: "clamp(1.15, 1.1 + 0.2vw, 1.25)",
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
