import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-installation.jpg";
import flexpackImg from "@/assets/flexpack-module.jpg";
import logisticsImg from "@/assets/logistics-helicopter.jpg";
import teamImg from "@/assets/team-onsite.jpg";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  Menu,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Swiss Pipe Installation – Kabelschutz-Rohrinstallationen in der Schweiz" },
      {
        name: "description",
        content:
          "Schweizer Experten für Kabelschutz-Rohrinstallationen. Effiziente Vormontage, vollständige Logistik (inkl. Helikopter), präzise Ausführung. Offerte in 24 h.",
      },
      { property: "og:title", content: "Swiss Pipe Installation – Kabelschutz-Rohrinstallationen" },
      { property: "og:description", content: "Vom Engineering bis zur Installation – schlüsselfertig, präzise, terminsicher." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Swiss Pipe Installation",
          telephone: "+41 79 917 20 99",
          email: "info@swisspipeinstallation.com",
          areaServed: "CH",
          description:
            "Schweizer Spezialist für Kabelschutz-Rohrinstallationen, Vormontage und Baustellen-Logistik.",
        }),
      },
    ],
  }),
});

const PHONE = "+41 79 917 20 99";
const PHONE_HREF = "tel:+41799172099";
const EMAIL = "info@swisspipeinstallation.com";
const MAIL_HREF = `mailto:${EMAIL}`;

function Home() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Stats />
      <Process />
      <WhyUs />
      <Team />
      <Testimonial />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ablauf", label: "Ablauf" },
    { href: "#team", label: "Team" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-primary">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
            <span className="text-sm">⟨⟩</span>
          </span>
          Swiss Pipe Installation
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            Offerte anfordern <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          <Menu className="h-6 w-6 text-primary" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-foreground">
                {l.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="block py-2 text-sm font-semibold text-primary">
              {PHONE}
            </a>
            <a href="#kontakt" onClick={() => setOpen(false)} className="mt-2 block rounded-md bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground">
              Offerte anfordern
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Kabelschutz-Rohrinstallation auf einer Schweizer Baustelle" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Swiss Made · seit 2018
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Kabelschutz-Rohre, <span className="text-accent">termingerecht</span> installiert.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Vom Engineering über die Vormontage bis zur Baustellen-Logistik per Helikopter – Ihr
            Schweizer Partner für effiziente, präzise Rohrinstallationen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition-transform hover:scale-[1.02]"
            >
              Kostenlose Offerte in 24 h <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-3 text-sm text-primary-foreground/85 sm:grid-cols-3">
            {["Antwort in 24 h", "Festpreis-Garantie", "Schweizweit im Einsatz"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Offizieller Partner & vertraut von Bauunternehmen in der ganzen Schweiz
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-muted-foreground">
          <span>SYMALIT MCAM AG</span>
          <span className="opacity-30">·</span>
          <span>AMANOVUM GmbH</span>
          <span className="opacity-30">·</span>
          <span>MINIMAXSOL</span>
          <span className="opacity-30">·</span>
          <span>LAURIA FOTOGRAFIE</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const items = [
    {
      icon: Target,
      title: "Kabelschutz-Rohrinstallation",
      text: "Verlegung von HDPE-Schutzrohren für Hoch- und Mittelspannungstrassen – präzise nach Vorgabe.",
      img: flexpackImg,
      alt: "Flexpack Block-Modul",
    },
    {
      icon: ShieldCheck,
      title: "Vormontage & Engineering",
      text: "Werkseitige Vormontage von Blockmodulen verkürzt Ihre Bauzeit vor Ort um bis zu 40 %.",
      img: heroImg,
      alt: "Vormontage Schutzrohre",
    },
    {
      icon: Truck,
      title: "Logistik & Helikoptertransport",
      text: "Vom Kleintransporter bis zum Helikopter – wir bringen das Material auch in alpines Gelände.",
      img: logisticsImg,
      alt: "Helikoptertransport von Rohren",
    },
  ];
  return (
    <section id="leistungen" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Leistungen</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Schlüsselfertige Rohrinstallation – aus einer Hand</h2>
          <p className="mt-4 text-muted-foreground">
            Drei Kerndienstleistungen, eine Verantwortung. Kein Pingpong zwischen mehreren Subunternehmern.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-elegant">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={it.img} alt={it.alt} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const stats = [
    { n: "150+", l: "abgeschlossene Projekte" },
    { n: "40%", l: "kürzere Bauzeit dank Vormontage" },
    { n: "24 h", l: "Reaktionszeit auf Anfragen" },
    { n: "100%", l: "Schweizer Qualitätsstandards" },
  ];
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-4xl font-bold text-accent sm:text-5xl">{s.n}</div>
            <div className="mt-2 text-sm text-primary-foreground/75">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Anfrage & Beratung", d: "Sie senden uns Pläne oder Eckdaten. Wir melden uns innerhalb von 24 h." },
    { n: "02", t: "Offerte & Engineering", d: "Transparente Festpreis-Offerte mit klarem Zeitplan und Materialliste." },
    { n: "03", t: "Vormontage", d: "Blockmodule werden in unserer Werkstatt vormontiert – Qualität geprüft." },
    { n: "04", t: "Installation vor Ort", d: "Unser Team verlegt termingerecht – inklusive Logistik bis ins alpine Gelände." },
  ];
  return (
    <section id="ablauf" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Ablauf</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">In 4 Schritten zur fertigen Installation</h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="font-display text-3xl font-bold text-accent/90">{s.n}</div>
              <h3 className="mt-3 text-base font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const points = [
    { i: Clock, t: "Effizienz steigern", d: "Präzise Planung und Vormontage sparen wertvolle Zeit auf der Baustelle." },
    { i: Truck, t: "Ganzheitliche Logistik", d: "Vom Kleintransporter bis zum Helikopter – wir liefern dorthin, wo gebaut wird." },
    { i: Users, t: "Versierte Mitarbeiter", d: "Erfahrene Installateure mit Schweizer Ausbildung und Sicherheitskultur." },
    { i: ShieldCheck, t: "Vertrauen & Genauigkeit", d: "Wir liefern, was wir zusagen – nachweisbar in jedem Projektabschnitt." },
  ];
  return (
    <section className="bg-background py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Warum Swiss Pipe Installation</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Wo die Arbeit für andere endet, arbeitet SPI weiter.</h2>
          <p className="mt-4 text-muted-foreground">
            Wir sind ein modernes Schweizer Unternehmen mit langjähriger Expertise in
            Rohrinstallationen. Unsere Innovation: Arbeitsabläufe vereinfachen, Projektzeiten
            verkürzen – ohne Kompromisse bei Qualität und Sicherheit.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.t} className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <p.i className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-elegant">
          <img src={teamImg} alt="Das Team der Swiss Pipe Installation auf der Baustelle" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */
function Team() {
  const members = [
    { name: "Danilo Tundo", role: "Installer & Customer Project Manager", phone: PHONE, email: EMAIL },
    { name: "Gaspare Dragotta", role: "Management Logistique", phone: PHONE, email: EMAIL },
    { name: "Daniele Villano", role: "Engineering & Customer PM · MCAM Symalit AG", phone: "+41 79 389 85 35", email: "daniele.villano@symalit.ch" },
  ];
  return (
    <section id="team" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Team</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ihre direkten Ansprechpartner</h2>
          <p className="mt-4 text-muted-foreground">
            Keine Hotline. Keine Warteschlange. Sprechen Sie direkt mit der Person, die Ihr Projekt
            betreut.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {members.map((m) => (
            <div key={m.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-5 text-base font-bold">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                <a href={`tel:${m.phone.replace(/\s|\(|\)/g, "")}`} className="flex items-center gap-2 text-foreground hover:text-accent">
                  <Phone className="h-4 w-4 text-muted-foreground" /> {m.phone}
                </a>
                <a href={`mailto:${m.email}`} className="flex items-center gap-2 break-all text-foreground hover:text-accent">
                  <Mail className="h-4 w-4 text-muted-foreground" /> {m.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIAL ---------------- */
function Testimonial() {
  return (
    <section className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Kundenstimme</p>
        <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          „Swiss Pipe Installation hat unsere Trasse zwei Wochen vor Termin fertiggestellt. Die
          Vormontage und die Helikopter-Logistik haben den Unterschied gemacht."
        </blockquote>
        <div className="mt-6 text-sm text-muted-foreground">
          Bauleiter · Energieversorgungsprojekt, Wallis
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA / CONTACT ---------------- */
function CTASection() {
  return (
    <section id="kontakt" className="bg-primary py-24 text-primary-foreground sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Kontakt</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Bereit für Ihr nächstes Projekt?</h2>
          <p className="mt-4 max-w-md text-primary-foreground/80">
            Schicken Sie uns Pläne oder eine kurze Beschreibung. Sie erhalten innerhalb von 24
            Stunden eine erste Einschätzung – kostenlos und unverbindlich.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href={PHONE_HREF} className="flex items-center gap-3 hover:text-accent">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10">
                <Phone className="h-4 w-4" />
              </span>
              {PHONE}
            </a>
            <a href={MAIL_HREF} className="flex items-center gap-3 break-all hover:text-accent">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10">
                <Mail className="h-4 w-4" />
              </span>
              {EMAIL}
            </a>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10">
                <MapPin className="h-4 w-4" />
              </span>
              Schweizweit im Einsatz
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const body = `Name: ${data.get("name")}%0AFirma: ${data.get("firma")}%0ATelefon: ${data.get("tel")}%0A%0A${data.get("msg")}`;
            window.location.href = `mailto:${EMAIL}?subject=Projektanfrage&body=${body}`;
          }}
          className="rounded-2xl bg-background p-6 text-foreground shadow-elegant sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name *" required />
            <Field name="firma" label="Firma" />
            <Field name="email" label="E-Mail *" type="email" required />
            <Field name="tel" label="Telefon" />
          </div>
          <div className="mt-4">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Projektbeschreibung *</label>
            <textarea
              name="msg"
              required
              rows={5}
              className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              placeholder="Standort, Trassenlänge, Termin…"
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.01]"
          >
            Offerte anfordern <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Antwort innerhalb von 24 Stunden · Ihre Daten bleiben vertraulich.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="font-display font-bold text-primary">Swiss Pipe Installation</div>
        <div>© {new Date().getFullYear()} Swiss Pipe Installation. Alle Rechte vorbehalten.</div>
        <div className="flex gap-5">
          <a href="#kontakt" className="hover:text-primary">Kontakt</a>
          <a href="#" className="hover:text-primary">AGB</a>
        </div>
      </div>
    </footer>
  );
}
