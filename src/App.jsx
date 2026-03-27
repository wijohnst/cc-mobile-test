import { useState } from 'react'
import { Menu, X, MapPin, Clock, Phone, Mail, ChevronRight, Calendar } from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Worship', href: '#worship' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  { day: 'Sunday', time: '8:00 AM', name: 'Holy Eucharist', note: 'Sep – May' },
  { day: 'Sunday', time: '10:30 AM', name: 'Holy Eucharist', note: 'Sep – May · 9 AM Jun–Aug' },
  { day: 'Wednesday', time: '8:00 AM', name: 'Healing Eucharist', note: '' },
  { day: 'Friday', time: '9:00 AM', name: 'Morning Prayer', note: '' },
]

const EVENTS = [
  {
    date: 'Every Tuesday',
    title: 'Community Food Pantry',
    desc: 'Open 8:45 AM – 12:00 PM. All are welcome. Coordinated by Pat Johnson.',
    category: 'Outreach',
  },
  {
    date: '2nd & 4th Saturdays',
    title: 'Saturday Suppers',
    desc: 'Community meals served 4:00 – 5:30 PM. Take-out available. Coordinated by Rosemary Daubert.',
    category: 'Outreach',
  },
  {
    date: 'Sundays',
    title: 'Adult Formation',
    desc: 'Join us between services for adult education, discussion, and growing in discipleship.',
    category: 'Formation',
  },
]

const NEWS = [
  {
    title: 'Food Pantry Open Every Tuesday',
    date: 'Ongoing',
    excerpt:
      'Our parish food pantry is open every Tuesday from 8:45 AM to noon. Volunteers are always welcome — contact the office to help.',
  },
  {
    title: 'Saturday Suppers Continue This Month',
    date: 'Ongoing',
    excerpt:
      'Community meals on the 2nd and 4th Saturdays, 4:00–5:30 PM. Take-out is available. All are welcome at the table.',
  },
  {
    title: 'Services Available Online',
    date: 'Year-round',
    excerpt:
      'Can\'t join us in person? All Sunday and weekday services can be joined online. Visit our website for the livestream link.',
  },
]

const MINISTRIES = [
  { title: 'Community Food Pantry', icon: '✦', desc: 'Open every Tuesday, 8:45 AM – noon. Feeding neighbors in the Lewiston–Clarkston Valley.' },
  { title: 'Saturday Suppers', icon: '✦', desc: 'Community meals on the 2nd & 4th Saturdays, 4–5:30 PM. Take-out available.' },
  { title: 'Music & Worship', icon: '✦', desc: 'A rich musical tradition with choir, organ, and liturgical music at every Eucharist.' },
  { title: 'Discipleship & Formation', icon: '✦', desc: 'Worship, study, and service — growing together in faith as the body of Christ.' },
]

// ─── Colors ──────────────────────────────────────────────────────────────────
const C = {
  navy: '#1A202C',
  blue: '#407EC9',
  lightBlue: '#5BC2E7',
  red: '#BF0D3E',
  gray: '#f7f7f7',
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ backgroundColor: C.navy }} className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <a href="#" className="flex flex-col leading-tight no-underline">
          <span className="text-white font-serif text-base font-semibold tracking-wide">
            Church of the Nativity
          </span>
          <span style={{ color: C.lightBlue }} className="text-xs tracking-widest uppercase">
            Episcopal · Lewiston, Idaho
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-300 hover:text-white text-sm tracking-wide transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#give"
            style={{ backgroundColor: C.red }}
            className="text-white text-sm px-5 py-2 rounded font-medium hover:opacity-90 transition-opacity no-underline"
          >
            Give
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1 cursor-pointer bg-transparent border-0"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          style={{ backgroundColor: C.navy }}
          className="md:hidden border-t border-gray-700 px-5 py-5 flex flex-col gap-4"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 text-base py-1 no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#give"
            style={{ backgroundColor: C.red }}
            className="text-white text-sm px-4 py-2 rounded text-center font-medium no-underline"
          >
            Give Online
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative flex items-center justify-center text-center min-h-screen pt-16"
      style={{
        background: `linear-gradient(160deg, ${C.navy} 0%, #1e3a5f 55%, #2c4a72 100%)`,
      }}
    >
      {/* Subtle cross watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg
          width="480"
          height="480"
          viewBox="0 0 100 100"
          fill="white"
          style={{ opacity: 0.04 }}
        >
          <rect x="43" y="8" width="14" height="84" />
          <rect x="8" y="36" width="84" height="14" />
        </svg>
      </div>

      {/* Decorative top rule */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-px"
        style={{ height: 48, background: `linear-gradient(to bottom, transparent, ${C.lightBlue})` }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-28 flex flex-col items-center">
        <p style={{ color: C.lightBlue }} className="text-xs tracking-widest uppercase mb-5">
          Welcome to
        </p>

        <h1
          className="text-white font-serif font-light leading-tight mb-5"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', letterSpacing: '-0.02em' }}
        >
          Church of<br />the Nativity
        </h1>

        <p className="text-gray-300 text-lg md:text-xl font-light mb-4 italic">
          "The Episcopal Church Welcomes You"
        </p>

        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
          Feeding body, mind, and soul — rooted in tradition, open to all, in the heart of Lewiston, Idaho since 1864.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#worship"
            style={{ backgroundColor: C.red }}
            className="text-white px-8 py-3 rounded text-sm font-semibold hover:opacity-90 transition-opacity no-underline tracking-wide"
          >
            Plan Your Visit
          </a>
          <a
            href="#about"
            className="text-white px-8 py-3 rounded text-sm font-semibold border hover:bg-white/10 transition-colors no-underline tracking-wide"
            style={{ borderColor: 'rgba(255,255,255,0.35)' }}
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}

// ─── Service Times Banner ─────────────────────────────────────────────────────

function ServiceTimes() {
  return (
    <section id="worship" style={{ backgroundColor: C.blue }} className="py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-white/70 text-xs tracking-widest uppercase mb-1">Join Us for Worship</p>
          <h2 className="text-white font-serif text-2xl font-semibold">Service Times</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-7 md:gap-12">
          {SERVICES.map((s) => (
            <div key={s.time} className="flex items-start gap-3 text-white">
              <Clock size={16} className="mt-1 shrink-0" style={{ opacity: 0.7 }} />
              <div>
                <div className="font-semibold text-sm">
                  {s.day} · {s.time}
                </div>
                <div className="text-white/80 text-sm">{s.name}</div>
                {s.note && <div className="text-white/55 text-xs">{s.note}</div>}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="shrink-0 text-white border px-5 py-2 rounded text-sm hover:bg-white/10 transition-colors no-underline font-medium"
          style={{ borderColor: 'rgba(255,255,255,0.5)' }}
        >
          Get Directions
        </a>
      </div>
    </section>
  )
}

// ─── Welcome / About ──────────────────────────────────────────────────────────

function Welcome() {
  return (
    <section id="about" className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p style={{ color: C.blue }} className="text-xs tracking-widest uppercase mb-3">
            Our Community
          </p>
          <h2
            className="font-serif font-light leading-snug mb-6"
            style={{ color: C.navy, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
            A Place of Belonging,<br />Grace &amp; Service
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-base">
            The Church of the Nativity takes its name from the first Episcopal service held in the
            Lewiston–Clarkston Valley — on Christmas Day, 1864. We are part of the Episcopal Diocese
            of Spokane and the worldwide Anglican Communion — a community where ancient faith meets
            everyday life.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-base">
            Our mission is <em>"Feeding body, mind, and soul"</em> — through our community food
            pantry and Saturday Suppers, worship and formation, and a rich tradition of music and
            liturgy. Whether you are new to faith or returning after years away, you are welcome here
            exactly as you are.
          </p>
          <a
            href="#about"
            style={{ color: C.red }}
            className="inline-flex items-center gap-1 font-semibold text-sm hover:gap-2 transition-all no-underline"
          >
            Our Story <ChevronRight size={16} />
          </a>
        </div>

        {/* Image placeholder */}
        <div className="relative">
          <div
            className="aspect-[4/3] rounded-lg overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: '#dbe8f5' }}
          >
            <div className="text-center" style={{ color: C.blue }}>
              <svg
                width="72"
                height="72"
                viewBox="0 0 100 100"
                fill="currentColor"
                className="mx-auto mb-3"
                style={{ opacity: 0.25 }}
              >
                <rect x="43" y="8" width="14" height="84" />
                <rect x="8" y="36" width="84" height="14" />
              </svg>
              <p className="text-sm" style={{ opacity: 0.45 }}>Church exterior photo</p>
            </div>
          </div>
          {/* Accent block */}
          <div
            className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg -z-10"
            style={{ backgroundColor: C.red, opacity: 0.12 }}
          />
        </div>
      </div>
    </section>
  )
}

// ─── Events ───────────────────────────────────────────────────────────────────

function Events() {
  return (
    <section id="events" className="py-20 px-5" style={{ backgroundColor: C.gray }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p style={{ color: C.blue }} className="text-xs tracking-widest uppercase mb-2">
              Calendar
            </p>
            <h2
              className="font-serif font-light"
              style={{ color: C.navy, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
            >
              Upcoming Events
            </h2>
          </div>
          <a
            href="#events"
            style={{ color: C.blue }}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all no-underline"
          >
            Full Calendar <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {EVENTS.map((e) => (
            <div
              key={e.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                style={{ backgroundColor: C.blue }}
                className="px-5 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Calendar size={16} style={{ color: 'rgba(255,255,255,0.7)' }} />
                  <span className="text-white font-semibold text-sm">{e.date}</span>
                </div>
                <span className="text-xs text-white/75 bg-white/20 px-2.5 py-0.5 rounded-full">
                  {e.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base font-semibold mb-2" style={{ color: C.navy }}>
                  {e.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{e.desc}</p>
                <a
                  href="#events"
                  style={{ color: C.red }}
                  className="inline-flex items-center gap-1 text-xs font-semibold mt-4 hover:gap-2 transition-all no-underline"
                >
                  Learn More <ChevronRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── News ─────────────────────────────────────────────────────────────────────

function News() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p style={{ color: C.blue }} className="text-xs tracking-widest uppercase mb-2">
              From the Parish
            </p>
            <h2
              className="font-serif font-light"
              style={{ color: C.navy, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
            >
              News &amp; Announcements
            </h2>
          </div>
          <a
            href="#news"
            style={{ color: C.blue }}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all no-underline"
          >
            All News <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {NEWS.map((n) => (
            <article
              key={n.title}
              className="border-t-2 pt-6 group cursor-pointer"
              style={{ borderColor: C.blue }}
            >
              <p className="text-xs text-gray-400 mb-2 tracking-wide uppercase">{n.date}</p>
              <h3
                className="font-serif text-base font-semibold mb-2 group-hover:underline"
                style={{ color: C.navy }}
              >
                {n.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{n.excerpt}</p>
              <a
                href="#"
                style={{ color: C.red }}
                className="inline-flex items-center gap-1 text-xs font-semibold mt-4 hover:gap-2 transition-all no-underline"
              >
                Read More <ChevronRight size={13} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Ministries ───────────────────────────────────────────────────────────────

function Ministries() {
  return (
    <section
      id="ministries"
      className="py-20 px-5"
      style={{ background: `linear-gradient(135deg, ${C.navy} 0%, #2c4a72 100%)` }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p style={{ color: C.lightBlue }} className="text-xs tracking-widest uppercase mb-3">
            Get Involved
          </p>
          <h2
            className="font-serif font-light text-white mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
          >
            Ministries &amp; Programs
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            There are many ways to connect, serve, and grow at Nativity. Find your place among us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {MINISTRIES.map((m) => (
            <div
              key={m.title}
              className="rounded-lg p-6 hover:bg-white/15 transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            >
              <div style={{ color: C.lightBlue }} className="text-xl mb-3">
                {m.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{m.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#ministries"
            style={{ backgroundColor: C.red }}
            className="inline-block text-white px-8 py-3 rounded text-sm font-semibold hover:opacity-90 transition-opacity no-underline"
          >
            Explore All Ministries
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: C.navy }} className="pt-16 pb-8 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Church info */}
          <div>
            <h3 className="text-white font-serif text-lg mb-2">Church of the Nativity</h3>
            <p
              style={{ color: C.lightBlue }}
              className="text-xs tracking-widest uppercase mb-5"
            >
              Episcopal Diocese of Spokane
            </p>
            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: C.lightBlue }} />
                <span>
                  731 8th Street<br />Lewiston, ID 83501
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} style={{ color: C.lightBlue }} />
                <span>(208) 743-9121</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} style={{ color: C.lightBlue }} />
                <span>office@nativitylewiston.com</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-gray-400 text-sm list-none p-0 m-0">
              {[
                'About Us',
                'Worship & Services',
                'Ministries',
                'Events Calendar',
                'Sermons',
                'Give Online',
                'Contact Us',
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors no-underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map + visit */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Plan Your Visit
            </h3>
            <div
              className="rounded-lg overflow-hidden mb-4 aspect-video flex items-center justify-center"
              style={{ backgroundColor: '#2d3748' }}
            >
              <div className="text-center text-gray-500">
                <MapPin size={28} className="mx-auto mb-1" style={{ opacity: 0.4 }} />
                <p className="text-xs">Map placeholder</p>
              </div>
            </div>
            <a
              href="#"
              style={{ backgroundColor: C.blue }}
              className="block text-center text-white text-sm py-2 rounded hover:opacity-90 transition-opacity no-underline font-medium"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-gray-500 text-xs">
            © 2026 Church of the Nativity, Lewiston, Idaho. Member of the Episcopal Diocese of Spokane.
          </p>
          <div className="flex gap-5 text-gray-500 text-xs">
            <a
              href="https://www.episcopalchurch.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors no-underline"
            >
              The Episcopal Church
            </a>
            <a
              href="https://www.spokanediocese.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors no-underline"
            >
              Diocese of Spokane
            </a>
            <a
              href="https://www.facebook.com/episcopalnativity/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors no-underline"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  return (
    <div style={{ fontFamily: "'Geist Variable', system-ui, sans-serif" }}>
      <Navbar />
      <Hero />
      <ServiceTimes />
      <Welcome />
      <Events />
      <News />
      <Ministries />
      <Footer />
    </div>
  )
}

export default App
