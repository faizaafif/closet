import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-charcoal">
      <header className="w-full border-b border-charcoal/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
          >
            closet
          </Link>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#features"
              className="transition hover:text-charcoal/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
            >
              Explore
            </a>
            <a
              href="#how-it-works"
              className="transition hover:text-charcoal/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
            >
              How it works
            </a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-charcoal/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-cream transition hover:bg-charcoal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
            >
              Sign up
            </Link>
          </div>
          <details className="relative md:hidden">
            <summary className="cursor-pointer rounded-full border border-charcoal/20 px-4 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal">
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-charcoal/10 bg-cream p-3 shadow-lg">
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="#features"
                  className="rounded-md px-3 py-2 transition hover:bg-charcoal/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                >
                  Explore
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-md px-3 py-2 transition hover:bg-charcoal/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                >
                  How it works
                </a>
                <Link
                  href="/login"
                  className="rounded-md px-3 py-2 transition hover:bg-charcoal/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-md bg-charcoal px-3 py-2 text-cream transition hover:bg-charcoal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </details>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/60">
              A COMMUNITY FOR YOUR CLOTHES
            </span>
            <h1 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Your clothes. Your style. Our community.
            </h1>
            <p className="max-w-xl text-base leading-7 text-charcoal/75 sm:text-lg">
              Not sure how to style that piece? Share what you own, get fresh ideas,
              and find your people.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream transition hover:bg-charcoal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
              >
                Sign up — it&apos;s free
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-charcoal/30 px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-charcoal/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
              >
                Log in
              </Link>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/60">
              Style your way · Share your vibe · Find your people
            </p>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl bg-lilac/60 p-4 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
                  alt="Neutral trench coat layered on a rack"
                  className="h-56 w-full rounded-2xl object-cover"
                  width={800}
                  height={560}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 90vw"
                />
                <span className="absolute left-6 top-6 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal">
                  Layering
                </span>
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-sage/70 p-4 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
                  alt="Soft knit sweater folded beside denim"
                  className="h-56 w-full rounded-2xl object-cover"
                  width={800}
                  height={560}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 90vw"
                />
                <span className="absolute left-6 top-6 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal">
                  Cozy edit
                </span>
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-peach/70 p-4 shadow-sm sm:col-span-2">
                <Image
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80"
                  alt="Editorial flatlay of sneakers, bag, and accessories"
                  className="h-64 w-full rounded-2xl object-cover"
                  width={1200}
                  height={640}
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 80vw, 90vw"
                />
                <span className="absolute left-6 top-6 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal">
                  Weekend mix
                </span>
                <span className="absolute right-6 bottom-6 rounded-full bg-charcoal px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream">
                  Color play
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 hidden h-24 w-24 rounded-full bg-peach/60 md:block" />
            <div className="pointer-events-none absolute -bottom-10 -left-6 hidden h-20 w-20 rounded-full bg-sage/70 md:block" />
          </div>
        </section>

        <section
          id="features"
          className="mx-auto w-full max-w-6xl px-6 pb-6"
        >
          <div className="rounded-3xl border border-charcoal/10 bg-cream/70 px-6 py-12 md:px-12">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/60">
                How it works
              </span>
              <h2
                id="how-it-works"
                className="font-display text-3xl text-charcoal md:text-4xl"
              >
                Style help made personal.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-charcoal/70 md:text-base">
                Share your wardrobe, learn from people who actually get your aesthetic,
                and build confidence in what you already own.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-charcoal/10 bg-white/70 p-6 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
                  alt="Wardrobe rail with curated clothing"
                  className="h-40 w-full rounded-xl object-cover"
                  width={800}
                  height={480}
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 90vw"
                />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    Share what you own
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/70">
                    Post a clothing item or outfit and ask the community how they
                    would style it.
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-charcoal/10 bg-white/70 p-6 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
                  alt="Notebook with fabric swatches and styling notes"
                  className="h-40 w-full rounded-xl object-cover"
                  width={800}
                  height={480}
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 90vw"
                />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    Get real opinions
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/70">
                    Use comments and polls to get useful, personal styling
                    feedback.
                  </p>
                </div>
              </div>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-charcoal/10 bg-white/70 p-6 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
                  alt="Assortment of accessories laid out for inspiration"
                  className="h-40 w-full rounded-xl object-cover"
                  width={800}
                  height={480}
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 90vw"
                />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    Find your style people
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/70">
                    Discover different aesthetics, save inspiration, and connect
                    with people who share your interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="rounded-3xl bg-sage/70 px-6 py-12 md:px-12">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-3xl text-charcoal md:text-4xl">
                  Your wardrobe has more possibilities.
                </h2>
                <p className="mt-2 text-sm leading-7 text-charcoal/70 md:text-base">
                  Join the community and discover them.
                </p>
              </div>
              <Link
                href="/signup"
                className="rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream transition hover:bg-charcoal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
              >
                Sign up — it&apos;s free
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-charcoal/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-charcoal/70 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-charcoal">closet</p>
            <p className="mt-1 max-w-sm">
              A fashion community for sharing wardrobes, swapping ideas, and
              exploring new ways to wear what you love.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="transition hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
            >
              About
            </Link>
            <Link
              href="/community-guidelines"
              className="transition hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
            >
              Community Guidelines
            </Link>
            <Link
              href="/privacy"
              className="transition hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
