"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  experience?: string;
  image: string;
  rating: number; // e.g. 4.9
  reviews: number; // e.g. 142
  profileUrl?: string;
  bookingUrl?: string;
};

interface TopRatedDoctorsProps {
  title?: string;
  subtitle?: string;
  doctors?: Doctor[];
}

export default function TopRatedDoctors({
  title = "Our Top Rated Doctors",
  subtitle = "Experienced doctors rated highly by our patients. Book a consultation with the best specialists.",
   doctors = [
    {
      id: 1,
      name: "Dr. Sophia Patel",
      specialty: "Cardiologist",
      experience: "12+ years",
      image: "https://i.ibb.co.com/8nZmxGwL/doctor-2.jpg",
      rating: 4.9,
      reviews: 214,
      profileUrl: "/doctors/sophia-patel",
      bookingUrl: "/book/sophia-patel",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "10+ years",
      image: "https://i.ibb.co.com/7NRPbB5Q/doctor-1.jpg",
      rating: 4.8,
      reviews: 189,
      profileUrl: "/doctors/michael-chen",
      bookingUrl: "/book/michael-chen",
    },
    {
      id: 3,
      name: "Dr. Aisha Rahman",
      specialty: "Dermatologist",
      experience: "8+ years",
      image: "https://i.ibb.co.com/4RtnXzzJ/doctor-3.jpg",
      rating: 4.9,
      reviews: 162,
      profileUrl: "/doctors/aisha-rahman",
      bookingUrl: "/book/aisha-rahman",
    },
    {
      id: 4,
      name: "Dr. David Kim",
      specialty: "Pediatrician",
      experience: "15+ years",
      image: "https://i.ibb.co.com/nNNC0Y7z/doctor-4.jpg",
      rating: 4.7,
      reviews: 230,
      profileUrl: "/doctors/david-kim",
      bookingUrl: "/book/david-kim",
    },

  ],

}: TopRatedDoctorsProps) {
  return (
    <section className="py-16 bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8 sm:mb-12">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
            <p className="mt-2 text-[color:var(--muted-foreground)]">{subtitle}</p>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <Link href="/doctors" className="text-sm font-medium text-[color:var(--primary)] hover:underline">
              View all doctors
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <motion.article
              key={doc.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group bg-[color:var(--card)] border border-[color:var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              aria-labelledby={`doctor-${doc.id}-name`}
            >
              {/* Image */}
              <div className="relative w-full h-56 bg-[color:var(--sidebar)]">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 id={`doctor-${doc.id}-name`} className="text-lg font-semibold text-[color:var(--foreground)]">
                  {doc.name}
                </h3>
                <p className="text-sm text-[color:var(--primary)] mt-1">{doc.specialty}</p>
                {doc.experience && (
                  <p className="text-xs text-[color:var(--muted-foreground)] mt-2">{doc.experience}</p>
                )}

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="inline-flex items-center gap-1 bg-[color:var(--popover)]/60 rounded px-2 py-1">
                    <Star size={14} className="text-[color:var(--primary)]" />
                    <span className="text-sm font-medium text-[color:var(--foreground)]">{doc.rating.toFixed(1)}</span>
                    <span className="text-xs text-[color:var(--muted-foreground)]">({doc.reviews})</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link href={doc.profileUrl ?? "#"} className="w-full text-center">
                      View Profile
                    </Link>
                  </Button>

                  <Button asChild size="sm" className="flex-1 bg-[color:var(--primary)] text-[color:var(--primary-foreground)]">
                    <Link href={doc.bookingUrl ?? "#"} className="w-full text-center">
                      Book Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
