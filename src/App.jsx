import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Download,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from 'lucide-react'

const productImage = 'https://static.wixstatic.com/media/5d8479_cafb53ae326b4b049be4e5433e2c9809~mv2.png/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5d8479_cafb53ae326b4b049be4e5433e2c9809~mv2.png'
const burnerImage = 'https://static.wixstatic.com/media/5d8479_122274439b064b9080794aa25d83b848~mv2.png/v1/fill/w_700,h_525,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202023-11-18%20095049_edited.png'

const products = [
  {
    label: 'Best seller',
    title: 'Gas burner protectors',
    description: 'A purpose-built solution for protecting cooktops and surfaces in everyday use.',
    image: burnerImage,
    tone: 'bg-orange',
  },
  {
    label: 'Download & print',
    title: 'Digital print files',
    description: 'Get the file, print it locally, and spend less on shipping and waiting.',
    image: productImage,
    tone: 'bg-blue',
  },
  {
    label: 'Built to order',
    title: 'Replacement parts',
    description: 'Useful, hard-to-find pieces made for the spaces and problems that matter.',
    image: productImage,
    tone: 'bg-paper-deep',
  },
]

const faqs = [
  { category: 'Product Care', question: 'How should I care for my 3D printed products?', answer: 'To ensure the longevity of your 3D printed products, avoid exposing them to extreme temperatures and direct sunlight. Clean them with a soft cloth and mild soap if necessary.' },
  { category: 'Payment Methods', question: 'What payment methods are accepted?', answer: 'We accept payments via credit card and PayPal. All transactions are processed in Australian Dollars (AUD).' },
  { category: 'Shipping', question: 'What are the shipping options available?', answer: 'We offer standard and express shipping options. Standard shipping typically takes 3-5 business days, while express shipping takes 1-2 business days. International shipping options will be available soon.' },
  { category: 'Returns', question: 'What is your return policy?', answer: 'Our return policy allows you to return products within 30 days of receipt. The items must be in their original condition and packaging. Please contact our customer service at ace3dcreations@gmail.com to initiate a return.' },
  { category: 'Refunds', question: 'How do I request a refund?', answer: 'To request a refund, please contact our customer service team at ace3dcreations@gmail.com with your order details. Refunds are processed within 5-7 business days after we receive the returned items in their original condition.' },
  { category: 'Compatibility', question: 'How do I make sure a custom part will fit properly?', answer: 'To help ensure a good fit, please provide accurate measurements, photos of the original part or mounting area, and any relevant details about how it connects or functions. If needed, we may ask follow-up questions before printing.' },
  { category: 'Production Time', question: 'How long does a custom 3D printing job usually take?', answer: 'Turnaround time depends on the part size, design complexity, and current workload. Simple jobs may be completed quickly, while custom design work can take longer. Once we review your request, we can give you a more accurate timeframe.' },
  { category: 'Materials', question: 'What materials do you use for caravan and camper parts?', answer: "We choose materials based on the part's intended use, required strength, and exposure to heat or outdoor conditions. For caravan and camper parts, durability is important, so we select materials that are suitable for practical everyday use." },
  { category: 'Custom Design Services', question: "Can you design a custom replacement part if I can't find one off the shelf?", answer: 'Yes. We can design and 3D print custom replacement parts when the original part is unavailable, too expensive, or no longer made. Send us clear photos, measurements, and any details about how the part fits or functions, and we can assess the best approach.' },
  { category: 'File Requirements', question: 'What file types do you accept for 3D printing?', answer: 'We can work with common 3D file formats such as STL and OBJ. If you do not have a file, we may still be able to help by creating the design from your photos, measurements, and part details.' },
]

const blogPosts = [
  {
    number: '01',
    category: 'Custom solutions',
    title: 'Custom 3D Printed Items for Unique Solutions',
    excerpt: 'How custom 3D printing turns specific needs, prototypes, and hard-to-find parts into practical solutions.',
    readTime: '3 min read',
    tone: 'bg-orange',
    url: 'https://www.ace3dcreations.com.au/post/custom-3d-printed-items-for-unique-solutions',
  },
  {
    number: '02',
    category: 'Melbourne studio',
    title: 'Premium 3D Printing Services in Melbourne',
    excerpt: 'A look at precision, materials, finishing, and expert guidance for projects that need a higher standard.',
    readTime: '5 min read',
    tone: 'bg-blue',
    url: 'https://www.ace3dcreations.com.au/post/premium-3d-printing-services-in-melbourne',
  },
  {
    number: '03',
    category: 'Online services',
    title: 'Convenient and Reliable 3D Printing Services Online',
    excerpt: 'How online 3D printing makes custom projects, file uploads, materials, and delivery easier to access.',
    readTime: '4 min read',
    tone: 'bg-paper-deep',
    url: 'https://www.ace3dcreations.com.au/post/convenient-and-reliable-3d-printing-services-online',
  },
  {
    number: '04',
    category: 'Local guide',
    title: 'Discover Top 3D Printing Services Near You',
    excerpt: 'What to look for in a local 3D printing service, from quality and materials to support and turnaround.',
    readTime: '4 min read',
    tone: 'bg-orange',
    url: 'https://www.ace3dcreations.com.au/post/discover-top-3d-printing-services-near-you',
  },
]

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Contact', '/contact'],
  ['Reviews', '/reviews'],
  ['Terms', '/terms'],
  ['Blog', '/blog'],
]

function Logo({ light = false }) {
  return (
    <a href="/" className={`flex items-center gap-2.5 ${light ? 'text-paper' : 'text-ink'}`} aria-label="ACE 3D Creations home">
      <span className="grid size-9 place-items-center rounded-full bg-orange text-ink">
        <span className="text-[11px] font-bold leading-none">A3</span>
      </span>
      <span className="text-[15px] font-bold leading-[0.85] tracking-[-0.06em]">ACE<br /><span className="text-[11px] font-medium tracking-[-0.03em]">3D CREATIONS</span></span>
    </a>
  )
}

function ProductCard({ product, index }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-line bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--ink)]">
      <div className={`relative flex h-64 items-center justify-center overflow-hidden ${product.tone}`}>
        <span className="mono-label absolute left-5 top-5 z-10 rounded-full border border-ink/20 bg-paper/85 px-3 py-1.5 text-[10px]">0{index + 1} / {product.label}</span>
        {index === 0 ? (
          <img className="h-[85%] w-[86%] object-contain transition duration-500 group-hover:scale-105" src={product.image} alt="3D printed gas burner protector" loading="lazy" />
        ) : (
          <div className="relative size-48 transition duration-500 group-hover:rotate-6 group-hover:scale-105">
            <div className="absolute inset-0 rounded-[2.5rem] border-2 border-ink/20" />
            <div className="absolute inset-5 rounded-[1.75rem] border-2 border-ink/30" />
            <img className="absolute inset-10 size-28 object-contain" src={product.image} alt="ACE 3D Creations printed product" loading="lazy" />
            {index === 1 && <Download className="absolute -right-1 top-2 rounded-full bg-paper p-2 text-ink" size={34} />}
            {index === 2 && <PackageCheck className="absolute -bottom-1 -left-1 rounded-full bg-orange p-2 text-ink" size={36} />}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="display-font text-2xl font-semibold">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/65">{product.description}</p>
        <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold hover:text-orange">Explore product <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a>
      </div>
    </article>
  )
}

function SiteHeader({ menuOpen, setMenuOpen, onNavigate }) {
  const closeMenu = () => setMenuOpen(false)
  const navigate = (event, href) => {
    event.preventDefault()
    closeMenu()
    onNavigate(href)
  }

  return (
    <>
      <header className="absolute inset-x-0 top-9 z-50 border-b border-white/20 text-paper">
        <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
          <Logo light />
          <div className="hidden items-center gap-6 text-sm font-medium xl:flex">
            {navItems.map(([label, href]) => <a key={href} className="opacity-75 transition hover:opacity-100" href={href} onClick={(event) => navigate(event, href)}>{label}</a>)}
          </div>
          <a href="/#products" className="hidden items-center gap-2 rounded-full bg-orange px-5 py-3 text-xs font-bold text-ink transition hover:bg-paper">Shop now <ArrowUpRightIcon /></a>
          <button className="grid size-11 place-items-center rounded-full border border-white/25 lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-ink p-6 text-paper lg:hidden">
          <div className="flex items-center justify-between"><Logo light /><button className="grid size-11 place-items-center rounded-full border border-white/25" onClick={closeMenu} aria-label="Close menu"><X size={20} /></button></div>
          <nav className="mt-16 flex flex-col gap-5 text-4xl font-semibold tracking-[-0.06em]">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={(event) => navigate(event, href)}>{label}</a>)}
          </nav>
          <a href="/#products" onClick={closeMenu} className="mt-12 flex w-full items-center justify-between rounded-full bg-orange px-6 py-4 text-sm font-bold text-ink">Shop now <ArrowRight size={18} /></a>
        </div>
      )}
    </>
  )
}

function SiteFooter({ onNavigate }) {
  const navigate = (event, href) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <footer className="bg-ink px-5 pb-8 pt-16 text-paper lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div><Logo light /><p className="mt-5 max-w-xs text-sm leading-6 text-paper/50">General 3D printing solutions for caravans, homes, workshops, and more.</p><p className="mono-label mt-6 text-[10px] text-orange">Print. Create. Inspire. Repeat.</p></div>
          <div className="flex flex-col gap-3 text-sm text-paper/60"><p className="mono-label mb-1 text-[10px] text-orange">Navigate</p>{navItems.slice(0, 4).map(([label, href]) => <a key={href} href={href} onClick={(event) => navigate(event, href)} className="hover:text-paper">{label}</a>)}<a href="/terms" onClick={(event) => navigate(event, '/terms')} className="hover:text-paper">Terms & FAQs</a></div>
          <div className="flex flex-col gap-3 text-sm text-paper/60"><p className="mono-label mb-1 text-[10px] text-orange">Say hello</p><a href="mailto:ace3dcreations@gmail.com" className="hover:text-paper">ace3dcreations@gmail.com</a><a href="/reviews" onClick={(event) => navigate(event, '/reviews')} className="flex items-center gap-2 hover:text-paper"><Instagram size={15} /> @ace3dcreations</a></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[10px] font-medium uppercase tracking-[0.12em] text-paper/35 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 ACE 3D Creations</p><p>Melbourne VIC / Australia-wide</p></div>
      </div>
    </footer>
  )
}

function RouteHero({ eyebrow, title, accent, copy }) {
  return (
    <section className="relative overflow-hidden bg-ink px-5 pb-20 pt-44 text-paper lg:px-8 lg:pb-28">
      <div className="grain absolute inset-0 opacity-30" />
      <div className="absolute right-[-8%] top-20 size-[440px] rounded-full border border-orange/25" />
      <div className="absolute right-[8%] top-36 size-[250px] rounded-full border border-orange/25" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mono-label flex items-center gap-3 text-[10px] text-orange"><span className="h-px w-8 bg-orange" /> {eyebrow}</p>
        <h1 className="display-font mt-7 max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.88]">{title}<br /><span className="text-orange">{accent}</span></h1>
        <p className="mt-8 max-w-xl text-base leading-7 text-paper/65 sm:text-lg">{copy}</p>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <>
      <RouteHero eyebrow="01 / The people behind the parts" title="Useful objects." accent="Better solutions." copy="ACE 3D Creations is an online Australian 3D printing studio making clever, durable solutions for caravans, homes, workshops, businesses, and everyday life." />
      <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="mono-label text-[10px] text-orange">Our point of view</p><h2 className="display-font mt-5 text-5xl font-semibold leading-[0.92] sm:text-7xl">Small ideas.<br /><span className="text-ink/35">Real use.</span></h2></div><div><p className="max-w-2xl text-lg leading-8 text-ink/70">We started ACE to make useful things more accessible. When a part is unavailable, overpriced, or simply not designed for the way it needs to work, we find a practical way forward with 3D printing.</p><div className="mt-12 grid gap-5 sm:grid-cols-3">{[['01', 'Understand', 'Start with the real-world problem.'], ['02', 'Create', 'Prototype, print, and refine.'], ['03', 'Repeat', 'Keep improving what works.']].map(([number, title, copy]) => <div key={number} className="border-t border-line pt-4"><p className="mono-label text-[10px] text-orange">{number}</p><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/60">{copy}</p></div>)}</div></div></div></section>
      <section className="bg-paper-deep px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{[['Built for use', 'Parts that earn their place in your setup.'], ['Made in batches', 'Thoughtful, low-volume production from Australia.'], ['Human support', 'Real answers when fitment gets specific.']].map(([title, copy], index) => <div key={title} className={`min-h-64 p-7 ${index === 1 ? 'bg-blue' : index === 2 ? 'bg-orange' : 'bg-ink text-paper'}`}><p className="mono-label text-[10px] opacity-60">ACE / 0{index + 1}</p><h3 className="display-font mt-16 text-3xl font-semibold">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 opacity-70">{copy}</p></div>)}</div></section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <RouteHero eyebrow="02 / Start a conversation" title="Have a problem?" accent="Let's make a part." copy="Tell us what is missing, broken, or difficult to replace. Send measurements, photos, or a file and we will help work out the next step." />
      <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]"><div className="bg-orange p-8 sm:p-12"><p className="mono-label text-[10px]">Custom print enquiry</p><h2 className="display-font mt-7 max-w-xl text-5xl font-semibold leading-[0.9] sm:text-7xl">Make the<br />right part.</h2><p className="mt-7 max-w-md text-sm leading-7 text-ink/70">We can often print from an STL file, recreate a simple replacement, or help you understand what measurements are needed.</p><a href="mailto:ace3dcreations@gmail.com?subject=Custom 3D printing enquiry" className="mt-10 inline-flex items-center gap-3 bg-ink px-6 py-4 text-sm font-bold text-paper transition hover:bg-paper hover:text-ink">Email the studio <Mail size={17} /></a></div><div className="flex flex-col justify-between bg-blue p-8 sm:p-12"><div><MapPin size={24} /><h2 className="display-font mt-8 text-4xl font-semibold leading-none">Melbourne VIC<br />Australia-wide.</h2><p className="mt-5 text-sm leading-7 text-ink/65">ACE is an online-based service, shipping useful parts across Australia and sending digital files worldwide.</p></div><div className="mt-12 border-t border-ink/20 pt-5"><p className="mono-label text-[10px] text-ink/50">Email</p><a href="mailto:ace3dcreations@gmail.com" className="mt-2 block font-bold hover:text-orange">ace3dcreations@gmail.com</a></div></div></div></section>
      <section className="bg-paper-deep px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><p className="mono-label text-[10px] text-orange">Send an enquiry</p><h2 className="display-font mt-5 text-5xl font-semibold leading-[0.92] sm:text-7xl">Tell us<br /><span className="text-ink/35">what you need.</span></h2><p className="mt-6 max-w-sm text-sm leading-6 text-ink/60">This form is ready for future enquiry handling. For now, submitting it will not send or store anything.</p></div><form className="border border-line bg-paper p-7 sm:p-10" onSubmit={(event) => event.preventDefault()}><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold" htmlFor="first-name">First name<input id="first-name" name="firstName" type="text" required className="border border-line bg-paper-deep px-4 py-3 font-normal outline-none transition focus:border-orange" /></label><label className="grid gap-2 text-sm font-bold" htmlFor="last-name">Last name<input id="last-name" name="lastName" type="text" required className="border border-line bg-paper-deep px-4 py-3 font-normal outline-none transition focus:border-orange" /></label></div><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold" htmlFor="email">Email<input id="email" name="email" type="email" required className="border border-line bg-paper-deep px-4 py-3 font-normal outline-none transition focus:border-orange" /></label><label className="grid gap-2 text-sm font-bold" htmlFor="subject">Subject<input id="subject" name="subject" type="text" required className="border border-line bg-paper-deep px-4 py-3 font-normal outline-none transition focus:border-orange" /></label></div><label className="mt-5 grid gap-2 text-sm font-bold" htmlFor="message">Message<textarea id="message" name="message" rows="7" required className="resize-y border border-line bg-paper-deep px-4 py-3 font-normal outline-none transition focus:border-orange" placeholder="Tell us about your project, measurements, or the part you need."></textarea></label><p className="mt-4 text-xs leading-5 text-ink/60">Need to send files? Please email them directly to <a href="mailto:ace3dcreations@gmail.com" className="font-bold text-ink underline decoration-orange decoration-2 underline-offset-4">ace3dcreations@gmail.com</a> and attach your files there.</p><button type="submit" className="mt-7 inline-flex items-center gap-3 bg-ink px-6 py-4 text-sm font-bold text-paper transition hover:bg-orange hover:text-ink">Submit enquiry <ArrowRight size={17} /></button></form></div></section>
    </>
  )
}

function ReviewsPage() {
  const reviews = [
    ['Rachel / Victoria', 'Finally found a protector that actually fits our cooktop. It arrived quickly and feels really solid.'],
    ['Ben / Queensland', 'The digital file was exactly what we needed. Printed it at our local makerspace and saved a fortune.'],
    ['Mia / New South Wales', 'Helpful, fast replies and a part that solved a very specific replacement problem. Would absolutely recommend.'],
    ['Chris / South Australia', 'The fit was spot on and the instructions made installation easy. A great little upgrade for our setup.'],
    ['Dani / New South Wales', 'ACE helped us find a practical solution instead of replacing an entire expensive assembly.'],
    ['Sam / Victoria', 'Simple ordering, thoughtful design, and a part that feels like it belongs there.']
  ]

  return (
    <>
      <RouteHero eyebrow="03 / From the field" title="Good work." accent="Gets noticed." copy="A few words from the people who have put ACE parts and custom 3D printing solutions to work in homes, workshops, businesses, and caravans around Australia." />
      <section className="bg-blue px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{reviews.map(([person, quote], index) => <blockquote key={person} className={`flex min-h-64 flex-col justify-between p-7 ${index % 3 === 1 ? 'bg-ink text-paper' : 'bg-paper'}`}><div className="flex gap-1 text-orange">★★★★★</div><p className="mt-8 text-lg font-medium leading-7">“{quote}”</p><footer className="mono-label mt-8 text-[10px] opacity-50">{person}</footer></blockquote>)}</div></div></section>
      <section className="px-5 py-24 lg:px-8 lg:py-28"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border-t border-line pt-8 sm:flex-row sm:items-center"><div><p className="mono-label text-[10px] text-orange">Your turn</p><h2 className="display-font mt-4 text-4xl font-semibold">Make something useful.</h2></div><a href="/contact" className="inline-flex items-center gap-3 bg-orange px-6 py-4 text-sm font-bold transition hover:bg-ink hover:text-paper">Talk to the team <ArrowRight size={17} /></a></div></section>
    </>
  )
}

function TermsPage({ openFaq, setOpenFaq }) {
  return (
    <>
      <RouteHero eyebrow="04 / The fine print" title="Good to" accent="know." copy="Clear answers about care, materials, shipping, compatibility, and custom 3D printing services." />
      <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="mono-label text-[10px] text-orange">Terms of service</p><h2 className="display-font mt-5 text-5xl font-semibold leading-[0.92] sm:text-7xl">Welcome to<br /><span className="text-ink/35">our store.</span></h2></div><div className="border-y border-line py-7 text-ink/70"><p className="text-lg font-medium">Welcome to our online store!</p><p className="mt-6 leading-7">By using our website and purchasing our products, you agree to the following terms of service:</p><ol className="mt-7 list-decimal space-y-5 pl-5 text-sm leading-7"><li>You must be at least 18 years old to make a purchase.</li><li>You are responsible for understanding and complying with all applicable laws and regulations in your jurisdiction.</li><li>All sales are final, and we do not offer refunds or exchanges unless required by law.</li><li>We reserve the right to refuse service to anyone for any reason.</li><li>You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of our website or products.</li><li>We reserve the right to modify these terms of service at any time without notice.</li><li>Any disputes arising from these terms of service will be governed by the laws of the jurisdiction where our company is headquartered.</li></ol><p className="mt-8 text-lg font-medium">Thank you for choosing our online store!</p></div></div></section>
      <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="mono-label text-[10px] text-orange">Frequently asked questions</p><h2 className="display-font mt-5 text-5xl font-semibold leading-[0.92] sm:text-7xl">Answers for<br /><span className="text-ink/35">real projects.</span></h2><p className="mt-6 text-sm leading-6 text-ink/55">If your question is not here, <a href="/contact" className="font-bold text-ink underline decoration-orange decoration-2 underline-offset-4">send us a note.</a></p></div><div className="divide-y divide-line border-y border-line">{faqs.map(({ question, answer, category }, index) => <div key={question}><p className="mono-label pt-5 text-[9px] text-orange">{category}</p><button className="flex w-full items-center justify-between gap-5 py-4 text-left text-base font-bold sm:text-lg" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>{question}<ChevronDown className={`shrink-0 transition-transform ${openFaq === index ? 'rotate-180 text-orange' : ''}`} size={20} /></button>{openFaq === index && <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-ink/60">{answer}</p>}</div>)}</div></div></section>
      <section className="bg-paper-deep px-5 py-24 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{[['Materials', 'Product pages list the material used and care guidance for each part.'], ['Shipping', 'Eligible Australian orders include free shipping. Digital files are delivered online.'], ['Compatibility', 'Check measurements carefully. Contact us before ordering if you are unsure about fit.']].map(([title, copy]) => <div key={title} className="border border-line bg-paper p-7"><p className="mono-label text-[10px] text-orange">Policy / {title}</p><p className="mt-8 text-sm leading-7 text-ink/65">{copy}</p></div>)}</div></section>
    </>
  )
}

function BlogCard({ post }) {
  return <article className="group flex min-h-[380px] flex-col justify-between border border-line bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--ink)]"><div><div className={`flex aspect-[1.55] flex-col justify-between p-5 ${post.tone}`}><div className="flex items-start justify-between"><span className="mono-label text-[10px]">ACE / {post.number}</span><BookOpen size={19} /></div><span className="display-font text-6xl font-semibold leading-none opacity-80">{post.number}</span></div><p className="mono-label mt-6 text-[10px] text-orange">{post.category}</p><h2 className="display-font mt-3 text-2xl font-semibold leading-[1.02]">{post.title}</h2><p className="mt-3 text-sm leading-6 text-ink/60">{post.excerpt}</p></div><div className="mt-7 flex items-center justify-between border-t border-line pt-4 text-xs text-ink/55"><span className="flex items-center gap-2"><Clock3 size={14} /> {post.readTime}</span><a href={post.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-ink transition group-hover:text-orange">Read article <ExternalLink size={14} /></a></div></article>
}

function BlogPage() {
  return (
    <>
      <RouteHero eyebrow="05 / The journal" title="Notes from" accent="the workshop." copy="Practical ideas, print know-how, and a few lessons from making useful things for the long way round." />
      <section className="bg-paper-deep px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-5 lg:grid-cols-3">{blogPosts.map((post) => <BlogCard key={post.number} post={post} />)}</div></div></section>
    </>
  )
}

function NotFoundPage() {
  return <><RouteHero eyebrow="404 / Page not found" title="This page" accent="doesn't exist." copy="The page you are looking for has moved. Head back to the home page and find a better solution." /><section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><a href="/" className="inline-flex items-center gap-3 bg-orange px-6 py-4 text-sm font-bold transition hover:bg-ink hover:text-paper">Back home <ArrowRight size={17} /></a></div></section></>
}

function RoutePage({ route, menuOpen, setMenuOpen, onNavigate, openFaq, setOpenFaq }) {
  const page = route === '/about' ? <AboutPage /> : route === '/contact' ? <ContactPage /> : route === '/reviews' ? <ReviewsPage /> : route === '/terms' ? <TermsPage openFaq={openFaq} setOpenFaq={setOpenFaq} /> : route === '/blog' ? <BlogPage /> : <NotFoundPage />

  return <div className="min-h-screen overflow-hidden bg-paper text-ink"><div className="bg-orange px-5 py-2 text-center text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">Print. Create. Inspire. Repeat. <span className="mx-2">/</span> Free shipping across Australia</div><SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNavigate={onNavigate} /><main>{page}</main><SiteFooter onNavigate={onNavigate} /></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [pathname, setPathname] = useState(() => {
    const path = window.location.pathname.replace(/\/+$/, '')
    return path || '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/+$/, '')
      setPathname(path || '/')
      setMenuOpen(false)
      window.scrollTo(0, 0)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (href) => {
    const target = href.split('#')[0] || '/'
    if (target !== pathname) {
      window.history.pushState({}, '', target)
      setPathname(target)
    }
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  if (pathname !== '/') {
    return <RoutePage route={pathname} menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNavigate={navigate} openFaq={openFaq} setOpenFaq={setOpenFaq} />
  }

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-paper text-ink">
      <div className="bg-orange px-5 py-2 text-center text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">Print. Create. Inspire. Repeat. <span className="mx-2">/</span> Free shipping across Australia</div>

      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNavigate={navigate} />

      <main>
        <section className="relative bg-ink text-paper">
          <div className="grain absolute inset-0 opacity-30" />
          <div className="absolute right-[-12%] top-20 hidden size-[620px] rounded-full border border-orange/25 lg:block" />
          <div className="absolute right-[-4%] top-32 hidden size-[430px] rounded-full border border-orange/25 lg:block" />
          <div className="relative mx-auto grid min-h-[730px] max-w-7xl items-center gap-12 px-5 pb-16 pt-40 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 lg:pt-44">
             <div className="max-w-2xl">
               <p className="mono-label flex items-center gap-3 text-[10px] text-orange"><span className="h-px w-8 bg-orange" /> 3D printing experts for caravans and more</p>
               <h1 className="display-font mt-7 text-[clamp(3.8rem,8vw,7.8rem)] font-semibold leading-[0.86]">Smart solutions<br /><span className="text-orange">made to fit</span><br /><span className="outline-text">real life.</span></h1>
               <p className="mt-8 max-w-lg text-base leading-7 text-paper/65 sm:text-lg">Clever, durable 3D printed solutions for homes, workshops, businesses, caravans, and anyone who needs a better way to make something work.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#products" className="inline-flex items-center justify-center gap-3 bg-orange px-7 py-4 text-sm font-bold text-ink transition hover:bg-paper">Shop the collection <ArrowRight size={17} /></a>
                <a href="#custom" className="inline-flex items-center justify-center gap-3 border border-paper/35 px-7 py-4 text-sm font-bold transition hover:border-paper hover:bg-paper hover:text-ink">Need something custom <ArrowDownRight size={17} /></a>
              </div>
              <div className="mt-11 flex flex-wrap gap-x-6 gap-y-3 text-xs text-paper/60"><span className="flex items-center gap-2"><ShieldCheck size={16} className="text-orange" /> Made to last</span><span className="flex items-center gap-2"><Truck size={16} className="text-orange" /> Australia-wide shipping</span><span className="flex items-center gap-2"><Sparkles size={16} className="text-orange" /> Small-batch quality</span></div>
            </div>

            <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
              <div className="blueprint-grid relative aspect-square overflow-hidden bg-blue p-8 text-ink sm:p-12">
                <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em]"><span className="size-2 rounded-full bg-orange" /> ACE / OBJECT 001</div>
                 <div className="absolute bottom-7 left-7 text-[10px] font-medium uppercase tracking-[0.18em]">Designed for real life</div>
                <img className="relative z-10 h-full w-full object-contain mix-blend-multiply transition duration-700 hover:rotate-3 hover:scale-105" src={productImage} alt="ACE 3D Creations caravan burner protector" />
                <div className="absolute right-8 top-1/2 grid size-16 -translate-y-1/2 place-items-center rounded-full bg-orange text-center text-[9px] font-bold uppercase leading-3">Field<br />tested</div>
              </div>
              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 bg-paper px-4 py-3 text-ink shadow-xl sm:-left-8"><div className="grid size-10 place-items-center rounded-full bg-orange"><Check size={19} strokeWidth={3} /></div><div><p className="text-sm font-bold">Free shipping</p><p className="mono-label text-[9px] text-ink/50">within Australia</p></div></div>
               <div className="mono-label absolute -right-4 -top-5 rotate-6 bg-orange px-4 py-3 text-[10px] font-bold text-ink sm:-right-6">Made to<br />fit</div>
            </div>
          </div>
           <div className="relative overflow-hidden border-t border-white/15 py-4 text-xs font-medium text-paper/65"><div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap"><span>3D PRINTED FOR REAL LIFE</span><span className="text-orange">✳</span><span>SOLUTIONS THAT FIT</span><span className="text-orange">✳</span><span>MADE FOR EVERYDAY PROBLEMS</span><span className="text-orange">✳</span><span>3D PRINTED FOR REAL LIFE</span><span className="text-orange">✳</span><span>SOLUTIONS THAT FIT</span><span className="text-orange">✳</span><span>MADE FOR EVERYDAY PROBLEMS</span></div></div>
        </section>

        <section id="products" className="scroll-mt-8 px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="mono-label text-[10px] text-orange">01 / The collection</p><h2 className="display-font mt-4 max-w-2xl text-5xl font-semibold leading-[0.92] sm:text-7xl">Small parts.<br /><span className="text-ink/35">Big difference.</span></h2></div><p className="max-w-md text-sm leading-6 text-ink/60">From protectors that stop a costly replacement to downloadable files that put the printer in your hands. Practical design, without the fuss.</p></div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => <ProductCard key={product.title} product={product} index={index} />)}</div>
             <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-line pt-5 text-sm text-ink/60 sm:flex-row sm:items-center"><span>Not sure what fits your setup?</span><a href="/contact" onClick={(event) => { event.preventDefault(); navigate('/contact') }} className="inline-flex items-center gap-2 font-bold text-ink hover:text-orange">Talk to the team <ArrowRight size={16} /></a></div>
          </div>
        </section>

         <section id="about" className="scroll-mt-8 bg-paper-deep px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
            <div className="relative min-h-[450px] overflow-hidden bg-blue p-7 sm:p-10"><div className="absolute inset-0 blueprint-grid opacity-50" /><div className="relative flex h-full min-h-[390px] flex-col justify-between"><div className="flex items-start justify-between"><span className="mono-label text-[10px]">ACE LAB / 2026</span><ArrowDownRight size={22} /></div><div className="relative mx-auto w-full max-w-[310px]"><div className="absolute inset-0 rounded-full border border-ink/30" /><img className="relative h-72 w-full object-contain mix-blend-multiply" src={productImage} alt="ACE printed caravan part" loading="lazy" /></div><div className="flex justify-between border-t border-ink/25 pt-4 text-[10px] font-medium uppercase tracking-[0.14em]"><span>Test / refine / repeat</span><span>01 — 04</span></div></div></div>
             <div><p className="mono-label text-[10px] text-orange">02 / Why ACE</p><h2 className="display-font mt-5 text-5xl font-semibold leading-[0.92] sm:text-7xl">Made for the<br /><span className="text-orange">real world.</span></h2><p className="mt-7 max-w-xl text-base leading-7 text-ink/65">ACE 3D Creations turns practical problems into well-considered objects. From a caravan replacement part to a custom project for a home, workshop, or business, we make solutions that are useful, durable, and easier to access.</p><div className="mt-9 grid gap-5 sm:grid-cols-2">{['Designed around real use', 'Made in small batches', 'Support from a human', 'Solutions made to fit'].map((item) => <div key={item} className="flex items-center gap-3 border-t border-line pt-4 text-sm font-bold"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-orange"><Check size={14} strokeWidth={3} /></span>{item}</div>)}</div></div>
          </div>
        </section>

         <section id="process" className="bg-ink px-5 py-24 text-paper lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="mono-label text-[10px] text-orange">03 / The easy bit</p><h2 className="display-font mt-5 text-5xl font-semibold leading-[0.92] sm:text-7xl">Define it.<br />Make it.<br /><span className="text-orange">Repeat.</span></h2><p className="mt-7 max-w-sm text-sm leading-6 text-paper/60">A clear, collaborative process from first idea to a finished 3D printed solution.</p></div><div className="divide-y divide-white/15 border-y border-white/15">{[['01', 'Describe the problem', 'Share what needs to work better, with measurements, photos, or a simple idea.'], ['02', 'Create the solution', 'We model, prototype, print, and refine the right approach for the job.'], ['03', 'Put it to work', 'Use the finished part, share what you learn, and keep improving the result.']].map(([number, title, copy]) => <div key={number} className="grid gap-4 py-8 sm:grid-cols-[70px_1fr] sm:items-start lg:py-10"><span className="mono-label text-[10px] text-orange">{number}</span><div className="grid gap-3 md:grid-cols-[0.8fr_1fr] md:gap-8"><h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3><p className="text-sm leading-6 text-paper/55">{copy}</p></div></div>)}</div></div></div></section>

        <section id="custom" className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.3fr_0.7fr]"><div className="relative overflow-hidden bg-orange p-8 sm:p-12 lg:min-h-[360px]"><div className="grain absolute inset-0 opacity-30" /><div className="relative flex h-full flex-col justify-between gap-12"><div><p className="mono-label text-[10px]">Can&apos;t find it?</p><h2 className="display-font mt-5 max-w-2xl text-5xl font-semibold leading-[0.9] sm:text-7xl">Let&apos;s make<br />the right part.</h2></div><a href="mailto:ace3dcreations@gmail.com?subject=Custom 3D printing enquiry" className="inline-flex w-fit items-center gap-3 bg-ink px-6 py-4 text-sm font-bold text-paper transition hover:bg-paper hover:text-ink">Start a conversation <Mail size={17} /></a></div></div><div className="flex flex-col justify-between border border-line bg-blue p-8 sm:p-10"><div><Sparkles size={24} /><h3 className="display-font mt-8 text-3xl font-semibold leading-tight">Have a file?<br />We can print it.</h3><p className="mt-4 text-sm leading-6 text-ink/60">Send us your STL, measurements, or a few photos. We&apos;ll tell you what&apos;s possible.</p></div><a href="mailto:ace3dcreations@gmail.com?subject=3D print file enquiry" className="mt-8 inline-flex items-center gap-2 text-sm font-bold hover:text-orange">Send your file <ExternalLink size={15} /></a></div></div></section>

         <section id="reviews" className="bg-blue px-5 py-24 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mono-label text-[10px] text-orange">04 / From the field</p><h2 className="display-font mt-5 text-5xl font-semibold leading-[0.92] sm:text-7xl">Good work<br /><span className="text-ink/35">gets noticed.</span></h2></div><p className="max-w-sm text-sm leading-6 text-ink/60">A few words from the people who have put ACE parts to work.</p></div><div className="mt-14 grid gap-5 lg:grid-cols-3"><blockquote className="flex min-h-64 flex-col justify-between border border-ink/15 bg-paper p-7"><div className="flex gap-1 text-orange">★★★★★</div><p className="mt-8 text-lg font-medium leading-7">“Finally found a protector that actually fits our cooktop. It arrived quickly and feels really solid.”</p><footer className="mono-label mt-8 text-[10px] text-ink/50">Rachel / Victoria</footer></blockquote><blockquote className="flex min-h-64 flex-col justify-between bg-ink p-7 text-paper"><div className="flex gap-1 text-orange">★★★★★</div><p className="mt-8 text-lg font-medium leading-7">“The digital file was exactly what we needed. Printed it at our local makerspace and saved a fortune.”</p><footer className="mono-label mt-8 text-[10px] text-paper/45">Ben / Queensland</footer></blockquote><blockquote className="flex min-h-64 flex-col justify-between border border-ink/15 bg-paper p-7"><div className="flex gap-1 text-orange">★★★★★</div><p className="mt-8 text-lg font-medium leading-7">“Helpful, fast replies and a part that solved a very specific replacement problem. Would absolutely recommend.”</p><footer className="mono-label mt-8 text-[10px] text-ink/50">Mia / New South Wales</footer></blockquote></div></div></section>

         <section id="blog" className="scroll-mt-8 bg-paper-deep px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="mono-label text-[10px] text-orange">05 / The journal</p><h2 className="display-font mt-4 max-w-2xl text-5xl font-semibold leading-[0.92] sm:text-7xl">Notes from<br /><span className="text-ink/35">the workshop.</span></h2></div><p className="max-w-md text-sm leading-6 text-ink/60">Practical ideas, print know-how, and inspiration for custom 3D printed solutions.</p></div><div className="mt-14 grid gap-5 lg:grid-cols-3">{blogPosts.map((post) => <article key={post.number} className="group flex min-h-[360px] flex-col justify-between border border-line bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--ink)]"><div><div className={`flex aspect-[1.55] flex-col justify-between p-5 ${post.tone}`}><div className="flex items-start justify-between"><span className="mono-label text-[10px]">ACE / {post.number}</span><BookOpen size={19} /></div><span className="display-font text-6xl font-semibold leading-none opacity-80">{post.number}</span></div><p className="mono-label mt-6 text-[10px] text-orange">{post.category}</p><h3 className="display-font mt-3 text-2xl font-semibold leading-[1.02]">{post.title}</h3><p className="mt-3 text-sm leading-6 text-ink/60">{post.excerpt}</p></div><div className="mt-7 flex items-center justify-between border-t border-line pt-4 text-xs text-ink/55"><span className="flex items-center gap-2"><Clock3 size={14} /> {post.readTime}</span><a href={post.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-ink transition group-hover:text-orange">Read article <ExternalLink size={14} /></a></div></article>)}</div></div></section>

          <section id="terms" className="scroll-mt-8 px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="mono-label text-[10px] text-orange">06 / Answers & terms</p><h2 className="display-font mt-5 text-5xl font-semibold leading-[0.92] sm:text-7xl">Frequently<br /><span className="text-ink/35">asked.</span></h2><p className="mt-6 text-sm leading-6 text-ink/55">Care, shipping, payments, and custom work. Still curious? <a href="mailto:ace3dcreations@gmail.com" className="font-bold text-ink underline decoration-orange decoration-2 underline-offset-4">Send us a note.</a></p></div><div className="divide-y divide-line border-y border-line">{faqs.map(({ question, answer, category }, index) => <div key={question}><p className="mono-label pt-5 text-[9px] text-orange">{category}</p><button className="flex w-full items-center justify-between gap-5 py-4 text-left text-base font-bold sm:text-lg" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>{question}<ChevronDown className={`shrink-0 transition-transform ${openFaq === index ? 'rotate-180 text-orange' : ''}`} size={20} /></button>{openFaq === index && <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-ink/60">{answer}</p>}</div>)}</div></div></section>

         <section id="contact" className="px-5 pb-5 lg:px-8 lg:pb-8"><div className="relative mx-auto max-w-7xl overflow-hidden bg-ink px-7 py-16 text-paper sm:px-12 lg:px-20 lg:py-20"><div className="absolute -right-20 -top-44 size-[520px] rounded-full border-[70px] border-orange/25" /><div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="mono-label text-[10px] text-orange">Ready when you are</p><h2 className="display-font mt-5 max-w-3xl text-5xl font-semibold leading-[0.9] sm:text-7xl">Make the right<br /><span className="text-orange">solution.</span></h2></div><a href="#products" className="inline-flex w-fit items-center gap-3 bg-orange px-7 py-4 text-sm font-bold text-ink transition hover:bg-paper">Explore the collection <ArrowRight size={17} /></a></div></div></section>
      </main>

         <SiteFooter onNavigate={navigate} />
    </div>
  )
}

function ArrowUpRightIcon() {
  return <ArrowRight size={15} />
}

export default App
