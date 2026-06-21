export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
        SANTIRAT HLAOP
      </h1>

      {/* Accent divider — driven by --accent so the color is clearly visible. */}
      <div className="mt-6 h-1 w-24 rounded-full bg-accent" />

      <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
        Full-Stack Developer
        <span className="text-accent"> — </span>
        TypeScript
        <span className="text-accent"> · </span>
        Next.js
        <span className="text-accent"> · </span>
        NestJS
      </p>

      {/* Scroll cue */}
      <span className="absolute bottom-8 text-xs uppercase tracking-widest text-muted">
        Scroll ↓
      </span>
    </section>
  );
}
