"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/healthcare.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--card)] text-[color:var(--card-foreground)] border-t border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-sm">
                <Image src={Logo} alt="Healthcare logo" fill sizes="40px" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">HealthCare</h3>
                <p className="text-sm text-[color:var(--muted-foreground)]">Trusted care, close to you</p>
              </div>
            </Link>

            <p className="text-sm text-[color:var(--muted-foreground)] max-w-xs">
              We provide patient-centered care with world-class facilities and experienced medical staff. Book
              appointments easily and get care when you need it.
            </p>

            <div className="flex items-center gap-3">
              <a aria-label="Call us" href="tel:+1234567890" className="text-sm font-medium text-[color:var(--primary)]">
                +1 (234) 567-890
              </a>
              <a aria-label="Email us" href="mailto:info@healthcare.example" className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)]">
                info@healthcare.example
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-[color:var(--foreground)] mb-3">Quick links</h4>
            <ul className="flex flex-col gap-2 text-sm text-[color:var(--muted-foreground)]">
              <li>
                <Link href="/services" className="hover:text-[color:var(--primary)]">Our Services</Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-[color:var(--primary)]">Find a Doctor</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[color:var(--primary)]">Pricing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[color:var(--primary)]">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-[color:var(--foreground)] mb-3">Resources</h4>
            <ul className="flex flex-col gap-2 text-sm text-[color:var(--muted-foreground)]">
              <li>
                <Link href="/blog" className="hover:text-[color:var(--primary)]">Blog</Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[color:var(--primary)]">FAQs</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[color:var(--primary)]">Careers</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[color:var(--primary)]">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="text-sm font-semibold text-[color:var(--foreground)] mb-3">Stay in touch</h4>
            <p className="text-sm text-[color:var(--muted-foreground)] mb-4">Subscribe to our newsletter for health tips and updates.</p>

            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-md border border-[color:var(--input)] bg-[color:var(--background)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
              />
              <button
                type="submit"
                className="rounded-md px-3 py-2 text-sm font-medium bg-[color:var(--primary)] text-[color:var(--primary-foreground)] hover:opacity-95"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="rounded-full p-2 hover:bg-[color:var(--popover)]/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="rounded-full p-2 hover:bg-[color:var(--popover)]/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-2 .5-3.18 1.1A4.48 4.48 0 0 0 12 6.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-[color:var(--popover)]/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2" />
                  <rect x="2" y="9" width="4" height="11" rx="1" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 border-[color:var(--sidebar-border)] flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[color:var(--muted-foreground)]">
          <p>© {year} HealthCare. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-[color:var(--primary)]">Terms</Link>
            <Link href="/privacy" className="hover:text-[color:var(--primary)]">Privacy</Link>
            <Link href="/sitemap.xml" className="hover:text-[color:var(--primary)]">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
