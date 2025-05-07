import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] py-10">
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        <Hero />
        <About />
        <Skills />
      </div>
    </main>
  )
}