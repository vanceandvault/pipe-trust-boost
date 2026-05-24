import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Check, Clock, Gift, Heart, Leaf, MapPin, Phone, Star, Truck } from "lucide-react";
import heroImg from "@/assets/saboreo-hero.jpg";
import boxImg from "@/assets/saboreo-box.jpg";
import craftImg from "@/assets/saboreo-craft.jpg";
import giftImg from "@/assets/saboreo-gift.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saboreo — Chocolate-Dipped Strawberries, Delivered Same-Day in Zurich" },
      { name: "description", content: "Handcrafted chocolate-covered strawberries delivered the same day in Zurich. Build your box, gift with a handwritten note. From CHF 45." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="font-display text-xl tracking-[0.3em] text-cream">
          SABOREO
        </a>
        <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.2em] text-cream/85 md:flex">
          <a href="#build" className="hover:text-gold transition">Build a Box</a>
          <a href="#gift" className="hover:text-gold transition">Gifts</a>
          <a href="#craft" className="hover:text-gold transition">Our Craft</a>
          <a href="#delivery" className="hover:text-gold transition">Delivery</a>
        </nav>
        <a
          href="#build"
          className="rounded-full bg-cream px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-cacao transition hover:bg-gold"
        >
          Order
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-cacao text-cream">
      <img
        src={heroImg}
        alt="Strawberry hand-dipped in dark chocolate with gold leaf"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        width={1600}
        height={1200}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e08]/95 via-[#1a0e08]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e08] via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-32">
        <div className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Handcrafted in Zürich · Est. 2024
          </div>

          <h1 className="font-display text-[3.25rem] leading-[0.95] md:text-[5.5rem]">
            Strawberries
            <br />
            dressed in <span className="italic-serif text-gold">fine chocolate.</span>
          </h1>

          <p className="mt-8 max-w-lg text-base text-cream/80 md:text-lg">
            Swiss berries, tempered single-origin chocolate, and three toppings of your
            choosing. Hand-dipped this morning. At your door tonight.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#build"
              className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-cacao transition hover:bg-gold"
            >
              Build your box
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#gift"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-sm uppercase tracking-[0.18em] text-cream transition hover:border-gold hover:text-gold"
            >
              Send as a gift
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-cream/70">
            <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-gold" /> Next slot 16:00–19:00</span>
            <span className="inline-flex items-center gap-2"><Truck className="h-3.5 w-3.5 text-gold" /> Same-day · CHF 7</span>
            <span className="inline-flex items-center gap-2"><Star className="h-3.5 w-3.5 text-gold" /> 4.9 · 240+ boxes</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 hidden text-right text-[10px] uppercase tracking-[0.3em] text-cream/50 md:block">
        Scroll · Saboreo No. 01
      </div>
    </section>
  );
}

/* ---------- Marquee trust ---------- */
function Marquee() {
  const items = [
    "Swiss-grown berries",
    "Single-origin chocolate",
    "Hand-decorated daily",
    "Same-day Zürich delivery",
    "Handwritten notes",
    "Allergen-aware",
  ];
  return (
    <div className="border-y border-foreground/10 bg-cream py-4 overflow-hidden">
      <div className="flex animate-[scroll_40s_linear_infinite] gap-12 whitespace-nowrap text-[11px] uppercase tracking-[0.3em] text-foreground/60">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

/* ---------- Builder ---------- */
type Size = { id: string; count: number; label: string; price: number };
type Chocolate = { id: string; label: string; tone: string };
type Topping = { id: string; label: string };

const SIZES: Size[] = [
  { id: "petite", count: 6, label: "Petite", price: 45 },
  { id: "classic", count: 9, label: "Classic", price: 65 },
  { id: "grand", count: 16, label: "Grand", price: 98 },
];
const CHOCOLATES: Chocolate[] = [
  { id: "milk", label: "Milk", tone: "#8b5a3c" },
  { id: "dark", label: "Dark 70%", tone: "#3a2118" },
  { id: "white", label: "White", tone: "#f3e8d2" },
  { id: "mixed", label: "Trio mix", tone: "linear-gradient(90deg,#8b5a3c,#3a2118,#f3e8d2)" },
];
const TOPPINGS: Topping[] = [
  { id: "coco", label: "Toasted coconut" },
  { id: "almond", label: "Roasted almond" },
  { id: "pistachio", label: "Crushed pistachio" },
  { id: "raspberry", label: "Freeze-dried raspberry" },
  { id: "swirl", label: "Chocolate swirl" },
  { id: "gold", label: "Edible gold leaf (+CHF 8)" },
];

function Builder() {
  const [size, setSize] = useState<Size>(SIZES[1]);
  const [chocolate, setChocolate] = useState<Chocolate>(CHOCOLATES[1]);
  const [toppings, setToppings] = useState<string[]>(["pistachio"]);

  const total = useMemo(() => {
    return size.price + (toppings.includes("gold") ? 8 : 0);
  }, [size, toppings]);

  const toggleTopping = (id: string) => {
    setToppings((cur) => {
      if (cur.includes(id)) return cur.filter((t) => t !== id);
      if (cur.length >= 3) return cur;
      return [...cur, id];
    });
  };

  return (
    <section id="build" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-berry">02 · The box</div>
            <h2 className="font-display text-5xl text-cacao md:text-7xl">
              Build it <span className="italic-serif text-berry">your way.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/70">
            Three steps. About forty seconds. Then we hand-dip and deliver — most boxes
            arrive within four hours of ordering.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Live preview */}
          <div className="relative order-2 lg:order-1 lg:sticky lg:top-8 lg:self-start">
            <div className="relative overflow-hidden rounded-sm shadow-card">
              <img src={boxImg} alt="Open Saboreo box" className="aspect-[4/5] w-full object-cover" width={1400} height={1750} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-cacao/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-cream">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Your box</div>
                <div className="mt-2 font-display text-3xl md:text-4xl">
                  {size.label} · {size.count} berries
                </div>
                <div className="mt-1 text-sm text-cream/80">
                  {chocolate.label} · {toppings.length || "no"} topping{toppings.length === 1 ? "" : "s"}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="order-1 space-y-10 lg:order-2">
            <Step n={1} label="Box size">
              <div className="grid grid-cols-3 gap-3">
                {SIZES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSize(s)}
                    className={`group rounded-sm border p-4 text-left transition ${
                      size.id === s.id ? "border-cacao bg-cacao text-cream" : "border-foreground/15 hover:border-cacao"
                    }`}
                  >
                    <div className="font-display text-2xl">{s.count}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">{s.label}</div>
                    <div className="mt-3 text-sm">CHF {s.price}</div>
                  </button>
                ))}
              </div>
            </Step>

            <Step n={2} label="Chocolate coating">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {CHOCOLATES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setChocolate(c)}
                    className={`flex items-center gap-3 rounded-sm border p-3 text-left transition ${
                      chocolate.id === c.id ? "border-cacao" : "border-foreground/15 hover:border-cacao/60"
                    }`}
                  >
                    <span
                      className="h-7 w-7 rounded-full ring-1 ring-foreground/10"
                      style={{ background: c.tone }}
                    />
                    <span className="text-xs uppercase tracking-[0.15em]">{c.label}</span>
                  </button>
                ))}
              </div>
            </Step>

            <Step n={3} label={`Toppings · ${toppings.length}/3`}>
              <div className="flex flex-wrap gap-2">
                {TOPPINGS.map((t) => {
                  const active = toppings.includes(t.id);
                  const disabled = !active && toppings.length >= 3;
                  return (
                    <button
                      key={t.id}
                      onClick={() => toggleTopping(t.id)}
                      disabled={disabled}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition ${
                        active
                          ? "border-cacao bg-cacao text-cream"
                          : disabled
                            ? "border-foreground/10 text-foreground/30"
                            : "border-foreground/20 hover:border-cacao"
                      }`}
                    >
                      {active && <Check className="h-3 w-3" />}
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </Step>

            <div className="flex items-center justify-between gap-6 rounded-sm border border-foreground/15 bg-card p-5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">Total</div>
                <div className="font-display text-3xl text-cacao">CHF {total}.–</div>
                <div className="mt-1 text-xs text-foreground/60">+ CHF 7 same-day delivery</div>
              </div>
              <a
                href="#checkout"
                className="inline-flex items-center gap-2 rounded-full bg-berry px-6 py-4 text-xs uppercase tracking-[0.2em] text-cream transition hover:opacity-90"
              >
                Add to cart
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ n, label, children }: { n: number; label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4 flex items-baseline gap-3 border-b border-foreground/10 pb-2">
        <span className="font-display italic text-berry text-xl">0{n}</span>
        <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/70">{label}</span>
      </div>
      {children}
    </div>
  );
}

/* ---------- Occasions ---------- */
function Occasions() {
  const items = [
    { tag: "Romance", title: "Anniversary", line: "Classic box · dark · raspberry + gold leaf" },
    { tag: "Celebrate", title: "Birthday", line: "Grand box · trio mix · pistachio + coconut" },
    { tag: "Make amends", title: "Apology", line: "Petite box · dark · raspberry + handwritten note" },
    { tag: "Thank you", title: "Just because", line: "Classic box · milk · almond + coconut" },
  ];
  return (
    <section className="bg-cacao py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-gold">03 · Occasions</div>
            <h2 className="font-display text-5xl md:text-7xl">
              Already chosen, <span className="italic-serif text-gold">if you'd rather not.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream/70">
            Decision fatigue is real. Tap an occasion — we'll send the box we'd send to
            someone we love.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm bg-cream/10 md:grid-cols-4">
          {items.map((it) => (
            <button
              key={it.title}
              className="group flex flex-col gap-6 bg-cacao p-8 text-left transition hover:bg-[#221208]"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{it.tag}</div>
              <div className="font-display text-4xl">{it.title}</div>
              <div className="text-xs text-cream/70 leading-relaxed">{it.line}</div>
              <div className="mt-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cream/90">
                Send this box <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gift module ---------- */
function GiftSection() {
  return (
    <section id="gift" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <img src={giftImg} alt="Saboreo gift box with handwritten note" className="aspect-[4/5] w-full rounded-sm object-cover shadow-card" width={1400} height={1750} loading="lazy" />
          <div className="absolute -bottom-6 -right-6 hidden rounded-sm bg-berry p-6 text-cream shadow-soft md:block">
            <Heart className="h-5 w-5 text-gold" />
            <div className="mt-3 font-display text-2xl leading-tight">"You made her cry. Well done."</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-cream/80">— L., Seefeld</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-berry">04 · Gifting</div>
          <h2 className="font-display text-5xl text-cacao md:text-7xl leading-[0.95]">
            A box that says it <span className="italic-serif text-berry">before you do.</span>
          </h2>
          <p className="mt-6 max-w-md text-base text-foreground/75">
            Every Saboreo box ships in a linen-lined keepsake with a satin ribbon. Add a
            handwritten note in our copperplate hand, and schedule delivery up to 30 days
            out.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-foreground/80">
            {[
              "Handwritten note card (free)",
              "Silk ribbon + linen wrap",
              "Scheduled or surprise delivery",
              "Contact-free drop-off available",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-berry text-cream">
                  <Check className="h-3 w-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#build"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-cacao px-7 py-4 text-xs uppercase tracking-[0.2em] text-cream hover:bg-berry transition"
          >
            <Gift className="h-4 w-4" /> Start a gift box
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Craft ---------- */
function Craft() {
  const steps = [
    { n: "01", title: "Sourced", body: "Swiss berries selected at sunrise from growers in the Limmat valley." },
    { n: "02", title: "Tempered", body: "Single-origin chocolate, tempered by hand on cool marble." },
    { n: "03", title: "Dipped", body: "Each berry coated, decorated, and signed within a single morning." },
    { n: "04", title: "Delivered", body: "Cool-bagged and delivered across Zürich within four hours." },
  ];
  return (
    <section id="craft" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <img src={craftImg} alt="Chocolatier dipping a strawberry" className="aspect-[4/5] w-full rounded-sm object-cover shadow-card" width={1400} height={1750} loading="lazy" />
        </div>
        <div>
          <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-berry">05 · From berry to box</div>
          <h2 className="font-display text-5xl text-cacao md:text-7xl leading-[0.95]">
            One morning. <br />
            <span className="italic-serif text-berry">Four hands.</span>
          </h2>
          <p className="mt-6 max-w-md text-foreground/75">
            We don't batch. We don't freeze. We don't ship overnight from a warehouse.
            Every box is made the day it arrives, by the two of us, in a small atelier in
            Zürich.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-foreground/10 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="bg-cream p-6">
                <div className="font-display italic text-berry text-2xl">{s.n}</div>
                <div className="mt-2 font-display text-2xl text-cacao">{s.title}</div>
                <div className="mt-2 text-sm text-foreground/70">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    { q: "Arrived three hours after I ordered. She thought I had planned it for weeks.", who: "Marco", where: "Wiedikon" },
    { q: "The pistachio + dark combination is genuinely the best chocolate thing I've had this year.", who: "Sarah", where: "Seefeld" },
    { q: "Used them twice for client gifts. Both clients texted me a photo.", who: "Nina", where: "Enge" },
  ];
  return (
    <section className="bg-[#fbf5ea] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-berry">
          <span className="h-px w-8 bg-berry" /> 06 · From the doorstep
        </div>
        <h2 className="font-display text-5xl text-cacao md:text-7xl max-w-3xl leading-[0.95]">
          Four hundred boxes, <span className="italic-serif text-berry">one neighbourhood.</span>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.who} className="flex flex-col gap-6 rounded-sm border border-foreground/10 bg-card p-8 shadow-card">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-2xl leading-snug text-cacao">
                "{t.q}"
              </blockquote>
              <figcaption className="text-[11px] uppercase tracking-[0.25em] text-foreground/60">
                {t.who} · {t.where}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Delivery + FAQ ---------- */
function Delivery() {
  return (
    <section id="delivery" className="bg-cacao py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-gold">07 · Delivery</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1]">
              Across Zürich, <span className="italic-serif text-gold">today.</span>
            </h2>
            <p className="mt-6 max-w-md text-cream/75">
              Order at least four hours before your window. We deliver from 9 in the
              morning until 7 in the evening — cool-bagged, by hand.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {["9:00 – 11:00", "11:00 – 13:00", "13:00 – 16:00", "16:00 – 19:00"].map((s) => (
                <div key={s} className="rounded-sm border border-cream/20 px-4 py-3 text-sm">
                  <Clock className="mb-1 h-3.5 w-3.5 text-gold" />
                  {s}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-cream/70">
              <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold" /> Zürich · CHF 7</span>
              <span className="inline-flex items-center gap-2"><Truck className="h-3.5 w-3.5 text-gold" /> Greater Zürich · CHF 14</span>
              <span className="inline-flex items-center gap-2"><Leaf className="h-3.5 w-3.5 text-gold" /> Carbon-neutral routes</span>
            </div>
          </div>

          <div className="space-y-px rounded-sm bg-cream/10">
            {[
              { q: "How long do the berries keep?", a: "Best within 24 hours, refrigerated. They're made the morning of your delivery." },
              { q: "Can I order for a specific date?", a: "Yes — schedule up to 30 days in advance during checkout." },
              { q: "Allergens?", a: "Our atelier handles milk, soy, tree nuts, and wheat. Tell us at checkout and we'll adapt." },
              { q: "Can I send to someone else?", a: "Of course. Add the recipient's address and a handwritten note at step four." },
            ].map((f) => (
              <details key={f.q} className="group bg-cacao p-6 open:bg-[#221208]">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-2xl text-cream">
                  {f.q}
                  <span className="mt-1 text-gold transition group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-cream/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section id="checkout" className="relative overflow-hidden bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <div className="mb-6 text-[10px] uppercase tracking-[0.32em] text-berry">08 · Today</div>
        <h2 className="font-display text-5xl text-cacao md:text-8xl leading-[0.95]">
          Order before noon. <br />
          <span className="italic-serif text-berry">Dinner is sorted.</span>
        </h2>
        <p className="mt-8 mx-auto max-w-lg text-base text-foreground/70">
          Or — if it's not for dinner — schedule it. Either way, we promise it'll be the
          best thing in the room.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#build" className="inline-flex items-center gap-3 rounded-full bg-berry px-8 py-4 text-xs uppercase tracking-[0.2em] text-cream hover:opacity-90 transition">
            Build a box <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+41000000000" className="inline-flex items-center gap-2 rounded-full border border-cacao/30 px-8 py-4 text-xs uppercase tracking-[0.2em] text-cacao hover:border-cacao transition">
            <Phone className="h-4 w-4" /> +41 00 000 00 00
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-cacao text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div>
          <div className="font-display text-2xl tracking-[0.3em] text-cream">SABOREO</div>
          <p className="mt-4 text-sm">Handcrafted chocolate-covered strawberries. Made and delivered in Zürich.</p>
        </div>
        <div>
          <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-gold">Shop</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#build" className="hover:text-cream">Build a box</a></li>
            <li><a href="#gift" className="hover:text-cream">Gifting</a></li>
            <li><a href="#delivery" className="hover:text-cream">Delivery</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-gold">Atelier</div>
          <ul className="space-y-2 text-sm">
            <li>Zürich, Switzerland</li>
            <li>hello@saboreo.ch</li>
            <li>+41 00 000 00 00</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-gold">Fine print</div>
          <ul className="space-y-2 text-sm">
            <li>Ingredients & allergens</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-[10px] uppercase tracking-[0.3em] text-cream/40">
        © {new Date().getFullYear()} Saboreo · Made in Zürich
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Builder />
      <Occasions />
      <GiftSection />
      <Craft />
      <Testimonials />
      <Delivery />
      <FinalCTA />
      <Footer />
    </main>
  );
}
