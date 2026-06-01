import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import heroBg from "@/assets/granny-hero.png";
import logo from "@/assets/grannys-route-logo.png";
import rangerSquadCover from "@/assets/ranger-squad-cover.jpg";

// Move static data outside component to prevent recreation on render
const socialLinks: { label: string; href: string; Icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }> }[] = [
  { label: "Facebook", href: "https://facebook.com/grannysroute", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/grannysroute", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@grannysroute", Icon: Youtube },
  { label: "Pinterest", href: "https://pinterest.com/grannysroute", Icon: PinterestIcon },
  { label: "TikTok", href: "https://tiktok.com/@grannysroute", Icon: TikTokIcon },
];

const quickLinks: { label: string; href: string }[] = [
  { label: "Amazon", href: "https://www.amazon.com" },
  { label: "Gumroad", href: "https://gumroad.com" },
  { label: "Walmart", href: "https://www.walmart.com" },
  { label: "Etsy", href: "https://www.etsy.com" },
  { label: "Upside", href: "https://www.upside.com" },
  { label: "GasBuddy", href: "https://www.gasbuddy.com" },
  { label: "Visible", href: "https://www.visible.com" },
  { label: "Kindle", href: "https://www.amazon.com/kindle-dbs/storefront" },
];

const trails = [
  { name: "GrannysRoute", distance: "", note: "The safety-first navigational companion." },
  { name: "Granny's RV Garage", distance: "", note: "Safety begins with our rig. Maintenance tracker and receipt storage." },
  { name: "RVBridgesafe", distance: "", note: "Checks for bridge heights for safest route." },
  { name: "Granny's RV Pre-trip Check", distance: "", note: "Pack up! Be road ready." },
  { name: "Granny's Solar Weekend Power Check", distance: "", note: "Will I have enough power?" },
];

// Calculate year once at module load to avoid recreating on every render
const CURRENT_YEAR = new Date().getFullYear();

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Granny's Route — An Adventure Awaits" },
      {
        name: "description",
        content:
          "Slow trails, warm fires, and routes passed down through generations. Plan your next adventure with Granny's Route.",
      },
      { property: "og:title", content: "Granny's Route — An Adventure Awaits" },
      {
        property: "og:description",
        content: "Slow trails, warm fires, and stories worth the walk.",
      },
    ],
  }),
});

function Index() {
  return (
    <div
      className="min-h-screen text-foreground overflow-x-hidden bg-background bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20 px-[5vw] sm:px-6 md:px-12 py-6 flex items-center justify-center gap-4">
        <span className="font-display italic text-[8vw] sm:text-4xl md:text-5xl text-primary tracking-tight leading-none whitespace-nowrap">
          Granny's Route
        </span>
      </header>


      {/* Hero */}
      <main>
      <section className="relative flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background/70" />



        <div className="relative z-10 px-[5vw] md:px-12 pt-[96px] max-w-3xl mx-auto text-center">
          <h1 className="sr-only">Granny's Route — RV Safety Tools and Travel Stories</h1>
          <p className="mt-[60pt] mb-8 text-lg md:text-xl font-semibold text-foreground/80">
            An adventure awaits — safe travels, warm fires, and memorable stories.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <a
              href="#trails"
              className="inline-block whitespace-nowrap w-[90vw] sm:w-auto sm:max-w-full px-4 sm:px-11 md:px-14 py-3 sm:py-5 md:py-7 rounded-full bg-primary text-primary-foreground text-[4.5vw] sm:text-3xl md:text-5xl font-display italic font-medium hover:bg-accent transition shadow-lg shadow-accent/20 text-center"
            >
              Granny's App Family
            </a>
          </div>

        </div>

        <div className="relative z-10 mt-8 px-6 md:px-12 pb-6 flex flex-col items-center text-center gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Est. by hand & by heart.
          </p>
        </div>
      </section>


      {/* Trails */}
      <section id="trails" className="px-6 md:px-12 pt-4 pb-10 md:pb-14 max-w-6xl mx-auto text-center">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Safer Travels:</p>
            <h2 className="font-display italic text-[0.96rem] md:text-[1.2rem] text-primary leading-tight">
              Tools  - Routing for Peace of Mind
            </h2>

          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
            {trails.map((t, i) => (
              <article
                key={t.name}
                className="group p-4 rounded-2xl bg-card border border-border hover:border-accent/40 transition text-center"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  <span className="text-xs text-accent">{t.distance}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-1">{t.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stories CTA */}
      <section className="px-4 sm:px-6 md:px-12 pt-6 pb-4 max-w-3xl mx-auto text-center">
        <a
          href="#stories"
          className="inline-block px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 rounded-full font-display italic text-2xl sm:text-4xl md:text-6xl text-foreground/70 hover:text-foreground transition"
        >
          Read our Stories →
        </a>
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-6">
            <img
              src={rangerSquadCover}
              alt="The $5 Ranger Squad book cover by Granny and Pappy Foor"
              className="w-28 md:w-36 rounded-md shadow-lg"
            />
            <span className="font-display italic text-accent text-xl md:text-3xl text-center">
              THE $5 RANGER SQUAD
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            available on{" "}
            <a
              href="https://www.amazon.com/s?k=The+%245+Ranger+Squad&i=digital-text"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition"
            >
              Kindle
            </a>{" "}
            and{" "}
            <a
              href="https://gumroad.com/search?query=The+%245+Ranger+Squad"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition"
            >
              Gumroad
            </a>
            .
          </p>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="px-6 md:px-12 py-12 bg-secondary/60 backdrop-blur-sm">

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">A note from Granny</p>
          <blockquote className="font-display italic text-lg md:text-2xl text-primary leading-relaxed text-center space-y-3">
            <p>
              I was the passenger while my loving, truck-driver husband, Terry, did all the driving. I realized how naive and vulnerable I was as a Solo RV traveler. I needed to reduce the stress! Be safe as possible! I researched safe travel, posts, blogs, etc.
            </p>
            <p>
              My head was filling with questions. Is my rig ready? Is my route safe for the RV? Are bridges an issue? Where can I stop free and safe?
            </p>
            <p>Finding answers was daunting with several dead-ends.</p>
            <p>
              The results are mobile ready, time saving, digital products like RVbridgesafe app and a grannysroute app for FREE OVERNIGHT STAYS!!!
            </p>
            <p>
              Love &amp; Prayers,
              <br />
              Granny Foor
            </p>
          </blockquote>
          <p className="mt-4 text-xs text-muted-foreground not-italic text-center">
            P.S. A paper map is a good backup plan!
          </p>
        </div>
      </section>

      {/* Journal / Join */}
      <section id="join" className="px-6 md:px-12 py-8 max-w-xl mx-auto text-center">
        <h2 className="font-display italic text-2xl md:text-3xl text-primary mb-3">
          Quick Links
        </h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {quickLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1 rounded-full bg-card border border-border text-xs text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <nav aria-label="Social media" className="mt-8 flex flex-wrap items-start justify-center gap-8">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 text-foreground hover:text-accent transition"
            >
              <Icon className="w-6 h-6" aria-hidden="true" />
              <span className="text-xs">{label}</span>
            </a>
          ))}
        </nav>
      </section>


      {/* Dedication */}
      <section id="dedication" className="px-6 md:px-12 py-12 md:py-16 bg-secondary/60 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Dedication</p>
          <div className="font-display italic text-lg md:text-2xl text-primary leading-relaxed space-y-3 text-center">
            <p>To Terry —</p>
            <p>my truck-driver, my cowboy, my tender-hearted Pappy.</p>
            <p>You taught us that every mile is better with love and when you</p>
            <p>Save some, Fix some, Fun some, and Give some.</p>
            <p>Your Giving jar was never empty.</p>
            <p>We're keeping it full for you.</p>
            <p>For Xander, Addie, and Bear —</p>
            <p>the best Ranger Squad a Granny could ask for.</p>
            <p>Keep wandering safe.</p>
            <p>And for every grandparent and grandchild</p>
            <p>learning to pay it forward, one jar at a time.</p>
            <p>
              With love,
              <br />
              Granny Foor
            </p>
          </div>
        </div>
      </section>
      </main>

      <footer className="px-6 md:px-12 py-8 border-t border-border flex flex-col items-center gap-6 text-xs text-muted-foreground">
        <img src={logo} alt="Granny's Route logo" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col items-center gap-1 text-sm text-foreground">
          <a href="https://grannysroute.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">grannysroute.org</a>
          <a href="mailto:grannysroute@gmail.com" className="hover:text-accent transition">grannysroute@gmail.com</a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full pt-4">
          <span>© {CURRENT_YEAR} Granny's Route. Walk gently.</span>
          <span className="font-display italic text-accent">An adventure awaits.</span>
        </div>
      </footer>
    </div>
  );
}

type IconProps = { className?: string; "aria-hidden"?: boolean | "true" | "false" };

const PinterestIcon = ({ className, ...rest }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.43.22-.93 1.4-5.94 1.4-5.94s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.02-.29 1.2.6 2.18 1.86 2.18 2.22 0 3.93-2.34 3.93-5.74 0-3-2.12-5.17-5.17-5.17-3.5 0-5.55 2.62-5.55 5.33 0 1.04.4 2.15.9 2.75a.3.3 0 0 1 .07.29l-.36 1.39c-.05.22-.19.27-.41.16-1.44-.67-2.35-2.76-2.35-4.44 0-3.64 2.65-6.98 7.65-6.98 4.02 0 7.13 2.86 7.13 6.68 0 3.99-2.52 7.21-6.02 7.21-1.17 0-2.27-.6-2.64-1.32l-.72 2.73c-.26 1.01-1.02 2.28-1.52 3.05A12 12 0 0 0 12 0z" />
  </svg>
);

const TikTokIcon = ({ className, ...rest }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.14V9.4a6.84 6.84 0 0 0-1-.07A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 11.37-3.86 6.34 6.34 0 0 0 6.38-6.25c0-.34 0-.7-.02-1.05a4.76 4.76 0 0 0 3.54-4.53v-3.2a8 8 0 0 1-4.63 1.48z" />
  </svg>
);
