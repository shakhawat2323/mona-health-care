// components/PatientReviews.tsx
"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";


type Review = {
  id: string | number;
  name: string;
  image:  string;
  rating: number; // 0-5
  review: string;
  role?: string;
};

interface PatientReviewsProps {
  title?: string;
  subtitle?: string;
  reviews?: Review[];
}

const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Jessica Martinez",
    image: "https://i.ibb.co.com/TDRKvD58/patient-1.jpg",
    rating: 5,
    review:
      "The AI doctor finder helped me find the perfect cardiologist for my condition. The booking process was seamless, and the doctor was incredibly professional. Highly recommend HealthCare!",
    role: "Verified Patient",
  },
  {
    id: 2,
    name: "David Thompson",
    image: "https://i.ibb.co.com/4gRqq8K9/patient-2.jpg",
    rating: 5,
    review:
      "I was skeptical at first, but the AI recommendations were spot-on. Found an amazing pediatrician for my kids within minutes. The entire platform is user-friendly and efficient.",
    role: "Verified Patient",
  },
  {
    id: 3,
    name: "Margaret Williams",
    image: "https://i.ibb.co.com/ZRh7V0xV/patient-3.jpg",
    rating: 5,
    review:
      "As a senior, I appreciate how easy it is to find specialists. The AI understood my needs perfectly and connected me with a wonderful neurologist. Thank you, HealthCare!",
    role: "Verified Patient",
  },
];

export default function PatientReviews({
  title = "What Our Patients Say",
  subtitle = "Real stories from real patients who found their perfect healthcare match through our platform.",
  reviews = defaultReviews,
}: PatientReviewsProps) {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-20 bg-[color:var(--background)] text-[color:var(--foreground)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          <p className="mt-3 text-base md:text-lg text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              {/* Decorative Quote */}
              <div className="absolute right-4 top-4 text-[color:var(--popover-foreground)]/10">
                <Quote size={56} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="inline-flex items-center gap-1 bg-[color:var(--popover)]/40 rounded-md px-2 py-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className={
                        idx < Math.round(r.rating)
                          ? "text-[color:var(--primary)] fill-[color:var(--primary)]"
                          : "text-[color:var(--muted-foreground)]"
                      }
                      aria-hidden
                    />
                  ))}
                  <span className="text-sm font-medium text-[color:var(--foreground)] ml-2">
                    {r.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Review text */}
              <p className="text-[color:var(--foreground)] leading-relaxed mb-6">{`"${r.review}"`}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-[color:var(--sidebar-border)]">
                  {typeof r.image === "string" ? (
                    // string path in public/
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={r.image} alt={`${r.name} photo`} className="w-full h-full object-cover" />
                  ) : (
                    <Image src={r.image} alt={`${r.name} photo`} fill className="object-cover" />
                  )}
                </div>

                <div className="text-left">
                  <div className="font-medium text-[color:var(--foreground)]">{r.name}</div>
                  <div className="text-sm text-[color:var(--muted-foreground)]">{r.role ?? "Verified Patient"}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
