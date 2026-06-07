export function PageHeader({
  eyebrow,
  title,
  subtitle,
  bgImageUrl,
  noOverlay,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  bgImageUrl?: string
  noOverlay?: boolean
}) {
  return (
    <header className="relative overflow-hidden bg-black pt-40 pb-28 text-white md:pt-52 md:pb-36">
      {bgImageUrl && (
        <>
          <div 
            className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat ${noOverlay ? 'opacity-100' : 'opacity-80'}`}
            style={{ backgroundImage: `url(${bgImageUrl})` }}
          />
          {!noOverlay && <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/20 to-transparent" />}
        </>
      )}

      {/* Abstract Animated Background */}
      {!bgImageUrl && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/30 blur-[100px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">{eyebrow}</p>
        )}
        <h1 className="font-heading text-balance text-4xl font-bold uppercase md:text-5xl pt-2 pb-1 text-white">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-white/80">{subtitle}</p>}
      </div>
    </header>
  )
}
