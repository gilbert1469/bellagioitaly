export default function Footer() {
  return (
    <footer className="bg-[#1C2B35] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-white text-base tracking-[0.22em] uppercase">
          Bellagio Italy
        </span>
        <p className="font-body text-xs text-white/45 text-center">
          Via Borgo Vico 42, 22100 Como (CO), Italy
        </p>
        <div className="flex items-center gap-5 font-body text-xs text-white/45">
          <span>© 2025 Bellagio Italy</span>
          <span className="text-[#B8966E]/50">·</span>
          <a href="#" className="hover:text-[#B8966E] transition-colors duration-200">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
