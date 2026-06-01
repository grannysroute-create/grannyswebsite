import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({

  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Granny's Route — RV Travel & Safety Resources" },
      { name: "description", content: "Granny's Route shares RV safety tools, free overnight stays, and travel stories to help RVers travel safer and slower." },
      { name: "author", content: "Granny Foor" },
      { name: "google-site-verification", content: "tkgWZcoDnPpZC8phrKCFTiS_D-_WHuz166ZoED8CZbo" },
      { property: "og:title", content: "Granny's Route — Adventure & RV Safety" },
      { property: "og:site_name", content: "Granny's Route" },
      { property: "og:description", content: "RV safety tools, free overnight stays, and travel stories from Granny Foor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Granny's Route — Adventure & RV Safety" },
      { name: "twitter:description", content: "RV safety tools, free overnight stays, and travel stories from Granny Foor." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ec9cb12d-fb12-4591-83a4-297e1067d17b/id-preview-1ce560d1--eacfd0e7-4fb7-4ba7-8400-27c03d76a80b.lovable.app-1779816797792.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ec9cb12d-fb12-4591-83a4-297e1067d17b/id-preview-1ce560d1--eacfd0e7-4fb7-4ba7-8400-27c03d76a80b.lovable.app-1779816797792.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: "Granny's Route",
              url: "https://grannysrvroute.lovable.app",
              description: "RV safety tools, free overnight stays, and travel stories from Granny Foor.",
            },
            {
              "@type": "Organization",
              name: "Granny's Route",
              url: "https://grannysrvroute.lovable.app",
              email: "grannysroute@gmail.com",
              description: "Helping RVers travel safer with practical tools and shared stories.",
            },
            {
              "@type": "SoftwareApplication",
              name: "RVBridgesafe",
              applicationCategory: "TravelApplication",
              operatingSystem: "iOS, Android",
              description: "Checks bridge heights to plan the safest RV route.",
            },
            {
              "@type": "SoftwareApplication",
              name: "GrannysRoute",
              applicationCategory: "TravelApplication",
              operatingSystem: "iOS, Android",
              description: "Safety-first navigational companion with free overnight stays.",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});



function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
