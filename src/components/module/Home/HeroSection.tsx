"use client";

import { Button } from "@/components/ui/button";
import { Search, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";
import AIFinderCard from "../pages/AIFinderCard";

interface HeroProps {
  onFindDoctor?: () => void;
  onBookAppointment?: () => void;
  onAISubmit?: (symptoms: string, specialty: string) => void;
}

const Hero = ({ onFindDoctor, onBookAppointment, onAISubmit }: HeroProps) => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background using CSS variables (light/dark aware) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, var(--card) 30%, var(--primary) 100%)",
          // fallback color in case CSS variables not available
          backgroundColor: "var(--background)",
        }}
      />

      <section className="relative min-h-screen flex items-center lg:-top-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:space-y-8 relative z-10"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
                style={{
                  background: "color-mix(in srgb, var(--popover) 10%, transparent 90%)",
                  color: "var(--primary)",
                  borderColor: "color-mix(in srgb, var(--primary) 20%, transparent 80%)",
                }}
              >
                <Star size={16} className="flex-shrink-0" />
                <span>AI-Powered Healthcare</span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: "var(--foreground)" }}
              >
                Find Your Perfect Doctor with <span style={{ color: "var(--primary)" }}>AI</span>
              </h1>

              <p
                className="text-base sm:text-lg max-w-xl"
                style={{ color: "var(--muted-foreground)" }}
              >
                Our advanced AI technology analyzes your symptoms, medical history, and preferences to
                match you with the best-fit doctors in seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-12 px-6 text-base gap-2"
                  onClick={onFindDoctor}
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  <Search size={20} />
                  Find Your Doctor
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 text-base gap-2"
                  onClick={onBookAppointment}
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  <Calendar size={20} />
                  Book Appointment
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 lg:pt-8">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
                    50K+
                  </div>
                  <div className="text-xs sm:text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
                    Patients Served
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
                    1000+
                  </div>
                  <div className="text-xs sm:text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
                    Expert Doctors
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
                    4.9
                  </div>
                  <div style={{ color: "var(--primary)" }}>
                    <Star size={20} />
                  </div>
                  <div className="text-xs sm:text-sm mt-1 ml-1" style={{ color: "var(--muted-foreground)" }}>
                    Patient Rating
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - AI Finder Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md mx-auto lg:max-w-none relative z-10"
            >
              {/* Make sure AIFinderCard uses CSS variables too (or pass props). */}
              <AIFinderCard onSubmit={onAISubmit} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

// components/Hero.tsx
// "use client";

// import React, { FormEvent, useState } from "react";
// import Image from "next/image";
// import { Search, Calendar } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export type HeroStat = { label: string; value: string };
// export type HeroProps = {
//   badge?: string;
//   title?: React.ReactNode;
//   subtitle?: React.ReactNode;
//   primaryCta?: { label: string; href?: string; onClick?: () => void };
//   secondaryCta?: { label: string; href?: string; onClick?: () => void };
//   stats?: HeroStat[];
//   specialties?: string[];
//   onFindDoctor?: (data: { symptoms: string; specialty: string }) => void | Promise<void>;
//   illustration?: { src: string; alt?: string };
// };

// export default function HeroSection({
//   badge = "AI-Powered Healthcare",
//   title = (
//     <>
//       Find Your Perfect Doctor <br /> with <span className="text-[color:var(--primary)]">AI</span>
//     </>
//   ),
//   subtitle = "Our advanced AI technology analyzes your symptoms, medical history, and preferences to match you with the best-fit doctors in seconds.",
//   primaryCta = { label: "Find Your Doctor", href: "/find" },
//   secondaryCta = { label: "Book Appointment", href: "/book" },
//   stats = [
//     { value: "50K+", label: "Patients Served" },
//     { value: "1000+", label: "Expert Doctors" },
//     { value: "4.9", label: "Patient Rating" },
//   ],
//   specialties = ["General Physician", "Cardiology", "Dermatology", "Pediatrics"],
//   onFindDoctor,
//   illustration,
// }: HeroProps) {
//   const [symptoms, setSymptoms] = useState("");
//   const [specialty, setSpecialty] = useState(specialties[0] ?? "");
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e?: FormEvent) {
//     e?.preventDefault();
//     if (!onFindDoctor) return;
//     setLoading(true);
//     try {
//       await onFindDoctor({ symptoms, specialty });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <section aria-label="Hero" className="relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//           {/* LEFT column: text */}
//           <div className="lg:col-span-7">
//             <div className="mb-4">
//               <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[color:var(--popover)] text-[color:var(--popover-foreground)] shadow-sm">
//                 <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                   <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" />
//                 </svg>
//                 {badge}
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[color:var(--foreground)]">
//               {title}
//             </h1>

//             <p className="mt-6 max-w-2xl text-base sm:text-lg text-[color:var(--muted-foreground)]">
//               {subtitle}
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3 items-center">
//               <Button asChild size="lg" className="bg-[color:var(--primary)] text-[color:var(--primary-foreground)]">
//                 <a href={primaryCta.href ?? "#"} onClick={primaryCta.onClick}>{primaryCta.label}</a>
//               </Button>

//               <Button asChild variant="outline" size="lg" className="text-[color:var(--foreground)]">
//                 <a href={secondaryCta.href ?? "#"} onClick={secondaryCta.onClick}>{secondaryCta.label}</a>
//               </Button>
//             </div>

//             {/* stats */}
//             <div className="mt-10 flex flex-wrap gap-6 items-center">
//               {stats.map((s, idx) => (
//                 <div key={idx} className="flex flex-col">
//                   <span className="text-xl font-semibold text-[color:var(--foreground)]">{s.value}</span>
//                   <span className="text-sm text-[color:var(--muted-foreground)]">{s.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT column: card */}
//           <div className="lg:col-span-5">
//             <div className="relative lg:-mr-8">
//               <div className="bg-[color:var(--card)] border border-[color:var(--border)] shadow-lg rounded-2xl p-6 sm:p-8 w-full">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <h3 className="text-lg font-semibold text-[color:var(--foreground)]">AI Doctor Finder</h3>
//                     <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">What are your symptoms?</p>
//                   </div>
//                   <div className="text-[color:var(--muted-foreground)]">
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                       <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" />
//                     </svg>
//                   </div>
//                 </div>

//                 <form className="mt-4" onSubmit={handleSubmit}>
//                   <label htmlFor="symptoms" className="sr-only">Symptoms</label>
//                   <div className="relative">
//                     <input
//                       id="symptoms"
//                       type="text"
//                       value={symptoms}
//                       onChange={(e) => setSymptoms(e.target.value)}
//                       placeholder="e.g., headache, fever, cough"
//                       className="w-full rounded-md border border-[color:var(--input)] bg-[color:var(--background)] px-3 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
//                       aria-label="Describe your symptoms"
//                     />
//                     <Search className="absolute right-3 top-3 w-4 h-4 text-[color:var(--muted-foreground)]" />
//                   </div>

//                   <div className="mt-3">
//                     <label htmlFor="specialty" className="sr-only">Preferred specialty</label>
//                     <select
//                       id="specialty"
//                       value={specialty}
//                       onChange={(e) => setSpecialty(e.target.value)}
//                       className="w-full rounded-md border border-[color:var(--input)] bg-[color:var(--background)] px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
//                       aria-label="Preferred specialty"
//                     >
//                       {specialties.map((s, i) => (
//                         <option key={i} value={s}>
//                           {s}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="mt-4">
//                     <Button type="button" onClick={() => handleSubmit()} className="w-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)]">
//                       Get AI Recommendations
//                     </Button>
//                   </div>

//                   <p className="mt-3 text-xs text-[color:var(--muted-foreground)]">
//                     <span className="text-[color:var(--muted-foreground)]">Powered by advanced AI — results are suggestions, not medical advice.</span>
//                   </p>
//                 </form>
//               </div>

//               {/* optional illustration overlay (if provided) */}
//               {illustration?.src && (
//                 <div className="absolute right-0 -bottom-10 hidden md:block w-40 h-40">
//                   <Image src={illustration.src} alt={illustration.alt ?? ""} width={160} height={160} className="object-contain" />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
