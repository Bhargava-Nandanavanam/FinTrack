import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center hero-gradient">
      <section className="max-w-3xl w-full px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
          Track money. <span className="text-[--color-primary]">See patterns.</span> Decide better.
        </h1>
        <p className="mt-4 text-base text-[--color-muted]">
          Your finances, simplified — fast tracking, CSV uploads, and clear insights without the noise.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild href="/signup" variant="gradient">Get Started</Button>
          <Button asChild href="/login" variant="secondary">I already have an account</Button>
        </div>
      </section>
    </main>
  );
}
