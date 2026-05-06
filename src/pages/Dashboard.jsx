import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

const highlights = [
  {
    title: '2+ Years Experience',
    value: 'Shipping polished frontend products with consistency and speed.',
    accent: 'from-cyan-400/30 to-sky-500/10',
  },
  {
    title: 'React / Next.js Expert',
    value: 'Building scalable interfaces, dashboards, auth flows, and reusable systems.',
    accent: 'from-fuchsia-400/30 to-violet-500/10',
  },
  {
    title: 'React Native Apps',
    value: 'Extending clean product thinking across mobile experiences.',
    accent: 'from-emerald-400/30 to-teal-500/10',
  },
  {
    title: 'Clean UI Specialist',
    value: 'Designing interfaces that feel premium, intuitive, and production-ready.',
    accent: 'from-amber-300/30 to-orange-500/10',
  },
]

const projects = [
  {
    title: 'Context API Auth Experience',
    description:
      'A polished authentication flow with protected routes, reusable UI primitives, and a cleaner developer-first structure.',
    stack: 'React, Tailwind, ShadCN-style UI',
  },
  {
    title: 'Portfolio Platform',
    description:
      'A personal portfolio crafted to present projects, frontend thinking, and brand identity with clarity and impact.',
    stack: 'Frontend branding, modern landing patterns',
  },
  {
    title: 'Production Table System',
    description:
      'A reusable TanStack-powered data table architecture built for sorting, filters, pagination, and future scale.',
    stack: 'TanStack Table, scalable component patterns',
  },
]

const tableRows = [
  { name: 'Enterprise Lead', role: 'Admin', status: 'Active', score: '98%' },
  { name: 'Product Analyst', role: 'Editor', status: 'Review', score: '92%' },
  { name: 'Growth Ops', role: 'Viewer', status: 'Active', score: '89%' },
  { name: 'Mobile Squad', role: 'Admin', status: 'Draft', score: '94%' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function ExternalAction({ href, children, className = '', download = false }) {
  const handleClick = () => {
    if (download) {
      window.location.href = href
      return
    }

    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <button className={className} onClick={handleClick} type="button">
      {children}
    </button>
  )
}

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 700)

    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handleMove)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  if (!isLoaded) {
    return (
      <div className="dashboard-brand dashboard-shell flex min-h-screen items-center justify-center overflow-hidden px-6">
        <motion.div
          animate={{ opacity: [0.45, 1, 0.45], scale: [0.96, 1.05, 0.96] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="dashboard-glass rounded-[2rem] border border-outline-variant/20 px-8 py-6 shadow-[0px_20px_50px_rgba(19,27,46,0.08)]"
        >
          <div className="flex items-center gap-4">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <p className="text-sm uppercase tracking-[0.35em] text-on-surface-variant">Loading dashboard</p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="dashboard-brand dashboard-shell relative min-h-screen overflow-hidden">
      <div className="dashboard-grid absolute inset-0 opacity-60" />
      <motion.div
        className="dashboard-glow pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        animate={{ x: cursor.x, y: cursor.y }}
        transition={{ type: 'spring', stiffness: 130, damping: 18, mass: 0.3 }}
        style={{ width: 220, height: 220 }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="dashboard-glass flex items-center justify-between rounded-[1.5rem] border border-outline-variant/20 px-4 py-3 shadow-[0px_18px_40px_rgba(19,27,46,0.06)] sm:px-6 sm:py-4"
        >
          <div className="dashboard-headline text-sm font-bold tracking-tight text-on-background sm:text-lg">Gandharv Kalia</div>
          <div className="hidden items-center gap-6 text-sm font-semibold text-on-surface-variant lg:flex">
            <span>Frontend Developer</span>
            <span>React / Next.js / TypeScript</span>
          </div>
          <ExternalAction
            href="https://gandharvkalia.netlify.app/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 sm:px-5 sm:text-sm"
          >
            Visit Portfolio
          </ExternalAction>
        </motion.div>

        <motion.header
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative overflow-hidden rounded-[2rem] px-5 py-8 sm:px-6 sm:py-10 lg:rounded-[3rem] lg:px-8"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(45%_45%_at_50%_50%,#eaedff_0%,#faf8ff_100%)] lg:rounded-[3rem]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center xl:grid-cols-[minmax(0,1fr)_400px]">
            <div className="order-1 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                Gandharv Kalia - Frontend Developer
              </div>
              <div className="space-y-4">
                <h1 className="dashboard-headline max-w-4xl text-4xl font-extrabold leading-[0.92] tracking-tighter text-on-surface sm:text-6xl lg:text-7xl xl:text-8xl">
                  Hey, I&apos;m{' '}
                  <span className="text-primary">
                    Gandharv
                  </span>{' '}
                  I build scalable & beautiful frontend experiences.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-on-surface-variant sm:text-lg sm:leading-8">
                  Crafting high-performance web and mobile apps with React, Next.js, TypeScript,
                  and React Native. I focus on clean architecture, premium UI, and product-grade
                  execution that scales.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ExternalAction
                  href="https://gandharvkalia.netlify.app/"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
                >
                  View Portfolio
                </ExternalAction>
                <ExternalAction
                  href="/Gandharv-Kalia-Resume.docx"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-outline-variant/20 bg-white px-6 py-3 text-sm font-semibold text-on-surface transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Download Resume
                </ExternalAction>
                <ExternalAction
                  href="https://www.linkedin.com/in/gandharva-kalia-8b7a732bb/"
                  className="inline-flex items-center justify-center rounded-full border border-outline-variant/20 bg-surface-container-low px-6 py-3 text-sm font-semibold text-on-surface transition hover:-translate-y-0.5 hover:bg-surface-container-high"
                >
                  Connect on LinkedIn
                </ExternalAction>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                {['React', 'Next.js', 'Tailwind', 'API Integration', 'TypeScript'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-outline-variant/10 bg-surface-container-high px-5 py-2 text-sm font-semibold text-on-surface shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 relative w-full max-w-md self-start lg:justify-self-end"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-2xl lg:rounded-[3rem]" />
              <div className="relative overflow-hidden rounded-[2rem] bg-surface-container-low shadow-[0px_20px_40px_rgba(26,28,28,0.06)] lg:rounded-[3rem]">
                <div className="absolute inset-0 bg-primary/5" />
                <div className="relative p-5 sm:p-6">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm sm:text-xs">
                          Live Developer Snapshot
                      </div>
                      <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(53,37,205,0.1)]" />
                    </div>
                    <div className="rounded-[1.75rem] bg-white p-5 shadow-[0px_20px_50px_rgba(19,27,46,0.08)] sm:p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-primary text-2xl font-bold text-white sm:h-20 sm:w-20 sm:rounded-[2rem] sm:text-3xl">
                          GK
                        </div>
                        <div>
                          <p className="dashboard-headline text-xl font-bold text-on-background sm:text-2xl">Frontend Developer</p>
                          <p className="mt-1 text-xs leading-5 text-on-surface-variant sm:text-sm">React - Next.js - TypeScript - React Native</p>
                        </div>
                      </div>
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-surface-container p-4">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-outline sm:text-xs">Experience</p>
                          <p className="mt-2 text-2xl font-bold text-primary sm:text-3xl">2+</p>
                        </div>
                        <div className="rounded-2xl bg-surface-container p-4">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-outline sm:text-xs">Focus</p>
                          <p className="mt-2 text-base font-bold text-on-background sm:text-lg">Scalable UI/UX</p>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-6 text-on-surface-variant">
                        Clean UI systems, production-ready architecture, and frontend experiences that feel refined.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 240, damping: 16 }}
            >
              <Card className="h-full overflow-hidden rounded-[2rem] border-outline-variant/10 bg-white text-on-surface shadow-[0px_18px_40px_rgba(19,27,46,0.06)] transition-shadow hover:shadow-xl">
                <CardContent className="flex h-full flex-col p-0">
                  <div className={`h-1 w-full bg-gradient-to-r ${item.accent}`} />
                  <div className="flex h-full flex-col p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Highlight</p>
                    <h2 className="dashboard-headline mt-5 text-[2rem] leading-tight font-bold text-on-background">
                      {item.title}
                    </h2>
                    <p className="mt-4 max-w-xs text-base leading-8 text-on-surface-variant">
                      {item.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-outline-variant/20 bg-white p-6 shadow-[0px_18px_40px_rgba(19,27,46,0.06)] lg:p-7"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-primary">Featured Work</p>
                <h2 className="dashboard-headline mt-3 text-3xl font-bold sm:text-4xl">Product thinking with frontend depth</h2>
              </div>
              <ExternalAction
                href="https://github.com/Gandharvkalia1"
                className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                View on GitHub
              </ExternalAction>
            </div>

            <div className="mt-6 grid gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="rounded-[1.75rem] border border-outline-variant/10 bg-surface-container-low p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                <h3 className="dashboard-headline text-xl font-bold sm:text-2xl">{project.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-on-surface-variant">{project.description}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
                      {project.stack}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] bg-surface-container-low p-6 lg:p-7"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Personal Brand</p>
            <h2 className="dashboard-headline mt-3 text-3xl font-bold sm:text-4xl">Frontend developer with product instincts</h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
              I build interfaces that are not only visually sharp, but also architected to scale in
              real production environments. Clean systems, reusable components, and thoughtful UX are
              at the center of how I work.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-outline">Core Stack</p>
                <p className="mt-3 text-lg font-semibold text-on-background">React, Next.js, TypeScript</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-outline">Mobile</p>
                <p className="mt-3 text-lg font-semibold text-on-background">React Native experiences</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border-l-4 border-primary bg-white p-6 shadow-sm">
              <p className="text-lg italic text-on-surface-variant">
                "I don&apos;t just build UI - I build scalable experiences that perform, convert, and scale."
              </p>
            </div>
          </motion.div>
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-outline-variant/20 bg-white p-6 shadow-[0px_18px_40px_rgba(19,27,46,0.06)] lg:p-8"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Feature Spotlight</p>
              <h2 className="dashboard-headline mt-3 text-3xl font-bold sm:text-4xl">Reusable Production-Ready Data Table</h2>
              <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
                A premium table system built with TanStack Table for serious products. Designed for
                sorting, filtering, pagination, and long-term scalability without turning your codebase
                into a mess.
              </p>
            </div>
            <ExternalAction
              href="https://github.com/Gandharvkalia1"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              View Code
            </ExternalAction>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
            <div className="grid gap-4">
              {['Sorting', 'Filtering', 'Pagination', 'Scalable architecture'].map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-outline-variant/10 bg-surface-container-low px-4 py-4 text-sm font-medium text-on-surface transition hover:bg-surface-container-high"
                >
                  {feature}
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-outline-variant/20 bg-white shadow-sm">
              <div className="border-b border-outline-variant/20 p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-on-background">Live UI Mock</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-outline">TanStack-style admin table</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-full bg-surface-container px-3 py-1 text-xs text-on-surface-variant">Filter: Active</div>
                    <div className="rounded-full bg-surface-container px-3 py-1 text-xs text-on-surface-variant">Sort: Score</div>
                    <div className="rounded-full bg-surface-container px-3 py-1 text-xs text-on-surface-variant">Page 1 / 8</div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-surface-container-low text-outline">
                    <tr>
                      <th className="px-4 py-3 font-medium">Name</th>
                      <th className="px-4 py-3 font-medium">Role</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Health</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => (
                      <tr key={row.name} className="border-t border-outline-variant/10 text-on-surface">
                        <td className="px-4 py-4">{row.name}</td>
                        <td className="px-4 py-4">{row.role}</td>
                        <td className="px-4 py-4">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {row.status}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-24 overflow-hidden rounded-full bg-surface-container">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: row.score }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="h-full rounded-full bg-primary"
                              />
                            </div>
                            <span>{row.score}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] bg-inverse-surface px-6 py-10 text-white shadow-[0px_20px_50px_rgba(19,27,46,0.08)]"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-white/75">Let&apos;s build something memorable</p>
              <h2 className="dashboard-headline mt-3 text-3xl font-bold sm:text-4xl">
                Premium frontend, production-grade systems, and product experiences that leave an impression.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                className="rounded-full bg-white text-on-background hover:bg-surface-container"
                onClick={() => window.open('https://gandharvkalia.netlify.app/', '_blank', 'noopener,noreferrer')}
                type="button"
              >
                Explore Portfolio
              </Button>
              <Button
                className="rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/15"
                onClick={() => window.open('https://github.com/Gandharvkalia1', '_blank', 'noopener,noreferrer')}
                type="button"
                variant="ghost"
              >
                Visit GitHub
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
