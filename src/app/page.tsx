import Image from "next/image";
import type { ReactNode } from "react";
import { Check, ChevronsDown, Gift, Minus, Plus, ShieldCheck, TriangleAlert } from "lucide-react";

const IMG = "/assets";
const CHECKOUT_URL = "https://pay.hotmart.com/M108150601H?checkoutMode=10";
const display = "font-display";

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const MAIN_PRODUCT = "300 Ready-to-Print Halloween Games & Activities for the Classroom";

const HERO_BULLETS = ["Lifetime access", "Instant delivery to your email", "7-day money-back guarantee"];

const INCLUDES_TOP = [
  MAIN_PRODUCT,
  "Ready-to-use Halloween games to keep your students engaged, learning, and having fun, without spending hours planning or preparing activities.",
  "Fun classroom games like Bingo, Scavenger Hunts, Matching Games, and Group Challenges to get your students playing, interacting, and working together.",
  "Engaging worksheets with word searches, mazes, puzzles, coloring pages, and cut-and-paste activities to keep students busy and excited to learn.",
  "Hands-on math and literacy activities to practice counting, vocabulary, reading, spelling, and writing with a fun Halloween twist.",
  "Creative writing prompts, storytelling activities, and Halloween-themed challenges to spark imagination and encourage classroom participation.",
  "Quick, easy-to-follow activities for independent work, small groups, learning centers, and whole-class fun. Just print and go!",
  "50 Halloween Bingo Cards for the Classroom",
  "75 Halloween Word Searches & Puzzles",
  "60 Halloween Writing Prompts",
  "80 Halloween Math & Literacy Activities",
  "40 Halloween Brain Breaks & Icebreakers",
];

const INCLUDES_BOTTOM = [
  "Printable pages ready for your classroom",
  "Digital PDF files, easy to print at home or at school",
  "Instant access, secure download, and unlimited use",
];

const TRUST_BADGES = [
  { label: "7-Day Guarantee", icon: null },
  { label: "Instant Access", icon: "icone-acesso.png" },
  { label: "Friendly Support", icon: "icone-suporte.png" },
  { label: "Satisfaction Guaranteed", icon: "icone-satisfacao.png" },
  { label: "100% Secure Checkout", icon: "icone-compra-segura.png" },
];

// O 1º card mostra o título antes da imagem; os demais, imagem antes do título.
const DELIVERABLES = [
  { title: MAIN_PRODUCT, img: "main-300-games.png", w: 1306, h: 1204, titleFirst: true },
  { title: "80 Halloween Math & Literacy Activities", img: "item-80-math-literacy.png", w: 1306, h: 1204 },
];

const FIRST_BONUS = {
  title: "50 Halloween Bingo Cards for the Classroom",
  img: "bonus-50-bingo.png",
  subtitle: "Perfect for whole-class fun:",
  text: "A full set of Halloween bingo cards, calling cards included, so you can start a game in just a few minutes. Great for class parties, early finishers, or a fun Friday afternoon where everyone gets to play.",
  price: "$17.00",
};

const BONUSES = [
  { title: "75 Halloween Word Searches & Puzzles", img: "bonus-75-word-searches.png", price: "$19.00" },
  { title: "60 Halloween Writing Prompts", img: "bonus-60-writing-prompts.png", price: "$15.00" },
  { title: "40 Halloween Brain Breaks & Icebreakers", img: "bonus-40-brain-breaks.png", price: "$12.00" },
];

const FEATURES = [
  {
    img: "icone-imprime.jpg",
    title: "Easy to print",
    text: "Download and print everything at home or at school. Every page is designed in high quality, so it looks great in your students' hands.",
  },
  {
    img: "icone-acceso-seguro.png",
    title: "Instant, secure access",
    text: "As soon as your order goes through, you'll get a direct download link by email. Everything is ready for you right away.",
  },
  {
    img: "icone-download.png",
    title: "Neatly organized",
    text: "Everything comes sorted into folders by category. Download it, save it wherever you like, and have your activities ready whenever you need them.",
  },
];

const WHY = [
  "Every game and activity is ready to go, so you can skip the late-night planning and still teach a fun, meaningful lesson.",
  "Everything is organized and easy to follow, with simple instructions your students can jump right into.",
  "Students practice real skills like counting, reading, spelling, and writing while having a blast.",
  "Works for independent work, small groups, learning centers, and whole-class activities.",
  "Keeps your class focused and engaged during one of the most exciting (and busiest) weeks of the school year.",
];

const FOR_WHOM = [
  "Elementary teachers who want a fun Halloween week without the extra prep",
  "Homeschool parents looking for engaging seasonal activities",
  "Substitute teachers who need activities that are ready to go",
  "After-school and enrichment program leaders",
  "Anyone who wants kids learning and having fun this Halloween",
];

const OFFER_ITEMS = [
  MAIN_PRODUCT,
  "80 Halloween Math & Literacy Activities",
  "50 Halloween Bingo Cards for the Classroom",
  "75 Halloween Word Searches & Puzzles",
  "60 Halloween Writing Prompts",
  "40 Halloween Brain Breaks & Icebreakers",
  "Printable PDF files, ready to use",
  "Lifetime access",
  "Instant delivery to your email",
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "How will I get access?",
    a: (
      <>
        As soon as your payment is confirmed, <strong>you&apos;ll receive everything automatically by email</strong>.
        <br />
        There&apos;s nothing else you need to do. Everything is sent <strong>instantly and securely</strong>.
        <br />
        Just make sure you type your email address correctly at checkout.
      </>
    ),
  },
  {
    q: "Is this a physical or digital product?",
    a: (
      <>
        It&apos;s a <strong>100% digital product</strong>, <strong>ready to print</strong> on any printer, at home or
        at school.
        <br />
        Every file is high quality and neatly organized into folders, so you can{" "}
        <strong>print only what you need</strong>.
      </>
    ),
  },
  {
    q: "Is there a guarantee?",
    a: (
      <>
        Yes! Your purchase is covered by our <strong>7-day money-back guarantee</strong>.
        <br />
        Take your time to look through everything, and if it&apos;s not what you expected for any reason, you can ask
        for a full refund. No hassle, no questions asked.
      </>
    ),
  },
  {
    q: "Is everything in English?",
    a: (
      <>
        Yes. All the games, worksheets, prompts, and activities are <strong>completely in English</strong>, written in
        clear, kid-friendly language.
      </>
    ),
  },
  {
    q: "What if I have questions?",
    a: (
      <>
        We&apos;re happy to help!
        <br />
        Just <strong>reply to the email you receive with your purchase</strong> and our support team will get back to
        you as soon as possible.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Peças de clay                                                       */
/* ------------------------------------------------------------------ */

/** Seção na cor tema (roxo escuro): equivale às seções de fundo azul da página original. */
function ThemeSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`clay-theme-slab relative w-full overflow-hidden py-14 text-white ${className}`}>
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Seção clara: equivale às seções de fundo branco da página original. */
function LightSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative w-full py-16 ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[680px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Grifo laranja Halloween (mesmo laranja dos títulos dos mockups). */
function Mark({ children }: { children: ReactNode }) {
  return <span className="text-accent">{children}</span>;
}

function SoftMark({ children }: { children: ReactNode }) {
  return <span className="text-accent font-bold">{children}</span>;
}

function CheckOrb({ size = "md" }: { size?: "sm" | "md" }) {
  const dims = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  return (
    <span
      className={`clay-orb inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white`}
    >
      <Check className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={3.5} />
    </span>
  );
}

function CheckList({ items, onTheme = false, className = "" }: { items: string[]; onTheme?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckOrb />
          <span className={`pt-0.5 text-base font-medium leading-relaxed ${onTheme ? "text-white" : "text-ink"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`clay-button ${display} inline-flex min-h-16 w-full items-center justify-center rounded-[20px] px-6 py-3 text-center text-base font-black tracking-wide sm:text-lg sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

function IconOrb({ children, tone = "theme" }: { children: ReactNode; tone?: "theme" | "white" }) {
  const toneClass =
    tone === "theme"
      ? "bg-gradient-to-br from-[#7b2cbf] to-[#3c1860] text-white"
      : "bg-gradient-to-br from-white to-[#efe3fb] text-love-600";
  return (
    <span className={`clay-orb inline-flex h-16 w-16 items-center justify-center rounded-full ${toneClass}`}>
      {children}
    </span>
  );
}

function SectionTitle({ children, onTheme = false, className = "" }: { children: ReactNode; onTheme?: boolean; className?: string }) {
  return (
    <h2
      className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
        onTheme ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function MainMockup({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={`${IMG}/main-300-games.png`}
      alt={MAIN_PRODUCT}
      width={1306}
      height={1204}
      priority={priority}
      className={`mx-auto w-full drop-shadow-[0_14px_24px_rgba(0,0,0,0.3)] ${className}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function HalloweenPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Blobs de fundo (luz ambiente do canvas) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[60vh] w-[60vh] rounded-full bg-[#7b2cbf]/10 blur-3xl" />
        <div className="absolute -right-[10%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-[#fc7800]/10 blur-3xl" />
      </div>

      {/* Barra promocional fixa */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`${display} clay-topbar flex h-11 w-full items-center justify-center gap-1.5 px-4 text-center text-[15px] font-extrabold tracking-wide text-white`}
        >
          Special price available
          <span className="animate-clay-blink rounded-full bg-white px-2.5 py-0.5 text-love-600 underline underline-offset-2">
            TODAY
          </span>
          only!
        </div>
      </div>

      <main className="flex flex-col pt-11">
        {/* 1 · HERO */}
        <ThemeSection className="pt-8! sm:pt-12!">
          <Container className="flex flex-col items-center text-center">
            <h1 className={`${display} px-2 text-[30px] font-extrabold leading-[1.18] tracking-tight sm:text-5xl md:text-6xl`}>
              Keep your students <Mark>engaged, learning, and having fun</Mark> all Halloween long, with{" "}
              <Mark>zero prep.</Mark>
            </h1>

            <MainMockup priority className="mt-7" />

            <p className="mt-6 text-lg font-medium leading-relaxed text-white/95 sm:text-xl">
              Get <SoftMark>300 Ready-to-Print Halloween Games & Activities</SoftMark>, a complete classroom bundle packed
              with <SoftMark>games, puzzles, worksheets, writing prompts, and brain breaks</SoftMark> your students will
              actually look forward to. Just print and go!
            </p>

            <CheckList items={HERO_BULLETS} onTheme className="mt-8 w-full text-left" />

            <CtaButton href="#offer" className="mt-10">
              YES, I WANT THE ACTIVITIES!
            </CtaButton>
          </Container>
        </ThemeSection>

        {/* 2 · Everything you'll get */}
        <LightSection>
          <Container>
            <h2 className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl`}>
              Here&apos;s <span className="text-love-500">Everything</span> You&apos;ll Get Today!
            </h2>

            <CheckList items={INCLUDES_TOP} className="mt-10" />

            <MainMockup className="mt-10" />

            <CheckList items={INCLUDES_BOTTOM} className="mt-10" />
          </Container>
        </LightSection>

        {/* 3 · Selos de confiança */}
        <LightSection className="pt-0">
          <Container className="grid grid-cols-1 gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="clay-card flex flex-col items-center gap-3 rounded-[32px] px-6 py-6 text-center">
                {badge.icon ? (
                  <Image src={`${IMG}/${badge.icon}`} alt="" width={512} height={512} className="h-[84px] w-[84px]" />
                ) : (
                  <span className="clay-orb inline-flex h-[84px] w-[84px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
                    <Check className="h-11 w-11" strokeWidth={3.5} />
                  </span>
                )}
                <span className={`${display} text-2xl font-extrabold text-ink`}>{badge.label}</span>
              </div>
            ))}
          </Container>
        </LightSection>

        {/* 4 · O que vem no pacote + 5 · Data + 6 · Bônus */}
        <ThemeSection id="inside">
          <Container>
            <SectionTitle onTheme>
              When you grab the <Mark>Halloween Classroom Bundle</Mark> today, you&apos;ll get:
            </SectionTitle>

            <div className="mt-10 flex flex-col gap-8">
              {DELIVERABLES.map((d) => {
                const title = (
                  <h3 className={`${display} px-2 text-center text-2xl font-extrabold leading-tight text-white`}>{d.title}</h3>
                );
                return (
                  <article key={d.title} className="clay-theme-card flex flex-col gap-5 rounded-[32px] p-4 sm:p-8">
                    {d.titleFirst && title}
                    <Image src={`${IMG}/${d.img}`} alt={d.title} width={d.w} height={d.h} className="w-full" />
                    {!d.titleFirst && title}
                  </article>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offer">I WANT MY HALLOWEEN BUNDLE</CtaButton>
            </div>
          </Container>

          {/* 5 · Data limite */}
          <Container className="mt-16">
            <div className="clay-theme-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center">
              <h2 className={`${display} text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl`}>
                ORDER BY <Mark>OCTOBER 24</Mark> AND YOU&apos;LL ALSO GET
              </h2>
              <IconOrb tone="white">
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>
          </Container>

          {/* 6 · Bônus */}
          <Container className="mt-16">
            <SectionTitle onTheme>
              <Mark>Exclusive BONUSES</Mark> to make this your easiest Halloween yet
            </SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb tone="white">
                <Gift className="h-8 w-8" strokeWidth={2.5} />
              </IconOrb>
            </div>
            <p className="mt-8 text-center text-lg font-medium leading-relaxed text-white/95">
              When you order today, you&apos;re not just getting the main bundle. You&apos;ll also get{" "}
              <SoftMark>exclusive bonuses</SoftMark> that make planning even easier and keep your class excited from the
              first bell to the last.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {/* 1º bônus: layout próprio (título → imagem → subtítulo → descrição) */}
              <article className="clay-theme-card flex flex-col gap-5 rounded-[32px] p-4 text-center sm:p-8">
                <h3 className={`${display} text-2xl font-extrabold leading-tight text-white`}>{FIRST_BONUS.title}</h3>
                <Image src={`${IMG}/${FIRST_BONUS.img}`} alt={FIRST_BONUS.title} width={1306} height={1204} className="w-full" />
                <h4 className={`${display} text-xl font-extrabold text-white`}>{FIRST_BONUS.subtitle}</h4>
                <p className="px-2 text-left text-base font-medium leading-relaxed text-white/90">{FIRST_BONUS.text}</p>
                <BonusPrice price={FIRST_BONUS.price} />
              </article>

              {BONUSES.map((b) => (
                <article key={b.title} className="clay-theme-card flex flex-col gap-5 rounded-[32px] p-4 pb-8 text-center sm:p-8">
                  <Image src={`${IMG}/${b.img}`} alt={b.title} width={1306} height={1204} className="mx-auto w-full" />
                  <h3 className={`${display} px-2 text-2xl font-extrabold leading-tight text-white`}>{b.title}</h3>
                  <BonusPrice price={b.price} />
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offer">I WANT MY HALLOWEEN BUNDLE</CtaButton>
            </div>
          </Container>
        </ThemeSection>

        {/* 7 · Benefícios práticos */}
        <LightSection>
          <Container>
            <h2 className={`${display} clay-text-gradient text-center text-5xl font-black leading-[1.1] tracking-tight md:text-6xl`}>
              Designed to save you time
            </h2>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="mx-auto mt-12 flex max-w-[480px] flex-col gap-8">
              {FEATURES.map((f) => (
                <div key={f.title} className="clay-card flex flex-col items-center gap-4 rounded-[32px] p-8 text-center">
                  <Image
                    src={`${IMG}/${f.img}`}
                    alt=""
                    width={512}
                    height={512}
                    className="h-32 w-32 object-contain mix-blend-multiply"
                  />
                  <h3 className={`${display} text-2xl font-extrabold leading-tight text-ink`}>{f.title}</h3>
                  <p className="text-base font-medium leading-relaxed text-muted">{f.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </LightSection>

        {/* 8 · Why + Who it's for */}
        <ThemeSection>
          <Container>
            <SectionTitle onTheme>
              Why the <Mark>Halloween Classroom Bundle</Mark> will make this your easiest Halloween yet
            </SectionTitle>

            <MainMockup className="mt-10" />

            <div className="clay-theme-card mt-12 rounded-[32px] p-6 sm:p-8">
              <CheckList items={WHY} onTheme />
            </div>

            <SectionTitle onTheme className="mt-14">
              Who is this bundle for?
            </SectionTitle>

            <div className="clay-theme-card mt-10 rounded-[32px] p-6 sm:p-8">
              <CheckList items={FOR_WHOM} onTheme />
            </div>
          </Container>
        </ThemeSection>

        {/* 9 · Oferta */}
        <LightSection id="offer" className="scroll-mt-20">
          <Container>
            <SectionTitle>HERE&apos;S A SPECIAL OFFER JUST FOR YOU</SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="relative mt-14">
              {/* Selo "Best Seller" acima do card */}
              <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
                <span
                  className={`${display} clay-orb inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-br from-white to-[#efe3fb] px-5 py-2.5 text-sm font-black tracking-wide text-love-600`}
                >
                  🌟 Best Seller
                </span>
              </div>

              <div className="clay-theme-slab relative overflow-hidden rounded-[48px] px-5 pb-10 pt-14 text-white sm:px-10">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className={`${display} text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl`}>
                    300 Ready-to-Print Halloween Games & Activities
                    <br />
                    <Mark>COMPLETE BUNDLE</Mark>
                  </h3>

                  <MainMockup className="mt-8" />

                  <div className="mt-8 w-full text-left">
                    <ul className="flex flex-col gap-3">
                      {OFFER_ITEMS.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckOrb size="sm" />
                          <span className="pt-0.5 text-[15px] font-bold leading-snug text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className={`${display} mt-10 text-xl font-extrabold text-white/75 line-through decoration-2`}>
                    Regular price $47.00
                  </p>
                  <p className={`${display} mt-1 text-2xl font-black tracking-wide`}>TODAY ONLY</p>
                  <p className={`${display} mt-1 text-8xl font-black leading-none tracking-tight`}>$10</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-love-600 shadow-[var(--shadow-clay-orb)]">
                    <TriangleAlert className="h-4 w-4 text-[#f59e0b]" strokeWidth={2.75} />
                    You can pay in your local currency.
                  </p>
                  <p className="mt-6 text-sm font-bold text-white/90">One-time payment</p>

                  <CtaButton href={CHECKOUT_URL} className="mt-6 sm:min-w-[320px]">
                    Get Instant Access
                  </CtaButton>
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/85">100% secure payment</p>
                </div>
              </div>
            </div>
          </Container>
        </LightSection>

        {/* 10 · Garantia */}
        <ThemeSection>
          <Container>
            <div className="clay-theme-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center sm:px-10">
              <span className="clay-orb inline-flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-[#ffc86b] to-[#f26a00] text-white">
                <ShieldCheck className="h-16 w-16" strokeWidth={2.25} />
              </span>
              <h2 className={`${display} text-3xl font-black tracking-tight sm:text-4xl`}>7-DAY MONEY-BACK GUARANTEE</h2>
              <p className="text-lg font-medium leading-relaxed text-white/95">
                Order with complete peace of mind. After your purchase, you&apos;ll have 7 days to explore every activity,
                and if it&apos;s not the right fit for your classroom, just ask for a full refund. No hassle, no questions
                asked.
              </p>
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Get Instant Access
              </CtaButton>
            </div>
          </Container>
        </ThemeSection>

        {/* 11 · FAQ */}
        <LightSection>
          <Container>
            <div className="text-center">
              <p className={`${display} clay-text-gradient text-7xl font-black leading-none tracking-tight sm:text-8xl`}>FAQ</p>
              <h2 className={`${display} mt-3 text-2xl font-black tracking-wide text-ink sm:text-3xl`}>
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="clay-faq clay-card group rounded-[24px] px-5 py-1 hover:-translate-y-1"
                >
                  <summary className="flex min-h-16 cursor-pointer items-center gap-4 py-3">
                    <span className="clay-orb inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7b2cbf] to-[#3c1860] text-white">
                      <Plus className="faq-icon-closed h-5 w-5" strokeWidth={3} />
                      <Minus className="faq-icon-open h-5 w-5" strokeWidth={3} />
                    </span>
                    <span className={`${display} text-left text-lg font-extrabold leading-snug text-ink`}>{item.q}</span>
                  </summary>
                  <div className="pb-5 pl-14 pr-1 text-base font-medium leading-relaxed text-muted [&_strong]:font-bold [&_strong]:text-ink">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Get Instant Access
              </CtaButton>
            </div>
          </Container>
        </LightSection>

        {/* 12 · Rodapé */}
        <footer className="pb-6 text-center text-[13px]">
          <div className="font-medium">
            <a href="#" className="mx-2.5 text-love-ink hover:underline">
              Privacy Policy
            </a>
            <span className="text-muted">|</span>
            <a href="#" className="mx-2.5 text-love-ink hover:underline">
              Terms of Service
            </a>
          </div>
          <p className="mt-4 text-muted">© 2026 All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

function BonusPrice({ price }: { price: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="clay-orb inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#efe3fb] text-love-600">
        <Gift className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className={`${display} text-lg font-extrabold text-white/75 line-through decoration-2`}>{price}</span>
      <span
        className={`${display} clay-orb inline-flex items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 px-5 py-1.5 text-base font-black tracking-widest text-white`}
      >
        FREE
      </span>
    </div>
  );
}
